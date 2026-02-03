import { useState } from "react";
import { CLIENTS } from "../consts";
import { Loader2 } from "lucide-react";

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;

    const distance = touchStartX - touchEndX;

    if (distance > minSwipeDistance) {
      nextImage(); // swipe left
    }

    if (distance < -minSwipeDistance) {
      prevImage(); // swipe right
    }
  };

  const totalImages = 19;
  const { BDS_IMOLA } = CLIENTS;
  const { ASSETS } = BDS_IMOLA;

  const nextImage = () => {
    setLoaded(false);
    setCurrentIndex((i) => (i + 1) % totalImages);
  };

  const prevImage = () => {
    setLoaded(false);
    setCurrentIndex((i) => (i - 1 + totalImages) % totalImages);
  };

  return (
    <div
      className="
    relative w-full
    aspect-[4/3]
    max-h-[70vh]
    rounded-sm
    overflow-hidden
  "
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <Loader2 className="w-10 h-10 text-shoe-brown animate-spin" />
          </div>
        )}

        <img
          key={currentIndex}
          src={`${ASSETS.GALLERY_PATH}/${currentIndex + 1}.${ASSETS.EXTENSION}`}
          alt={`Restauro scarpe a Imola – lavoro ${currentIndex + 1}`}
          onLoad={() => setLoaded(true)}
          className={`
            max-w-full max-h-full
            object-contain
            transition-opacity duration-300
            ${loaded ? "opacity-100" : "opacity-0"}
          `}
        />
      </div>

      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-20"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-20"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {Array.from({ length: totalImages }, (_, i) => (
          <button
            key={i}
            onClick={() => {
              setLoaded(false);
              setCurrentIndex(i);
            }}
            className={`h-2 rounded-full transition-all ${
              i === currentIndex ? "bg-shoe-brown w-8" : "bg-black/30 w-2"
            }`}
          />
        ))}
      </div>

      <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm z-20">
        {currentIndex + 1} / {totalImages}
      </div>
    </div>
  );
};
