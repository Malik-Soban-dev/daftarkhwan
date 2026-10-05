import type { Frame, ImgKey, LogoKey } from "./media";

/* Content sourced from daftarkhwan.com (locations, services, about, careers,
   landlords, FAQs and blog). Prices are the published starting rates. */

export type City = "Lahore" | "Islamabad" | "Rawalpindi";
export type CitySlug = "lahore" | "islamabad" | "rawalpindi";
export type Photo = { key: ImgKey; alt: string };
export type QA = { q: string; a: string };

export type Space = {
  code: string;
  slug: string;
  name: string;
  city: City;
  citySlug: CitySlug;
  district: string;
  address: string;
  status: "Open" | "New" | "Coming soon";
  headline: string;
  note: string;
  intro: string;
  detail: string;
  highlights: string[];
  extras?: { title: string; body: string }[];
  hours?: string;
  accessible?: boolean;
  studio?: boolean;
  image: ImgKey;
  imageAlt: string;
  imageRatio: Frame;
  heroImage: ImgKey;
  gallery: Photo[];
  coworking: string;
  privateOffice: string;
  meeting: string;
  url: string;
};

export const spaces: Space[] = [
  {
    code: "01",
    slug: "boulevard",
    name: "Boulevard",
    city: "Lahore",
    citySlug: "lahore",
    district: "Main Boulevard, Gulberg II",
    address: "Main Boulevard, Gulberg II, Lahore",
    status: "Open",
    headline: "Your business, on the main street.",
    note: "A multi-access business address in the heart of Gulberg, with dedicated enterprise floors, team compounds, executive boardrooms, a business lounge, podcast studio and in-house cafe.",
    intro:
      "Located in the heart of Gulberg, Daftarkhwan | Boulevard places you at the center of Lahore’s key business district. As a multi-access site on Main Boulevard, it links you to major roads and bridges for easier commutes across the city. The site features expansive floor layouts with high ceilings and a rooftop with clear views of Lahore’s soaring skyline.",
    detail:
      "Designed with enterprises in mind, this site features spacious, dedicated floors and team compounds for large-scale businesses and growing teams, including fully equipped conference rooms and executive boardrooms. Members also benefit from premium amenities, such as a business lounge, podcast studio, our in-house cafe and multiple event spaces.",
    highlights: ["Dedicated enterprise floors", "Team compounds", "Executive boardrooms", "Founders Lounge", "Daftarkhwan Studio", "LEED Gold certified"],
    extras: [
      {
        title: "LEED Gold certified",
        body: "Certified by the U.S. Green Building Council, with solar energy, EV charging, sensor-controlled lighting and advanced air-quality systems: 75% waste diversion, 46% water savings and 35% lower carbon emissions than a conventional baseline.",
      },
      {
        title: "The Founders Lounge",
        body: "A premium business lounge for exclusive networking and one of Gulberg’s premier venues for professional gatherings and events.",
      },
    ],
    hours: "Mon–Fri 9 AM–9 PM · Sat 10 AM–6 PM",
    accessible: true,
    studio: true,
    image: "boulevardFacade",
    imageAlt: "Facade of Daftarkhwan Boulevard on Main Boulevard, Lahore",
    imageRatio: "aspect-[4/5]",
    heroImage: "boulevardLeed",
    gallery: [
      { key: "boulevardLounge", alt: "The Founders Lounge at Daftarkhwan Boulevard" },
      { key: "teamExperience", alt: "An open hall at Daftarkhwan Boulevard" },
      { key: "boulevardEvent", alt: "A Paklaunch event at Daftarkhwan Boulevard" },
    ],
    coworking: "Rs. 45,000",
    privateOffice: "Rs. 55,000",
    meeting: "Rs. 6,500 / hour",
    url: "https://www.daftarkhwan.com/locations/lahore/boulevard",
  },
  {
    code: "02",
    slug: "vogue",
    name: "Vogue",
    city: "Lahore",
    citySlug: "lahore",
    district: "MM Alam Road, Gulberg III",
    address: "Vogue Towers, MM Alam Road, Block C2, Gulberg III, Lahore",
    status: "Open",
    headline: "Where your workspace meets your style.",
    note: "A nine-floor flagship and home to NICL, with open-plan offices, meeting and event spaces, multiple lounges, an in-house cafe and a kids playroom.",
    intro:
      "Situated on the prominent MM Alam Road in Gulberg, Daftarkhwan | Vogue stands as a tower of ambition with nine expansive floors and four levels of basement parking. Built on the foundation of startup culture and community, it is home to NICL, connecting your business to a dynamic ecosystem of entrepreneurs. The site reimagines the contemporary workspace with dynamic open-plan offices and a balcony offering brilliant city views.",
    detail:
      "Our flagship site offers everything from coworking and private offices to team compounds, as well as meeting and event spaces. Shared, high-end amenities include multiple lounges, our in-house cafe, an on-site kids playroom and more. The fully furnished, plug-and-play setup is powered by creative energy and a culture of collaboration, allowing us to put work back in Vogue.",
    highlights: ["Flagship site", "Nine floors", "Home to NICL", "Basement parking", "Kids playroom", "City-view balcony"],
    extras: [
      {
        title: "A startup ecosystem",
        body: "Home to the National Incubation Center Lahore (NICL), alongside companies such as Daraz, Tintash, Starzplay and Ginkgo Retail.",
      },
      {
        title: "Room for working parents",
        body: "An on-site kids playroom gives parents extra peace of mind amid a busy work routine.",
      },
    ],
    image: "privateOffice",
    imageAlt: "A private office at Daftarkhwan Vogue",
    imageRatio: "aspect-[4/5]",
    heroImage: "vogueStairs",
    gallery: [
      { key: "vogueHuddle", alt: "Glass huddle rooms at Daftarkhwan Vogue" },
      { key: "vogueLounge", alt: "A lounge at Daftarkhwan Vogue" },
      { key: "voguePlayroom", alt: "The kids playroom at Daftarkhwan Vogue" },
    ],
    coworking: "Rs. 32,500",
    privateOffice: "Rs. 40,000",
    meeting: "Rs. 2,000 / hour",
    url: "https://www.daftarkhwan.com/locations/lahore/vogue",
  },
  {
    code: "03",
    slug: "downtown",
    name: "Downtown",
    city: "Lahore",
    citySlug: "lahore",
    district: "Dr. Mateen Fatima Road, Gulberg",
    address: "Dr. Mateen Fatima Road, off Main Boulevard, Gulberg, Lahore",
    status: "Open",
    headline: "For every business, from lean startups to enterprises.",
    note: "An accessible Gulberg address with private offices, team compounds, phone booths, a rooftop garden, an on-site cafe and a kids playroom.",
    intro:
      "Situated off Main Boulevard, Gulberg, Daftarkhwan | Downtown connects your business to Lahore’s key commercial district, with convenient access to popular eateries, banks and transportation. With accessibility built into its design, the site ensures ease of movement for individuals of all abilities. Brimming with energy and offering panoramic views, the rooftop lets you take scenic breaks from work.",
    detail:
      "Daftarkhwan | Downtown is designed for every business, from lean startups to enterprises. The space includes private offices, team compounds and multiple phone booths that support focus and flexibility. It brings together modern infrastructure, fully managed services and shared amenities such as a spacious lounge, a rooftop garden, an on-site cafe and a kids playroom.",
    highlights: ["Accessible site", "Rooftop garden", "Phone booths", "Team compounds", "The Yellow Bar", "Kids playroom"],
    extras: [
      {
        title: "Accessible by design",
        body: "Built so people of all abilities can move through the space with ease, bringing together professionals from diverse backgrounds.",
      },
      {
        title: "In good company",
        body: "Downtown is trusted by teams from Reckitt, Careem, Ismail Industries and Inditex, among many others.",
      },
    ],
    accessible: true,
    image: "downtownHall",
    imageAlt: "A coworking hall at Daftarkhwan Downtown",
    imageRatio: "aspect-[16/10]",
    heroImage: "enterpriseFloor",
    gallery: [
      { key: "downtownLounge", alt: "The lounge at Daftarkhwan Downtown" },
      { key: "teamRoom", alt: "A team room at Daftarkhwan Downtown" },
      { key: "downtownLaunch", alt: "The launch party at Daftarkhwan Downtown" },
    ],
    coworking: "Rs. 35,000",
    privateOffice: "Rs. 42,500",
    meeting: "Rs. 2,000 / hour",
    url: "https://www.daftarkhwan.com/locations/lahore/downtown",
  },
  {
    code: "04",
    slug: "one",
    name: "One",
    city: "Lahore",
    citySlug: "lahore",
    district: "Phase 5, DHA",
    address: "Phase 5, DHA, Lahore",
    status: "Open",
    headline: "Built for impact in DHA.",
    note: "A well-connected DHA address near LUMS, with valet parking, an on-site cafe, a kids playroom, open lounges and a rooftop.",
    intro:
      "Built for impact, Daftarkhwan | One is located in DHA Phase 5. Situated near LUMS and close to top restaurants and key healthcare facilities, it offers companies a well-connected business address. With convenient access to Lahore Ring Road and Allama Iqbal International Airport, the site ensures smooth connectivity for teams and clients alike.",
    detail:
      "At Daftarkhwan | One, convenience starts the moment you arrive, with hassle-free parking and valet service that take the stress out of your workday. High-end services and amenities include an on-site cafe and kids playroom. Built around a close-knit community culture, Daftarkhwan | One also offers open lounges and a rooftop to unwind or host events.",
    highlights: ["Near LUMS", "Valet parking", "On-site cafe", "Kids playroom", "Open lounges", "Rooftop events"],
    image: "executiveOffice",
    imageAlt: "A private office at Daftarkhwan One",
    imageRatio: "aspect-[4/5]",
    heroImage: "executiveOffice",
    gallery: [],
    coworking: "Rs. 30,000",
    privateOffice: "Rs. 40,000",
    meeting: "Rs. 2,500 / hour",
    url: "https://www.daftarkhwan.com/locations/lahore/one",
  },
  {
    code: "05",
    slug: "fairways",
    name: "Fairways",
    city: "Lahore",
    citySlug: "lahore",
    district: "Raya Fairways Commercial, DHA Phase 6",
    address: "Raya Fairways Commercial, DHA Phase 6, Lahore",
    status: "Open",
    headline: "Focused, dynamic and surrounded by green views.",
    note: "A focused workspace opposite Raya Golf Course, with ready-to-move-in offices, executive meeting rooms, valet service and a lounge that doubles as an event space.",
    intro:
      "Surrounded by green views and urban convenience, Daftarkhwan | Fairways offers a workspace that’s both focused and dynamic. Opposite the Raya Golf Course and surrounded by some of the best restaurants in DHA Phase 6, the space supports flexibility, productivity and everything your business needs from an office, close to Lahore Ring Road and Allama Iqbal International Airport.",
    detail:
      "With valet service that takes care of parking, you can enter the workspace with peace of mind. Fully managed and equipped with modern amenities, Daftarkhwan | Fairways offers ready-to-move-in private offices where your team can work with a view, along with executive meeting rooms and a spacious lounge that doubles as an indoor event space.",
    highlights: ["Opposite Raya Golf Course", "Valet service", "Executive meeting rooms", "Creative lounge", "Indoor event space"],
    image: "fairwaysLounge",
    imageAlt: "The Creative Lounge at Daftarkhwan Fairways",
    imageRatio: "aspect-[16/10]",
    heroImage: "fairwaysLounge",
    gallery: [],
    coworking: "Rs. 27,500",
    privateOffice: "Rs. 35,000",
    meeting: "Rs. 2,500 / hour",
    url: "https://www.daftarkhwan.com/locations/lahore/fairways",
  },
  {
    code: "06",
    slug: "lake-city",
    name: "Lake City",
    city: "Lahore",
    citySlug: "lahore",
    district: "C-25 & 26, Main Boulevard, Lake City",
    address: "C-25 & 26, Main Boulevard, Lake City, Lahore",
    status: "New",
    headline: "A sanctuary for disruption.",
    note: "Our newest Lahore address, in a master-planned district, with coworking halls, private offices, meeting and huddle rooms, a Founders Lounge and The Yellow Bar.",
    intro:
      "Strategically positioned at the intersection of connectivity and opportunity, Daftarkhwan | Lake City sits within a master-planned residential and commercial development. With direct access to Raiwind Road and the Ring Road, you’re seamlessly connected to the Motorway, Bahria Town, Johar Town, DHA and central Lahore.",
    detail:
      "Just six minutes from Lake City Downtown and Pine Avenue, our newest location brings you close to an evolving ecosystem designed for both work and life. Surrounded by new technology headquarters, with Beaconhouse National University, the University of Lahore and the University of Central Punjab nearby, the workspace connects you to top talent and the wider academic community.",
    highlights: ["Founders Lounge", "The Yellow Bar", "Coworking halls", "Private offices", "Meeting & huddle rooms", "Ring Road access"],
    extras: [
      {
        title: "Exclusive corporate experience",
        body: "Sleek glass fronts, uninterrupted views and natural light create a refined ambience, with Lake City’s Golf & Country Club, mall and Grand Jamia Masjid close by.",
      },
      {
        title: "Built for teams of all sizes",
        body: "From coworking halls to private offices and meeting rooms, the site gives you the freedom to scale, with an on-site cafe to keep you recharged.",
      },
      {
        title: "Events & networking",
        body: "An exclusive Founders Lounge offers a one-of-a-kind setting for meetings, workshops, celebrations and networking events.",
      },
    ],
    image: "lakeCityHall",
    imageAlt: "A coworking hall with views of greenery at Daftarkhwan Lake City",
    imageRatio: "aspect-[16/10]",
    heroImage: "lakeCityFacade",
    gallery: [],
    coworking: "Rs. 30,000",
    privateOffice: "Rs. 35,000",
    meeting: "Rs. 5,000 / hour",
    url: "https://www.daftarkhwan.com/locations/lahore/lake-city",
  },
  {
    code: "07",
    slug: "north",
    name: "North",
    city: "Islamabad",
    citySlug: "islamabad",
    district: "Sector I-10/3",
    address: "Sector I-10/3, Islamabad",
    status: "Open",
    headline: "Flexibility, access and focus under one roof.",
    note: "A practical twin-cities location for growing teams, with coworking halls, huddle and conference rooms, an on-site cafe and a private garden.",
    intro:
      "Daftarkhwan | North is located in Islamabad’s I-10 industrial zone, offering easy access from both Islamabad and Rawalpindi and close proximity to the Blue Area. As an agile workspace designed for growing teams, SMEs and modern professionals, it brings flexibility, access and focus together under one roof.",
    detail:
      "Thriving on a culture of collaboration, Daftarkhwan | North features coworking halls, huddle rooms and conference spaces designed to help teams work together with ease. The site also includes an on-site cafe and a private garden, the perfect setting to take a break and connect with professionals across different companies.",
    highlights: ["Coworking halls", "Huddle rooms", "Conference spaces", "On-site cafe", "Private garden", "Dedicated carpark"],
    image: "islamabad",
    imageAlt: "Daftarkhwan in Islamabad",
    imageRatio: "aspect-[16/10]",
    heroImage: "islamabad",
    gallery: [],
    coworking: "Rs. 25,000",
    privateOffice: "Rs. 30,000",
    meeting: "Rs. 2,500 / hour",
    url: "https://www.daftarkhwan.com/locations/islamabad/north",
  },
  {
    code: "08",
    slug: "vanguard",
    name: "Vanguard",
    city: "Islamabad",
    citySlug: "islamabad",
    district: "F-5, Constitution Avenue",
    address: "F-5, Constitution Avenue, Islamabad",
    status: "Open",
    headline: "A prestigious address at the heart of the capital.",
    note: "An enterprise address on Constitution Avenue, with private office floors, executive boardrooms, expansive event spaces and parking for 500+ vehicles.",
    intro:
      "Just a five-minute drive from the Blue Area, Daftarkhwan | Vanguard is built for enterprises seeking a prestigious work destination. Located on Constitution Avenue, home to the Presidential Palace, Parliament House and Supreme Court, it places you at the center of national decision-making.",
    detail:
      "Set against the scenic Margalla Hills, the site lets you work with a view in a state-of-the-art workspace built for scale and influence. With exclusive floors for private offices, expansive event spaces and executive boardrooms, Daftarkhwan | Vanguard connects you with an ambitious supercommunity. A dedicated carpark accommodates over 500 vehicles, with valet service for added convenience.",
    highlights: ["Margalla Hills views", "Private office floors", "Executive boardrooms", "Event spaces", "Kids playroom", "500+ vehicle carpark"],
    extras: [
      {
        title: "Terraces over the Margalla Hills",
        body: "A 28,000 sq. ft. facility across four floors, with executive private offices and meeting rooms opening onto terraces with views of the Margalla Hills.",
      },
      {
        title: "Inclusive by design",
        body: "A women-friendly environment with a dedicated kids playroom, The Yellow Bar on the ground floor and professional valet service.",
      },
    ],
    hours: "Open 24/6 · Closed Sunday",
    accessible: true,
    image: "vanguardLobby",
    imageAlt: "The reception lobby at Daftarkhwan Vanguard",
    imageRatio: "aspect-[16/10]",
    heroImage: "vanguardBalcony",
    gallery: [{ key: "vanguardFacade", alt: "The front facade of Daftarkhwan Vanguard" }],
    coworking: "Rs. 60,000",
    privateOffice: "Rs. 72,500",
    meeting: "Rs. 6,500 / hour",
    url: "https://www.daftarkhwan.com/locations/islamabad/vanguard",
  },
  {
    code: "09",
    slug: "skyline",
    name: "Skyline",
    city: "Islamabad",
    citySlug: "islamabad",
    district: "AJ Towers, Gulberg Greens, Block A",
    address: "AJ Towers, Gulberg Greens, Block A, Islamabad",
    status: "Open",
    headline: "A modern work destination built on ambition.",
    note: "A high-rise address at the crossroads of Islamabad and Rawalpindi, with coworking, private offices, enterprise solutions, a gym, and meeting and event spaces.",
    intro:
      "Situated in Gulberg Greens, Daftarkhwan | Skyline stands at the crossroads of Islamabad and Rawalpindi: 10 minutes from Bahria Town, 15 minutes from Zero Point and 20 minutes from Saddar and DHA-2. With direct access to the Expressway and other major routes, it ensures an easy commute while unlocking access to residential neighbourhoods and lifestyle destinations.",
    detail:
      "Enter a dramatically sculpted building that embodies a bold architectural vision. Inside, curved glass walls and fluted panels create geometric harmony, accentuated by a minimal aesthetic, natural light and vibrant green hues. The building also features an expansive carpark, 24/7 CCTV monitoring, controlled access and security staff, and a fully equipped gym.",
    highlights: ["Fully equipped gym", "24/7 CCTV & controlled access", "Expansive carpark", "Expressway access", "Enterprise solutions"],
    extras: [
      {
        title: "A complete suite of solutions",
        body: "Coworking for flexible collaboration, private offices for teams that need their own space, enterprise solutions with customized infrastructure, and versatile meeting and event spaces.",
      },
      {
        title: "Work with a view",
        body: "This high-rise corporate landmark towers over Gulberg Greens, blending nature with urban vitality for a view that elevates the working day.",
      },
    ],
    image: "islamabad",
    imageAlt: "Daftarkhwan in Islamabad",
    imageRatio: "aspect-[16/10]",
    heroImage: "islamabad",
    gallery: [],
    coworking: "Rs. 35,000",
    privateOffice: "Rs. 40,000",
    meeting: "Rs. 3,000 / hour",
    url: "https://www.daftarkhwan.com/locations/islamabad/skyline",
  },
  {
    code: "10",
    slug: "alpha",
    name: "Alpha",
    city: "Rawalpindi",
    citySlug: "rawalpindi",
    district: "Old Airport Road, Chaklala Cantt",
    address: "NASTP, Old Airport Road, Chaklala Cantt, Rawalpindi",
    status: "Open",
    headline: "A place where ideas take flight.",
    note: "Pakistan’s first coworking space at NASTP, with secure workspaces, conference rooms, access to research and development facilities, and Daftarkhwan Studio.",
    intro:
      "Situated in Chaklala Cantt, Rawalpindi, Daftarkhwan | Alpha is Pakistan’s first coworking space at NASTP. It is a flexible workplace within a Special Technology Zone, designed for tech-focused entrepreneurs driving innovation in aviation, IT, robotics and more. Positioned inside PAF Base Nur Khan, this is a place where ideas take flight.",
    detail:
      "With military-grade security, Daftarkhwan | Alpha offers state-of-the-art offices, coworking halls and fully equipped conference rooms for businesses of all sizes. As part of a tech park, the site gives scaling startups access to incubators, simulators, labs and R&D facilities, along with an on-site podcast studio for creatives.",
    highlights: ["Inside NASTP", "Special Technology Zone", "Military-grade security", "Labs & R&D facilities", "Daftarkhwan Studio", "The Yellow Bar"],
    extras: [
      {
        title: "Inside a Special Technology Zone",
        body: "Direct access to incubators, R&D labs and simulators within NASTP, alongside military-grade security.",
      },
      {
        title: "Room to recharge",
        body: "The Yellow Bar keeps members fuelled through long sessions, and a gaming room offers a creative and recreational break.",
      },
    ],
    studio: true,
    image: "coworkingHall",
    imageAlt: "The coworking hall at Daftarkhwan Alpha",
    imageRatio: "aspect-[4/5]",
    heroImage: "alphaHall",
    gallery: [
      { key: "alphaCafe", alt: "The Yellow Bar at Daftarkhwan Alpha" },
      { key: "studioBackdrop", alt: "A studio backdrop at Daftarkhwan Alpha" },
      { key: "alphaCoworking", alt: "A coworking hall at Daftarkhwan Alpha" },
    ],
    coworking: "Rs. 32,000",
    privateOffice: "Rs. 36,000",
    meeting: "Rs. 2,500 / hour",
    url: "https://www.daftarkhwan.com/locations/rawalpindi/alpha",
  },
  {
    code: "11",
    slug: "vantage",
    name: "Vantage",
    city: "Rawalpindi",
    citySlug: "rawalpindi",
    district: "Sector F, DHA Phase 1",
    address: "Sector F, DHA Phase 1, Islamabad–Rawalpindi",
    status: "Open",
    headline: "An all-in-one building between the Twin Cities.",
    note: "A dedicated four-floor building between the Twin Cities, with open coworking halls, team compounds, a boardroom, a rooftop cafe and a gaming room.",
    intro:
      "Located in Sector F, DHA Phase 1, Islamabad–Rawalpindi, Daftarkhwan | Vantage puts you close to popular restaurants, parks and commercial centers. Ideally situated between the Twin Cities, the site offers ease of access whether you’re coming in from Islamabad or Rawalpindi, with sleek, high-ceilinged workspaces designed for modern professionals.",
    detail:
      "Daftarkhwan | Vantage is an all-in-one, dedicated building with four expansive floors of open coworking halls and team compounds. The custom-designed corporate building features a modern lounge, a boardroom and a rooftop cafe with panoramic city views, plus a dedicated gaming room to unwind during a busy workday.",
    highlights: ["Dedicated four-floor building", "Rooftop cafe", "Boardroom for 18", "Gaming room", "Team compounds", "24/7 power backup"],
    extras: [
      {
        title: "A boardroom for 18",
        body: "A sophisticated boardroom for intensive working sessions and client presentations, with private phone booths and huddle rooms for focused work.",
      },
      {
        title: "Space to unwind",
        body: "A high-end gaming lounge and a rooftop cafe and event space with panoramic views, backed by 24/7 power and high-speed internet.",
      },
    ],
    hours: "Mon–Sat 9 AM–9 PM",
    image: "vantageLounge",
    imageAlt: "The lounge at Daftarkhwan Vantage",
    imageRatio: "aspect-[16/10]",
    heroImage: "vantageBuilding",
    gallery: [],
    coworking: "Rs. 27,500",
    privateOffice: "Rs. 35,000",
    meeting: "Rs. 9,000 / hour",
    url: "https://www.daftarkhwan.com/locations/rawalpindi/vantage",
  },
];

