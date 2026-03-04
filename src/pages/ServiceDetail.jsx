import { useMemo } from "react";
import { useParams } from "react-router-dom";
import BackLink from "../components/BackLink";

// Helper to convert slug to Title Case
function titleFromSlug(slug) {
  if (!slug) return "[REPLACE WITH SERVICE NAME]";
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export default function ServiceDetail({ title: propTitle, slug: propSlug }) {
  const params = useParams();
  const slug = propSlug ?? params.slug ?? "[REPLACE WITH SLUG]";
  const title = propTitle ?? (slug.includes("REPLACE") ? "[REPLACE WITH SERVICE NAME]" : titleFromSlug(slug));

  const heroBg = useMemo(
    () =>
      "url(https://images.unsplash.com/photo-1582582494700-89b725c5c029?auto=format&fit=crop&w=1600&q=60)",
    []
  );

  return (
    <article aria-label="Service detail page" className="bg-[#f7f5f0] text-[#2a2a2a]">
      {/* Hero Section */}
      <section
        className="relative py-20 md:py-28"
        style={{
          backgroundImage: heroBg,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#1f1f1f]/40" aria-hidden="true"></div>
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <div className="mb-4">
            <BackLink fallback="/" />
          </div>
          <h1 className="text-4xl md:text-5xl font-light text-white tracking-tight" style={{ fontFamily: "Georgia, serif" }}>
            {title}
          </h1>
          <p className="mt-4 text-[#e8e3da] text-lg max-w-3xl">
            Premium {title.toLowerCase()} services by MU Constructions & Immoveables — designed for homeowners seeking quality, transparency, and timely delivery.
          </p>
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-[#d4b896] text-[#2a2a2a] rounded-md shadow hover:bg-[#c9ab85] focus:outline-none focus:ring-2 focus:ring-[#d4b896] focus:ring-offset-2"
            >
              Get a Free Estimate
            </a>
          </div>
        </div>
      </section>

      {/* Service Overview (stacked) */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        <header>
          <h2 className="text-2xl md:text-3xl font-light text-[#2a2a2a]">Service Overview</h2>
        </header>
        <p className="mt-4 text-[#5a5a5a] text-lg leading-relaxed max-w-4xl">
          Our {title.toLowerCase()} service is tailored for homeowners. We manage the complete process — from initial consultation to handover — ensuring structural quality, clear communication, and a smooth experience throughout.
        </p>
      </section>

      {/* What This Service Includes (bullets, two columns) */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-8">
        <header>
          <h2 className="text-2xl md:text-3xl font-light text-[#2a2a2a]">What This Service Includes</h2>
        </header>
        <ul className="mt-6 grid md:grid-cols-2 gap-4 list-disc pl-6 text-[#4a4a4a]">
          <li>Detailed site assessment and requirement capture</li>
          <li>Professional architectural guidance and planning</li>
          <li>Structural design aligned with safety standards</li>
          <li>Quality material selection and procurement</li>
          <li>Dedicated project supervision and updates</li>
          <li>Adherence to timelines and milestones</li>
          <li>Final inspection and assurance on handover</li>
        </ul>
      </section>

      {/* How MU Constructions Works → Numbered circles */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-8">
        <header>
          <h2 className="text-2xl md:text-3xl font-light text-[#2a2a2a]">How MU Constructions Works</h2>
        </header>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { n: 1, t: "Consultation", d: "We understand needs, preferences, and timeline." },
            { n: 2, t: "Design & Planning", d: "Plan, materials, and milestones finalized." },
            { n: 3, t: "Construction", d: "Execution with supervision and regular updates." },
            { n: 4, t: "Handover", d: "Final checks and documentation." },
          ].map((s) => (
            <div key={s.n} className="bg-white rounded-xl shadow p-6">
              <div className="w-10 h-10 rounded-full bg-[#d4b896]/20 border border-[#d4b896]/40 flex items-center justify-center text-[#2a2a2a]">
                <span className="text-sm font-medium">{s.n}</span>
              </div>
              <h3 className="mt-4 text-base font-medium text-[#2a2a2a]">{s.t}</h3>
              <p className="mt-1 text-sm text-[#5a5a5a]">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose MU Constructions → Removed as requested */}

      {/* Strong CTA */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        <div className="bg-[#2a4a3a] rounded-lg p-8 md:p-10 text-[#e8e3da]">
          <h2 className="text-2xl md:text-3xl font-light">Request a Free Quote</h2>
          <p className="mt-3 text-[#d4b896]">We’ll respond within one business day.</p>
          <a
            href="/contact"
            className="mt-6 inline-block px-6 py-3 bg-[#d4b896] text-[#2a2a2a] rounded-md shadow hover:bg-[#c9ab85] focus:outline-none focus:ring-2 focus:ring-[#d4b896] focus:ring-offset-2"
          >
            Go to Contact
          </a>
        </div>
      </section>
    </article>
  );
}
