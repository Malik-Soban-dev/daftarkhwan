import { LinkRow, Mono, PageHero, Rule, Section } from "../components/primitives";

const DESTINATIONS = [
  { index: "01", title: "Locations", note: "Eleven addresses across Lahore, Islamabad and Rawalpindi.", to: "/locations" },
  { index: "02", title: "Services", note: "Coworking, private offices, enterprise solutions, meetings, events and studio.", to: "/services" },
  { index: "03", title: "Contact", note: "Book a tour or speak to our team.", to: "/contact" },
];

export default function NotFound() {
  return (
    <div className="relative">
      <PageHero
        photo="coworkingWide"
        kicker="Error 404"
        title="Page"
        accent="not found."
        intro="The page you’re looking for doesn’t exist or has moved. Here are a few places to start."
        compact
      />
      <Section className="py-[clamp(4rem,10vh,8rem)]">
        <Mono className="mb-6 block">Where to next</Mono>
        {DESTINATIONS.map((item) => (
          <LinkRow key={item.to} index={item.index} title={item.title} note={item.note} to={item.to} />
        ))}
        <Rule />
      </Section>
    </div>
  );
}
