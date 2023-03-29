import { GlobalStyles } from "./styleds";
import Main from "./pages/Main";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Main />
    </div>
  );
}

export default App;
