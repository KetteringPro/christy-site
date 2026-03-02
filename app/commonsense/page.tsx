"use client";
import { useEffect } from "react";

export default function CommonSenseRedirect() {
  useEffect(() => {
    window.location.replace("https://redesignparty.com");
  }, []);

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#0d0d1a", color: "#9999B0", fontFamily: "'DM Sans', sans-serif" }}>
      <p>Redirecting to <a href="https://redesignparty.com" style={{ color: "#F48FB1" }}>redesignparty.com</a>&hellip;</p>
    </div>
  );
}
