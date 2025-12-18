import { create } from "zustand";
import { persist } from "zustand/middleware";
import { orderApi } from "../api/Api";

const orderManageStore = create(
  persist(
    (set) => ({
      loading: false,
      error: null,
      success: false,
      message: null,

      order: null,
      currentRentals: [],  // FIXED
      history: [],         // FIXED
      myBookinglist: [],
      // ======================
      // Create Order
      // ======================
      createOrder: async (data) => {
        set({ loading: true, error: null, success: null, message: null });

        try {
          const response = await orderApi.post("/create", data);

          if (response?.data?.success) {
            return set({
              loading: false,
              success: true,
              error: null,
              message: response.data.message,
              order: response.data.order,
            });
          }
        } catch (error) {
          set({
            loading: false,
            success: false,
            error:
              error?.response?.data?.message ||
              error.message ||
              "Something went wrong",
          });
        }
      },

      // ======================
      // Update Status
      // ======================
      updateStatus: async (data, orderId) => {
        set({ loading: true, error: null, success: null, message: null });

        try {
          const response = await orderApi.put(`/status/${orderId}`, data);

          if (response?.data?.success) {
            return set({
              loading: false,
              success: true,
              error: null,
              message: response.data.message,
            });
          }
        } catch (error) {
          set({
            loading: false,
            success: false,
            error:
              error?.response?.data?.message ||
              error.message ||
              "Something went wrong",
          });
        }
      },

      // ======================
      // Get My Rentals (Active Orders)
      // ======================
      getMyRentals: async () => {
        set({ loading: true, error: null, success: null, message: null });

        try {
          const response = await orderApi.get("/myrentals");

          if (response?.data?.success) {
            return set({
              loading: false,
              success: true,
              currentRentals: response.data.currentRentals || [], // FIXED
              message: response.data.message,
            });
          }
        } catch (error) {
          set({
            loading: false,
            success: false,
            currentRentals: [],
            error:
              error?.response?.data?.message ||
              error.message ||
              "Something went wrong",
          });
        }
      },

      // ======================
      // Rental History
      // ======================
      getHistory: async () => {
        set({ loading: true, error: null, success: null, message: null });

        try {
          const response = await orderApi.get("/history");

          if (response?.data?.success) {
            return set({
              loading: false,
              success: true,
              history: response.data.history || [], // FIXED
            });
          }
        } catch (error) {
          set({
            loading: false,
            success: false,
            history: [],
            error:
              error?.response?.data?.message ||
              error.message ||
              "Something went wrong",
          });
        }
      },

      getMyBookingList: async () => {
        try{
          set({
            loading: true,
            error: null,
            success: null,
            message: null,
          })
          const response = await orderApi.get("/mybookings");
          if (response?.data?.success){
            return set({
              loading: false,
              error: null,
              success: true,
              message: response.data.message,
              myBookinglist: response.data.orders,
            })
        }
      }catch(error){
        set({
          success: false,
          loading: null,
          message: "Some Error Occured",
           error: error?.response?.data?.message || error.message || "Something went wrong",
        })
      }
      }
}),
    {
      name: "order-storage",
      partialize: (state) => ({
        order: state.order,
        currentRentals: state.currentRentals,
        history: state.history,
      }),
    }
  )
);

export default orderManageStore;
