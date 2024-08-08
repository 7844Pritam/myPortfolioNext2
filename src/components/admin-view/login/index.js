"use client";

import dynamic from "next/dynamic";

// Ensure that FormControls is imported dynamically if needed
const FormControls = dynamic(() => import("../form-controls"), { ssr: false });

const controls = [
  {
    id: 11,
    name: "username",
    placeholder: "Enter User name",
    type: "text",
    label: "User name",
  },
  {
    id: 22,
    name: "password",
    placeholder: "Enter Password",
    type: "password",
    label: "Password",
  },
];

function Login({ formData, setFormData, handleLogin }) {
  return (
    <div className="w-full">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <FormControls
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />
        <button
          onClick={handleLogin}
          className="mt-2 border border-green-600 p-4 font-bold text-lg"
        >
          Login
        </button>
      </div>
    </div>
  );
}

// Ensure that dynamic import is correctly handled
export default dynamic(() => Promise.resolve(Login), { ssr: false });
