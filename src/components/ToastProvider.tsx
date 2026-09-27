"use client";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const ToastProvider = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      theme="dark"
      toastStyle={{
        backgroundColor: "#15171C",
        color: "#FFFFFF",
        border: "1px solid #1C1F26",
      }}
    />
  );
};

export default ToastProvider;

