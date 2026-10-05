import {
  Display,
  LogoCarousel,
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
import { img, logoUrl } from "../lib/media";
import { logoMarks, partnerWordmarks } from "../lib/data";

const partnerMarks = logoMarks.filter((mark) => mark.group === "Partners");

export default function Partnerships() {
  return (
    <div className="relative">
      <PageHero
        photo="boulevardEvent"
        kicker="Partnerships · Collaboration · Community"
        title="Partner"
        accent="with us."
        intro="Partner with Pakistan’s biggest coworking space and gain access to a supercommunity of 5,000+ members."
      />
      <section className="relative">

        <div className="px-gutter">
          <Rule />
          <Matrix
            className="py-12"
            aside={
              <div className="space-y-8">
                <Mono className="text-accent">Daftarkhwan partnerships</Mono>
                <P className="text-[0.8125rem]">
                  Exclusive venue partner for CXO meetups, ICT awards and mentoring sessions.
                </P>
                <TextLink href="mailto:partnerships@daftarkhwan.com">Partnership enquiries</TextLink>
              </div>
            }
          >
            <Reveal delay={100}>
              <h2 className="display text-[clamp(1.85rem,4.4vw,4.2rem)]">
                Join a network built on the power of collaboration.
              </h2>
            </Reveal>
            <Reveal delay={160} className="mt-12 max-w-[56ch]">
              <P lead>
                Partner with Pakistan&rsquo;s biggest coworking space to grow your business and gain access
                to our supercommunity of 5,000+ members.
              </P>
              <div className="mt-8 max-w-[50ch]">
                <P>
                  Daftarkhwan believes in joining forces to generate value and create a bigger impact. From
                  community events to partnerships that connect people and businesses, we welcome ideas
                  that grow together.
                </P>
              </div>
              <div className="mt-10 flex flex-wrap gap-10">
                <TextLink href="https://forms.gle/33sRJdaYJyL64r6N9">Partner now</TextLink>
                <TextLink href="mailto:partnerships@daftarkhwan.com" tone="faint">
                  Email our team
                </TextLink>
              </div>
            </Reveal>
          </Matrix>
        </div>
      </section>

      <Section className="pb-[clamp(4rem,10vh,8rem)]">
        <div className="grid grid-cols-1 gap-x-10 gap-y-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Mono className="mb-6 block text-accent">A place to bring people together</Mono>
              <Display size="md" as="h2">
                Meet, mentor, celebrate and grow.
              </Display>
            </Reveal>
            <Reveal delay={100} className="mt-8 max-w-[48ch]">
              <P>
                Our locations host professional gatherings, community programmes, industry awards and
                mentoring sessions. Tell us what you have in mind and our team will help find the right
                space and format.
              </P>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Plate
              src={img.largeEvent}
              ratio="aspect-[16/10]"
              caption="Daftarkhwan meeting and event space"
              meta="Partnerships"
            />
          </div>
        </div>
      </Section>

      <Section className="pb-[clamp(3rem,8vw,6rem)]">
        <Rule />
        <div className="flex items-baseline justify-between py-6">
          <Mono tone="faint">The partnership network</Mono>
          <Mono tone="faint">Selected collaborators · daftarkhwan.com/partnerships</Mono>
        </div>
        <LogoCarousel
          label="Partner network"
          marks={partnerMarks.map((mark) => ({ ...mark, url: logoUrl(mark.key) }))}
          names={partnerWordmarks}
          interval={3800}
        />
        <div className="mt-10 flex flex-wrap items-baseline justify-between gap-6">
          <Mono tone="faint">
            {partnerMarks.length + partnerWordmarks.length} organisations shown
          </Mono>
          <Mono tone="faint">Marks published by Daftarkhwan</Mono>
        </div>
        <Rule />
      </Section>

      <Section className="pb-[clamp(3rem,8vw,6rem)]">
        <Matrix className="py-[clamp(2rem,5vw,4rem)]" aside={<Mono className="text-accent">Got a proposition?</Mono>}>
          <div className="flex flex-wrap items-end justify-between gap-8">
            <Display size="md" as="h2">Let&rsquo;s make a bigger impact.</Display>
            <TextLink href="https://forms.gle/33sRJdaYJyL64r6N9">Partner now</TextLink>
          </div>
        </Matrix>
      </Section>

      <Rail code="DK" label="Partnerships" />
    </div>
  );
}