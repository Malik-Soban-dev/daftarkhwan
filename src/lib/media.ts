/* Official Daftarkhwan photography, served from the brand's Wix media library.
   Every asset can be requested at any crop through `photo()`, so heroes, cards and
   plates always receive an image cut to the frame they are shown in. */
const WIX = "https://static.wixstatic.com/media";

type Asset = { id: string; file: string; w: number; h: number };

const assets = {
  /* Workspaces & services */
  coworkingHall: { id: "943304_49135b2e84ba4baea5801a1952b21683~mv2.jpg", file: "Alpha-50 OP.jpg", w: 1200, h: 1500 },
  coworkingWide: { id: "cf1443_31c3a1dbbe7e4ea6b291e2dc7146ec59~mv2.jpg", file: "Coworking-min.jpg", w: 2000, h: 1250 },
  privateOffice: { id: "943304_b4bbb27f717e48fda9f393fdd99c9422~mv2.jpg", file: "Private Offices.jpg", w: 1200, h: 1500 },
  meetingEvents: { id: "943304_c106237324b54763bfb1c04f700e3b25~mv2.jpg", file: "Meeting & Events.jpg", w: 1200, h: 1500 },
  conferenceRoom: { id: "943304_e02e176448a74acf931c34ac563ac039~mv2.jpg", file: "Conference Room.jpg", w: 1600, h: 1000 },
  largeEvent: { id: "943304_5b8f3969dd9142df857974220d0dc050~mv2.jpg", file: "Large scale event.jpg", w: 1600, h: 1000 },
  executiveOffice: { id: "943304_6dfb49183088426a82d196f7c883b81c~mv2.jpg", file: "private office(1).jpg", w: 1200, h: 1500 },
  teamRoom: { id: "943304_8efa1c5996f34222be3c271d205f86d0~mv2.jpg", file: "Team room.jpg", w: 1600, h: 1000 },
  teamCompound: { id: "943304_a6e90f7fb1db47d0a95dad16de531707~mv2.jpg", file: "team compound.jpg", w: 1600, h: 1000 },
  enterpriseFloor: { id: "943304_d8bfb71a19ed4d53a3b9dbc96d61a0d8~mv2.jpg", file: "Banner 1.jpg", w: 2000, h: 1250 },
  enterpriseBanner: { id: "943304_edfe1f72a1f94d738aa04213c5024cc2~mv2.jpg", file: "Banner 3.jpg", w: 2000, h: 1250 },
  customBranding: { id: "b3cceb_35f1d14bc3d74d93937586f9f4825bab~mv2.jpg", file: "Custom Branding.jpg", w: 1600, h: 1000 },
  teamExperience: { id: "943304_f4c04dafc8e44fd1accca36c8d851bd8~mv2.jpg", file: "Enhanced Employee Experience.jpg", w: 1600, h: 1000 },
  flexiblePlans: { id: "943304_96733d487a55483c8c0dabbd2cbc2daf~mv2.jpg", file: "Flexible Payments.jpg", w: 1600, h: 1000 },

  /* Lahore */
  boulevardFacade: { id: "943304_4c20c35a457b4cf69bbdf448b2f2694f~mv2.jpg", file: "Daftarkhwan Boulevard.jpg", w: 1200, h: 1500 },
  boulevardLeed: { id: "943304_72d60ce4164740e2bca24c40e33055b7~mv2.png", file: "boulevard-facade.png", w: 1800, h: 1000 },
  boulevardFront: { id: "b3cceb_88ce2fec9b604126945bd537ad166e4c~mv2.jpg", file: "bottom image (2).jpg", w: 1600, h: 1000 },
  boulevardLounge: { id: "802742_2bbfc6753789453cab0e8b0e480384df~mv2.png", file: "founders-lounge.png", w: 1800, h: 1000 },
  boulevardEvent: { id: "943304_eb253b662e3f4b72a567c101f02dad9d~mv2.png", file: "boulevard-event.png", w: 1800, h: 1000 },
  vogueStairs: { id: "cf1443_cd105ed773934c1a9ee748535d2d1090~mv2.jpg", file: "vogue-stairs.jpg", w: 2000, h: 1250 },
  vogueLift: { id: "943304_1ad355477e734e498cf5888499fc3479~mv2.jpg", file: "Main image (2).jpg", w: 1600, h: 1000 },
  vogueLounge: { id: "943304_f15431d9755b4faf8defae0617b3742b~mv2.jpg", file: "bottom Image.jpg", w: 1600, h: 1000 },
  vogueHuddle: { id: "802742_100260a8ff7f4ce6b3e03a0ad920fcb3~mv2.png", file: "vogue-huddle-rooms.png", w: 1800, h: 1000 },
  voguePlayroom: { id: "943304_49f86044117e425a9f85ec7fff9e3ac3~mv2.webp", file: "vogue-playroom.webp", w: 1600, h: 1000 },
  downtownHall: { id: "802742_be1b251a85c04036a65a3d63f6fcff34~mv2.png", file: "downtown-coworking.png", w: 1800, h: 1000 },
  downtownLounge: { id: "943304_834207c2303546f3a0a8496df55e8d42~mv2.webp", file: "downtown-lounge.webp", w: 1600, h: 1000 },
  downtownLaunch: { id: "943304_657ebaf2370d49a582fd7e27ac5369b3~mv2.webp", file: "downtown-launch.webp", w: 1800, h: 1000 },
  fairwaysLounge: { id: "943304_c1e1aba1384c4cca84bf615acc64cb7c~mv2.jpg", file: "fairways-creative-lounge.jpg", w: 2000, h: 1250 },
  lakeCityFacade: { id: "943304_874918cdad574349b76da110eb147aef~mv2.png", file: "lake-city.png", w: 1800, h: 1000 },
  lakeCityHall: { id: "802742_c544e69ae9334776a4a544fa55a0b06b~mv2.png", file: "lake-city-hall.png", w: 1800, h: 1000 },

  /* Islamabad & Rawalpindi */
  vanguardLobby: { id: "802742_cba4cf47441d4c5daba24ba61b75ccaf~mv2.png", file: "vanguard-lobby.png", w: 1800, h: 1000 },
  vanguardBalcony: { id: "802742_f6dd9ccc10d143c6ac5cb0e9ef2d104b~mv2.png", file: "vanguard-balcony.png", w: 1800, h: 1000 },
  vanguardFacade: { id: "b3cceb_795ecc8f4a144761aed0f74062f2226a~mv2.jpg", file: "Enterprise Solutions.jpg", w: 1600, h: 1000 },
  alphaHall: { id: "802742_d7156413bc3f4cf585d8760935c184f0~mv2.png", file: "alpha-coworking.png", w: 1800, h: 1000 },
  alphaCoworking: { id: "943304_41641b408d834f588b7b30c31512aac6~mv2.webp", file: "alpha-coworking-hall.webp", w: 1800, h: 1000 },
  alphaCafe: { id: "943304_d08827b025f440ca923c71c1809d1e32~mv2.jpg", file: "Daftarkhwan Alpha Yellow Bar.jpg", w: 1600, h: 1000 },
  alphaYellowBar: { id: "943304_272d49119356498e97bd30fbea71438c~mv2.jpg", file: "Alpha YB.jpg", w: 1600, h: 1000 },
  vantageBuilding: { id: "4e06e3_c3ea3f158b6e41eaa93baf5532fd0e98~mv2.png", file: "vantage.png", w: 1800, h: 1000 },
  vantageLounge: { id: "802742_8b3a8bd97322458aaa04805df58acb15~mv2.png", file: "vantage-lounge.png", w: 1800, h: 1000 },

  /* Studio & amenities */
  studioPodcast: { id: "cf1443_cc6c40c1efce4a8b853a7505b6637dfa~mv2.jpg", file: "studio.jpg", w: 1600, h: 1100 },
  studioGreenScreen: { id: "943304_7be707ff11df4910a57261f6fe2da373~mv2.jpg", file: "Copy of Copy of DK Studio-20.jpg", w: 1200, h: 1500 },
  studioBackdrop: { id: "943304_c40b4b028e6145a19adfbfba3ec8a59a~mv2.jpg", file: "Copy of Copy of DK Studio-3.jpg", w: 1600, h: 1000 },
  yellowBar: { id: "b3cceb_3fdf2ef966d94b1b8bc7db11c99b2244~mv2.jpg", file: "Copy of DKS-29-min.jpg", w: 1200, h: 1400 },
  yellowBarDowntown: { id: "b3cceb_a4be430b4f3b4acead027e6136e9b4d1~mv2.jpg", file: "DT Yellow Bar.jpg", w: 1100, h: 1500 },

  /* City photography from the location index */
  lahore: { id: "943304_dd5b610980814b1dac5f379e67ec2f3f~mv2.jpg", file: "Lahore (1)_edited.jpg", w: 1800, h: 1100 },
  islamabad: { id: "943304_802407b1bb224d1b9e380fd6360ef436~mv2.jpg", file: "Islamabad (1)_edited.jpg", w: 1800, h: 1100 },
  rawalpindi: { id: "943304_1121924ba6e94cf5a13d60e928fa0f95~mv2.jpg", file: "Rawalpindi (1)_edited.jpg", w: 1800, h: 1100 },

  /* Supercommunity marks */
  careem: { id: "943304_b3c87c6d9cba428884342997a4ca7bd1~mv2.png", file: "Careem.png", w: 300, h: 300 },
  reckitt: { id: "943304_42307fc92dd6445c9df987ba9f8db7e8~mv2.png", file: "Reckitt.png", w: 300, h: 300 },
  starzplay: { id: "943304_93ca720bb4c140afb62bba521ad3daeb~mv2.png", file: "Starzplay.png", w: 300, h: 300 },
} satisfies Record<string, Asset>;