export const cities: City[] = ["Lahore", "Islamabad", "Rawalpindi"];
export const citySlugs: CitySlug[] = ["lahore", "islamabad", "rawalpindi"];

export type CityInfo = {
  name: City;
  slug: CitySlug;
  image: ImgKey;
  tagline: string;
  summary: string;
  intro: string;
  areas: string;
  faqs: QA[];
};

export const cityInfo: Record<CitySlug, CityInfo> = {
  lahore: {
    name: "Lahore",
    slug: "lahore",
    image: "lahore",
    tagline: "Punjab’s premier business hubs.",
    summary: "Elevate your work experience with our spaces located in Punjab’s premier business hubs.",
    intro:
      "Our dynamic coworking spaces across Lahore connect you to key commercial districts in the heart of Gulberg and DHA, with easy access for your commute. Join our community to elevate your work experience in Punjab’s premier business hubs.",
    areas: "Gulberg · DHA · Lake City",
    faqs: [
      {
        q: "How many Daftarkhwan locations are there in Lahore?",
        a: "Daftarkhwan’s Lahore network includes Boulevard, Downtown and Vogue in Gulberg, One and Fairways in DHA, and our newest site on Main Boulevard, Lake City.",
      },
      {
        q: "How much does a flexible seat cost in Lahore?",
        a: "Prices vary by location. In Lahore, coworking starts from Rs. 27,500 per seat per month, exclusive of sales tax. Electricity and power backup surcharge may apply.",
      },
      {
        q: "Which Lahore locations are accessible?",
        a: "Daftarkhwan | Boulevard and Daftarkhwan | Downtown in Gulberg are our accessible sites in Lahore.",
      },
      {
        q: "Is Daftarkhwan Studio available in Lahore?",
        a: "Yes. Daftarkhwan Studio is located at Daftarkhwan | Boulevard in Gulberg, with a dedicated space to record podcasts and shoot videos.",
      },
      {
        q: "Can I host meetings and events in Lahore?",
        a: "Yes. A variety of indoor and outdoor event spaces are available. Call 111-323827, WhatsApp +92 332 6381263 or email sales@daftarkhwan.com to book.",
      },
    ],
  },
  islamabad: {
    name: "Islamabad",
    slug: "islamabad",
    image: "islamabad",
    tagline: "Central locations in the capital.",
    summary: "Join our community to work from central locations in the capital.",
    intro:
      "We are located in prime locations across Islamabad, from the prestigious Constitution Avenue to the high-activity Industrial Zone. Connect with a network of thriving businesses in the capital city by joining our community of leading entrepreneurs.",
    areas: "F-5 · I-10 · Gulberg Greens",
    faqs: [
      {
        q: "Where are Daftarkhwan’s Islamabad locations?",
        a: "Daftarkhwan | Vanguard is on Constitution Avenue in F-5, Daftarkhwan | North is in Sector I-10/3, and Daftarkhwan | Skyline is at AJ Towers, Gulberg Greens.",
      },
      {
        q: "How much does a flexible seat cost in Islamabad?",
        a: "Prices vary by location. In Islamabad, coworking starts from Rs. 25,000 per seat per month, exclusive of sales tax.",
      },
      {
        q: "Are private offices available for large teams?",
        a: "Yes. Private offices in Islamabad accommodate large teams and multinational companies, with executive offices, team rooms and team compounds. End-to-end customization is also available.",
      },
      {
        q: "Is parking available?",
        a: "Daftarkhwan offers parking at its Islamabad sites, and members can also use valet service. Vanguard’s dedicated carpark accommodates over 500 vehicles.",
      },
      {
        q: "Is Daftarkhwan Studio available in Islamabad?",
        a: "Not yet. Daftarkhwan Studio is currently available at Boulevard in Lahore and Alpha in Rawalpindi.",
      },
    ],
  },
  rawalpindi: {
    name: "Rawalpindi",
    slug: "rawalpindi",
    image: "rawalpindi",
    tagline: "The heart of the Twin Cities.",
    summary: "Tap into a growing ecosystem of professionals based in the heart of the Twin Cities.",
    intro:
      "Experience ease of access across the Twin Cities with our centrally located sites in Rawalpindi, from the tech-driven NASTP to vibrant DHA Phase I, Islamabad–Rawalpindi. Upgrade your work experience and join our community of ambitious entrepreneurs.",
    areas: "NASTP · DHA Phase 1",
    faqs: [
      {
        q: "Where are Daftarkhwan’s Rawalpindi locations?",
        a: "Daftarkhwan | Alpha is on Old Airport Road, Chaklala Cantt, inside NASTP, and Daftarkhwan | Vantage is in Sector F, DHA Phase 1, Islamabad–Rawalpindi.",
      },
      {
        q: "Is Daftarkhwan | Alpha located in NASTP?",
        a: "Yes. Daftarkhwan | Alpha is the first coworking space to open in NASTP. As part of a specialized technology park, members and startups gain access to incubators, simulators, advanced labs and R&D facilities.",
      },
      {
        q: "How much does a flexible seat cost in Rawalpindi?",
        a: "Prices vary by location. Coworking starts from Rs. 27,500 per seat per month at Vantage and Rs. 32,000 at Alpha, exclusive of sales tax.",
      },
      {
        q: "What are Vantage’s opening hours?",
        a: "Daftarkhwan | Vantage is open from 9 AM to 9 PM, Monday to Saturday.",
      },
      {
        q: "Is Daftarkhwan Studio available in Rawalpindi?",
        a: "Yes. Daftarkhwan Studio is available at Daftarkhwan | Alpha.",
      },
    ],
  },
};

