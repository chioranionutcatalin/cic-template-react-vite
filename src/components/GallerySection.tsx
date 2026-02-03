
import { CLIENTS } from "../consts";
import { Carousel } from "./Carousel";

export const GallerySection = () => {
  const { BDS_IMOLA } = CLIENTS;
  const { SECTION_TEXTS } = BDS_IMOLA;
  return (
    <section id="gallery" className="py-24 scroll-mt-10 cursor-pointer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-shoe-brown mb-4">
            {SECTION_TEXTS.GALLERY_HEADING}
          </h2>
          <p className="text-stone-600 body-text">
            {SECTION_TEXTS.GALLERY_DESCRIPTION}
          </p>
        </div>
        <Carousel />
      </div>
    </section>
  );
};
