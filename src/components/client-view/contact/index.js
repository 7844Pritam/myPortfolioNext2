"use client";

import { useEffect, useState, useCallback } from "react";
import AnimationWrapper from "../animation-wrapper";
import { addData } from "@/services";
import dynamic from "next/dynamic";

const controls = [
  {
    name: "name",
    placeholder: "Enter your name",
    type: "text",
    label: "Name",
  },
  {
    name: "email",
    placeholder: "Enter your email",
    type: "email",
    label: "Email",
  },
  {
    name: "message",
    placeholder: "Enter your message",
    type: "text",
    label: "Message",
  },
];

const initialFormData = {
  name: "",
  email: "",
  message: "",
};

function ClientContactView() {
  const [formData, setFormData] = useState(initialFormData);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSendMessage = useCallback(async () => {
    try {
      const res = await addData("contact", formData);
      // console.log(res, "contact-res");

      if (res && res.success) {
        setFormData(initialFormData);
        setShowSuccessMessage(true);
      }
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  }, [formData]);

  useEffect(() => {
    if (showSuccessMessage) {
      const timer = setTimeout(() => {
        setShowSuccessMessage(false);
      }, 1500);

      return () => clearTimeout(timer); // Cleanup timer on unmount
    }
  }, [showSuccessMessage]);

  const isValidForm = useCallback(() => {
    return (
      formData.name !== "" && formData.email !== "" && formData.message !== ""
    );
  }, [formData]);

  return (
    <div
      className="max-w-screen-xl mt-24 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="contact"
    >
      <AnimationWrapper className={"py-6"}>
        <div className="flex flex-col justify-center items-center row-start-2 sm:row-start-1">
          <h1 className="leading-[70px] mb-4 text-3xl lg:text-4xl xl:text-5xl font-medium">
            {"Contact Me".split(" ").map((item, index) => (
              <span
                key={index}
                className={`${index === 1 ? "text-middle" : "text-primary"}`}
              >
                {item}{" "}
              </span>
            ))}
          </h1>
        </div>
      </AnimationWrapper>
      <div className="text-gray-500 relative">
        <div className="container px-5">
          <div className="w-full">
            <div className="flex flex-wrap -m-2">
              {controls.map((controlItem, index) => (
                <div key={index} className="p-2 w-full">
                  <div className="relative">
                    <label className="text-sm text-middle">
                      {controlItem.label}
                    </label>
                    {controlItem.name === "message" ? (
                      <textarea
                        id={controlItem.name}
                        name={controlItem.name}
                        value={formData[controlItem.name]}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [controlItem.name]: e.target.value,
                          })
                        }
                        className="w-full border-middle border-[2px] bg-primary rounded h-32 text-base outline-none text-white-300 py-1 px-3 resize-none leading-6"
                      />
                    ) : (
                      <input
                        id={controlItem.name}
                        name={controlItem.name}
                        value={formData[controlItem.name]}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            [controlItem.name]: e.target.value,
                          })
                        }
                        className="w-full border-middle border-[2px] bg-primary rounded text-base outline-none text-white-300 py-1 px-3 leading-6"
                      />
                    )}
                  </div>
                </div>
              ))}
              {showSuccessMessage && (
                <p className="text-[14px] font-bold my-[8px]">
                  Your message was successfully delivered!
                </p>
              )}
              <div className="p-2 w-full">
                <button
                  disabled={!isValidForm()}
                  onClick={handleSendMessage}
                  className="disabled:opacity-50 py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg text-2xl tracking-widest bg-primary outline-none"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default dynamic(() => Promise.resolve(ClientContactView), {
  ssr: false,
});