export function isCitySlug(value: string): value is CitySlug {
  return (citySlugs as string[]).includes(value);
}

export const spacePath = (space: Pick<Space, "citySlug" | "slug">) => `/locations/${space.citySlug}/${space.slug}`;

export function findSpace(citySlug: string, slug: string) {
  return spaces.find((space) => space.citySlug === citySlug && space.slug === slug);
}

const toNumber = (price: string) => Number(price.replace(/[^\d]/g, ""));

export function startingFrom(list: Space[], key: "coworking" | "privateOffice") {
  const lowest = Math.min(...list.map((space) => toNumber(space[key])));
  return `Rs. ${lowest.toLocaleString("en-US")}`;
}

export const metrics = [
  { value: 11, suffix: "", label: "Locations", meta: "Across three cities" },
  { value: 510000, suffix: "+ sq ft", label: "Workspace", meta: "A nationwide network" },
  { value: 5000, suffix: "+", label: "Members", meta: "The Daftarkhwan supercommunity" },
  { value: 260, suffix: "+", label: "Companies", meta: "Across diverse industries" },
];

/* ────────────────────────────────────────────────────────────
   SUPERCOMMUNITY & PARTNERS
   Marks are the transparent PNG logos published on daftarkhwan.com
   (homepage supercommunity strip + the partnerships page). Brands named in
   Daftarkhwan's own copy without a published logo file are set as wordmarks.
   ──────────────────────────────────────────────────────────── */

