import { useState } from "react";
import Modal from "./modal";

const accountDeleteAlertMessage = {
  type: "Account deleted",
  content: {
    title: "Account deleted",
    content: "Are you sure you want to delete your account?",
  },
  buttons: [
    {
      type: "primary",
      text: "Delete",
    },
    {
      type: "secondary",
      text: "Cancel",
    },
  ],
};

function DeleteAccount() {
  const [isShown, setIsShown] = useState(false);

  const handleLogin = () => {
    setIsShown(true);
  };

  const handleRightButton = () => {
    // Change logic accordingly
    alert("You have clicked the delete button");
  };

  const handleLeftButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Change logic accordingly
    e.stopPropagation();
    setIsShown(false);
  };
  return (
    <>
      <button onClick={handleLogin}>Delete Account</button>
      {isShown && (
        <Modal
          rightButton={accountDeleteAlertMessage.buttons[0]}
          leftButton={accountDeleteAlertMessage.buttons[1]}
          onRightButton={handleRightButton}
          onLeftButton={handleLeftButton}
        >
          {accountDeleteAlertMessage.content}
        </Modal>
      )}
    </>
  );
}

export default DeleteAccount;
