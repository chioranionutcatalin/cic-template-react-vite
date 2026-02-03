import { CLIENTS } from "../consts";
import { Phone, Mail, Facebook, MapPin } from "lucide-react";

export const Footer = () => {
  const { BDS_IMOLA } = CLIENTS;
  const { FOOTER_SECTION, HOURS_SECTION } = BDS_IMOLA;

  const days = HOURS_SECTION.DAYS;

  return (
    <footer
      id="footer"
      className="bg-stone-50 border-t border-stone-200 pt-16 pb-8 scroll-mt-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* GRID 12 */}
        <div className="grid grid-cols-12 gap-12 mb-8 text-center md:text-left">
          {/* ORARIO – 7 COL */}
          <div className="col-span-12 md:col-span-7">
            <h4 className="font-bold mb-6 text-stone-900">
              {HOURS_SECTION.TITLE}
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-stone-600 text-lg sm:text-base">
              {/* BLOCCO 1: Lunedì – Mercoledì */}
              <div className="space-y-4">
                {days.slice(0, 2).map((day, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="font-medium text-stone-700">
                      {day.day}
                    </span>
                    {day.morning && <span>{day.morning}</span>}
                    <span
                      className={
                        day.afternoon === "Chiuso" ? "text-stone-500" : ""
                      }
                    >
                      {day.afternoon}
                    </span>
                  </div>
                ))}
              </div>

              {/* BLOCCO 2: Giovedì – Sabato */}
              <div className="space-y-4">
                {days.slice(2, 4).map((day, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="font-medium text-stone-700">
                      {day.day}
                    </span>
                    {day.morning && <span>{day.morning}</span>}
                    <span
                      className={
                        day.afternoon === "Chiuso" ? "text-stone-500" : ""
                      }
                    >
                      {day.afternoon}
                    </span>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {days.slice(4, 6).map((day, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="font-medium text-stone-700">
                      {day.day}
                    </span>
                    {day.morning && <span>{day.morning}</span>}
                    <span
                      className={
                        day.afternoon === "Chiuso" ? "text-stone-500" : ""
                      }
                    >
                      {day.afternoon}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CONTATTI – 5 COL */}
          <div className="col-span-12 md:col-span-5">
            <h4 className="font-bold mb-6 text-stone-900">
              {FOOTER_SECTION.CONTACTS_HEADING}
            </h4>

            <div className="space-y-5 text-lg sm:text-base text-stone-600">
              <a
                href="https://maps.app.goo.gl/uPfjCqDuu9GwM2J98"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start md:items-center hover:text-stone-900"
              >
                <MapPin className="h-5 w-5 mr-3 mt-1 md:mt-0" />
                <span>{FOOTER_SECTION.ADDRESS}</span>
              </a>

              <a
                href={`tel:${FOOTER_SECTION.PHONE}`}
                className="flex items-center hover:text-stone-900"
              >
                <Phone className="h-5 w-5 mr-3" />
                {FOOTER_SECTION.PHONE}
              </a>

              <a
                href={`mailto:${FOOTER_SECTION.EMAIL}`}
                className="flex items-center hover:text-stone-900"
              >
                <Mail className="h-5 w-5 mr-3" />
                {FOOTER_SECTION.EMAIL}
              </a>

              <a
                href="https://www.facebook.com/floioarestaurocalzature"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-stone-900"
              >
                <Facebook className="h-5 w-5 mr-3" />
                Facebook · floioarestaurocalzature
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500">
          <span>{FOOTER_SECTION.COPYRIGHT}</span>
          <a
            href="https://www.linkedin.com/in/ionut-chioran-54a25a73/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 md:mt-0 text-stone-500 hover:text-stone-700"
          >
            Designed by Chioran Ionut
          </a>
        </div>
      </div>
    </footer>
  );
};
