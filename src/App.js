import "./index.css";
import Header from "../src/component/Header";
import Main from "../src/component/Main";
import Footer from "../src/component/Footer";

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
