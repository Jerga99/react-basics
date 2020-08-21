
import React, { useState } from 'react';
import Modal from './shared/Modal';
import SettingsForm from './SettingsForm';

const SettingsModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const saveSettings = (settings) => {
    alert(JSON.stringify(settings));
    setIsOpen(false);
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="btn btn-sm btn-success mb-2">Settings</button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <SettingsForm onSubmit={saveSettings} />
      </Modal>
    </>
  )
}

export default SettingsModal;
