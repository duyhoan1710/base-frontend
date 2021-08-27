import RegisterComponent from "../containers/Register";
import LoginComponent from "../containers/Login";

const routes = [
  {
    path: "/auth/register",
    component: RegisterComponent,
    title: "Register",
    needsAuth: false,
  },

  {
    path: "/auth/login",
    component: LoginComponent,
    title: "Login",
    needsAuth: false,
  },
];

export default routes;
