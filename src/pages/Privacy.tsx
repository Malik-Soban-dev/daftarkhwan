import { DataList, Display, Matrix, Mono, P, PageHero, Rule, Section } from "../components/primitives";
import { Rail } from "../components/Chrome";
import { contactDetails } from "../lib/data";

/* Daftarkhwan's privacy policy, as published on daftarkhwan.com/privacy-policy. */
type Block = string | string[];

const SECTIONS: { id: string; title: string; blocks: Block[] }[] = [
  {
    id: "collect",
    title: "Information we collect",
    blocks: ["The information we collect is primarily divided into two categories."],
  },
  {
    id: "browsers",
    title: "1. Information from website browsers",
    blocks: [
      "If you are just browsing the website, we will just collect general information which most websites collect. We use common internet technologies, such as cookies and web server logs. We collect this information from all website browsers, whether they subscribe to our services or not.",
      "The information we collect from all our website browsers includes the visitor’s browser type, language preference, referring site, and the date and time of each visitor’s request. We also collect potentially-identifying information like Internet Protocol (IP) addresses.",
      "We collect this information to better understand how our website browsers use Daftarkhwan, and to monitor and protect the security of websites.",
    ],
  },
  {
    id: "subscribers",
    title: "2. Information from subscribers",
    blocks: [
      "If you subscribe to our newsletters and other services, we shall require some basic information at the time of subscription. You will be required to share your email address. We collect this information to be able to email you our newsletters on a monthly basis.",
      "If you book a tour of one or more of our locations via our website, you shall be required to provide your full name, email address, contact number, organization name, and the industry you are associated with. We collect this information to learn about your background and gauge your needs in order to provide you with services of the highest quality.",
    ],
  },
  {
    id: "use",
    title: "How we use the information we collect",
    blocks: [
      "We use the information we collect for the following purposes:",
      [
        "To provide and maintain services",
        "To address and respond to service, security, and customer support issues",
        "To detect, prevent or otherwise address fraud, security, unlawful, or technical issues",
        "As required by the law",
        "To fulfil our contracts",
        "To improve and enhance our services",
        "To provide analysis or valuable information back to our users",
      ],
      "Some of the ways in which your information is used are listed hereunder:",
      [
        "Enable you to subscribe to our services",
        "Send you a confirmation and share relevant details after you subscribe to our services or book a tour via our website",
        "Facilitate and improve the usage of the services you have ordered",
        "Assess the needs of your business to determine the suitable location and relevant services",
        "Send you updates, marketing communication and service information",
        "Respond to customer inquiries and support requests",
        "Conduct research and analysis",
        "Analyze data, including through automated systems and machine learning, to improve our services and/or your experience",
      ],
    ],
  },
  {
    id: "sharing",
    title: "Sharing of information",
    blocks: [
      "Ensuring your privacy is vital to us. We do not share your personal information with third parties except as described in this Privacy Policy. We may share your personal information with the following:",
      ["Third party service providers", "Business partners", "Affiliated companies within our corporate structure", "As required for legal purposes"],
      "Examples of how we may share information with service providers include:",
      [
        "Fulfilling orders and providing services",
        "Payment processing and fraud prevention",
        "Providing customer support",
        "Sending marketing communications",
        "Conducting research and analysis",
      ],
      "Third party service providers have access to personal information only as needed to perform their functions and they must process the personal information in accordance with this Privacy Policy.",
      "Examples of how we may disclose data for legal reasons include:",
      [
        "As part of a merger, sale of company assets, financing or acquisitions of all or a portion of our business by another company where customer information will be one of the transferred assets",
        "As required by the law, for example, to comply with a valid legal process, when we believe in good faith that disclosure is necessary to protect our rights, or to protect your safety or safety of others",
        "To investigate fraud",
        "To respond to a government request",
      ],
      "We may also disclose your information to any third party with your prior consent.",
    ],
  },
  {
    id: "protect",
    title: "How we protect your information",
    blocks: [
      "We take measures to help protect your information from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction. We have also enforced technical and administrative access controls to limit which of our employees have access to non-public personal information.",
      "We store the information we collect for as long as it is necessary for the purpose(s) for which we originally collected it. We may retain certain information for legitimate business purposes or as required by the law.",
    ],
  },
  {
    id: "changes",
    title: "Changes in the privacy policy",
    blocks: [
      "We may update this Privacy Policy from time to time to reflect changes in our information practices. If we make material changes, we will provide notice on this website, and we may notify you by email (sent to the email address provided by you), prior to the changes becoming effective. We encourage you to periodically review this page for the latest information on our privacy practices. If you continue to use the services after those changes are in effect, you agree to the revised policy.",
    ],
  },
];

