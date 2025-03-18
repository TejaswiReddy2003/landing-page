import Navbar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import ServiceCards from "./components/ServiceCards";
import PricingTable from "./components/PricingTable";
import UsersList from "./components/UsersList";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div>
      <Navbar />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="services">
        <ServiceCards />
      </div>
      <div id="pricing">
        <PricingTable />
      </div>
      <div id="users">
        <UsersList />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
    </div>
  );
}

export default App;
