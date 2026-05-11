export const metadata = {
  title: "Contact Us",
  description: "Get in touch with the Stakflo team.",
};

import ContactForm from "@/components/form/ContactForm";
// export default function ContactUsPage() {
//   return (
//     <section className="mx-auto flex min-h-[60vh] w-full max-w-5xl flex-col justify-center px-6 py-16">
//       <span className="mb-4 inline-flex w-fit rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
//         Contact
//       </span>
//       <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
//         Talk to the team behind Stakflo.
//       </h1>
//       <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
//         Tailwind is active on this page, and this route now exports a valid React
//         component so the app can build correctly.
//       </p>
//       <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
//         <p className="text-base text-slate-700">
//           Reach us at <span className="font-semibold">team@stakflo.com</span>
//         </p>
//       </div>
//     </section>
//   );
// }

import { LuCircleUserRound, LuFingerprint, LuZap } from "react-icons/lu";

export default function ContactUsPage() {
  return (
    <div>
      {/* <ParallaxSection speed={0.45}> */}
      <section className="relative overflow-hidden bg-[linear-gradient(#FFFFFF_0%,_#dcfce7_43.4474%,_#86efac_100%)]  py-12 md:min-h-[calc(100svh-104px)] md:py-12">
        <div className="relative z-10 mx-auto w-full max-w-[1200px] px-4 sm:px-6">
          <div className="mx-auto  grid gap-20 lg:gap-44 lg:grid-cols-[0.95fr_1.25fr] lg:items-center">
            <div>
              <div className="max-w-xl">
                <h1 className=" text-[36px] md:text-[48px] lg:text-[48px] leading-[1] tracking-tight italic text-[#7d7d82]">
                  Contact Us
                </h1>
                <h2 className=" max-w-[14ch] text-[36px] md:text-[52px] lg:text-[52px] font-bold leading-[0.96] tracking-tight text-black">
                  <span className="block">How Can We</span>
                  <span className="block"> Help You Today?</span>
                </h2>

                <ul className="mt-10 space-y-2">
                  <li className="flex items-start gap-3 text-[18px] leading-[1.3] font-medium text-black">
                    <LuCircleUserRound className="mt-[2px] h-6 w-6 shrink-0 text-[#7f6f97]" />
                    <span>Talk to our security and compliance experts</span>
                  </li>
                  <li className="flex items-start gap-3 text-[18px] leading-[1.3] font-medium text-black">
                    <LuFingerprint className="mt-[2px] h-6 w-6 shrink-0 text-[#7f6f97]" />
                    <span>Explore consulting and implementation support</span>
                  </li>
                  <li className="flex items-start gap-3 text-[18px] leading-[1.3] font-medium text-black">
                    <LuZap className="mt-[2px] h-6 w-6 shrink-0 text-[#7f6f97]" />
                    <span>Request a live demo of our security products</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded-[28px]  border border-white/40 bg-white p-5 shadow-[0_24px_80px_rgba(41,23,84,0.18)] sm:p-8">
              <ContactForm formName="Contact Us Form" />
            </div>
          </div>
        </div>
      </section>
      {/* </ParallaxSection> */}
    </div>
  );
}
