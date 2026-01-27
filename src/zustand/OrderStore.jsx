import { create } from "zustand";
import { persist } from "zustand/middleware";
import { orderApi } from "../axios/Api";


const orderStore = create(
  persist(
    (set) => ({
      loading: false,
      error: null,
      success: null,
      message: null,

      order: null,
      currentRentals: [],
      history: [],
      myBookinglist: [],

      // ======================
      // Create Order
      // ======================
      createOrder: async (payload) => {
        set({ loading: true, error: null, success: null, message: null });

        try {
          const res = await orderApi.post("/create", payload);
          const data = res.data;

          if (data.success) {
            set({
              loading: false,
              success: true,
              message: data.message,
              order: data.order,
            });
          }

          return {
            success: data.success,
            loading: false,
            error: null,
            message: data.message,
            data: data,
          };
        } catch (error) {
          const errMsg =
            error?.response?.data?.message ||
            error.message ||
            "Something went wrong";

          set({ loading: false, success: false, error: errMsg });

          return {
            success: false,
            loading: false,
            error: errMsg,
            message: null,
            data: null,
          };
        }
      },

      // ======================
      // Update Order Status
      // ======================
      updateStatus: async (payload, orderId) => {
        set({ loading: true, error: null, success: null, message: null });

        try {
          const res = await orderApi.put(`/status/${orderId}`, payload);
          const data = res.data;

          if (data.success) {
            set({
              loading: false,
              success: true,
              message: data.message,
            });
          }

          return {
            success: data.success,
            loading: false,
            error: null,
            message: data.message,
            data: data,
          };
        } catch (error) {
          const errMsg =
            error?.response?.data?.message ||
            error.message ||
            "Something went wrong";

          set({ loading: false, success: false, error: errMsg });

          return {
            success: false,
            loading: false,
            error: errMsg,
            message: null,
            data: null,
          };
        }
      },

      // ======================
      // Get My Rentals
      // ======================
      getMyRentals: async () => {
        set({ loading: true, error: null, success: null, message: null });

        try {
          const res = await orderApi.get("/myrentals");
          const data = res.data;

          if (data.success) {
            set({
              loading: false,
              success: true,
              message: data.message,
              currentRentals: data.currentRentals || [],
            });
          }

          return {
            success: data.success,
            loading: false,
            error: null,
            message: data.message,
            data: data,
          };
        } catch (error) {
          const errMsg =
            error?.response?.data?.message ||
            error.message ||
            "Something went wrong";

          set({
            loading: false,
            success: false,
            currentRentals: [],
            error: errMsg,
          });

          return {
            success: false,
            loading: false,
            error: errMsg,
            message: null,
            data: null,
          };
        }
      },

      // ======================
      // Rental History
      // ======================
      getHistory: async () => {
        set({ loading: true, error: null, success: null, message: null });

        try {
          const res = await orderApi.get("/history");
          const data = res.data;

          if (data.success) {
            set({
              loading: false,
              success: true,
              history: data.history || [],
            });
          }

          return {
            success: data.success,
            loading: false,
            error: null,
            message: data.message || null,
            data: data,
          };
        } catch (error) {
          const errMsg =
            error?.response?.data?.message ||
            error.message ||
            "Something went wrong";

          set({
            loading: false,
            success: false,
            history: [],
            error: errMsg,
          });

          return {
            success: false,
            loading: false,
            error: errMsg,
            message: null,
            data: null,
          };
        }
      },

      // ======================
      // My Booking List
      // ======================
      getMyBookingList: async () => {
        set({ loading: true, error: null, success: null, message: null });

        try {
          const res = await orderApi.get("/mybookings");
          const data = res.data;

          if (data.success) {
            set({
              loading: false,
              success: true,
              message: data.message,
              myBookinglist: data.orders,
            });
          }

          return {
            success: data.success,
            loading: false,
            error: null,
            message: data.message,
            data: data,
          };
        } catch (error) {
          const errMsg =
            error?.response?.data?.message ||
            error.message ||
            "Something went wrong";

          set({
            loading: false,
            success: false,
            message: "Some Error Occurred",
            error: errMsg,
          });

          return {
            success: false,
            loading: false,
            error: errMsg,
            message: "Some Error Occurred",
            data: null,
          };
        }
      },
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

export default orderStore;
