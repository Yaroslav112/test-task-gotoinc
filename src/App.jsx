import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal/Modal";
import List from "./components/List/List";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [editedDeliveryId, setEditedDeliveryId] = useState(null);

  const onOpen = () => setIsOpen(true);
  const onClose = () => {
    setEditedDeliveryId(null);
    setIsOpen(false);
  };

  const onEdit = (deliveryId) => {
    setEditedDeliveryId(deliveryId);
    onOpen();
  };

  return (
    <div className="App">
      <List onEdit={onEdit} />
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        editedDeliveryId={editedDeliveryId}
      />
      <div className="add-button">
        <button className="button" onClick={onOpen}>
          Add
        </button>
      </div>
    </div>
  );
}

export default App;
