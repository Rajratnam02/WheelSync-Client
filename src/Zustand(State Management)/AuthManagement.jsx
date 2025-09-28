import { create } from "zustand";
import { persist } from "zustand/middleware";
import { authApi } from "../api/Api";

const authStore = create(persist(
    
    
))

export default authStore;