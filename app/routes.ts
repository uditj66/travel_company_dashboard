import { type RouteConfig, layout, route } from "@react-router/dev/routes";


export default [
  layout("routes/admin/adminLayout.tsx", [
    route("dashboard", "routes/admin/dashboard.tsx"),
    route("allUsers", "routes/admin/allUsers.tsx"),
  ]),
] satisfies RouteConfig;
