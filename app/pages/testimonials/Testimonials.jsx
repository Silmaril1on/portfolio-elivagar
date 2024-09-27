import React from "react";
import TestimonialHeadline from "./TestimonialHeadline";

const Testimonials = () => {
  return (
    <section className="h-screen flex flex-col items-center relative w-full">
      <TestimonialHeadline />
      <div className="w-64 h-64 border sticky top-[350px]">
        <h1>george bagdavadze</h1>
        <p>
          Levan built a website for our creative agency. Communication was fast
          and comfortable. In the end, all the details turned out to be very
          high quality and we got the result we needed
        </p>
        <h1>account director</h1>
        <h1>brid.me</h1>
      </div>
    </section>
  );
};

export default Testimonials;
