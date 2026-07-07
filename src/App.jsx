import Home from "./pages/Home";
import Cursor from "./components/Effects/Cursor";
import MouseGlow from "./components/Effects/MouseGlow";
import FloatingController from "./components/Controller3D/FloatingController";

export default function App() {
  return (
    <>
      <MouseGlow />
      <Cursor />
      <FloatingController />
      <Home />
    </>
  );
}