export default function Privacy() {
  const jump = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="relative">
      <PageHero
        photo="enterpriseFloor"
        kicker="Legal · Daftarkhwan"
        title="Privacy"
        accent="policy."
        intro="How and why we collect, use and share your information when you browse our website, subscribe to our services or interact with us."
        compact
      />

      <Section className="py-[clamp(4rem,10vh,8rem)]">
        <Matrix
          aside={
            <div className="space-y-8 lg:sticky lg:top-28">
              <Mono className="text-accent">Contents</Mono>
              <ol className="space-y-3">
                {SECTIONS.map((section) => (
                  <li key={section.id}>
                    <button
                      type="button"
                      onClick={() => jump(section.id)}
                      className="mono-sm cursor-pointer text-left text-ink/[0.78] transition-colors duration-500 hover:text-accent"
                    >
                      {section.title}
                    </button>
                  </li>
                ))}
              </ol>
              <DataList
                items={[
                  { k: "Phone", v: <a href={`tel:${contactDetails.tel}`}>(042) 111 323 827</a> },
                  { k: "Email", v: <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a> },
                ]}
              />
            </div>
          }
        >
          <P lead className="max-w-[60ch]">
            At Daftarkhwan, we greatly value the privacy of our users. The purpose of this Privacy Policy is to help you
            understand how and why we collect, use and share your information when you browse our website, subscribe to our
            services, otherwise interact with us or receive any communication from our end. We collect minimal data and
            protect it to the best of our abilities. Any information we collect is used primarily to provide services, i.e.
            helping people find a high-performance and vibrant coworking space which is well suited to adapt to the evolving
            needs of the modern day.
          </P>
          <P className="mt-6 max-w-[60ch]">
            If you have any further questions or concerns regarding our privacy practices, please feel free to reach out and
            the Daftarkhwan team shall be happy to assist.
          </P>

          <div className="mt-14">
            {SECTIONS.map((section) => (
              <section key={section.id} id={section.id} className="hair-t py-10">
                <Display size="sm" as="h2">
                  {section.title}
                </Display>
                <div className="mt-6 max-w-[62ch] space-y-5">
                  {section.blocks.map((block, i) =>
                    typeof block === "string" ? (
                      <P key={i}>{block}</P>
                    ) : (
                      <ul key={i} className="space-y-2.5">
                        {block.map((entry) => (
                          <li key={entry} className="copy flex gap-4">
                            <span aria-hidden="true" className="mono pt-1.5 text-accent">
                              +
                            </span>
                            <span>{entry}</span>
                          </li>
                        ))}
                      </ul>
                    ),
                  )}
                </div>
              </section>
            ))}
            <Rule />
          </div>

          <div className="pt-10">
            <Mono className="text-accent">Contact us</Mono>
            <P className="mt-4 max-w-[60ch]">
              For any queries or concerns regarding this Privacy Policy, please contact us at (042) 111 323 827 or{" "}
              <a href={`mailto:${contactDetails.email}`} className="underline-fade text-ink">
                {contactDetails.email}
              </a>
              .
            </P>
          </div>
        </Matrix>
      </Section>

      <Rail code="DK" label="Privacy" />
    </div>
  );
}
