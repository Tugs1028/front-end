import { useState, useEffect } from 'react';

export default function Home() {
  
  const [backgroundColor, setBackgroundColor] = useState('');

  const changeColor = (color) => {
    setBackgroundColor(color);
  };

  const buttonStyles = (color) => ({
    margin: '10px',
    padding: '15px',
    fontSize: '16px',
    borderRadius: '8px',
    backgroundColor: color,  
    color: 'white'      
  });

  useEffect(() => {
    if (backgroundColor) {
      console.log("The background color has been changed");
    }
  }, [backgroundColor]); 

  return (
    <div style={{ backgroundColor: backgroundColor, height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div>
        <button 
          onClick={() => changeColor('red')} 
          style={buttonStyles('red')}
        >
          Red
        </button>
        <button 
          onClick={() => changeColor('green')} 
          style={buttonStyles('green')}
        >
          Green
        </button>
        <button 
          onClick={() => changeColor('blue')} 
          style={buttonStyles('blue')}
        >
          Blue
        </button>
      </div>
    </div>
  );
}
