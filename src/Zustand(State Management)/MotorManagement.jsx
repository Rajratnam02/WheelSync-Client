import { create } from "zustand";
import { persist } from "zustand/middleware";
import { motorApi } from "../api/Api";

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


      getMotors: async (motorType, page = 1) => {
        set({ loading: true, error: null, success: null, message: null });

        try {
          const response = await motorApi.get(`?motorType=${motorType}&page=${page}`);
          if (response.data.success) {
            set({
              loading: false,
              error: null,
              success: true,
              message: response.data.message,
              motors: response.data.motors,
              totalPages: response.data.totalPages,
              currentPage: response.data.currentPage,
            });
          }
        } catch (error) {
          set({
            loading: false,
            error: error.response?.data?.message || error.message || "Something went wrong",
            success: false,
            message: null,
          });
        }
      },

      getMotorById: async (id) => {
        set({ loading: true, error: null, success: null, message: null});
        
        try{
            const response = await motorApi.get(`/motorId/${id}`);
            if(response.data.success){
                set({
                    loading:false,
                    error:null,
                    success:true,
                    message:response.data.message,
                    motorById:response.data.motor,
                })
            }
        }catch(error){
            set({
                loading:false,
                error: error.response?.data?.message || error.message || "Something went wrong",
                success:false,
                message:null,
            })
        }
    },
    
    getMyMotors: async () => {
      set({ loading: true, error: null, success: null, message: null, myMotors: null});
      
      try{
        const response = await motorApi.get(`/myMotors`);
        if(response.data.success){
          set({
            loading: false,
            success: true,
            myMotors: response.data.motors,
            message: response.data.message,
            error: null,
          })
        }
      }catch(error){
        set({loading: false, 
            error: error.response?.data?.message || error.message || "Something went wrong",
            success:false, 
            message:null})
      }
    },

    addMotor: async (data) => {
      set({ loading: true, error: null, success: null, message: null, addedMotor: null});

      try{
        const response = await motorApi.post(`/addMotor`, data);
        if(response.data.success){
          set({
            loading: false,
            success: true,
            message: response.data.message,
            error: null,
            addedMotor: response.data.motor,
          })
        }
      }catch(error){
        set({
          loading: false,
          success: false,
          error: error.response?.data?.message || error.message || "Something went wrong",
          message: null,
        })
      }

    },

    updateMotor: async  (motorId, data) => {
      set({ loading: true, error: null, success: null, message: null, updatedMotor: null});

      try{
        const response = await motorApi.put(`/motorId/${motorId}`, data);
        if(response.data.success){
          set({
            loading: false,
            success: true,
            message: response.data.message,
            error: null,
            updatedMotor: response.data.motor,
          })
      }
    }catch(error){
        set({
          loading:false,
          success:false,
          error: error.response?.data?.message || error.message || "Something went wrong",
          message:null,
        })
      }
    }, 

    deleteMotor: async (motorId) => {
      set({ loading: true, error: null, success: null, message: null});

      try{
        const response = await motorApi.delete(`/motorId/${motorId}`);
        if(response.data.success){
          set({
            loading:false,
            success:true,
            message:response.data.message,
            error:null
            })
        }
      }catch(error){
        set({
          loading: false,
          success: false,
          error: error.response?.data?.message || error.message || "Something went wrong",
          message: null,
        })
      }
    }

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
      })      
    }
  )
);

export default motorStore;
