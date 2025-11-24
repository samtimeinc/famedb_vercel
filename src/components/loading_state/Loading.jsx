import React from "react";
import "./Loading.css";
import { LoaderCircle } from "lucide-react";

const Loading = () => {
  return (
    <div className="row loading__row">
      <figure className="spinner--wrapper">
        <LoaderCircle size={150} className="spinner" />
      </figure>
    </div>
  );
};

export default Loading;
