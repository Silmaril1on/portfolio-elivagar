import HeaderAnimation from "@/app/components/HeaderAnimation";

const TestimonialHeadline = () => {
  return (
    <div className="sticky top-[200px]">
      <HeaderAnimation
        text="testimonials"
        className="text-5xl xl:text-7xl uppercase"
      />
    </div>
  );
};

export default TestimonialHeadline;
