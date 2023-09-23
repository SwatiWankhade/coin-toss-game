import React, { useState } from 'react';

const HeadTail = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [coinHistory, setCoinHistory] = useState([]);

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const handleSubmit = () => {
    if (!selectedValue) {
      alert('Please select a value.');
      return;
    }

    setCoinHistory((prevHistory) => {
      const lastIndex = prevHistory.lastIndexOf(selectedValue);

      if (lastIndex === -1) {
        return [...prevHistory, selectedValue];
      } else {
        
        const newHistory = [...prevHistory];
        newHistory.splice(lastIndex + 1, 0, selectedValue);
        return newHistory;
      }
    });

    
    setSelectedValue('');
  };

  return (
    <div className='homePage'>
      <h2>Head & Tail Game</h2>
      <div className='buttonsLink'>
      <select value={selectedValue} onChange={handleChange} className='dropdown'>
        <option value="">Select Value</option>
        <option value="H">H</option>
        <option value="T">T</option>
      </select>
      <button onClick={handleSubmit} className='select'>Submit</button>
      <div>
        {coinHistory.map((coin, index) => (
          <div key={index}>{coin}</div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default HeadTail;
