import React from 'react';
import ClickMeButton from './ClickMeButton'; // Adjust paths as needed
import ToggleButton from './ToggleButton';
import ButtonApp from './ButtonApp';
import Counter from './Counter';

function App() {
  return (
    <div>
      <h2>Task 1: ClickMe Button</h2>
      <ClickMeButton />
      
      <h2>Task 2: Toggle Button</h2>
      <ToggleButton />
      
      <h2>Task 3: Button App</h2>
      <ButtonApp />
      
      <h2>Task 4: Counter</h2>
      <Counter />
    </div>
  );
}

export default App;
