import {
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
import { journal } from "../lib/data";

export default function Journal() {
  const [lead, ...entries] = journal;

  return (
    <div className="relative">
      <PageHero
        photo="downtownLaunch"
        kicker="Blogs · Business insights · Work trends · Community stories"
        title="Blogs"
        accent="& insights."
        intro="Explore the latest in work trends and business insights from across the Daftarkhwan supercommunity."
        compact
      />
      <section className="relative">

        <div className="px-gutter">
          <Rule />
          <Matrix
            className="py-12"
            aside={
              <div className="space-y-8">
                <Mono className="text-accent">From the network</Mono>
                <P className="text-[0.8125rem]">
                  The latest in work trends, business insights and updates from the Daftarkhwan
                  supercommunity.
                </P>
                <TextLink href="https://www.daftarkhwan.com/blog" tone="faint">
                  Official blog index
                </TextLink>
              </div>
            }
          >
            <Reveal delay={100}>
              <Display size="md" as="h2">
                Explore what&rsquo;s new at Daftarkhwan.
              </Display>
            </Reveal>
          </Matrix>
        </div>
      </section>

      <Section className="pb-[clamp(2rem,6vw,4rem)]">
        <Rule />
        <a
          className="link-row group grid w-full grid-cols-1 gap-y-8 py-[clamp(2rem,5vw,3.5rem)] text-left transition-colors duration-700 hover:bg-ink/[0.018] lg:grid-cols-12 lg:gap-x-10"
          href={lead.href}
          target="_blank"
          rel="noreferrer"
        >
          <div className="lg:col-span-5">
            <Plate
              src={img[lead.image]}
              ratio="aspect-[4/5]"
              caption={lead.category}
              meta="Featured"
            />
          </div>
          <div className="lg:col-span-5 lg:col-start-7">
            <Mono tone="faint">{lead.category}</Mono>
            <Display size="md" as="h2" className="mt-7">
              <span className="row-shift block">{lead.title}</span>
            </Display>
            <P className="mt-7 max-w-[46ch]">{lead.excerpt}</P>
            <div className="mt-9 flex items-baseline gap-4">
              <span className="mono text-ink/50">Read on daftarkhwan.com</span>
              <span aria-hidden="true" className="arrow-slide font-display text-[1.4rem] text-ink/70">→</span>
            </div>
          </div>
        </a>
      </Section>

      <Section className="pb-[clamp(3rem,8vw,6rem)]">
        <Rule />
        <div className="flex items-baseline justify-between py-6">
          <Mono tone="faint">Latest articles</Mono>
          <Mono tone="faint">From Daftarkhwan.com</Mono>
        </div>
        <ul>
          {entries.map((entry, i) => (
            <Reveal key={entry.issue} delay={i * 50}>
              <li>
                <a
                  href={entry.href}
                  target="_blank"
                  rel="noreferrer"
                  className="link-row group hair-t flex w-full items-start gap-5 py-7 text-left transition-colors duration-700 hover:bg-ink/[0.018] md:gap-10"
                >
                  <Mono tone="faint" className="w-12 shrink-0 pt-[0.55rem]">{entry.issue}</Mono>
                  <span className="row-shift min-w-0 flex-1">
                    <span className="display block text-[clamp(1.4rem,2.9vw,2.6rem)]">{entry.title}</span>
                    <span className="copy mt-3 block max-w-[52ch] text-[0.8125rem]">{entry.excerpt}</span>
                  </span>
                  <span className="mono hidden shrink-0 pt-[0.6rem] text-ink/40 md:block">{entry.category}</span>
                  <span aria-hidden="true" className="arrow-slide shrink-0 self-center font-display text-[1.5rem] font-light text-ink/65">→</span>
                </a>
              </li>
            </Reveal>
          ))}
        </ul>
        <Rule />
      </Section>

      <Section className="pb-[clamp(3rem,8vw,6rem)]">
        <Matrix
          aside={<Mono className="text-accent">The supercommunity</Mono>}
          className="py-[clamp(2rem,5vw,4rem)]"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-8">
            <div>
              <Mono tone="faint" className="block">Read more</Mono>
              <Display size="sm" as="h2" className="mt-5">Ideas from work, business and beyond.</Display>
            </div>
            <TextLink href="https://www.daftarkhwan.com/blog">Visit the official blog</TextLink>
          </div>
        </Matrix>
      </Section>

      <Rail code="DK" label="Blogs" />
    </div>
  );
}