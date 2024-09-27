const Light = () => {
  return (
    <div className="absolute inset-0 z-0 pt-[7%]">
      <video
        preload="none"
        autoPlay
        muted
        loop
        className="w-full h-full object-cover"
      >
        <source
          src="/lights.webm"
          type="video/webm"
          className="w-full h-full"
        />
      </video>
    </div>
  );
};

export default Light;
