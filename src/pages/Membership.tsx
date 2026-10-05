import { useState } from "react";
import {
  DataList,
  Display,
  Matrix,
  Mono,
  P,
  Plate,
  Reveal,
  Rule,
  Section,
  PageHero,
  TableScroll,
  TextLink,
} from "../components/primitives";
import { Rail } from "../components/Chrome";
import { img } from "../lib/media";
import { faqs, services, spaces } from "../lib/data";
import { cn } from "../utils/cn";

export default function Membership() {
  const [activeService, setActiveService] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const service = services[activeService];

  return (
    <div className="relative">
      <PageHero
        photo="privateOffice"
        kicker="Services · Coworking · Private offices · Enterprise · Meetings · Events · Studio"
        title="Discover"
        accent="your space."
        intro="Choose from flexible membership options or customize your workspace with tailored solutions that adapt to your business’ needs."
      />
      <section className="relative">

        <div className="px-gutter">
          <Rule />
          <Matrix
            className="py-12"
            aside={
              <div className="space-y-8">
                <Mono className="text-accent">Flexible workspace solutions</Mono>
                <DataList
                  items={[
                    { k: "Coworking from", v: "Rs. 25,000 / mo" },
                    { k: "Private office from", v: "Rs. 30,000 / mo" },
                    { k: "Studio from", v: "Rs. 6,500 / hour" },
                    { k: "Rates", v: "Vary by location" },
                  ]}
                />
                <TextLink to="/locations">Compare all locations</TextLink>
              </div>
            }
          >
            <Reveal delay={100}>
              <h2 className="display text-[clamp(1.85rem,4.4vw,4.2rem)]">
                Choose how you work. We&rsquo;ll take care of the rest.
              </h2>
            </Reveal>
            <Reveal delay={160} className="mt-12 max-w-[54ch]">
              <P lead>
                Whether you need a desk for the day, a dedicated seat, a private office or a customized
                enterprise space, Daftarkhwan has flexible options built around your team.
              </P>
            </Reveal>
          </Matrix>
        </div>
      </section>

      <Section className="pb-[clamp(3rem,8vw,6rem)]">
        <Rule />
        <div className="flex items-baseline justify-between py-6">
          <Mono tone="faint">Workspace solutions</Mono>
          <Mono tone="faint">Select a service</Mono>
        </div>
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-4 lg:gap-x-10">
          <div className="lg:col-span-3">
            {services.map((item, i) => {
              const isOpen = activeService === i;
              return (
                <div key={item.code} className="hair-t">
                  <button
                    type="button"
                    onClick={() => setActiveService(i)}
                    aria-expanded={isOpen}
                    className="link-row group flex w-full cursor-pointer items-start gap-5 py-[clamp(1.75rem,4vw,3rem)] text-left transition-colors duration-700 hover:bg-ink/[0.018] md:gap-10"
                  >
                    <Mono tone="faint" className="w-12 shrink-0 pt-[0.65rem]">
                      {item.code}
                    </Mono>
                    <span className="row-shift min-w-0 flex-1">
                      <span className="display block text-[clamp(1.8rem,4.8vw,4.2rem)] leading-[0.95]">
                        {item.name}
                      </span>
                      <span className="copy mt-4 block max-w-[42ch] text-[0.8125rem]">{item.line}</span>
                    </span>
                    <span className="hidden shrink-0 pt-[0.6rem] sm:block">
                      <Mono tone={isOpen ? "strong" : "faint"}>{item.price}</Mono>
                    </span>
                    <span
                      aria-hidden="true"
                      className={cn(
                        "mt-2 shrink-0 font-display text-[1.5rem] font-light text-ink/60 transition-transform duration-1000",
                        isOpen && "rotate-45",
                      )}
                      style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
                    >
                      +
                    </span>
                  </button>
                </div>
              );
            })}
            <Rule />
          </div>

          <aside className="space-y-8 lg:col-span-1 lg:pl-[clamp(1.25rem,2.2vw,2.25rem)] lg:hair-l">
            <Plate
              src={img[service.image]}
              ratio={service.imageRatio}
              caption={service.name}
              meta={service.code}
              delay={60}
            />
            <DataList
              items={[
                { k: "Service", v: service.name },
                { k: "Starting rate", v: service.price },
                { k: "Network", v: "11 locations" },
              ]}
            />
            <TextLink to={`/services/${service.slug}`}>Explore {service.name}</TextLink>
          </aside>
        </div>

        <Matrix
          className="mt-8"
          aside={
            <div className="space-y-8">
              <Mono className="text-accent">{service.name}</Mono>
              <DataList
                items={[
                  { k: "Starting rate", v: service.price },
                  { k: "Locations", v: "Lahore · Islamabad · Rawalpindi" },
                ]}
              />
              <TextLink to="/contact">Ask about this service</TextLink>
            </div>
          }
        >
          <div className="grid grid-cols-1 gap-12 py-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <Reveal>
                <Mono className="mb-6 block text-accent">{service.name}</Mono>
                <Display size="md" as="h2">{service.line}</Display>
              </Reveal>
              <Reveal delay={100} className="mt-8 max-w-[54ch]">
                <P lead>{service.detail}</P>
              </Reveal>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <Mono tone="faint" className="mb-5 block">What to expect</Mono>
              <ul className="space-y-4">
                {service.inclusions.map((entry) => (
                  <li key={entry} className="flex items-baseline gap-4">
                    <span className="mono text-accent">+</span>
                    <span className="mono-sm text-ink/70">{entry}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Matrix>
      </Section>

      <Section className="pb-[clamp(3rem,8vw,6rem)]">
        <Rule />
        <div className="flex items-baseline justify-between py-6">
          <Mono tone="faint">Fig. 01 — Starting rates by location</Mono>
          <Mono tone="faint">PKR · prices per seat / month unless noted</Mono>
        </div>
        <TableScroll note="11 locations">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr>
                {["City", "Location", "Coworking", "Private office", "Meeting & events"].map((head) => (
                  <th key={head} className="mono py-4 pr-6 font-normal text-ink/40">{head}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {spaces.map((space) => (
                <tr key={space.code} className="hair-t group transition-colors duration-700 hover:bg-ink/[0.018]">
                  <td className="mono py-5 pr-6 text-ink/50">{space.city}</td>
                  <td className="py-5 pr-6"><span className="display text-[1.25rem]">{space.name}</span></td>
                  <td className="mono py-5 pr-6 text-ink/60">{space.coworking}</td>
                  <td className="mono py-5 pr-6 text-ink/60">{space.privateOffice}</td>
                  <td className="mono py-5 pr-6 text-ink/60">{space.meeting}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableScroll>
        <P className="mt-5 max-w-[75ch] text-[0.75rem]">
          Published per-seat prices exclude sales tax. Electricity and power-backup surcharge may apply.
          Rates are subject to change; please confirm with the location team.
        </P>
      </Section>

      <Section className="pb-[clamp(3rem,8vw,6rem)]">
        <Rule />
        <div className="flex items-baseline justify-between py-6">
          <Mono tone="faint">Frequently asked questions</Mono>
          <Mono tone="faint">From Daftarkhwan</Mono>
        </div>
        <Matrix
          aside={
            <div className="space-y-8">
              <Mono className="text-accent">Need more details?</Mono>
              <P className="text-[0.8125rem]">Call the team or plan a visit to a location near you.</P>
              <TextLink to="/contact">Get in touch</TextLink>
            </div>
          }
        >
          <ul>
            {faqs.map((item, i) => {
              const isOpen = activeFaq === i;
              return (
                <li key={item.q} className="hair-t">
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="link-row group flex w-full cursor-pointer items-start gap-6 py-6 text-left transition-colors duration-700 hover:bg-ink/[0.018]"
                  >
                    <Mono tone="faint" className="w-8 shrink-0 pt-2">{String(i + 1).padStart(2, "0")}</Mono>
                    <span className="display row-shift min-w-0 flex-1 text-[clamp(1.3rem,2.4vw,2rem)]">
                      {item.q}
                    </span>
                    <span
                      aria-hidden="true"
                      className={cn("mt-1 shrink-0 font-display text-[1.3rem] font-light text-ink/55 transition-transform duration-1000", isOpen && "rotate-45")}
                      style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
                    >
                      +
                    </span>
                  </button>
                  <div
                    className="grid overflow-hidden transition-all duration-[1000ms]"
                    style={{
                      gridTemplateRows: isOpen ? "1fr" : "0fr",
                      transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)",
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <div className="min-h-0">
                      <P className="max-w-[58ch] pb-8 pl-[3.5rem] text-[0.875rem]">{item.a}</P>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <Rule />
        </Matrix>
      </Section>

      <Section className="pb-[clamp(3rem,8vw,6rem)]">
        <Matrix className="py-[clamp(2rem,5vw,4rem)]" aside={<Mono className="text-accent">Let's connect</Mono>}>
          <div className="flex flex-wrap items-end justify-between gap-8">
            <Display size="md" as="h2">Ready to move in?</Display>
            <div className="flex flex-wrap gap-8">
              <TextLink to="/contact">Arrange a tour</TextLink>
              <TextLink to="/locations" tone="faint">Choose a location</TextLink>
            </div>
          </div>
        </Matrix>
      </Section>

      <Rail code="DK" label="Services" />
    </div>
  );
}