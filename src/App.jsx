import "./App.css";

import TanstackQueryProvider from "./providers/TanstackQueryProvider";
import ContextProvider from "./providers/ContextProvider";
import Router from "./router/Router";

function App() {
  return (
    <TanstackQueryProvider>
      <ContextProvider>
        <Router />
      </ContextProvider>
    </TanstackQueryProvider>
  );
}

export default App;
