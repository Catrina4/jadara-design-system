import PatternsShowcase from "./playground/PatternsShowcase";
import { ThemeToggle } from "./theme";

function App() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "20px",
          right: "20px",
          zIndex: 9999,
        }}
      >
        <ThemeToggle />
      </div>

      <PatternsShowcase />
    </>
  );
}

export default App;