import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import TextArea from './Components/TextArea';

function App() {
  return (
    <>
    <NavBar title = {"GoAway"} homepageTitle = {"Home"} aboutTitle = {"About"} />
    <div className="container my-5">
      <TextArea heading={"Enter your text"} />
    </div>
    </>
  );
}

export default App;
