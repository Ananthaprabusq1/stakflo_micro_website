export const metadata = {
  title: "Contact Us",
  description: "Get in touch with the Stakflo team.",
};

export default function ContactUsPage() {
  return (
    <section className="mx-auto flex min-h-[60vh] w-full max-w-5xl flex-col justify-center px-6 py-16">
      <span className="mb-4 inline-flex w-fit rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
        Contact
      </span>
      <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
        Talk to the team behind Stakflo.
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
        Tailwind is active on this page, and this route now exports a valid React
        component so the app can build correctly.
      </p>
      <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <p className="text-base text-slate-700">
          Reach us at <span className="font-semibold">team@stakflo.com</span>
        </p>
      </div>
    </section>
  );
}
