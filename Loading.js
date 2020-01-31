import React from "react";
import loading from "../imgandlogos/loading.gif";
export default function Loading() {
  return (
    <div className="loading">
      <h2>loading...please wait.</h2>
      <img src={loading} alt="loading gif" />
    </div>
  );
}
