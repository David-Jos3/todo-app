import Banner from "./components/Banner";

function App() {
  const toggleTheme = (isDark: boolean) => {
    isDark
      ? (document.body.style.backgroundColor = "hsl(236, 33%, 92%)")
      : (document.body.style.backgroundColor = "hsl(235, 21%, 11%)");
  };
  return (
    <div className="flex items-center flex-col ">
      <Banner themeBg={toggleTheme} />
    </div>
  );
}

export default App;
