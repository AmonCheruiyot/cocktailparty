import CocktailList from "./CocktailList";
import UserProfile from "./UserProfile";
import ErrorPage from "./ErrorPage";
import Form from "./form";
import Homepage from "./Homepage";


const routes = [
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />
  }, 
  {
    path: "/cocktails",
    element: <CocktailList />,
    errorElement: <ErrorPage />
  },
  {
    path: "/userprofile",
    element: <UserProfile />,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <Form />,
    errorElement: <ErrorPage />
  } ,
   {
    path: "/signup",
    element: <Form />,
    errorElement: <ErrorPage />
  }
];

export default routes;