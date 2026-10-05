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
import { careers, socialLinks } from "../lib/data";
import { cn } from "../utils/cn";

const linkedIn = socialLinks.find((link) => link.label === "LinkedIn")?.href ?? "https://www.linkedin.com/company/daftarkhwan";

export default function Careers() {
  return (
    <div className="relative">
      <PageHero
        photo="downtownLaunch"
        kicker="Careers · Join our team"
        title="Workspace that"
        accent="feels like home."
        intro="Join a growing team on a mission to empower entrepreneurs and innovators to change the world."
      />

      <Section className="py-[clamp(4rem,10vh,8rem)]">
        <Matrix
          aside={
            <div className="space-y-8">
              <Mono className="text-accent">Life at Daftarkhwan</Mono>
              <DataList
                items={[
                  { k: "Team", v: "350+ people" },
                  { k: "Started with", v: "A team of 5" },
                  { k: "Cities", v: "Lahore · Islamabad · Rawalpindi" },
                  { k: "Founded", v: "2016" },
                ]}
              />
            </div>
          }
        >
          <Reveal>
            <Mono className="mb-7 block text-accent">Workspace that feels like home</Mono>
            <Display size="md" as="h2">
              {careers.lead}
            </Display>
          </Reveal>
          <Reveal delay={100} className="mt-9 max-w-[56ch]">
            <P lead>{careers.body}</P>
          </Reveal>
        </Matrix>
      </Section>

      <Section className="pb-[clamp(4rem,10vh,8rem)]">
        <Rule />
        <div className="flex items-baseline justify-between py-6">
          <Mono tone="mid">What we value</Mono>
          <Mono tone="mid">03</Mono>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {careers.values.map((value, i) => (
            <Reveal
              key={value.title}
              delay={i * 80}
              className={cn("hair-t py-8 md:pr-8", i > 0 && "md:border-l md:border-ink/10 md:pl-8")}
            >
              <span className="display text-[3rem] text-accent">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="display mt-4 text-[clamp(1.8rem,2.8vw,2.6rem)]">{value.title}</h3>
              <P className="mt-4 text-[0.9375rem]">{value.body}</P>
            </Reveal>
          ))}
        </div>
        <Rule />
      </Section>

      <Section className="pb-[clamp(4rem,10vh,8rem)]">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <Plate
              src={photo("teamExperience", 1600, 1000)}
              ratio="aspect-[16/10]"
              caption="An open hall at Daftarkhwan Boulevard"
              meta="Lahore"
              className="gallery-image"
            />
          </div>
          <div className="md:col-span-5 md:mt-24">
            <Plate
              src={photo("vogueHuddle", 1600, 1000)}
              ratio="aspect-[16/10]"
              caption="Huddle rooms at Daftarkhwan Vogue"
              meta="Lahore"
              delay={100}
              className="gallery-image"
            />
          </div>
        </div>
      </Section>

      <section className="dark-surface relative overflow-hidden py-[clamp(4rem,10vw,7rem)]">
        <div className="px-gutter">
          <Matrix
            aside={
              <div className="space-y-6">
                <Mono className="text-accent">Open roles</Mono>
                <P className="text-[0.875rem]">
                  Current openings are published on the Daftarkhwan careers page and on LinkedIn.
                </P>
              </div>
            }
          >
            <Reveal>
              <Mono className="mb-7 block text-accent">Join the team</Mono>
              <Display size="lg" as="h2">
                Find your role at Daftarkhwan.
              </Display>
            </Reveal>
            <Reveal delay={100} className="mt-8 max-w-[50ch]">
              <P lead>
                We welcome passionate people who believe in empowering entrepreneurs and innovators to change the world.
              </P>
            </Reveal>
            <div className="mt-10 flex flex-wrap gap-10">
              <TextLink href="https://www.daftarkhwan.com/careers">View current openings</TextLink>
              <TextLink href={linkedIn} tone="faint">
                Follow on LinkedIn
              </TextLink>
            </div>
          </Matrix>
        </div>
      </section>

      <Rail code="DK" label="Careers" />
    </div>
  );
}
