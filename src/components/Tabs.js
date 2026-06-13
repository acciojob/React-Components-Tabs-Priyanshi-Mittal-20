import React from 'react';

const Tabs = () => {
  return (
    <>
      <div className="tabs">
        <button id="Home-Tab" className="tab">Home</button>
        <button id="About-Tab" className="tab">About</button>
        <button id="Features-Tab" className="tab">Features</button>
      </div>

      <div className="viewport">
        <h1>Pages Go Here</h1>
      </div>
    </>
  );
};

export default Tabs;