import React from "react";
import { useRouteError, Link } from "react-router-dom";
import errorImg from "../assets/error-404.png";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 text-center px-4">
      <img
        src={
          errorImg || "https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
        }
        alt="Error Illustration"
        className="w-48 h-48 mb-6"
      />
      <h1 className="text-5xl font-bold text-error mb-2">Oops!</h1>
      <p className="text-lg text-neutral mb-4">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-sm text-neutral-content mb-8">
        <i>{error.statusText || error.message}</i>
      </p>
      <Link
        to="/"
        className="btn btn-primary rounded-full px-8 hover:scale-105 transition-transform"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
