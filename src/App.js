import "./App.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="main-container">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
