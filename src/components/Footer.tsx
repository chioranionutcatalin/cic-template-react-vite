import { CLIENTS } from "../consts";
import { Phone, Mail, Facebook } from "lucide-react";

export const Footer = () => {
  const { BDS_IMOLA } = CLIENTS;
  const { FOOTER_SECTION, HOURS_SECTION } = BDS_IMOLA;

  return (
    <footer
      id="footer"
      className="bg-stone-50 border-t border-stone-200 pt-16 pb-8 scroll-mt-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
          {/* ORARIO */}
          <div>
            <h4 className="font-bold mb-4 text-stone-900">
              {HOURS_SECTION.TITLE}
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-4 text-stone-600 text-base sm:text-base sm:text-sm ">
              {/* COL 1: Lunedì – Martedì */}
              <div className="space-y-4">
                {HOURS_SECTION.DAYS.slice(0, 2).map((dayInfo, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="font-medium text-stone-700">
                      {dayInfo.day}
                    </span>
                    {dayInfo.morning && <span>{dayInfo.morning}</span>}
                    <span
                      className={
                        dayInfo.afternoon === "Chiuso" ? "text-stone-500" : ""
                      }
                    >
                      {dayInfo.afternoon}
                    </span>
                  </div>
                ))}
              </div>

              {/* COL 2: Mercoledì – Giovedì */}
              <div className="space-y-4">
                {HOURS_SECTION.DAYS.slice(2, 4).map((dayInfo, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="font-medium text-stone-700">
                      {dayInfo.day}
                    </span>
                    {dayInfo.morning && <span>{dayInfo.morning}</span>}
                    <span
                      className={
                        dayInfo.afternoon === "Chiuso" ? "text-stone-500" : ""
                      }
                    >
                      {dayInfo.afternoon}
                    </span>
                  </div>
                ))}
              </div>

              {/* COL 3: Venerdì – Domenica */}
              <div className="space-y-4">
                {HOURS_SECTION.DAYS.slice(4).map((dayInfo, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="font-medium text-stone-700">
                      {dayInfo.day}
                    </span>
                    {dayInfo.morning && <span>{dayInfo.morning}</span>}
                    <span
                      className={
                        dayInfo.afternoon === "Chiuso" ? "text-stone-500" : ""
                      }
                    >
                      {dayInfo.afternoon}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* INDIRIZZO */}
          <div>
            <h4 className="font-bold mb-4 text-stone-900">
              {FOOTER_SECTION.ADDRESS_HEADING}
            </h4>
            <a
              href="https://maps.app.goo.gl/uPfjCqDuu9GwM2J98"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-col text-base sm:text-base sm:text-sm  text-stone-600 hover:text-stone-900 transition-colors"
            >
              <span>{FOOTER_SECTION.ADDRESS_STREET}</span>
              <span>{FOOTER_SECTION.ADDRESS_CITY_INDICATION}</span>
            </a>
          </div>

          {/* CONTATTI + SOCIAL */}
          <div>
            <h4 className="font-bold mb-4 text-stone-900">
              {FOOTER_SECTION.CONTACTS_HEADING}
            </h4>

            <div className="space-y-4 text-base sm:text-base sm:text-sm  text-stone-600">
              <a
                href={`tel:${FOOTER_SECTION.PHONE}`}
                className="flex items-center justify-center md:justify-start hover:text-stone-900"
              >
                <Phone className="h-4 w-4 mr-2" />
                {FOOTER_SECTION.PHONE}
              </a>

              <a
                href={`mailto:${FOOTER_SECTION.EMAIL}`}
                className="flex items-center justify-center md:justify-start hover:text-stone-900"
              >
                <Mail className="h-4 w-4 mr-2" />
                {FOOTER_SECTION.EMAIL}
              </a>

              {/* SOCIAL LINK INLINE */}
              <a
                href="https://www.facebook.com/floioarestaurocalzature"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center md:justify-start text-base sm:text-sm  text-stone-600 hover:text-stone-900 transition-colors"
              >
                <Facebook className="h-4 w-4 mr-2" />
               Facebook · floioarestaurocalzature
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500">
          <span>{FOOTER_SECTION.COPYRIGHT}</span>
          <span>
            <a
              href="https://www.linkedin.com/in/ionut-chioran-54a25a73/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center md:justify-start text-base sm:text-sm  text-stone-600 hover:text-stone-900 transition-colors"
            >
              Designed By Chioran Ionut
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};
