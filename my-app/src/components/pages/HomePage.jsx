import "../../App.css";
import Widgets from "../ui/Widgets";
import Feed from "../ui/Feed";
import Navbar from "../ui/Navbar";
import MiddleContainer from "../ui/MiddleContainer";
function HomePage() {
  return (
    <div className="app">
      <Navbar />
      <MiddleContainer>
        <Feed />
      </MiddleContainer>
      <Widgets />
    </div>
  );
}

export default HomePage;
