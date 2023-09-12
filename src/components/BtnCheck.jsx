import React from 'react';
import './BtnCheck.css';
import { useState } from 'react';

const BtnCheck = () => {
  const [active, setInActive] = useState(false);

  const toggleActive = () => {
    setInActive(!active);
  };
  return (
    <div>
      <button
        className={`btn-check ${active ? 'check-out' : 'check-in'}`}
        onClick={toggleActive}
      >
        {active ? 'Check Out' : 'Check In'}
      </button>
    </div>
  );
};

export default BtnCheck;
