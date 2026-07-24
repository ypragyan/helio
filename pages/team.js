import Head from "next/head";
import Link from "next/link";
import FoundersPhoto from "../components/FoundersPhoto";

const founders = [
  {
    name: "Pragyan Yadav",
    role: "CEO & Project Lead",
    bio: "Honors double major in Computer Science & Physics, University of Connecticut. Leads ML architecture and Helio Box integration. Head of Science Journalism at UConn.",
  },
  {
    name: "Shai Verma",
    role: "Business Lead & Co-Founder",
    bio: "Honors degree in Computer Science, UConn. Capital Allocation Lead & VC Analyst at Hillside Ventures. Leads go-to-market and venture strategy.",
  },
];

const advisors = [
  {
    name: "Dr. Diego Cerrai",
    affiliation: "Eversource Energy Center",
  },
  {
    name: "Dr. Yuhao Nie",
    affiliation: "Solar forecasting & deep learning expert",
  },
];

export default function Team() {
  return (
    <>
      <Head>
        <title>Team — Helio</title>
        <meta name="description" content="Meet the Helio founders and research advisors building AI-powered energy intelligence for residential solar." />
      </Head>

      <section className="bg-white py-14 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-label mb-4">Team</p>
          <h1 className="section-heading font-display font-bold text-ink">The people behind Helio.</h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl leading-relaxed">
            A research-driven team at the intersection of machine learning, solar forecasting, and energy systems.
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-display font-semibold text-ink mb-8">Founders</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {founders.map(({ name, role, bio }) => (
              <div key={name} className="card">
                <h3 className="text-xl font-display font-semibold text-ink">{name}</h3>
                <p className="mt-1 text-sm font-medium text-helio-600">{role}</p>
                <p className="mt-4 text-sm text-slate-600 leading-relaxed">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28 bg-mist">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-display font-semibold text-ink mb-8">Advisors</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {advisors.map(({ name, affiliation }) => (
              <div key={name} className="card">
                <h3 className="text-lg font-display font-semibold text-ink">{name}</h3>
                <p className="mt-2 text-sm text-slate-600">{affiliation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28 bg-mist">
        <div className="max-w-6xl mx-auto px-6">
          <figure className="card p-0 overflow-hidden max-w-2xl">
            <div className="aspect-[16/10]">
              <FoundersPhoto className="w-full h-full" />
            </div>
            <figcaption className="px-6 py-4 text-sm text-slate-500 border-t border-slate-200">
              UConn Connecticut Center for Entrepreneurship &amp; Innovation — Get Seeded Pitch Night, January 2026
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="py-14 md:py-16 bg-helio-700">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-white">
            Want to connect with the team?
          </h2>
          <Link href="/contact" className="btn-primary mt-6 bg-white text-helio-700 hover:bg-helio-50">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}