
import React, { useState } from 'react';
import Modal from './shared/Modal';

const SettingsModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="btn btn-sm btn-success mb-2">Settings</button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  )
}

export default SettingsModal;
