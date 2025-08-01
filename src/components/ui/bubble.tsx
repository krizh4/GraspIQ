import React from "react";

const Bubble = ({ align }: { align: "left" | "right" }) => {
  return (
      <div className={`flex items-start gap-2 mb-4 ${align==="right" ? "justify-end" : ""}`}>
        <div className={`bg-gray-100 text-black p-3 rounded-xl ${align==="right" ? "rounded-tr-none" : "rounded-tl-none"} max-w-xs`}>
          Hello! How can I help you today?
        </div>
      </div>
  );
};

export default Bubble;
