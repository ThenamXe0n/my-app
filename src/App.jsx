import UserProfile from "./components/UserProfile";
import img1 from "./img.jpg"

// jsx(javascript and xml)
function App() {
    let studentName = "hi"
  return (
    <div>
      <UserProfile  course={studentName} institute={"mindcoders"}  email="pranav@gmail.com" profileImg={img1} contact="9879789987" />
      <UserProfile name="kuldeep" profileImg="https://m.media-amazon.com/images/I/71D7Lbg-s-L._SX679_.jpg" email="kuldeep@gmail.com" />
    <UserProfile name={"nameet"} profileImg={"kjhkjjh"} email={"nameet@gmail.com"}/>
    </div>
  );
}

export default App;
