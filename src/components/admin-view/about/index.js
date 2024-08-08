"use client";

import dynamic from "next/dynamic";
import FormControls from "../form-controls";

const controls = [
  {
    id: 1,
    name: "aboutme",
    placeholder: "About Me",
    type: "text",
    label: "About Me",
  },
  {
    id: 2,
    name: "noofprojects",
    placeholder: "No of projects",
    type: "text",
    label: "Enter no of projects",
  },
  {
    id: 3,
    name: "yearofexperience",
    placeholder: "No of experience",
    type: "text",
    label: "Enter no of experience",
  },
  {
    id: 4,
    name: "noofclients",
    placeholder: "No of clients",
    type: "text",
    label: "Enter no of clients",
  },
  {
    id: 5,
    name: "skills",
    placeholder: "skills",
    type: "text",
    label: "Skills",
  },
];

function AdminAboutView({ formData, setFormData, handleSaveData }) {
  return (
    <div className="w-full">
      <div className="bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <FormControls
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />
        <button
          onClick={() => handleSaveData("about")}
          className="mt-[10px] border border-green-600 p-4 font-bold text-[16px]"
        >
          Add Info
        </button>
      </div>
    </div>
  );
}
export default dynamic(() => Promise.resolve(AdminAboutView), { ssr: false });
