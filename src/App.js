import "./App.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="main-container">
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
