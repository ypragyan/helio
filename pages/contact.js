import Head from "next/head";
import { useState } from "react";
import { CONTACT_EMAIL } from "../components/Footer";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const subject = encodeURIComponent(`Helio inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <>
      <Head>
        <title>Contact | Helio</title>
      </Head>

      <section className="min-h-[85vh] grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-200 border-b border-slate-200">

        {/* Left side: Form */}
        <div className="p-8 md:p-16 lg:p-24 bg-white flex flex-col justify-center">
          <p className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-8">/ Contact</p>
          <h1 className="text-5xl lg:text-6xl font-display font-bold tracking-tight text-ink mb-6">
            Get in touch.
          </h1>
          <p className="text-lg text-slate-600 font-light leading-relaxed mb-12 max-w-md">
            Interested in piloting Helio, partnering as an installer, or advising the team? We&apos;d love to hear from you.
          </p>

          <div className="w-full max-w-md">
            {submitted ? (
              <div className="border border-slate-200 p-8 text-center bg-paper">
                <p className="font-display font-semibold text-xl tracking-tight text-ink mb-2">Opening email client...</p>
                <p className="text-sm font-light text-slate-600 font-mono">
                  Didn&apos;t open? <br/> Email <a href={`mailto:${CONTACT_EMAIL}`} className="text-helio-500 hover:underline">{CONTACT_EMAIL}</a>
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block font-mono text-xs uppercase tracking-widest text-slate-500 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-none border border-slate-300 bg-transparent px-4 py-4 text-sm text-ink placeholder:text-slate-300 focus:outline-none focus:border-helio-500 focus:ring-1 focus:ring-helio-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-mono text-xs uppercase tracking-widest text-slate-500 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-none border border-slate-300 bg-transparent px-4 py-4 text-sm text-ink placeholder:text-slate-300 focus:outline-none focus:border-helio-500 focus:ring-1 focus:ring-helio-500 transition-colors"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block font-mono text-xs uppercase tracking-widest text-slate-500 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full rounded-none border border-slate-300 bg-transparent px-4 py-4 text-sm text-ink placeholder:text-slate-300 focus:outline-none focus:border-helio-500 focus:ring-1 focus:ring-helio-500 transition-colors resize-y"
                    placeholder="Tell us about your interest..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Right side: Massive Image Placeholder */}
        <div className="bg-mist flex items-center justify-center relative min-h-[400px]">
           {/* INSERT LIFESTYLE OR LAB IMAGE HERE */}
           <span className="font-mono text-slate-400 text-sm z-10">[ Full Height Image Placeholder ]</span>
        </div>

      </section>
    </>
  );
}