import React from "react";
import Header from "@/components/HeaderOnly";
import Form from "@/components/Register/Form";

const page = () => {
  return (
    <div>
      <div className="relative pb-4">
        <Header />
      </div>
      <Form />
    </div>
  );
};

export default page;
