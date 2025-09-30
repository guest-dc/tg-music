import React from "react";

interface PhotoDisplayProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
}

export default function PhotoDisplay({
  src,
  alt = "",
  width = 700,
  height = 200,
}: PhotoDisplayProps) {
  return (
    <div className="photo-display" style={{ backgroundImage: `url(${src})` }}>
      <img className="Image" src={src} alt={alt} width={width} height={height} />
    </div>
  );
}