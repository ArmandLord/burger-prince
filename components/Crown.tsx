interface CrownProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: { width: 28, height: 20 },
  md: { width: 44, height: 32 },
  lg: { width: 72, height: 52 },
};

export function Crown({ size = "md", className = "" }: CrownProps) {
  const { width, height } = sizeMap[size];
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 72"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`crownGrad-${size}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
      </defs>
      {/* Crown body */}
      <polygon
        points="4,62 4,22 28,42 50,4 72,42 96,22 96,62"
        fill={`url(#crownGrad-${size})`}
      />
      {/* Crown base bar */}
      <rect x="4" y="60" width="92" height="12" rx="3" fill="#D97706" />
      {/* Jewels */}
      <circle cx="50" cy="8" r="5" fill="#FACC15" />
      <circle cx="4" cy="22" r="4" fill="#FACC15" />
      <circle cx="96" cy="22" r="4" fill="#FACC15" />
      {/* Highlight */}
      <polygon
        points="8,58 8,30 24,44 50,14 76,44 92,30 92,58"
        fill="rgba(255,255,255,0.12)"
      />
    </svg>
  );
}
