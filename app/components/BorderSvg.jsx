const BorderSvg = () => {
  return (
    <svg width="100%" height="100%" className="absolute inset-0">
      <rect
        stroke="url(#gradient)"
        fill="none"
        width="100%"
        height="100%"
        strokeWidth={1.5}
        rx="0"
      />
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(252, 245, 223, 0.35)" />
          <stop offset="50.1%" stopColor="rgba(228, 218, 186, 0.95)" />
          <stop offset="100%" stopColor="rgba(252, 245, 223, 0.35)" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default BorderSvg;
