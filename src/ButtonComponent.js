// ButtonComponent.js
import React, { useState } from 'react';
import LuckyDrawForm from './LuckyDrawForm';
function ButtonComponent() {
  const [showNextPage, setShowNextPage] = useState(false);

  const handleButtonClick = () => {
    setShowNextPage(true);
  };

  return (
    <div>
      {showNextPage ? <NextPage /> : <CurrentPage />}
      <button onClick={handleButtonClick}>Submit Response</button>
    </div>
  );
}

export default ButtonComponent;