export type LogoMark = { key: LogoKey; name: string; group: "Supercommunity" | "Partners" };

export const logoMarks: LogoMark[] = [
  { key: "careem", name: "Careem", group: "Supercommunity" },
  { key: "reckitt", name: "Reckitt", group: "Supercommunity" },
  { key: "starzplay", name: "Starzplay", group: "Supercommunity" },
  { key: "pasha", name: "P@SHA", group: "Partners" },
  { key: "hbl", name: "HBL", group: "Partners" },
  { key: "startupSyndicate", name: "Startup Syndicate", group: "Partners" },
  { key: "googleDeveloperGroup", name: "Google Developer Group", group: "Partners" },
  { key: "tedxLahore", name: "TEDx Lahore", group: "Partners" },
  { key: "lumx", name: "LUMx", group: "Partners" },
  { key: "invest2Innovate", name: "Invest2Innovate", group: "Partners" },
  { key: "roomy", name: "Roomy", group: "Partners" },
  { key: "skyPadel", name: "Sky Padel", group: "Partners" },
  { key: "eo", name: "Entrepreneurs' Organization", group: "Partners" },
  { key: "scienceFuse", name: "Science Fuse", group: "Partners" },
  { key: "creativeMornings", name: "CreativeMornings Islamabad", group: "Partners" },
  { key: "burgerOClock", name: "Burger O'Clock", group: "Partners" },
  { key: "figma", name: "Figma", group: "Partners" },
  { key: "dhaka", name: "Open Silicon Valley", group: "Partners" },
];

