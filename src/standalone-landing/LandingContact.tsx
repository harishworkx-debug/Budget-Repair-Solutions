import { useState, type FormEvent } from 'react';
import { Phone, Clock, MapPin, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { LANDING_CONFIG, LANDING_SERVICES } from './landingData';

export function LandingContact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: LANDING_SERVICES[0].name,
    city: LANDING_CONFIG.city,
    details: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="scroll-mt-20 border-t border-slate-200 bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-sky-600 sm:text-sm">
            Contact & Service Booking
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-navy-950 sm:text-4xl">
            Request HVAC Service in Lawrenceville, GA
          </h2>
          <p className="mt-3 text-base text-slate-600 sm:text-lg">
            Call our local technician phone line directly or submit a service inquiry below for prompt scheduling.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          {/* Left: Direct Call & Operating Info Card */}
          <div className="space-y-6 lg:col-span-5">
            {/* Direct Phone Card */}
            <div className="rounded-2xl border border-sky-200 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 p-7 text-white shadow-lg">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-900/80 px-3 py-1 text-xs font-bold text-sky-200">
                <Phone className="h-3.5 w-3.5" /> Direct Technician Line
              </span>
              <h3 className="mt-4 text-2xl font-bold">Speak Directly With Our Team</h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                No automated call center runarounds. Discuss your heating or air conditioning symptoms with a local technician.
              </p>
              <div className="mt-6">
                <a
                  href={`tel:${LANDING_CONFIG.phoneTel}`}
                  className="flex items-center justify-center gap-2.5 rounded-xl bg-sky-600 px-6 py-4 text-base font-black text-white shadow-md transition hover:bg-sky-500"
                >
                  <Phone className="h-5 w-5" />
                  <span>Call {LANDING_CONFIG.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-2xs">
              <div className="flex items-center gap-2 text-sm font-bold text-navy-950">
                <Clock className="h-4 w-4 text-sky-600" />
                <span>Operating & Dispatch Hours</span>
              </div>
              <ul className="mt-4 space-y-2.5 text-xs sm:text-sm text-slate-600">
                {LANDING_CONFIG.workingHours.map((row) => (
                  <li key={row.days} className="flex items-center justify-between border-b border-slate-200/60 pb-2">
                    <span className="font-semibold text-slate-700">{row.days}</span>
                    <span>{row.hours}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-[11px] text-slate-500">
                *Calls after hours are monitored for emergency heating or cooling breakdowns.
              </p>
            </div>

            {/* Central Dispatch Base */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-2xs">
              <div className="flex items-center gap-2 text-sm font-bold text-navy-950">
                <MapPin className="h-4 w-4 text-sky-600" />
                <span>Physical Dispatch Base</span>
              </div>
              <p className="mt-2 text-sm font-bold text-navy-900">{LANDING_CONFIG.baseLocationDisplay}</p>
              <p className="mt-1 text-xs text-slate-500">
                Serving Lawrenceville, Snellville, Lilburn, Duluth, Suwanee, Loganville, Grayson, Dacula, Norcross, and NE Atlanta.
              </p>
              <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-emerald-700">
                <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                <span>{LANDING_CONFIG.certificationNote}</span>
              </div>
            </div>
          </div>

          {/* Right: Interactive Service Booking Form */}
          <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm lg:col-span-7">
            <h3 className="text-2xl font-bold text-navy-950">Book a Service Visit</h3>
            <p className="mt-1 text-sm text-slate-600">
              Provide your details below and our team will get in touch to confirm your appointment.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" />
                <h4 className="mt-3 text-xl font-bold text-emerald-950">
                  Service Request Received!
                </h4>
                <p className="mt-2 text-sm text-emerald-900">
                  Thank you, <strong>{formData.name}</strong>. Your request for{' '}
                  <strong>{formData.service}</strong> in <strong>{formData.city}</strong> has been logged. Our technician team will call you at{' '}
                  <strong>{formData.phone}</strong> shortly to confirm timing.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 rounded-xl bg-navy-900 px-6 py-2.5 text-xs font-bold text-white transition hover:bg-sky-700"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="landing-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Full Name *
                    </label>
                    <input
                      id="landing-name"
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-navy-950 shadow-2xs focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="landing-phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Phone Number *
                    </label>
                    <input
                      id="landing-phone"
                      type="tel"
                      required
                      placeholder="(470) 555-0199"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-navy-950 shadow-2xs focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="landing-service" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      Service Required *
                    </label>
                    <select
                      id="landing-service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-navy-950 shadow-2xs focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                    >
                      {LANDING_SERVICES.map((srv) => (
                        <option key={srv.id} value={srv.name}>
                          {srv.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="landing-city" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      City / Area *
                    </label>
                    <input
                      id="landing-city"
                      type="text"
                      required
                      placeholder="Lawrenceville, Snellville, etc."
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-navy-950 shadow-2xs focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="landing-details" className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                    System Symptoms / Problem Description
                  </label>
                  <textarea
                    id="landing-details"
                    rows={3}
                    placeholder="Describe what your AC or heating unit is doing (e.g., blowing warm air, making buzzing noise, iced coils)..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-navy-950 shadow-2xs focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-navy-900 px-6 py-4 text-sm font-bold text-white shadow-sm transition hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-500"
                >
                  <Send className="h-4 w-4" />
                  <span>Request Diagnostic Appointment</span>
                </button>

                <p className="text-center text-[11px] text-slate-500">
                  We respect your privacy. Your information is used strictly to coordinate your service dispatch.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
