import React from 'react';
import './AvatarModal.css';

const AvatarModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="avatar-modal-overlay" onClick={onClose}>
      <div className="avatar-modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Change Avatar</h2>
        <p>Select a new avatar or profile picture:</p>
        <input type="file" accept="image/*" />
        <div className="avatar-modal-buttons">
          <button onClick={onClose}>Cancel</button>
          <button>Save</button>
        </div>
      </div>
    </div>
  );
};

export default AvatarModal;
