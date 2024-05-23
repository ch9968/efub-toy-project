import "../../App.css";
import Widgets from "../ui/Widgets";
import Feed from "../ui/Feed";
import Navbar from "../ui/Navbar";
function HomePage() {
  return (
    <div className="app">
      <Navbar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default HomePage;
