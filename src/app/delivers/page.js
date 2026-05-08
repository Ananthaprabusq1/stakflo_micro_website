export const metadata = {
  title: "Deliverables",
  description: "See what Stakflo helps teams deliver continuously.",
};

export default function DeliversPage() {
  return (
    <section className="mx-auto flex min-h-[60vh] w-full max-w-5xl flex-col justify-center px-6 py-16">
      <span className="mb-4 inline-flex w-fit rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700">
        Deliverables
      </span>
      <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
        Compliance outputs that stay ready year-round.
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
        This page was empty before, which caused Next.js prerendering to fail.
        It now renders normally with Tailwind utility classes.
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">
            Audit-ready evidence
          </h2>
          <p className="mt-2 text-slate-600">
            Centralized documentation and continuously updated evidence trails.
          </p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">
            Clear control status
          </h2>
          <p className="mt-2 text-slate-600">
            Visibility into monitoring, gaps, and remediation progress.
          </p>
        </div>
      </div>
    </section>
  );
}
