import "../../App.css";
import Widgets from "../ui/Widgets";
import Navbar from "../ui/Navbar";

function PostDetailPage() {
  return (
    <div className="app">
      <Navbar />
      /*여기 중간에 완전히 새로*/
      <Widgets />
    </div>
  );
}

export default PostDetailPage;
