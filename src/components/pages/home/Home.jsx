import Pagetitle from "../../common/Pagetitle";
import About from "./About";
import Availabletoy from "./Availabletoy";
import Banner from "./Banner";
import Contact from "./Contact";
import Gallery from "./Gallery";

const Home = () => {
  return (
    <div className="pt-14">
      <Pagetitle title="ToyZoo | Home"></Pagetitle>
      <Banner></Banner>
      <Gallery></Gallery>
      <Availabletoy></Availabletoy>
      <About></About>
      <Contact></Contact>
    </div>
  );
};

export default Home;