/** Companies Daftarkhwan names as members across its own site and year-in-review posts. */
export const memberWordmarks = [
  "Siemens",
  "British Council",
  "Daraz",
  "Unilever",
  "Mashreq Bank",
  "Red Bull",
  "Systems Limited",
  "Haleon",
  "Al Ghurair",
  "Beyond ONE",
  "Teknosys",
  "FMC",
  "Ginkgo Retail",
  "Tintash",
  "Paymob",
  "Engro",
  "Lipton",
  "EY",
  "The Entertainer",
  "Ismail Industries",
  "Inditex",
  "B3 Networks",
  "NICL",
  "Unifonic",
];

/** Partners named on daftarkhwan.com whose marks are not published as image files. */
export const partnerWordmarks = [
  "Global Entrepreneurship Network",
  "ITCN Asia",
  "Davaam Life",
  "NOMS Nachos",
];

export const companyStory = [
  {
    title: "A daftar, reimagined.",
    body: "We began with a vision to reinvent the very notion of daftar: to create a space designed to be more than just an office. Here, sharing a desk means more than sitting side by side; it means building a community. A community with the freedom to feel inspired, empowered, and at home to drive world-changing work.",
  },
  {
    title: "Work, on your terms.",
    body: "We value how you work, not just the work itself. Daftarkhwan is a business address for leaders and enterprises, with the flexibility to grow and scale.",
  },
  {
    title: "Freedom to take the lead.",
    body: "We are committed to growing alongside our supercommunity. Daftarkhwan aspires to be an iconic destination for changemakers: a place where nothing is impossible and where you have the freedom to take the lead.",
  },
];

/* ────────────────────────────────────────────────────────────
   SERVICES & AMENITIES
   ──────────────────────────────────────────────────────────── */

export type Offering = {
  code: string;
  slug: string;
  kind: "service" | "amenity";
  name: string;
  line: string;
  headline: string;
  intro: string;
  detail: string;
  image: ImgKey;
  imageRatio: Frame;
  heroImage: ImgKey;
  href: string;
  price: string;
  priceNote?: string;
  sections: { title: string; body: string; image?: ImgKey; imageAlt?: string }[];
  optionsTitle?: string;
  options?: { title: string; body: string; image: ImgKey }[];
  steps?: { title: string; body: string }[];
  inclusionsTitle?: string;
  inclusions: string[];
  quote?: { text: string; by: string };
  locations?: string[];
  contact?: { label: string; value: string; href: string }[];
};

export type Service = Offering;

const bookingContact = [
  { label: "Phone", value: "111-323827", href: "tel:+9242111323827" },
  { label: "WhatsApp", value: "+92 332 6381263", href: "https://wa.me/923326381263" },
  { label: "Email", value: "sales@daftarkhwan.com", href: "mailto:sales@daftarkhwan.com" },
];

