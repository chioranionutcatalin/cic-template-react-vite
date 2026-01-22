import { CLIENTS } from "../consts";

export const ServicePriceSection = () => {
  const { BDS_IMOLA } = CLIENTS;
  const { SECTION_TEXTS, ACTION_PRICES } = BDS_IMOLA;
  return (
    <section id="services" className="py-20 bg-white scroll-mt-20 cursor-pointer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-shoe-brown mb-4">
            {SECTION_TEXTS.SERVICES_HEADING}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ACTION_PRICES.map(({ TITLE, DESCRIPTION, PRICE }, key) => (
            <div
              key={`${key}${TITLE}`}
              className="group relative border border-stone-200 p-4 hover:border-stone-900 transition-all duration-300 hover:bg-white hover:shadow-lg flex flex-col h-full items-center justify-center text-center"
            >
              <div className="mb-6 flex-grow flex flex-col items-center justify-center">
                <h3 className="text-xl font-bold mb-2">{TITLE}</h3>
                <p className="text-stone-500 text-sm h-12">{DESCRIPTION}</p>
                <div className="text-3xl font-bold mb-6 text-stone-900 mt-4">
                  {PRICE}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
