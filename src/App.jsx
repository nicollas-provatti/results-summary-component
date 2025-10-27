import Results from "./components/Results";
import Summary from "./components/Summary";

function App() {
  return (
    <main className="flex justify-center w-screen h-screen md:items-center md:bg-pale-blue">
      <div className="flex flex-col gap-5 max-w-2xl md:flex-row md:gap-0 md:bg-white md:rounded-4xl">
        <Results />
        <Summary />
      </div>
    </main>
  );
}

export default App;
