import { useState } from "react";
import Modal from "./components/modal";

const loginAlertMessage = {
  type: "Login",
  content: {
    title: "Login",
    content: "Please enter your username and password",
  },
  buttons: [
    {
      type: "primary",
      text: "Login",
    },
    {
      type: "secondary",
      text: "Cancel",
    },
  ],
};

function App() {
  const [isShown, setIsShown] = useState(false);

  const handleLogin = () => {
    setIsShown(true);
  };

  const handleRightButton = () => {
    // Change logic accordingly
    alert("You've clicked login button");
  };

  const handleLeftButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Change logic accordingly
    e.stopPropagation();
    setIsShown(false);
  };
  return (
    <>
      <button onClick={handleLogin}>Login</button>
      {isShown && (
        <Modal
          rightButton={loginAlertMessage.buttons[0]}
          leftButton={loginAlertMessage.buttons[1]}
          onRightButton={handleRightButton}
          onLeftButton={handleLeftButton}
        >
          {loginAlertMessage.content}
        </Modal>
      )}
    </>
  );
}

export default App;
