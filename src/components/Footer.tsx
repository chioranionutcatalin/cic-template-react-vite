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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 text-center md:text-left">
            <div className="col-span-1 md:col-span-1">
               <h4 className="font-bold mb-4 text-stone-900">
               {HOURS_SECTION.TITLE}
              </h4>
              <div className="space-y-3 text-stone-600 text-sm">
                <div className="flex flex-col">
                  <span className="font-medium text-stone-700">
                    {HOURS_SECTION.WEEKDAYS.label}
                  </span>
                  {HOURS_SECTION.WEEKDAYS.times.map((time, idx) => (
                    <span key={idx}>{time}</span>
                  ))}
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-stone-700">
                    {HOURS_SECTION.SATURDAY.label}
                  </span>
                  {HOURS_SECTION.SATURDAY.times.map((time, idx) => (
                    <span key={idx}>{time}</span>
                  ))}
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-stone-700">
                    {HOURS_SECTION.SUNDAY.label}
                  </span>
                  {HOURS_SECTION.SUNDAY.times.map((time, idx) => (
                    <span
                      key={idx}
                      className={idx === 0 ? "text-stone-500" : ""}
                    >
                      {time}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-stone-900">
                {FOOTER_SECTION.ADDRESS_HEADING}
              </h4>
              <a
                href="https://www.google.com/maps/place/Calzolaio+Florin/@44.3577389,11.7043919,17z/data=!3m1!4b1!4m6!3m5!1s0x132b4bd013b016eb:0xb284bf7ee31056f6!8m2!3d44.3577351!4d11.7069668!16s%2Fg%2F11vqr_2bsx?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-col md:flex-row md:items-center space-y-1 md:space-y-0 md:space-x-2 text-stone-700 hover:text-stone-900 font-medium text-xs transition-colors"
              >
                <span>
                  {FOOTER_SECTION.ADDRESS_STREET} <br></br>
                  {FOOTER_SECTION.ADDRESS_CITY_INDICATION}
                </span>
              </a>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-stone-900">
                {FOOTER_SECTION.CONTACTS_HEADING}
              </h4>
              <div className="space-y-3 text-sm text-stone-600">
                <a
                  href="tel:+393209615735"
                  className="flex flex-col md:flex-row md:items-center justify-center md:justify-start hover:text-stone-900"
                >
                  <Phone className="h-4 w-4 md:mr-3 mb-1 md:mb-0 mx-auto md:mx-0" />
                  {FOOTER_SECTION.PHONE}
                </a>
              </div>
              <div className="space-y-3 text-sm text-stone-600">
                <a
                  className="flex flex-col md:flex-row md:items-center justify-center md:justify-start"
                >
                  <Mail className="h-4 w-4 md:mr-3 mb-1 md:mb-0 mx-auto md:mx-0" />
                  {FOOTER_SECTION.EMAIL}
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-stone-900">
                {FOOTER_SECTION.SOCIAL_HEADING}
              </h4>
              <div className="flex space-x-4 justify-center md:justify-start">
                <a
                  href="https://www.facebook.com/floioarestaurocalzature"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white border border-stone-200 rounded-full hover:bg-stone-100 transition-colors"
                >
                  <Facebook className="h-5 w-5 text-stone-700" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500">
            <span>{FOOTER_SECTION.COPYRIGHT}</span>
            <div className="flex space-x-6 mt-4 md:mt-0"></div>
          </div>
        </div>
      </footer>
    )
};