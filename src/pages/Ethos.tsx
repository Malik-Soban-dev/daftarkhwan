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
  TextLink,
} from "../components/primitives";
import { Rail } from "../components/Chrome";
import { img } from "../lib/media";
import { companyStory, metrics } from "../lib/data";

export default function Ethos() {
  return (
    <div className="relative">
      <PageHero
        photo="enterpriseBanner"
        kicker="About us · Founded in Lahore, August 2016"
        title="Freedom"
        accent="at work."
        intro="More than just an office: a community with the freedom to feel inspired, empowered and at home."
      />
      <section className="relative">

        <div className="px-gutter">
          <Rule />
          <Matrix
            className="py-12"
            aside={
              <div className="space-y-8">
                <Mono className="text-accent">Daftarkhwan, by the numbers</Mono>
                <DataList
                  items={[
                    { k: "First opened", v: "August 2016" },
                    { k: "Locations", v: "11" },
                    { k: "Workspace", v: "510,000+ sq ft" },
                    { k: "Members", v: "5,000+" },
                  ]}
                />
                <TextLink to="/locations">Explore our locations</TextLink>
              </div>
            }
          >
            <Reveal delay={100}>
              <h2 className="display text-[clamp(1.85rem,4.4vw,4.2rem)]">
                We set out to reinvent the very notion of <span className="italic text-accent">daftar</span>.
              </h2>
            </Reveal>
            <Reveal delay={160} className="mt-12 max-w-[56ch]">
              <P lead>
                A place designed to be more than just an office. Here, sharing a desk means more than
                sitting side by side; it means building a community with the freedom to feel inspired,
                empowered and at home to drive world-changing work.
              </P>
            </Reveal>
          </Matrix>
        </div>
      </section>

      <Section className="pb-[clamp(3rem,8vw,6rem)]">
        <Rule />
        <div className="flex items-baseline justify-between py-6">
          <Mono tone="faint">The vision</Mono>
          <Mono tone="faint">How we work</Mono>
        </div>
        <div>
          {companyStory.map((item, i) => (
            <div key={item.title} className="hair-t grid grid-cols-1 lg:grid-cols-4">
              <div className="py-[clamp(2.5rem,6vw,4.5rem)] lg:col-span-3 lg:pr-[clamp(2rem,5vw,5.5rem)]">
                <div className="flex items-start gap-6 md:gap-12">
                  <span className="display shrink-0 text-[clamp(1.6rem,3vw,2.8rem)] text-ink/25">
                    0{i + 1}
                  </span>
                  <div className="min-w-0">
                    <Reveal delay={i * 60}>
                      <h2 className="display text-[clamp(1.8rem,3.9vw,3.6rem)]">{item.title}</h2>
                    </Reveal>
                    <Reveal delay={i * 60 + 90} className="mt-8 max-w-[56ch]">
                      <P lead={i === 0}>{item.body}</P>
                    </Reveal>
                  </div>
                </div>
              </div>
              <aside className="pb-10 lg:col-span-1 lg:pt-[clamp(2.5rem,6vw,4.5rem)] lg:pl-[clamp(1.25rem,2.2vw,2.25rem)] lg:hair-l">
                <div className="space-y-6">
                  <Mono className="text-accent">{["The idea", "The approach", "The ambition"][i]}</Mono>
                  <P className="text-[0.8125rem]">
                    {[
                      "A space designed to be more than an office.",
                      "Value how people work, not only what they produce.",
                      "Grow alongside the supercommunity.",
                    ][i]}
                  </P>
                </div>
              </aside>
            </div>
          ))}
          <Rule />
        </div>
      </Section>

      <Section className="relative pb-[clamp(3rem,8vw,6rem)]">
        <div className="grid grid-cols-1 gap-x-10 gap-y-8 lg:grid-cols-12">
          <div className="lg:col-span-5 lg:col-start-1">
            <Plate
              src={img.enterpriseFloor}
              ratio="aspect-[16/10]"
              caption="An enterprise floor at Daftarkhwan Downtown"
              meta="Lahore"
            />
          </div>
          <div className="lg:col-span-5 lg:col-start-7 lg:pt-20">
            <Reveal>
              <Mono className="mb-7 block text-accent">From one site to a supercommunity</Mono>
              <Display size="md" as="h2">
                Built with the people who work here.
              </Display>
            </Reveal>
            <Reveal delay={100} className="mt-9 max-w-[49ch]">
              <P lead>
                Daftarkhwan opened its doors in August 2016 as a 20-member workspace in Lahore. Today,
                eleven locations across Lahore, Islamabad and Rawalpindi bring together more than 5,000
                members and 260+ companies.
              </P>
              <div className="mt-10">
                <TextLink to="/partnerships">Explore partnerships</TextLink>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section className="pb-[clamp(3rem,8vw,6rem)]">
        <Rule />
        <div className="flex items-baseline justify-between py-6">
          <Mono tone="faint">A national network</Mono>
          <Mono tone="faint">Lahore · Islamabad · Rawalpindi</Mono>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((item, i) => (
            <Reveal
              key={item.label}
              delay={i * 80}
              className="hair-t border-ink/10 py-8 sm:pr-8 lg:border-l lg:px-8 lg:first:border-l-0 lg:first:pl-0"
            >
              <span className="display block text-[clamp(2.6rem,8vw,3.7rem)] leading-[1.05] text-accent">
                {item.value.toLocaleString("en-US")}
                {item.suffix && (
                  <span className="ml-1.5 font-mono text-[0.32em] font-light tracking-[0.14em] whitespace-nowrap">
                    {item.suffix}
                  </span>
                )}
              </span>
              <Mono tone="mid" className="mt-4 block">
                {item.label}
              </Mono>
              <span className="mt-2 block font-mono text-[0.58rem] font-light leading-[1.7] tracking-[0.12em] text-ink/40">
                {item.meta}
              </span>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="pb-[clamp(3rem,8vw,6rem)]">
        <Matrix className="py-[clamp(2rem,5vw,4rem)]" aside={<Mono className="text-accent">Take the lead</Mono>}>
          <div className="flex flex-wrap items-end justify-between gap-8">
            <Display size="md" as="h2" className="w-full sm:w-auto">
              Find freedom at work.
            </Display>
            <div className="flex flex-wrap gap-8">
              <TextLink to="/locations">Find your space</TextLink>
              <TextLink to="/contact" tone="faint">
                Get in touch
              </TextLink>
            </div>
          </div>
        </Matrix>
      </Section>

      <Rail code="DK" label="About" />
    </div>
  );
}