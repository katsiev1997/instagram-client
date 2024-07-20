import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectUserData, setUser } from "src/entities/user";
import { useAppDispatch } from "../store-provider/model/hooks";
import { useEffect } from "react";
import { fetchUser } from "src/entities/user";

const AuthLayout = () => {
  
  const dispatch = useAppDispatch();
  const userData = useSelector(selectUserData);

  useEffect(() => {
    const getUser = async () => {
      const data = await fetchUser();
      dispatch(setUser({ ...data }));
    };

    getUser();
  }, [dispatch]);

  const token = localStorage.getItem("token");
  if (token && userData) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default AuthLayout;
