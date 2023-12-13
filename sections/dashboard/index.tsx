import { logout } from "@/store/auth/reducer";
import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";

const DashboardSection = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    // dispatch(logout("hi"));
  };
  return (
    <div>
      DashboardSection
      <Button onClick={logoutHandler}>Logout</Button>
    </div>
  );
};

export default DashboardSection;
