import { create } from "zustand";
import { persist } from "zustand/middleware";
import { authApi } from "../api/Api";

const authStore = create(persist(
    (set) => ({
        message: null,
        success: null,
        error: null,
        user: null,
        email: "",
        loading: false, 

        // Register User
        registerUser: async (data) => {
            try {
                set({
                    loading: true,
                    error: null,
                    success: null,
                    message: null,
                    user: null,
                })
                const response = await authApi.post("/register", {data});
                if (response.data.success) {
                    set({
                        loading: false,
                        error: null,
                        success: true,
                        message: response.data.message,
                        user: response.data.user,
                        email: data.email,
                    })
                }
            } catch (error) {
                set({
                    loading: false,
                    error: error.response?.data?.message || "Something went wrong",
                    success: false,
                    message: null,
                    user: null,
                })
            }
        },

        // Login User
        loginUser: async (data) => {
            try {
                set({
                    loading: true,
                    error: null,
                    success: null,
                    message: null,
                    user: null,
                });
                const response = await authApi.post("/login", {data});
                if (response.data.success) {
                    set({
                        loading: false,
                        error: null,
                        success: true,
                        message: response.data.message,
                        user: response.data.user,
                    })
                }
            } catch (error) {
                set({
                    loading: false,
                    error: error.response?.data?.message || "Something went wrong",
                    success: false,
                    message: null,
                    user: null,
                })
            }
        },

        // verify user - CORRECTED
        verifyUser: async (data) => {
            try {
                set({
                    loading: true,
                    error: null,
                    success: null,
                    message: null,
                })
                const response = await authApi.post("/verifyotp", {data}); 
                if (response.data.success) {
                    set({
                        loading: false,
                        error: null,
                        success: true,
                        message: response.data.message,
                        user: response.data.user, 
                    })
                }
            } catch (error) {
                set({
                    loading: false,
                    error: error.response?.data?.message || "Something went wrong",
                    success: false,
                    message: null,
                    user: null,
                })
            }
        },

        // logout user
        logout: async () => {
            try {
                set({
                    loading: true,
                    error: null,
                    success: null,
                })
                const response = await authApi.post("/logout"); 
                if (response.data.success) {
                    set({
                        loading: false,
                        error: null,
                        success: true,
                        message: response.data.message,
                        user: null,
                        email: "",
                    })
                }
            } catch (error) {
                set({
                    loading: false,
                    error: error.response?.data?.message || "Something went wrong",
                    success: false,
                    message: null,
                    user: null,
                    email: "",
                })
            }
        },

        // resend Otp 
        resendOtp: async (data) => {
            try {
                set({
                    loading: true,
                    error: null,
                    success: null,
                    message: null,
                })
                const response = await authApi.post("/resendotp", {data});
                if (response.data.success) {
                    set({
                        loading: false,
                        error: null,
                        success: true,
                        message: response.data.message,
                    })
                }
            } catch (error) {
                set({
                    loading: false,
                    error: error.response?.data?.message || "Something went wrong",
                    success: false,
                    message: null,
                })
            }
        },

        //getProfile 
        getProfile: async () => {
            try {
                set({
                    loading: true,
                    error: null,
                    success: null,
                    message: null,
                });
                const response = await authApi.get("/profile");
                if (response.data.success) {
                    set({
                        loading: false,
                        error: null,
                        success: true,
                        message: null,
                        user: response.data.user,
                    })
                }
            } catch (error) {
                set({
                    loading: false,
                    error: error.response?.data?.message,
                    success: false,
                    message: null,
                    user: null,
                })
            }
        },

        // updateProfile - CORRECTED
        updateProfile: async (data) => {
            try {
                set({
                    loading: true,
                    error: null,
                    success: null,
                    message: null,
                })
                const response = await authApi.put("/profile", {data}); 
                if (response.data.success) {
                    set({
                        loading: false,
                        error: null,
                        success: true,
                        message: response.data.message,
                        user: response.data.user,
                    })
                }
            } catch (error) {
                set({
                    loading: false,
                    error: error.response?.data?.message || "Something went wrong",
                    success: false,
                    message: null,
                })
            }
        }
    }),
    {
        name: "auth",
        
        getStorage: () => sessionStorage,
    }
));

export default authStore;
