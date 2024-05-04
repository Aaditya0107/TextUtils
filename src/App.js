import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar Title="TextUtils" />
      <div className="container my-3">
      <TextForm  Heading="Enter the text to analyze below" />
      {/* <About /> */}
      </div>
    </>
  );
}

export default App;