export const services: Offering[] = [
  {
    code: "01",
    slug: "coworking",
    kind: "service",
    name: "Coworking",
    line: "Fully furnished shared workspaces offering a seamless plug-and-play experience.",
    headline: "Find your freedom at work.",
    intro:
      "Our coworking spaces are designed for flexibility, offering a seamless plug-and-play experience. Whether you need a desk for the day or a dedicated seat, we offer a range of membership options, from virtual plans to night-shift packages. Find your freedom at work in a space that suits your unique style.",
    detail:
      "Choose from shared desks, dedicated seating, virtual plans and night-shift packages. Every site pairs flexible access with professional amenities and a community of entrepreneurs, freelancers and creatives.",
    image: "coworkingHall",
    imageRatio: "aspect-[4/5]",
    heroImage: "coworkingWide",
    href: "https://www.daftarkhwan.com/services/coworking",
    price: "From Rs. 25,000 / seat / month",
    priceNote: "Prices vary by location, are per seat and exclusive of sales tax. Electricity and power backup surcharge may apply.",
    sections: [
      {
        title: "Work without the hassle",
        body: "Situated in prime locations, we provide everything you need to stay focused and productive. From valet parking and security to high-speed internet, unlimited coffee, mail handling, kids playrooms and more, all the details are taken care of. Our fully managed spaces come with dedicated administrative and IT support, along with a trained housekeeping team.",
        image: "teamExperience",
        imageAlt: "An open hall at Daftarkhwan Boulevard",
      },
      {
        title: "Choose how you work",
        body: "Our coworking spaces give you the freedom to work the way you like. With modern amenities and access to meeting spaces, huddle rooms, an in-house cafe, business lounges and more, you get a cost-effective setup designed around your work style. Whether you’re deep in focus, meeting clients or pausing for a break, everything is within reach.",
        image: "vogueHuddle",
        imageAlt: "Glass huddle rooms at Daftarkhwan Vogue",
      },
      {
        title: "Networking opportunities",
        body: "Daftarkhwan places you at the heart of the startup ecosystem, where coworking extends beyond your desk with networking events, community meetups and business-focused workshops. Fostering inclusivity and camaraderie, our spaces bring together entrepreneurs, freelancers and creatives, opening up opportunities to connect and collaborate.",
        image: "downtownLaunch",
        imageAlt: "The launch party at Daftarkhwan Downtown",
      },
    ],
    inclusionsTitle: "Included with coworking",
    inclusions: [
      "A desk for the day or a dedicated seat",
      "Virtual plans and night-shift packages",
      "High-speed internet and unlimited coffee",
      "Mail handling, security and valet parking",
      "Admin, IT support and housekeeping",
      "Meeting rooms, huddle rooms and lounges",
    ],
    quote: {
      text: "Despite expanding I’m eager to continue at Daftarkhwan. Time is money and no one provides convenience like them.",
      by: "Talal Wallana, Chief Operating Officer, i-5O",
    },
  },
  {
    code: "02",
    slug: "private-office",
    kind: "service",
    name: "Private Office",
    line: "Ready-to-move-in offices designed to accommodate teams of all sizes.",
    headline: "An ideal environment for focus, flexibility and collaboration.",
    intro:
      "At Daftarkhwan, we offer fully managed, ready-to-move-in workspaces built to accommodate teams of all sizes. Designed to cater to diverse businesses, our spaces adapt seamlessly to your evolving needs while helping you cultivate a positive and productive culture at work.",
    detail:
      "Furnished private offices combine focus and privacy with access to the wider Daftarkhwan community. Flexible plans make it easier to scale without the overhead of running a traditional office.",
    image: "privateOffice",
    imageRatio: "aspect-[4/5]",
    heroImage: "privateOffice",
    href: "https://www.daftarkhwan.com/services/private-office",
    price: "From Rs. 30,000 / seat / month",
    priceNote: "Prices vary by location, are per seat and exclusive of sales tax. Electricity and power backup surcharge may apply.",
    sections: [
      {
        title: "Ready-to-move-in workspaces",
        body: "Step into a fully furnished workspace with a seamless plug-and-play experience. As a fully managed office, your business benefits from reduced overhead costs through professional admin and IT support and a trained housekeeping team, with access to meeting and conference rooms, event spaces, an on-site kids playroom and our in-house cafe.",
      },
      {
        title: "Flexibility to scale",
        body: "Flexible membership plans accommodate growing teams in line with your business’ needs, without the hassle of long-term leases or the logistics of managing an office. With simplified monthly billing and fully serviced amenities, you gain the freedom to focus on growth.",
      },
      {
        title: "Prime business address",
        body: "Our locations bring you close to active commercial districts, industrial zones and state institutions, putting your business on the main street and linking you to key travel routes for smooth connectivity across the city.",
      },
    ],
    optionsTitle: "Our options",
    options: [
      { title: "Executive Office", body: "Exclusive offices for executive leadership, designed for focus and privacy.", image: "executiveOffice" },
      { title: "Team Room", body: "Collaborative spaces tailored for small teams to work the way they like.", image: "teamRoom" },
      { title: "Team Compound", body: "Dedicated office space built to support large teams for uninterrupted collaboration.", image: "teamCompound" },
    ],
    inclusionsTitle: "Every private office includes",
    inclusions: [
      "Fully furnished, plug-and-play setup",
      "Professional admin and IT support",
      "A trained housekeeping team",
      "Meeting, conference and event spaces",
      "Simplified monthly billing",
      "Kids playrooms and in-house cafes at selected sites",
    ],
  },
  {
    code: "03",
    slug: "enterprise-solution",
    kind: "service",
    name: "Enterprise Solution",
    line: "Customizable private offices that help you personalize your office space.",
    headline: "A bespoke workspace that reflects your brand.",
    intro:
      "Our turn-key solution gives you the freedom to tailor every aspect of your workspace, ensuring it complements your brand, supports your day-to-day operations and cultivates a culture of belonging. Equipped with high-end services and modern amenities, Daftarkhwan is committed to providing you a bespoke experience.",
    detail:
      "A turnkey solution that brings together custom floor plans, furniture, interiors, personalized signage and brand elements, with a managed workspace that can scale with your business.",
    image: "enterpriseFloor",
    imageRatio: "aspect-[16/10]",
    heroImage: "enterpriseBanner",
    href: "https://www.daftarkhwan.com/services/eneterprise-solution",
    price: "Tailored to your team",
    sections: [],
    optionsTitle: "Elevate your corporate experience",
    options: [
      {
        title: "Custom Layouts & Branding",
        body: "From custom floor plans and furniture to interior design, we help you curate a bespoke workspace, and bring your brand to life through personalized signage, brand colors and visual elements.",
        image: "customBranding",
      },
      {
        title: "Elevated Experience",
        body: "We curate unique spaces where employees feel inspired, empowered and at home. From vibrant offices and event spaces to an in-house cafe, our spaces are designed to upgrade the way you work.",
        image: "teamExperience",
      },
      {
        title: "Flexible Payment Plans",
        body: "Avoid the heavy upfront investment of purchasing land or owning a space. A professionally managed office gives you the flexibility to scale without tying up your capital.",
        image: "flexiblePlans",
      },
    ],
    inclusionsTitle: "What we take care of",
    inclusions: [
      "Custom floor plans and furniture",
      "Interior design",
      "Personalized signage and brand colors",
      "Fully managed operations",
      "Flexible payment plans",
      "Access to event spaces and our in-house cafe",
    ],
  },
  {
    code: "04",
    slug: "meeting-rooms",
    kind: "service",
    name: "Meeting Rooms",
    line: "Fully supported meeting and conference rooms, bookable in real time.",
    headline: "From the moment you step in, everything is taken care of.",
    intro:
      "Our meeting rooms are equipped with complete operational support, making it a seamless experience to plan and host gatherings of all sizes. From front desk assistance to on-site refreshments, everything is taken care of. Booking is easy with our user-friendly app, where you can see real-time availability and choose a space you like.",
    detail:
      "Meeting rooms with complete operational support, front-desk assistance and refreshments, bookable through the Daftarkhwan app with real-time availability.",
    image: "meetingEvents",
    imageRatio: "aspect-[4/5]",
    heroImage: "conferenceRoom",
    href: "https://www.daftarkhwan.com/services/meeting-and-event-spaces",
    price: "From Rs. 2,000 / hour",
    priceNote: "Rates vary by location and are exclusive of sales tax.",
    sections: [],
    optionsTitle: "What can you expect?",
    options: [
      {
        title: "Conference, Meetings & Workshops",
        body: "From multipurpose meeting spaces to spacious boardrooms, host meetings and training sessions with high-speed internet, glass whiteboards, Smart TVs and HDMI, available to our community and external clients.",
        image: "conferenceRoom",
      },
      {
        title: "Large Scale Events",
        body: "Plan, manage and host your next big event. Our event spaces accommodate 200+ guests, with fully managed indoor and outdoor spaces in central locations.",
        image: "largeEvent",
      },
      {
        title: "Shoots",
        body: "Daftarkhwan doubles as a ready-to-shoot location with elevated interiors and ambient lighting, the perfect backdrop for films, music videos, advertisements and corporate campaigns.",
        image: "vogueLounge",
      },
    ],
    inclusionsTitle: "In every room",
    inclusions: [
      "High-speed internet",
      "Glass whiteboards",
      "Smart TVs and HDMI connectivity",
      "Front desk assistance",
      "On-site refreshments",
      "Real-time booking through the Daftarkhwan app",
    ],
    contact: bookingContact,
  },
  {
    code: "05",
    slug: "events-space",
    kind: "service",
    name: "Events Space",
    line: "Indoor and outdoor venues for 30 to 200+ guests, fully managed.",
    headline: "Plan and host your next big event.",
    intro:
      "Daftarkhwan offers versatile indoor and outdoor event spaces across Pakistan, ideal for workshops, meetups, corporate events and creative showcases. Be it a small gathering or a large event, we cater to all types of occasions in Lahore, Islamabad and Rawalpindi. Our venues accommodate 30 to 200 guests and are fully managed, so your event runs smoothly and leaves a lasting impression.",
    detail:
      "Versatile indoor, outdoor and rooftop venues for 30 to 200+ guests, with AV, catering and event management handled by our team.",
    image: "largeEvent",
    imageRatio: "aspect-[16/10]",
    heroImage: "boulevardEvent",
    href: "https://www.daftarkhwan.com/services/events-space",
    price: "Rates vary by venue",
    priceNote: "Venue rates vary by location and are exclusive of sales tax.",
    sections: [
      {
        title: "Why choose Daftarkhwan event spaces?",
        body: "Daftarkhwan is more than just an office, creating spaces where people can come together and connect effortlessly. Designed with functionality and flexibility in mind, our versatile venues make it easy to host events of all kinds, from workshops and panel discussions to networking sessions and corporate gatherings.",
        image: "downtownLaunch",
        imageAlt: "The launch party at Daftarkhwan Downtown",
      },
    ],
    steps: [
      { title: "Book a tour", body: "Contact our team to explore the venues available at your preferred location." },
      { title: "Discover your space", body: "Take an on-site tour of our indoor and outdoor spaces to find the perfect fit." },
      { title: "Host with ease", body: "Our team handles the logistics, setup and execution, so you can focus on your event." },
    ],
    inclusionsTitle: "Unique features",
    inclusions: [
      "Indoor and outdoor venues for 30–200+ guests",
      "Rooftop event spaces with panoramic city views",
      "AV services: sound, microphones, projectors, screens and lighting",
      "Catering and staff support",
      "Flexible setups for workshops, panels and networking",
      "Locations in Lahore, Islamabad and Rawalpindi",
    ],
    contact: bookingContact,
  },
  {
    code: "06",
    slug: "daftarkhwan-studio",
    kind: "service",
    name: "Daftarkhwan Studio",
    line: "A professional studio for podcasts, photography and video.",
    headline: "Podcast like a pro.",
    intro:
      "Daftarkhwan Studios, located at two of our key sites, Daftarkhwan | Boulevard in Lahore and Daftarkhwan | Alpha in Rawalpindi, give you a space to channel your creativity. Whether you’re a YouTuber, an influencer or a business looking to create quality content, our studios offer an all-in-one, professional setup for both podcasting and photography.",
    detail:
      "An all-in-one studio for podcasting and photography at Boulevard in Lahore and Alpha in Rawalpindi, with acoustic treatment, lighting, cameras and a chroma screen.",
    image: "studioGreenScreen",
    imageRatio: "aspect-[4/5]",
    heroImage: "studioPodcast",
    href: "https://www.daftarkhwan.com/services/daftarkhwan-studio",
    price: "From Rs. 6,500 / hour",
    priceNote: "Editing services and additional equipment are available at extra charges. Prices are exclusive of sales tax.",
    sections: [
      {
        title: "Built for uninterrupted recording",
        body: "Our studios are equipped with state-of-the-art equipment, from double-layered acoustic panels and adjustable lighting to high-speed internet and backup power. With green screens, vibrant backdrops and a modular layout, you have everything you need to create high-quality content.",
        image: "studioBackdrop",
        imageAlt: "A studio backdrop at Daftarkhwan Alpha",
      },
    ],
    inclusionsTitle: "What’s included?",
    inclusions: [
      "4 Rode-NT USB mics",
      "1 Sony A6400 camera with 16–50mm lens",
      "1 video tripod with fluid head",
      "2 portable umbrella light stands",
      "Teleprompter",
      "Chroma screen",
    ],
    locations: ["boulevard", "alpha"],
    contact: [
      { label: "Email", value: "content@daftarkhwan.com", href: "mailto:content@daftarkhwan.com" },
      { label: "Phone", value: "111-DAFTAR", href: "tel:+9242111323827" },
    ],
  },
];

