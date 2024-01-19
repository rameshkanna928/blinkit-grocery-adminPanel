import React, { useEffect, useState } from "react";
import {
  ColorDullWhite,
  ColorGray,
  ColorGreen,
  ColorLightGreen,
  ColorLightRed,
  ColorRed,
} from "../../assets/styles/color";

function TableStatusCard({ status }) {
  const [color, setColor] = useState("white");
  const [bgColor, setBgColor] = useState("black");

  useEffect(() => {
    switch (status?.toLowerCase()) {
      case "pending":
      case "order placed": {
        setColor("#0d5abf");
        setBgColor("#0d5abf26");
        break;
      }

      case "delivery": {
        setColor("#e03a1d");
        setBgColor("rgba(224, 58, 29, 0.15)");
        break;
      }
      case "scheduled":
      case "takeaway": {
        setColor("#fcac00");
        setBgColor("rgb(252 172 0 / 15%)");
        break;
      }
      case "delivered":
      case "paid":
      case "success": {
        setColor(ColorGreen);
        setBgColor(ColorLightGreen);
        break;
      }
      case "cancelled":
      case "unpaid": {
        setColor(ColorRed);
        setBgColor(ColorLightRed);
        break;
      }
      case "order placed": {
        setColor(ColorRed);
        setBgColor(ColorLightRed);
        break;
      }
      default:
        setColor(ColorGray);
        setBgColor(ColorDullWhite);
    }
  }, []);
  return (
    <span
      style={{
        padding: "4.26px 6.5625px",
        borderRadius: "40px",
        backgroundColor: bgColor,
        color: color,
        fontSize: 10.5,
        width: "100%",
      }}
    >
      {status}
    </span>
  );
}

export default TableStatusCard;
