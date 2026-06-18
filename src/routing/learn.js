import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "./routeTree";
import LearnPage from "../pages/LearnPage";

export const learnRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/learn-more",
  component: LearnPage,
});
