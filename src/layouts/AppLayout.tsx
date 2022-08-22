import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useRecoilState } from "recoil";
import CLink from "../components/CLink";
import UserState from "../states/UserState";
import { getUsers } from "../UserData";

const AppLayout = () => {
  const [user, setUser] = useRecoilState(UserState);

  useEffect(() => {
    user.length < 1 && setUser(getUsers());
  }, []);

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="border border-slate-400 p-10 rounded shadow-md min-w-[40%]">
        <div className="flex justify-between mb-6">
          <CLink to="/">Go to Home</CLink>
          <CLink to="/user">Go to User</CLink>
          <CLink to="/user/create">Create User</CLink>
        </div>
        <Outlet />
      </div>
    </div>
  );
};
export default AppLayout;
