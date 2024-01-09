import React from "react";

function Login() {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there ✨</h1>
            <p className="py-6">
              Join the conversation, meet new people, get new friends. Cick on
              the button below to begin
            </p>
            <button className="btn btn-primary">Login with Google</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
