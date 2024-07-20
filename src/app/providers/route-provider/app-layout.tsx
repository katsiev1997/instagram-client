import { Navigate, Outlet } from "react-router-dom";
import { fetchUser, selectUserData } from "src/entities/user/";
import { setUser } from "src/entities/user";
import { useAppDispatch } from "../store-provider/model/hooks";
import { Header } from "src/widgets";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const AppLayout = () => {
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
  if (!token || !userData) {
    return <Navigate to="/sign-in" />;
  }

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default AppLayout;