/* ────────────────────────────────────────────────────────────
   LOGO MARKS
   Served with Wix `fit` (not `fill`) so each mark keeps its own proportions
   instead of being cropped. Only transparent PNGs are listed here: the two
   JPEG marks on daftarkhwan.com carry baked-in backgrounds and would tile as
   solid blocks, so those brands are set typographically instead.
   ──────────────────────────────────────────────────────────── */
const logoAssets = {
  careem: { id: "943304_b3c87c6d9cba428884342997a4ca7bd1~mv2.png", file: "Careem.png" },
  reckitt: { id: "943304_42307fc92dd6445c9df987ba9f8db7e8~mv2.png", file: "Reckitt.png" },
  starzplay: { id: "943304_93ca720bb4c140afb62bba521ad3daeb~mv2.png", file: "Starzplay.png" },
  pasha: { id: "cf1443_d4da079a5969428a9ff5a7f49627eb4b~mv2.png", file: "Pasha Logo" },
  hbl: { id: "943304_9c4068d69b98419cb03ba2a28584032d~mv2.png", file: "HBL-Device-Logo-White (1).png" },
  startupSyndicate: { id: "cf1443_c610c821b49a45d9a4ea571083ce604a~mv2.png", file: "Startup Syndicate Logo" },
  googleDeveloperGroup: { id: "cf1443_4bb7408744ce4d51a4489e87268f0c3c~mv2.png", file: "Google Developer Group Logo" },
  tedxLahore: { id: "cf1443_f7dace846bd542e1ae779cc12569a65b~mv2.png", file: "logo-black (1).png" },
  lumx: { id: "cf1443_cce70685fea8401ab8896b1a46c62cf4~mv2.png", file: "LUMx Logo" },
  invest2Innovate: { id: "cf1443_d198232779ce44db8bc9c10a79f05363~mv2.png", file: "Invest 2 Innovate Logo" },
  roomy: { id: "cf1443_b07b44a31d5e4352a1ff5bc1c6a2b657~mv2.png", file: "Roomy Logo" },
  skyPadel: { id: "cf1443_623d6da00fc943bba40c79d2292427f8~mv2.png", file: "1.png" },
  eo: { id: "cf1443_7fd884e2166f421ea65b464f715c4d19~mv2.png", file: "EO Logo" },
  scienceFuse: { id: "cf1443_6d330d9fd8ae4875b0faa3a77fa53be9~mv2.png", file: "Science Fuse Logo" },
  creativeMornings: { id: "cf1443_c50879c1d3d54ebaa0bee5f7303c63e1~mv2.png", file: "Creative Mornings Islamabad Logo" },
  burgerOClock: { id: "cf1443_058b6500f6ec41ceb74596de0c6ed365~mv2.png", file: "BOC-Logo-02 (2).png" },
  figma: { id: "cf1443_c095443195184274af4b1a7f10e48afd~mv2.png", file: "Figma Logo" },
  dhaka: { id: "943304_07c6fd1224e44aa5a7f33527c8dc265e~mv2.png", file: "Group 362.png" },
} as const;

