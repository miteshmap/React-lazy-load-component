import React, { useState } from "react";
import Popup from "reactjs-popup";
import "./styles.css";

const Loader = () => <div>Loading...</div>;

const PopupContent = React.lazy(
  () =>
    new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve(import("./PopupContent.js"));
      }, 1000);
    })
);

export default function App() {
  let [open, setState] = useState(false);

  const openModal = () => {
    setState(true);
  };

  const closeModal = () => {
    setState(false);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={openModal}>Open modal</button>
      <Popup open={open} onClose={closeModal} closeOnDocumentClick={false}>
        <React.Suspense fallback={<Loader />}>
          <button className="close" onClick={closeModal}>
            Close
          </button>
          <PopupContent />
        </React.Suspense>
      </Popup>
    </div>
  );
}
