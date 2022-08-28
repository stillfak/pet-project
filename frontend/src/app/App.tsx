import { useRoutes } from "react-router-dom";
import { routes } from "./routes.js";
import './App.css'

function App() {
  const element = useRoutes(routes);
  return (
    <div className="App">
      <h1>React router example</h1>
      {element}
    </div>
    
  );
}

export default App