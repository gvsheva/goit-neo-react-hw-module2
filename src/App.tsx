import "./App.css";
import Navbar from "./components/Navbar";
import routes from "./routes";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <Navbar routes={routes} />
        </header>
        <main>
          <Routes>
            {routes.map(({ path, page }) => (
              <Route path={path} element={page()} />
            ))}
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
