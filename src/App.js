import "./App.css";
import Search from "./components/mainSearch";
import ProjectHeadline from "./components/header";
import MyIntro from "./components/intro";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <ProjectHeadline />
        <Search />
        <MyIntro />
      </div>
    </div>
  );
}

export default App;
