import { CLIENTS } from "../consts";

export const AboutSection = () => {
    const { BDS_IMOLA } = CLIENTS;
    const { SECTION_TEXTS, BULLET_POINTS, ASSETS } = BDS_IMOLA;
    
    return (
    <section
        className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20 cursor-pointer"
      >
        <div className="rounded-sm p-8 lg:p-16 overflow-hidden relative shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-12 relative z-10">
            <div>
              <h2 className="text-shoe-brown text-3xl font-bold mb-6">
                {SECTION_TEXTS.ABOUT_HEADING}
              </h2>
              <div className="space-y-8">
                {BULLET_POINTS.map(({TITLE, DESCRIPTION}) => (
                  <div
                    key={TITLE}
                    className="flex flex-col border-l-2 border-stone-700 pl-6 hover:border-white transition-colors pointer"
                  >
                    <span className="text-xl font-medium mb-2">
                      {TITLE}
                    </span>
                    <span>{DESCRIPTION}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src={ASSETS.MISSION_IMAGE}
                alt="Fresh natural clean sneakers outdoors"
                className="object-cover object-center w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    )
}