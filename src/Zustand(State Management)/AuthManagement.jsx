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

        registerUser: async (data) => {
            set({ loading: true, error: null, success: null, message: null, user: null });
            try {
                const response = await authApi.post("/register", { data });
                if (response.data.success) {
                    set({
                        loading: false,
                        error: null,
                        success: true,
                        message: response.data.message,
                        user: response.data.user,
                        email: data.email,
                    });
                    return { error: null, message: response.data.message, user: response.data.user };
                }
            } catch (error) {
                const errMsg = error.response?.data?.message || "Something went wrong";
                set({ loading: false, error: errMsg, success: false, message: null, user: null });
                return { error: errMsg, message: null, user: null };
            }
        },

        loginUser: async (data) => {
            set({ loading: true, error: null, success: null, message: null, user: null });
            try {
                const response = await authApi.post("/login", { data });
                if (response.data.success) {
                    set({
                        loading: false,
                        error: null,
                        success: true,
                        message: response.data.message,
                        user: response.data.user,
                    });
                    return { error: null, message: response.data.message, user: response.data.user };
                }
            } catch (error) {
                const errMsg = error.response?.data?.message || "Something went wrong";
                set({ loading: false, error: errMsg, success: false, message: null, user: null });
                return { error: errMsg, message: null, user: null };
            }
        },

        verifyUser: async (data) => {
            set({ loading: true, error: null, success: null, message: null });
            try {
                const response = await authApi.post("/verifyotp", {data});
                if (response.data.success) {
                    set({
                        loading: false,
                        error: null,
                        success: true,
                        message: response.data.message,
                        user: response.data.user,
                    });
                    return { error: null, message: response.data.message, user: response.data.user , success: true};
                }
            } catch (error) {
                const errMsg = error.response?.data?.message || "Something went wrong";
                set({ loading: false, error: errMsg, success: false, message: null, user: null });
                return { error: errMsg, message: null, user: null };
            }
        },

        logout: async () => {
            set({ loading: true, error: null, success: null });
            try {
                const response = await authApi.post("/logout");
                if (response.data.success) {
                    set({ loading: false, error: null, success: true, message: response.data.message, user: null, email: "" });
                    return { error: null, message: response.data.message };
                }
            } catch (error) {
                const errMsg = error.response?.data?.message || "Something went wrong";
                set({ loading: false, error: errMsg, success: false, message: null, user: null, email: "" });
                return { error: errMsg, message: null };
            }
        },

        resendOtp: async () => {
            set({ loading: true, error: null, success: null, message: null });
            try {
                const response = await authApi.post("/resendotp");
                if (response.data.success) {
                    set({ loading: false, error: null, success: true, message: response.data.message });
                    return { error: null, message: response.data.message };
                }
            } catch (error) {
                const errMsg = error.response?.data?.message || "Something went wrong";
                set({ loading: false, error: errMsg, success: false, message: null });
                return { error: errMsg, message: null };
            }
        },

        getProfile: async () => {
            set({ loading: true, error: null, success: null, message: null });
            try {
                const response = await authApi.get("/profile");
                if (response.data.success) {
                    set({ loading: false, error: null, success: true, message: null, user: response.data.user });
                    return { error: null, user: response.data.user };
                }
            } catch (error) {
                const errMsg = error.response?.data?.message || "Something went wrong";
                set({ loading: false, error: errMsg, success: false, message: null, user: null });
                return { error: errMsg, user: null };
            }
        },

        updateProfile: async (data) => {
            set({ loading: true, error: null, success: null, message: null });
            try {
                const response = await authApi.put("/profile", { data });
                if (response.data.success) {
                    set({ loading: false, error: null, success: true, message: response.data.message, user: response.data.user });
                    return { error: null, message: response.data.message, user: response.data.user };
                }
            } catch (error) {
                const errMsg = error.response?.data?.message || "Something went wrong";
                set({ loading: false, error: errMsg, success: false, message: null });
                return { error: errMsg, message: null };
            }
        }

    }),
    {
        name: "auth",
        getStorage: () => sessionStorage,
        // ✅ Partialize: only persist user and email, not temporary states like loading/error/message
        partialize: (state) => ({ user: state.user, email: state.email })
    }
));

export default authStore;
