
import { CLIENTS } from "../consts";

export const MissionSection = () => {
  const { BDS_IMOLA } = CLIENTS;
  const { COMPANY_DESC, ASSETS } = BDS_IMOLA;

  return (
    <section id="about" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* TEXT */}
        <div className="space-y-8 animate-fade-in text-center lg:text-left flex flex-col items-center lg:items-start">
          <h1 className="text-shoe-brown text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tighter leading-[1.1]">
            {COMPANY_DESC.NAME}
          </h1>

          <p className="text-stone-600 body-text">
            {COMPANY_DESC.DESCRIPTION}
          </p>
        </div>

        {/* IMAGE */}
        <div className="relative h-[260px] sm:h-[400px] lg:h-[600px] w-full mx-auto rounded-sm overflow-hidden shadow-xl group">
          <img
            src={ASSETS.HERO_IMAGE}
            alt="Riparazione e restauro scarpe artigianale a Imola"
            className="object-cover object-center w-full h-full hover:scale-105 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

      </div>
    </section>
  );
};

