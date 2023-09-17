import "./App.css";
import ContentHolder from "./Content/ContentHolder";
import Header from "./Header/Header";
import NavigationBar from "./Navigation/NavigationBar";

function App() {
  return (
    <div className="main-content-holder">
      <Header />
      <div className="main-content">
        <NavigationBar />
        <ContentHolder />
      </div>
    </div>
  );
}

export default App;
