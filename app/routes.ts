import { type RouteConfig, index, route } from "@react-router/dev/routes";

const meta = () => {
  [
    { title: "AI Resume Analyzer | Auth" },
    {
      name: "description",
      content: "Authenticate to access the AI Resume Analyzer application.",
    },
  ];
};

export default [
  index("routes/home.tsx"),
  route("/auth", "routes/auth.tsx"),
] satisfies RouteConfig;
