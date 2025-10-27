import { useState, useEffect, useRef } from "react";
import "./App.css";
import Ribbons from "./components/common/cursor/ribbons/Ribbons";
import { appRouter } from './router/app.router';
import { RouterProvider } from "react-router";
import { Preloader } from "./components/common/preloader/Preloader";

function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  const hasCheckedSession = useRef(false);

  useEffect(() => {
    if (hasCheckedSession.current) return;
    
    hasCheckedSession.current = true;
    
    const hasVisited = sessionStorage.getItem('hasVisited');
    
    if (hasVisited) {
      setShowPreloader(false);
    }
  }, []);

  const handlePreloaderComplete = () => {
    sessionStorage.setItem('hasVisited', 'true');
    setShowPreloader(false);
  };

  return (
    <div className="appContainer">
      {showPreloader && (
        <Preloader onComplete={handlePreloaderComplete} />
      )}

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