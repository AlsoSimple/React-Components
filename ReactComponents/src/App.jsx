import './App.scss'

import Header from "./components/header/header";
import Button from "./components/button/button";
import Footer from "./components/footer/footer";

function App() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <>
      <Header title="React Components" />

      <main className="main">
        <Button text="Click Me" onClick={handleClick} />
      </main>

      <Footer text="React Footer" />
    </>
  );
}

export default App;
