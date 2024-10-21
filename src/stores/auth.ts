import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface authState {
    auth: boolean;
}

const useAuthState = create<authState>()(
    persist(
        (set, get) => ({
            auth: false,
            changeAuth: () => set({ auth: !get().auth }),
        }),
        {
            name: "auth_state",
            storage: createJSONStorage(() => localStorage),
        }
    )
);

export default useAuthState;
