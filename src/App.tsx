import "./App.css";
import Ribbons from "./components/common/cursor/ribbons/Ribbons";
import { Home } from "./pages/home/Home";
import { SignUp } from './pages/signUp/SignUp';
import { SignIn } from './pages/signIn/SignIn';
import { About } from './pages/about/About';
import { SellTickets } from './pages/sellTickets/SellTickets';
import { appRouter } from './router/app.router';
import { RouterProvider } from "react-router";

function App() {
  return (
    <div className="appContainer">
      <Ribbons
        baseThickness={30}
        colors={['#7f13ec', '#a855f7']}
        speedMultiplier={0.50}
        maxAge={500}
        enableFade={false}
        enableShaderEffect={true}
        offsetFactor={0.02}
      />
      <div className="appBackground" />
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
