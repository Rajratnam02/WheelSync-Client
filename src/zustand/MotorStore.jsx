import { create } from "zustand";
import { persist } from "zustand/middleware";
import { motorApi } from "../axios/Api";


const motorStore = create(
  persist(
    (set) => ({
      message: null,
      success: null,
      error: null,
      loading: false,

      motors: [],
      totalPages: 1,
      currentPage: 1,
      motorById: null,
      myMotors: null,
      updatedMotor: null,
      addedMotor: null,

      // ---------------- GET MOTORS ----------------
      getMotors: async (motorType, page = 1) => {
        set({ loading: true, error: null, success: null, message: null });

        try {
          const res = await motorApi.get(`?motorType=${motorType}&page=${page}`);
          const data = res.data;

          if (data.success) {
            set({
              loading: false,
              success: true,
              message: data.message,
              motors: data.motors,
              totalPages: data.totalPages,
              currentPage: data.currentPage,
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
            error.response?.data?.message || error.message || "Something went wrong";

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

      // ---------------- GET MOTOR BY ID ----------------
      getMotorById: async (id) => {
        set({ loading: true, error: null, success: null, message: null });

        try {
          const res = await motorApi.get(`/motorId/${id}`);
          const data = res.data;

          if (data.success) {
            set({
              loading: false,
              success: true,
              message: data.message,
              motorById: data.motor,
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
            error.response?.data?.message || error.message || "Something went wrong";

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

      // ---------------- GET MY MOTORS ----------------
      getMyMotors: async () => {
        set({ loading: true, error: null, success: null, message: null });

        try {
          const res = await motorApi.get(`/myMotors`);
          const data = res.data;

          if (data.success) {
            set({
              loading: false,
              success: true,
              message: data.message,
              myMotors: data.motors,
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
            error.response?.data?.message || error.message || "Something went wrong";

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

      // ---------------- ADD MOTOR ----------------
      addMotor: async (payLoad) => {
        set({ loading: true, error: null, success: null, message: null });

        try {
          const res = await motorApi.post(`/`, payLoad);
          const data = res.data;

          if (data.success) {
            set({
              loading: false,
              success: true,
              message: data.message,
              addedMotor: data.motor,
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
            error.response?.data?.message || error.message || "Something went wrong";

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

      // ---------------- UPDATE MOTOR ----------------
      updateMotor: async (motorId, data) => {
        set({ loading: true, error: null, success: null, message: null });

        try {
          const res = await motorApi.put(`/motorId/${motorId}`, data);
          const data = res.data;

          if (data.success) {
            set({
              loading: false,
              success: true,
              message: data.message,
              updatedMotor: data.motor,
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
            error.response?.data?.message || error.message || "Something went wrong";

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

      // ---------------- DELETE MOTOR ----------------
      deleteMotor: async (motorId) => {
        set({ loading: true, error: null, success: null, message: null });

        try {
          const res = await motorApi.delete(`/motorId/${motorId}`);
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
            error.response?.data?.message || error.message || "Something went wrong";

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
    }),
    {
      name: "motor-storage",
      partialize: (state) => ({
        motors: state.motors,
        totalPages: state.totalPages,
        currentPage: state.currentPage,
        motorById: state.motorById,
        myMotors: state.myMotors,
        updatedMotor: state.updatedMotor,
        addedMotor: state.addedMotor,
      }),
    }
  )
);

export default motorStore;
