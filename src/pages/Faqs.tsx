import { useState } from "react";
import { Accordion, DataList, Display, Matrix, Mono, PageHero, Rule, Section, TextLink } from "../components/primitives";
import { Rail } from "../components/Chrome";
import { cityInfo, citySlugs, contactDetails, faqCategories } from "../lib/data";

export default function Faqs() {
  const [active, setActive] = useState(0);
  const category = faqCategories[active];

  return (
    <div className="relative">
      <PageHero
        photo="vogueLounge"
        kicker="Help · Frequently asked questions"
        title="Questions,"
        accent="answered."
        intro="Everything you need to know about coworking, membership, spaces, amenities and events at Daftarkhwan."
        compact
      />

      <Section className="py-[clamp(4rem,10vh,8rem)]">
        <div role="tablist" aria-label="FAQ categories" className="flex flex-wrap gap-x-8 gap-y-4 pb-8">
          {faqCategories.map((item, i) => (
            <button
              key={item.name}
              type="button"
              role="tab"
              aria-selected={active === i}
              onClick={() => setActive(i)}
              className="mono-sm cursor-pointer transition-colors duration-500"
              style={{ color: active === i ? "var(--color-accent)" : "rgba(26,26,24,0.72)" }}
            >
              <span className="underline-fade" data-active={active === i}>
                {item.name}
              </span>
              <span className="ml-2 opacity-70">{String(item.items.length).padStart(2, "0")}</span>
            </button>
          ))}
        </div>

        <Matrix
          aside={
            <div className="space-y-8">
              <Mono className="text-accent">Still have questions?</Mono>
              <DataList
                items={[
                  { k: "Phone", v: <a href={`tel:${contactDetails.tel}`}>{contactDetails.dial}</a> },
                  { k: "WhatsApp", v: <a href={contactDetails.whatsappLink}>{contactDetails.whatsapp}</a> },
                  { k: "Email", v: <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a> },
                ]}
              />
              <TextLink to="/contact">Contact us</TextLink>
            </div>
          }
        >
          <Display size="sm" as="h2" className="mb-8">
            {category.name}
          </Display>
          <Accordion key={category.name} items={category.items} initial={0} />
        </Matrix>
      </Section>

      <Section className="pb-[clamp(3rem,8vw,6rem)]">
        <Rule />
        <Matrix className="py-[clamp(2.5rem,6vw,4.5rem)]" aside={<Mono className="text-accent">By city</Mono>}>
          <div className="flex flex-wrap items-end justify-between gap-8">
            <Display size="md" as="h2">
              Questions about a specific city?
            </Display>
            <div className="flex flex-wrap gap-8">
              {citySlugs.map((slug) => (
                <TextLink key={slug} to={`/locations/${slug}`}>
                  {cityInfo[slug].name}
                </TextLink>
              ))}
            </div>
          </div>
        </Matrix>
        <Rule />
      </Section>

      <Rail code="DK" label="FAQs" />
    </div>
  );
}
