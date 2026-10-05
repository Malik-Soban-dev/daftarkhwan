import { useState } from "react";
import {
  DataList,
  Display,
  Matrix,
  Mono,
  P,
  Reveal,
  Rule,
  Section,
  PageHero,
  TextLink,
} from "../components/primitives";
import { Rail } from "../components/Chrome";
import { contactDetails, services, spacePath, spaces } from "../lib/data";
import { cn } from "../utils/cn";

const inputClass =
  "w-full bg-transparent font-sans text-[1.05rem] font-light text-ink placeholder:text-ink/[0.5] focus:outline-none";

function Field({
  label,
  children,
  meta,
}: {
  label: string;
  children: React.ReactNode;
  meta?: string;
}) {
  return (
    <label className="hair-t block pt-3 pb-8">
      <span className="flex items-baseline justify-between gap-4">
        <Mono tone="faint">{label}</Mono>
        {meta && <Mono tone="faint" className="shrink-0">{meta}</Mono>}
      </span>
      <span className="mt-5 block">{children}</span>
    </label>
  );
}

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="relative">
      <PageHero
        photo="coworkingWide"
        kicker="Contact · Vogue Towers, MM Alam Road, Lahore"
        title="Let’s"
        accent="connect."
        intro="Book a tour, plan an event or ask about a workspace. Our team is here to help."
      />
      <section className="relative">

        <div className="px-gutter">
          <Rule />
          <Matrix
            className="py-12"
            aside={
              <div className="space-y-8">
                <Mono className="text-accent">Daftarkhwan</Mono>
                <DataList
                  items={[
                    { k: "Phone", v: contactDetails.dial },
                    { k: "Email", v: contactDetails.email },
                    { k: "Tours", v: "Walk-ins welcome" },
                    { k: "Network", v: "Lahore · Islamabad · Rawalpindi" },
                  ]}
                />
                <P className="text-[0.8125rem]">
                  For a guided tour or a workspace enquiry, call the team or send a message below.
                </P>
              </div>
            }
          >
            <Reveal delay={100}>
              <h2 className="display text-[clamp(1.85rem,4.4vw,4.2rem)]">
                Tell us how you&rsquo;d like to work.
              </h2>
            </Reveal>
            <Reveal delay={160} className="mt-12 max-w-[54ch]">
              <P lead>
                Whether you&rsquo;re looking for a coworking seat, a private office, an event space or a
                tailored enterprise workspace, our team can help you find the right fit.
              </P>
            </Reveal>
          </Matrix>
        </div>
      </section>

      <Section className="pb-[clamp(3rem,8vw,6rem)]">
        <Rule />
        <div className="flex items-baseline justify-between py-6">
          <Mono tone="faint">Book a tour · Workspace enquiry</Mono>
          <Mono tone="faint">Lahore · Islamabad · Rawalpindi</Mono>
        </div>

        <Matrix
          aside={
            <div className="space-y-8">
              <Mono className="text-accent">Direct contact</Mono>
              <DataList
                items={[
                  { k: "Phone", v: contactDetails.dial },
                  { k: "Email", v: contactDetails.email },
                  { k: "Sales", v: contactDetails.salesEmail },
                ]}
              />
              <P className="text-[0.8125rem]">{contactDetails.address}</P>
              <div className="flex flex-wrap gap-6">
                <a className="mono-sm text-ink/60 underline-fade hover:text-ink" href="tel:+9242111323827">
                  Call the team →
                </a>
                <a className="mono-sm text-ink/60 underline-fade hover:text-ink" href="mailto:hello@daftarkhwan.com">
                  Send an email →
                </a>
              </div>
            </div>
          }
        >
          {sent ? (
            <div className="py-[clamp(2rem,6vw,4rem)]">
              <Mono className="block text-accent">Your email app has been opened</Mono>
              <Display size="lg" as="h2" className="mt-8">
                Send your enquiry
                <br />
                <span className="font-normal italic text-accent">to our team.</span>
              </Display>
              <P lead className="mt-10 max-w-[46ch]">
                Review the message in your email app and press send to reach hello@daftarkhwan.com. For an
                immediate response, call 042 111-323827.
              </P>
              <div className="mt-10 flex flex-wrap gap-8">
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="mono cursor-pointer text-ink/60 underline-fade hover:text-ink"
                >
                  Edit enquiry →
                </button>
                <TextLink to="/locations" tone="faint">Explore locations</TextLink>
              </div>
            </div>
          ) : (
            <form
              className="pt-6"
              onSubmit={(event) => {
                event.preventDefault();
                const form = new FormData(event.currentTarget);
                const subject = `Daftarkhwan enquiry — ${String(form.get("service"))}`;
                const body = [
                  `Name: ${String(form.get("firstName"))} ${String(form.get("lastName"))}`,
                  `Email: ${String(form.get("email"))}`,
                  `Phone: ${String(form.get("phone"))}`,
                  `Location: ${String(form.get("location"))}`,
                  `Looking for: ${String(form.get("service"))}`,
                  `Heard about us through: ${String(form.get("referral"))}`,
                  `Message: ${String(form.get("message") ?? "")}`,
                ].join("\n");
                window.location.href = `mailto:${contactDetails.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                setSent(true);
              }}
            >
              <div className="grid gap-x-12 sm:grid-cols-2">
                <Field label="First name" meta="Required">
                  <input required name="firstName" className={inputClass} autoComplete="given-name" placeholder="First name" />
                </Field>
                <Field label="Last name">
                  <input name="lastName" className={inputClass} autoComplete="family-name" placeholder="Last name" />
                </Field>
                <Field label="Email" meta="Required">
                  <input required type="email" name="email" className={inputClass} autoComplete="email" placeholder="you@company.com" />
                </Field>
                <Field label="Phone" meta="Required">
                  <input required type="tel" name="phone" className={inputClass} autoComplete="tel" placeholder="+92 3xx xxx xxxx" />
                </Field>
                <Field label="Location" meta="Required">
                  <select required name="location" defaultValue="" className={cn(inputClass, "appearance-none cursor-pointer")}>
                    <option value="" disabled>Select a location</option>
                    {spaces.map((space) => (
                      <option key={space.code} value={`Daftarkhwan | ${space.name}, ${space.city}`}>
                        Daftarkhwan | {space.name} — {space.city}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="What are you looking for?" meta="Required">
                  <select required name="service" defaultValue="" className={cn(inputClass, "appearance-none cursor-pointer")}>
                    <option value="" disabled>Select a service</option>
                    {services.map((item) => <option key={item.code} value={item.name}>{item.name}</option>)}
                  </select>
                </Field>
              </div>

              <Field label="How did you hear about us?" meta="Required">
                <select required name="referral" defaultValue="" className={cn(inputClass, "appearance-none cursor-pointer")}>
                  <option value="" disabled>Select one</option>
                  {["Google Search", "Social Media", "LinkedIn", "Referral", "Physical Branding", "Other"].map((item) => (
                    <option key={item} value={item}>{item}</option>
                  ))}
                </select>
              </Field>

              <Field label="Anything else?">
                <textarea name="message" rows={4} className={cn(inputClass, "resize-none leading-[1.9]")} placeholder="Tell us about your team or what you need." />
              </Field>

              <Rule draw={false} />
              <div className="flex flex-wrap items-center justify-between gap-6 py-8">
                <span className="block max-w-[42ch] font-mono text-[0.625rem] font-light leading-[1.8] tracking-[0.14em] text-ink/45">
                  Your email app will open with the enquiry addressed to hello@daftarkhwan.com.
                </span>
                <button type="submit" className="link-row group flex cursor-pointer items-baseline gap-5 text-left">
                  <span className="display row-shift text-[clamp(1.5rem,3vw,2.4rem)]">Send an enquiry</span>
                  <span aria-hidden="true" className="arrow-slide font-display text-[1.8rem] text-ink/70">→</span>
                </button>
              </div>
            </form>
          )}
        </Matrix>
      </Section>

      <Section className="pb-[clamp(3rem,8vw,6rem)]">
        <Rule />
        <div className="flex items-baseline justify-between py-6">
          <Mono tone="faint">The front doors</Mono>
          <Mono tone="faint">11 locations · 3 cities</Mono>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {spaces.map((space, i) => (
            <Reveal key={space.code} delay={i * 35} className="hair-t py-8 md:pr-10">
              <div className="flex items-baseline justify-between gap-4">
                <Mono tone="faint">{space.city}</Mono>
                <Mono tone={space.status === "Open" ? "faint" : "mid"} className={space.status === "Open" ? undefined : "text-accent"}>
                  {space.status}
                </Mono>
              </div>
              <h3 className="display mt-5 text-[clamp(1.5rem,2.6vw,2.1rem)]">Daftarkhwan | {space.name}</h3>
              <P className="mt-4 text-[0.875rem]">{space.district}</P>
              <div className="mt-6">
                <TextLink to={spacePath(space)} tone="faint">View location details</TextLink>
              </div>
            </Reveal>
          ))}
        </div>
        <Rule />
      </Section>

      <Rail code="DK" label="Contact" />
    </div>
  );
}