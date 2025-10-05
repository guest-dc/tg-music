"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

interface PhotoCarouselProps {
  title: string;
  path: string; // passed in path does not include initial "/" (Ex. public/events or /events -> events)
}

export default function PhotoCarousel({ title, path }: PhotoCarouselProps) {
  const [images, setImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function fetchPhotos() {
      try {
        const res = await fetch(`/api/photos?path=${encodeURIComponent(path)}`);
        const data: string[] = await res.json();
        setImages(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchPhotos();
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const showControls = images.length > 1;

  return (
    <section className="photo-carousel">
      
      <h2>{title}</h2>

      <div className={`carousel-container ${showControls ? '' : 'no-arrows'}`}>
        {showControls && (
          <button className="arrow left" onClick={prevSlide}>
            &#10094;
          </button>
        )}

        <div className="carousel-wrapper">

          <div className="carousel-image">
            {images.length > 0 ? (
              <Image
                src={images[currentIndex]}
                alt={`Flyer ${currentIndex + 1}`}
                width={600}
                height={600}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            ) : ( <div className="placeholder" /> )}
          </div>

          {showControls && (
            <div className="carousel-dots">
              {images.map((_, idx) => (
                <span
                  key={idx}
                  className={`dot ${idx === currentIndex ? "active" : ""}`}
                  onClick={() => setCurrentIndex(idx)}
                />
              ))}
            </div>
          )}
        </div>

        {showControls && (
          <button className="arrow right" onClick={nextSlide}>
            &#10095;
          </button>
        )}
      </div>

    </section>
  );
}