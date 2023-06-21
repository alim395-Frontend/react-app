import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
// import Alert from "./components/Alert";
// import ListGroup from "./components/ListGroup";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Alert</Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>Button</Button>
    </div>
  );
}

export default App;
