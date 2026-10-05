import { Footer, GridOverlay, Nav } from "./components/Chrome";
import { RouterProvider, useRouter } from "./lib/router";
import Home from "./pages/HomeRefresh";
import Spaces from "./pages/Spaces";
import LocationCity from "./pages/LocationCity";
import LocationDetail from "./pages/LocationDetail";
import Ethos from "./pages/Ethos";
import Membership from "./pages/Membership";
import Offering from "./pages/Offering";
import Journal from "./pages/Journal";
import Contact from "./pages/Contact";
import Partnerships from "./pages/Partnerships";
import Careers from "./pages/Careers";
import Faqs from "./pages/Faqs";
import Landlords from "./pages/Landlords";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";

/* Hash routes mirror daftarkhwan.com's URL structure, e.g. #/locations/lahore/vogue */
function resolve(path: string) {
  const [section, first, second] = path.split("/").filter(Boolean);
  switch (section) {
    case undefined:
      return <Home />;
    case "locations":
    case "spaces":
      if (first && second) return <LocationDetail citySlug={first} slug={second} />;
      if (first) return <LocationCity citySlug={first} />;
      return <Spaces />;
    case "services":
    case "membership":
      return first ? <Offering slug={first} /> : <Membership />;
    case "about":
    case "about-us":
    case "ethos":
      return <Ethos />;
    case "blog":
    case "journal":
      return <Journal />;
    case "partnerships":
      return <Partnerships />;
    case "contact":
    case "contact-us":
    case "book-a-tour":
    case "get-in-touch":
      return <Contact />;
    case "careers":
      return <Careers />;
    case "faqs":
      return <Faqs />;
    case "landlords":
      return <Landlords />;
    case "privacy-policy":
      return <Privacy />;
    default:
      return <NotFound />;
  }
}

function Shell() {
  const { path } = useRouter();

  return (
    <div className="relative min-h-screen bg-canvas text-ink antialiased">
      <GridOverlay />
      <Nav />
      <main key={path} className="relative z-10">
        {resolve(path)}
      </main>
      <Footer />
      <div className="grain-layer" aria-hidden="true" />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <Shell />
    </RouterProvider>
  );
}
