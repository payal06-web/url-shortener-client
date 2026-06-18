import { redirect } from "@tanstack/react-router";
import { getCurrentUser } from "../api/user.api";
import { login } from "../store/slice/authSlice";

export const checkAuth = async ({ context }) => {
    try {
        const { queryClient, store } = context;

        const data = await queryClient.ensureQueryData({
            queryKey: ["currentUser"],
            queryFn: getCurrentUser,
        });

        if(!data?.user) throw new Error()

        store.dispatch(login(data.user));

        return true;

    } catch (error) {
        return redirect({ to: "/auth" });
    }
};