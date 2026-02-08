"use client";

import { useEffect } from "react";

export default function LoginPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      /* global google */
      google.accounts.id.initialize({
        client_id: "811905526871-k38ls8e1khgd0grih99jrcg52m2258pg.apps.googleusercontent.com",
        callback: handleGoogleCallback,
      });

      google.accounts.id.renderButton(
        document.getElementById("googleBtn"),
        { theme: "outline", size: "large" }
      );
    };
  }, []);

  const handleGoogleCallback = async (response) => {
    const id_token = response.credential;

    console.log("Google ID Token:", id_token);

    const res = await fetch("http://localhost:8000/api/auth/google/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id_token }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.error || "Google login failed");
      return;
    }

    // Store token
    localStorage.setItem("token", data.token);

    // redirect
    window.location.href = "/";
  };

  return (
    <div style={{ padding: 24 }}>
      <h2>Login</h2>
      <div id="googleBtn" style={{ marginTop: 20 }} />
    </div>
  );
}