export const amenities: Offering[] = [
  {
    code: "A1",
    slug: "the-yellow-bar",
    kind: "amenity",
    name: "The Yellow Bar",
    line: "Daftarkhwan’s in-house cafe, serving fresh meals, snacks and beverages.",
    headline: "Your workplace cafe.",
    intro:
      "The Yellow Bar is Daftarkhwan’s in-house cafe. With a selection of fresh meals, snacks and beverages, it adds convenience to your workday by eliminating the need for you and your team to step out for a lunch break.",
    detail: "An in-house cafe with fresh meals, curated meal plans and catering for meetings and events.",
    image: "yellowBar",
    imageRatio: "aspect-[4/5]",
    heroImage: "alphaYellowBar",
    href: "https://www.daftarkhwan.com/services/the-yellow-bar",
    price: "Meal plans & catering",
    sections: [
      {
        title: "A place to unwind and recharge",
        body: "The Yellow Bar provides our community with a comfortable space to unwind, connect and recharge. You can subscribe to curated meal plans for added convenience throughout your workday, and companies can benefit from catering services for meetings and events of all kinds hosted at Daftarkhwan.",
        image: "alphaCafe",
        imageAlt: "The Yellow Bar at Daftarkhwan Alpha",
      },
    ],
    inclusionsTitle: "At The Yellow Bar",
    inclusions: [
      "Fresh meals, snacks and beverages",
      "Curated meal plan subscriptions",
      "Catering for meetings and events",
      "A comfortable space to unwind and connect",
    ],
    locations: ["downtown", "lake-city", "vanguard", "alpha"],
  },
  {
    code: "A2",
    slug: "playroom",
    kind: "amenity",
    name: "Kids Playroom",
    line: "Colourful on-site playrooms for children aged 7 and under.",
    headline: "Designed for play.",
    intro:
      "Balancing work and family can be a challenge, especially for parents with young children. For their added peace of mind, Daftarkhwan offers colorful, on-site playrooms designed for kids aged 7 and under, keeping them engaged, safe and nearby, so parents can focus on their work knowing their child is always within reach and well cared for.",
    detail: "Safe, supervised on-site playrooms for children aged 7 and under.",
    image: "voguePlayroom",
    imageRatio: "aspect-[16/10]",
    heroImage: "voguePlayroom",
    href: "https://www.daftarkhwan.com/services/playroom",
    price: "For children aged 7 and under",
    sections: [
      {
        title: "Calm, welcoming and secure",
        body: "Our playrooms feel calm and welcoming, with soft pastel tones and a variety of toys and books to keep children engaged throughout the day. They are located at sites with restricted access, controlled through team-issued key cards and monitored by active surveillance. Each space features upholstered walls for added safety and is monitored by experienced supervisors.",
      },
    ],
    inclusionsTitle: "Every playroom offers",
    inclusions: [
      "Care for children aged 7 and under",
      "Soft pastel interiors, toys and books",
      "Restricted key-card access",
      "Active surveillance and upholstered walls",
      "Experienced supervisors",
      "A vetted nanny required for children aged 3 and under",
    ],
    quote: {
      text: "If an office doesn’t have one, women can’t really prolong their careers so I greatly appreciate Daftarkhwan and such initiatives that enable women to continue working.",
      by: "Sonia Amar, Reckitt",
    },
    locations: ["vogue", "downtown", "one", "vanguard"],
  },
];

export const offerings: Offering[] = [...services, ...amenities];

const OFFERING_ALIASES: Record<string, string> = {
  "eneterprise-solution": "enterprise-solution",
  "enterprise-solutions": "enterprise-solution",
  "meeting-and-event-spaces": "meeting-rooms",
  "meeting-and-events": "meeting-rooms",
  "kids-playroom": "playroom",
  studio: "daftarkhwan-studio",
};

export function findOffering(slug: string) {
  const key = OFFERING_ALIASES[slug] ?? slug;
  return offerings.find((offering) => offering.slug === key);
}

/* ────────────────────────────────────────────────────────────
   BLOG
   ──────────────────────────────────────────────────────────── */

export const journal = [
  {
    issue: "01",
    category: "Company News",
    title: "Celebrating a Decade of Daftarkhwan",
    excerpt:
      "From a 20-member facility in Lahore to a nationwide network of 11 sites, Daftarkhwan reflects on a decade of building with its supercommunity.",
    image: "boulevardFacade" as ImgKey,
    href: "https://www.daftarkhwan.com/post/celebrating-a-decade-of-daftarkhwan",
  },
  {
    issue: "02",
    category: "Year in Review",
    title: "Daftarkhwan Year-in-Review 2025",
    excerpt:
      "A year of welcoming more than 260 companies and expanding partnerships across food, hospitality, banking and gaming.",
    image: "teamExperience" as ImgKey,
    href: "https://www.daftarkhwan.com/post/daftarkhwan-year-in-review-2025",
  },
  {
    issue: "03",
    category: "Sustainability",
    title: "Daftarkhwan | Boulevard Gets LEED Gold Certified",
    excerpt:
      "A closer look at the Boulevard building’s LEED Gold certification and the shared commitment to more responsible development.",
    image: "boulevardLeed" as ImgKey,
    href: "https://www.daftarkhwan.com/post/daftarkhwan-boulevard-gets-leed-gold-certified",
  },
  {
    issue: "04",
    category: "Locations",
    title: "Daftarkhwan Comes to Lake City",
    excerpt:
      "A new workplace in Lahore’s growing Lake City district, close to the golf course, commercial destinations and major routes.",
    image: "lakeCityFacade" as ImgKey,
    href: "https://www.daftarkhwan.com/post/daftarkhwan-comes-to-lake-city",
  },
  {
    issue: "05",
    category: "Coworking",
    title: "Best Coworking Spaces in Lahore",
    excerpt:
      "A guide to Daftarkhwan’s Lahore workspaces: Boulevard, Downtown, Vogue and the new Lake City site.",
    image: "downtownHall" as ImgKey,
    href: "https://www.daftarkhwan.com/post/best-coworking-spaces-in-lahore",
  },
  {
    issue: "06",
    category: "Coworking",
    title: "Best Coworking Spaces in Islamabad",
    excerpt:
      "From Vanguard on Constitution Avenue to Alpha at NASTP and Vantage in DHA 1, the Twin Cities’ best Daftarkhwan workspaces.",
    image: "vanguardLobby" as ImgKey,
    href: "https://www.daftarkhwan.com/post/best-coworking-spaces-in-islamabad",
  },
  {
    issue: "07",
    category: "Startups",
    title: "Top Pakistani Startups to Watch in 2025",
    excerpt: "A look at promising Pakistani ventures, including Saraaf, Bazaar Technologies, Farmdar and PostEx.",
    image: "coworkingHall" as ImgKey,
    href: "https://www.daftarkhwan.com/post/top-pakistani-startups-to-watch-in-2025",
  },
  {
    issue: "08",
    category: "Industry News",
    title: "The Rise of AI-Generated Misinformation",
    excerpt:
      "As AI-generated content becomes easier to access, verifying and differentiating information matters more than ever.",
    image: "teamRoom" as ImgKey,
    href: "https://www.daftarkhwan.com/post/the-rise-of-ai-generated-misinformation",
  },
];

/* ────────────────────────────────────────────────────────────
   FAQs
   ──────────────────────────────────────────────────────────── */

