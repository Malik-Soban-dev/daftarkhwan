import {
  DataList,
  Display,
  Matrix,
  Mono,
  P,
  PageHero,
  Plate,
  Reveal,
  Rule,
  Section,
  TextLink,
} from "../components/primitives";
import { Rail } from "../components/Chrome";
import { photo } from "../lib/media";
import { contactDetails, landlords } from "../lib/data";
import { cn } from "../utils/cn";

export default function Landlords() {
  return (
    <div className="relative">
      <PageHero
        photo="vogueStairs"
        kicker="Landlords · Property partnerships"
        title="Grow your"
        accent="property’s value."
        intro={landlords.lead}
      />

      <Section className="py-[clamp(4rem,10vh,8rem)]">
        <Matrix
          aside={
            <div className="space-y-8">
              <Mono className="text-accent">The partnership</Mono>
              <DataList
                items={[
                  { k: "Model", v: "Design · Build · Operate" },
                  { k: "Network", v: "Three cities" },
                  { k: "Since", v: "2016" },
                  { k: "Backed by", v: "Unicorn investors" },
                ]}
              />
            </div>
          }
        >
          <Reveal>
            <Mono className="mb-7 block text-accent">Why partner with us?</Mono>
            <Display size="md" as="h2">
              One of the pioneers of coworking in Pakistan.
            </Display>
          </Reveal>
          <Reveal delay={100} className="mt-9 max-w-[58ch]">
            <P lead>{landlords.why}</P>
          </Reveal>
        </Matrix>
      </Section>

      <Section className="pb-[clamp(4rem,10vh,8rem)]">
        <Rule />
        <div className="grid grid-cols-1 md:grid-cols-3">
          {landlords.stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={i * 80}
              className={cn("py-10 md:pr-8", i > 0 && "hair-t md:border-t-0 md:border-l md:border-ink/10 md:pl-8")}
            >
              <span className="display text-[clamp(2.6rem,5vw,4.4rem)] text-accent">{stat.value}</span>
              <Mono tone="mid" className="mt-4 block">
                {stat.label}
              </Mono>
              <P className="mt-2 text-[0.875rem]">{stat.meta}</P>
            </Reveal>
          ))}
        </div>
        <Rule />
      </Section>

      <Section className="pb-[clamp(4rem,10vh,8rem)]">
        <div className="flex items-baseline justify-between pb-6">
          <Mono tone="mid">What can you expect?</Mono>
          <Mono tone="mid">03</Mono>
        </div>
        {landlords.benefits.map((benefit, i) => (
          <div
            key={benefit.title}
            className="hair-t grid grid-cols-1 gap-x-10 gap-y-8 py-[clamp(2.5rem,6vw,4.5rem)] lg:grid-cols-12"
          >
            <div className={cn("lg:col-span-5 lg:row-start-1", i % 2 === 1 ? "lg:col-start-8" : "lg:col-start-1")}>
              <Plate
                src={photo(benefit.image, 1600, 1000)}
                ratio="aspect-[16/10]"
                caption={benefit.imageAlt}
                alt={benefit.imageAlt}
              />
            </div>
            <div
              className={cn(
                "lg:col-span-6 lg:row-start-1 lg:self-center",
                i % 2 === 1 ? "lg:col-start-1" : "lg:col-start-7",
              )}
            >
              <Reveal>
                <Mono className="text-accent">{String(i + 1).padStart(2, "0")}</Mono>
                <h2 className="display mt-5 text-[clamp(1.9rem,3.6vw,3.4rem)]">{benefit.title}</h2>
              </Reveal>
              <Reveal delay={100}>
                <P className="mt-6 max-w-[54ch]">{benefit.body}</P>
              </Reveal>
            </div>
          </div>
        ))}
        <Rule />
      </Section>

      <section className="dark-surface relative overflow-hidden py-[clamp(4rem,10vw,7rem)]">
        <div className="px-gutter">
          <Matrix
            aside={
              <div className="space-y-8">
                <Mono className="text-accent">Get in touch</Mono>
                <DataList
                  items={[
                    { k: "Phone", v: <a href={`tel:${contactDetails.tel}`}>{contactDetails.dial}</a> },
                    { k: "Email", v: <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a> },
                  ]}
                />
              </div>
            }
          >
            <Reveal>
              <Mono className="mb-7 block text-accent">Have a property in mind?</Mono>
              <Display size="lg" as="h2">
                Let’s build something unforgettable.
              </Display>
            </Reveal>
            <Reveal delay={100} className="mt-8 max-w-[50ch]">
              <P lead>
                We take up large spaces or full commercial properties and partner with landlords on long-term
                commitments.
              </P>
            </Reveal>
            <div className="mt-10 flex flex-wrap gap-10">
              <TextLink to="/contact">Contact our team</TextLink>
              <TextLink href={`mailto:${contactDetails.email}`} tone="faint">
                Email us
              </TextLink>
            </div>
          </Matrix>
        </div>
      </section>

      <Rail code="DK" label="Landlords" />
    </div>
  );
}
