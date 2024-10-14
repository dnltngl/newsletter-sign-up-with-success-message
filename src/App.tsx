import "./App.css"
import LandingPage from "./components/LandingPage"

function App() {
  return (
    <div className="bg-neutral-DarkSlateGrey">
      <div className="App  mx-auto sm:max-w-screen-lg ">
        <main className=" place-content-center sm:min-h-dvh  ">
          <LandingPage />
        </main>
      </div>
    </div>
  );
}

export default App;
