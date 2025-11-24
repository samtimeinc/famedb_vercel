import React from "react";
import "./Arrow_To_Top.css";
import { ArrowUpFromLine } from "lucide-react";

const Arrow_To_Top = ({ scrollToTop }) => {
  return (
    <div className="back-to-top">
      <ArrowUpFromLine
        size={60}
        onClick={() => scrollToTop()}
        className="arrow-up"
      />
    </div>
  );
};

export default Arrow_To_Top;