export type LogoKey = keyof typeof logoAssets;

/** A logo mark, fitted inside its box so its own proportions are preserved. */
export function logoUrl(key: LogoKey, width = 640) {
  const asset = logoAssets[key];
  return `${WIX}/${asset.id}/v1/fit/w_${width},h_${width},q_85,enc_avif,quality_auto/${encodeURIComponent(asset.file)}`;
}

export type ImgKey = keyof typeof assets;
export type Frame = "aspect-[4/5]" | "aspect-[16/10]";

/** Any official photograph, cropped to the requested size (centre-weighted). */
export function photo(key: ImgKey, width: number, height: number) {
  const asset: Asset = assets[key];
  return `${WIX}/${asset.id}/v1/fill/w_${width},h_${height},al_c,q_85,enc_avif,quality_auto/${encodeURIComponent(asset.file)}`;
}

/** Wide crop for full-bleed page heroes. */
export const hero = (key: ImgKey) => photo(key, 2200, 1240);

const frameSize: Record<Frame, [number, number]> = {
  "aspect-[4/5]": [1200, 1500],
  "aspect-[16/10]": [1600, 1000],
};

/** A crop that matches the frame the image is displayed in. */
export const framed = (key: ImgKey, frame: Frame) => photo(key, ...frameSize[frame]);

/** Default crops, keyed by asset name. */
export const img = Object.fromEntries(
  (Object.keys(assets) as ImgKey[]).map((key) => [key, photo(key, assets[key].w, assets[key].h)]),
) as Record<ImgKey, string>;
