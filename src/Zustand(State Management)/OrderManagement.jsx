import { create } from "zustand";
import { persist } from "zustand/middleware";
import { orderApi } from "../api/Api";

const motorStore = create(persist((set) => ({
    loading:null,
    error:null,
    success:null,
    message:null,
    
    order:null,
    currentRentals:null,
    history:null,

    createOrder: async (data) => {
        set({ loading: true, error: null, success: null, message: null });
        try{
            const response = await orderApi.post("/create", data);
            if(response.data.success){
                set({
                    loading:false,
                    success:true,
                    message:response.data.message,
                    error:null,
                    order:response.data.order,
                })       
        }
    }catch(error){
            set({
                loading:false,
                success:false,
                error:error.response.data.message || error.message || "Something went wrong",
                message:null,
            })
        }
    },

    updateStatus: async (data,orderId) => {
        set({
            loading:true,
            error:null,
            success:null,
            message:null,
        })

        try{
            const response = await orderApi.put(`/status/${orderId}`, data);
            if(response.data.success){
                set({
                    loading:false,
                    success:true,
                    error:null,
                    message:response.data.message
                })
        }
        }catch(error){
            set({
                loading:false,
                success:false,
                error:error.response.data.message || error.message || "Something went wrong",
                message:null,
            })
        }
    },

    getMyRentals: async () => {
        set({
            loading: true,
            error: null,
            success: null,
            message: null,
            currentRentals:null,
        })
        try{
            const response = await orderApi.get("/myrentals");
            if(response.data.success){
                set({
                    loading: false,
                    error: null,
                    success: true,
                    message: response.data.message,
                    currentRentals:response.data.currentRentals,
                })
            }
        }catch(error){
            set({
                loading: false,
                error:error.response.data.message || error.message || "Something went wrong",
                success:false,
                message:null,
                currentRentals:null,
            }) 
        }
    },

    getHistory: async () => {
        set({
            loading: true,
            error: null,
            success: null,
            message: null,
            history:null,
        })
        try{
            const response = await orderApi.get("/history");
            if(response.data.success){
                set({
                    loading: false,
                    error: null,
                    success: true,
                    message: response.data.message,
                    history:response.data.history,
                })
            }
        }catch(error){
            set({
                loading: false,
                error:error.response.data.message || error.message || "Something went wrong",
                success:false,
                message:null,
                history:null,
            })
        }
    },

    getMyBookingList: 



}), { name: "motor-storage" }));

export default motorStore;