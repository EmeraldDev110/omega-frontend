import React from "react";
import { RouterProvider } from "react-router-dom";
import routes from "@/routes";
import "@/styles/index.scss";
import { Toaster } from "sonner";

const App: React.FC = () => {
  return (
    <>
      <RouterProvider router={routes} />
      <Toaster position="top-right" expand={false} />
    </>
  );
};

export default App;
