"use client";

import dynamic from "next/dynamic";
import FormControls from "../form-controls";

const controls = [
  {
    id: 1,
    name: "position",
    placeholder: "Position",
    type: "text",
    label: "Position",
  },
  {
    id: 2,
    name: "company",
    placeholder: "Company",
    type: "text",
    label: "Company",
  },
  {
    id: 3,
    name: "duration",
    placeholder: "Duration",
    type: "text",
    label: "Duration",
  },
  {
    id: 4,
    name: "location",
    placeholder: "Location",
    type: "text",
    label: "Location",
  },
  {
    id: 5,
    name: "jobprofile",
    placeholder: "Job Profile",
    type: "text",
    label: "Job Profile",
  },
];

function AdminExperienceView({ formData, handleSaveData, setFormData, data }) {
  return (
    <div className="w-full">
      <div className="bg-[#ffffff] shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-10">
          {data && data.length
            ? data.map((item) => (
                <div
                  key={item.position}
                  className="flex flex-col gap-4 border p-4 border-green-600"
                >
                  <p>{item.position}</p>
                  <p>{item.company}</p>
                  <p>{item.duration}</p>
                  <p>{item.location}</p>
                  <p>{item.jobprofile}</p>
                </div>
              ))
            : null}
        </div>
        <FormControls
          controls={controls}
          formData={formData}
          setFormData={setFormData}
        />
        <button
          onClick={() => handleSaveData("experience")}
          className="mt-[10px] border border-green-600 p-4 font-bold text-[16px]"
        >
          Add Info
        </button>
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(AdminExperienceView), {
  ssr: false,
});