export const faqCategories: { name: string; items: QA[] }[] = [
  {
    name: "Coworking",
    items: [
      {
        q: "What is coworking at Daftarkhwan and how does it work?",
        a: "Coworking at Daftarkhwan offers shared workspaces designed for professionals, from freelancers to small and medium-sized teams, bringing them together in an inclusive, community-driven environment. Members can choose flexible plans and access fully equipped facilities across Lahore, Islamabad and Rawalpindi.",
      },
      {
        q: "Where are Daftarkhwan coworking spaces located?",
        a: "Daftarkhwan spaces are located at prime locations across Lahore, Islamabad and Rawalpindi: Gulberg, DHA and Lake City in Lahore; Constitution Avenue, I-10 and Gulberg Greens in Islamabad; and NASTP and DHA Phase 1 in Rawalpindi.",
      },
      {
        q: "How do I book a tour of a Daftarkhwan site?",
        a: "We welcome walk-ins at our coworking spaces. For a more personalized experience, you can schedule a guided tour by contacting us at 111-323827.",
      },
      {
        q: "Can I work at night?",
        a: "Yes. Night-shift packages are part of our coworking membership options, for members who work with international teams or are simply more productive at night.",
      },
    ],
  },
  {
    name: "Membership",
    items: [
      {
        q: "How much does a coworking seat cost?",
        a: "Prices vary by location. Coworking starts from Rs. 25,000 per seat per month in Islamabad and from Rs. 27,500 in Lahore and Rawalpindi. Prices are exclusive of sales tax, and electricity and power backup surcharge may apply.",
      },
      {
        q: "What membership options are available?",
        a: "Whether you need a desk for the day or a dedicated seat, we offer a range of options, from virtual plans to night-shift packages, as well as private offices and enterprise solutions.",
      },
      {
        q: "Can my membership grow with my team?",
        a: "Yes. Flexible membership plans accommodate growing teams in line with your business’ needs, with simplified monthly billing and no long-term lease to manage.",
      },
    ],
  },
  {
    name: "Space",
    items: [
      {
        q: "What private office options are available?",
        a: "Our private office options include executive offices, team rooms and team compounds, all fully furnished and ready to move in.",
      },
      {
        q: "Can I customize my office?",
        a: "Yes. Our enterprise solution offers end-to-end customization, including layouts, furniture, interiors and branded design elements, to create an environment that embodies your company’s identity.",
      },
      {
        q: "Which sites are accessible?",
        a: "Daftarkhwan | Boulevard and Daftarkhwan | Downtown in Lahore, and Daftarkhwan | Vanguard in Islamabad, are our accessible sites.",
      },
      {
        q: "Is parking available?",
        a: "Yes. Parking is available across our sites, with valet service at locations including Boulevard, One, Fairways and Vanguard.",
      },
    ],
  },
  {
    name: "Amenities",
    items: [
      {
        q: "What amenities are included?",
        a: "Depending on the site, members can use high-speed internet, valet parking, security, unlimited coffee, mail handling, kids playrooms and our in-house cafe, supported by dedicated admin, IT and housekeeping teams.",
      },
      {
        q: "Is there a cafe on site?",
        a: "The Yellow Bar is Daftarkhwan’s in-house cafe, serving fresh meals, snacks and beverages. Members can subscribe to curated meal plans, and catering is available for meetings and events.",
      },
      {
        q: "Is there a kids playroom?",
        a: "Yes. Our on-site playrooms are designed for children aged 7 and under, with restricted access and active surveillance. Children aged 3 and under must be accompanied by a vetted nanny.",
      },
      {
        q: "Where is Daftarkhwan Studio?",
        a: "Daftarkhwan Studio is available at Daftarkhwan | Boulevard in Lahore and Daftarkhwan | Alpha in Rawalpindi.",
      },
    ],
  },
  {
    name: "Events",
    items: [
      {
        q: "Can non-members book meeting rooms?",
        a: "Yes. Our meeting and conference rooms are available to both our community and external clients.",
      },
      {
        q: "How many guests can your event spaces host?",
        a: "Our indoor and outdoor venues accommodate 30 to 200+ guests, with rooftop spaces, AV support, catering and event management available.",
      },
      {
        q: "How do I book a meeting or event space?",
        a: "Meeting rooms can be booked through the Daftarkhwan app with real-time availability. For events, call 111-323827, WhatsApp +92 332 6381263 or email sales@daftarkhwan.com.",
      },
    ],
  },
];

/** A short selection used on the services overview. */
export const faqs: QA[] = [
  faqCategories[0].items[1],
  faqCategories[0].items[2],
  faqCategories[1].items[0],
  faqCategories[2].items[0],
  faqCategories[3].items[0],
  faqCategories[4].items[2],
];

/* ────────────────────────────────────────────────────────────
   CAREERS & LANDLORDS
   ──────────────────────────────────────────────────────────── */

export const careers = {
  lead: "At Daftarkhwan, we are committed to fostering a tribe-like culture that thrives on inclusivity and respects every individual.",
  body: "Growing from a team of 5 to 350+ employees, we’re on a journey of expansion, welcoming passionate people who believe in our mission of empowering entrepreneurs and innovators to change the world. Our workspaces are more than just an office; they offer ease, security and a strong sense of belonging, so you can feel at home at work.",
  values: [
    { title: "Inclusivity", body: "A tribe-like culture that thrives on inclusivity and respects every individual." },
    { title: "Belonging", body: "Workspaces that offer ease, security and a strong sense of belonging, so you can feel at home at work." },
    { title: "Purpose", body: "A shared mission of empowering entrepreneurs and innovators to change the world." },
  ],
};

export const landlords = {
  lead: "Elevate your property’s worth and drive long-term value with a diverse pool of tenants.",
  why: "Daftarkhwan is one of the pioneers of the coworking movement in Pakistan. With locations across three major cities and a decade in the industry, we have garnered a reliable reputation. Backed by unicorn investors, Daftarkhwan curates community-centric workspaces for businesses. In collaboration with commercial real estate owners, we design, build and operate an infrastructure that lets landlords manage a diverse pool of tenants under their roof through a single point of contact.",
  stats: [
    { value: "2×", label: "Rental yield potential", meta: "Against a 5% average for commercial property" },
    { value: "3 months", label: "To fill a new workspace", meta: "Our record, post-launch" },
    { value: "Long-term", label: "Commitments", meta: "For large spaces or full commercial properties" },
  ],
  benefits: [
    {
      title: "Value added to your property",
      body: "The average rental yield for a commercial property is 5%, but with the coworking rental model and our team’s deep industry knowledge, landlords can expect to double their rental yields, resulting in higher property valuations and increased capital gains.",
      image: "boulevardFront" as ImgKey,
      imageAlt: "The front facade of Daftarkhwan Boulevard",
    },
    {
      title: "Hassle-free tenancy",
      body: "We understand the complexities of the real estate landscape and have a proven record of filling our state-of-the-art workspaces in as little as 3 months, post-launch. Our flexibility attracts a wide range of businesses, from hyper-growth startups to multinational corporations.",
      image: "vogueLift" as ImgKey,
      imageAlt: "A lift lobby at Daftarkhwan Vogue",
    },
    {
      title: "Long-term commitments",
      body: "We take up large spaces or full commercial properties and offer long-term commitments to landlords, mitigating their risk and eliminating the hassles of managing short-term leases. Building strong partnerships with landlords, we develop beautifully designed, unforgettable spaces.",
      image: "vanguardFacade" as ImgKey,
      imageAlt: "The front facade of Daftarkhwan Vanguard",
    },
  ],
};

/* ────────────────────────────────────────────────────────────
   CONTACT
   ──────────────────────────────────────────────────────────── */

export const contactDetails = {
  phone: "+92 42 111-323827",
  dial: "042 111-323827",
  tel: "+9242111323827",
  email: "hello@daftarkhwan.com",
  salesEmail: "sales@daftarkhwan.com",
  partnershipsEmail: "partnerships@daftarkhwan.com",
  whatsapp: "+92 332 6381263",
  whatsappLink: "https://wa.me/923326381263",
  address: "Vogue Towers, MM Alam Road, Block C2, Gulberg III, Lahore, Pakistan",
};

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/daftarkhwan" },
  { label: "Facebook", href: "https://www.facebook.com/daftarkhwan" },
  { label: "Instagram", href: "https://www.instagram.com/daftarkhwan" },
  { label: "YouTube", href: "https://www.youtube.com/channel/UC1B3R9uW-cfpvUfbyhK97Jg" },
];
