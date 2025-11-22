import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
    
      
      {/* Exercice 1 */}
      <Exercise1 />
      
      {/* Exercice 2 */}
      <Exercise2 />
      
      {/* Exercice 3 */}
      <Exercise3 />
      
      {/* Exercice 4 */}
      <Exercise4 />
    </div>
  );
}

// =============================================
// EXERCICE 1 - Composants de base
// =============================================

function ClickMeButton() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div style={{ marginBottom: '20px' }}>
      <button onClick={() => setIsClicked(true)}>ClickMe</button>
      {isClicked && <p>Clicked</p>}
    </div>
  );
}

function ToggleButton() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <button onClick={handleClick}>ClickMe</button>
      <p>{isClicked ? 'Clicked' : 'Not Clicked'}</p>
    </div>
  );
}

function ThreeButtons() {
  const [clickedButton, setClickedButton] = useState(null);

  return (
    <div style={{ marginBottom: '20px' }}>
      <button onClick={() => setClickedButton(1)}>Button1</button>
      <button onClick={() => setClickedButton(2)}>Button2</button>
      <button onClick={() => setClickedButton(3)}>Button3</button>
      
      {clickedButton && <p>button #{clickedButton} was clicked</p>}
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ marginBottom: '20px' }}>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Inc</button>
      <button onClick={() => setCount(count - 1)}>Dec</button>
    </div>
  );
}

function Exercise1() {
  return (
    <section className="exercise-section">
      <h2>Exercice 1 - Composants de base</h2>
      
      <div className="component-block">
        <h3>1.1 - Bouton ClickMe</h3>
        <ClickMeButton />
      </div>
      
      <div className="component-block">
        <h3>1.2 - Bouton Toggle</h3>
        <ToggleButton />
      </div>
      
      <div className="component-block">
        <h3>1.3 - Trois boutons</h3>
        <ThreeButtons />
      </div>
      
      <div className="component-block">
        <h3>1.4 - Compteur</h3>
        <Counter />
      </div>
    </section>
  );
}

// =============================================
// EXERCICE 2 - Manipulation de tableaux
// =============================================

function DisplayTab({ data }) {
  const [tab, setTab] = useState(data);

  const handleDelete = (index) => {
    const newTab = tab.filter((_, i) => i !== index);
    setTab(newTab);
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <ul>
        {tab.map((item, index) => (
          <li 
            key={index} 
            onClick={() => handleDelete(index)}
            style={{ cursor: 'pointer', margin: '5px 0' }}
          >
            Element {index + 1} is: {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Exercise2() {
  const tab1 = ["hello", "world", "from", "react"];
  const tab2 = ["apple", "banana", "orange", "grape"];

  return (
    <section className="exercise-section">
      <h2>Exercice 2 - Manipulation de tableaux</h2>
      
      <div className="component-block">
        <h3>Tableau 1:</h3>
        <DisplayTab data={tab1} />
      </div>
      
      <div className="component-block">
        <h3>Tableau 2:</h3>
        <DisplayTab data={tab2} />
      </div>
    </section>
  );
}

// =============================================
// EXERCICE 3 - Formulaire d'authentification
// =============================================

function AuthForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      setUsers([...users, { username, password, id: Date.now() }]);
      setUsername('');
      setPassword('');
    }
  };

  const handleDelete = (id) => {
    const newUsers = users.filter(user => user.id !== id);
    setUsers(newUsers);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="auth-form">
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-input"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
          />
        </div>
        <button type="submit" className="form-button">Submit</button>
      </form>

      <div>
        <h4>Liste des utilisateurs:</h4>
        <ul>
          {users.map(user => (
            <li key={user.id} className="user-item">
              Username: {user.username}, Password: {user.password}
              <button 
                onClick={() => handleDelete(user.id)}
                className="delete-button"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Exercise3() {
  return (
    <section className="exercise-section">
      <h2>Exercice 3 - Formulaire d'authentification</h2>
      <AuthForm />
    </section>
  );
}

// =============================================
// EXERCICE 4 - Créateur de divs stylisées
// =============================================

function DivCreator() {
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#000000');
  const [divs, setDivs] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (height && width && backgroundColor) {
      const newDiv = {
        id: Date.now(),
        height: `${height}px`,
        width: `${width}px`,
        backgroundColor
      };
      setDivs([...divs, newDiv]);
      setHeight('');
      setWidth('');
      setBackgroundColor('#000000');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="div-form">
        <div>
          <input
            type="number"
            placeholder="Height (px)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="form-input"
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Width (px)"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            className="form-input"
          />
        </div>
        <div>
          <label>Couleur: </label>
          <input
            type="color"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
            className="color-input"
          />
        </div>
        <button type="submit" className="form-button">Add Div</button>
      </form>

      <div className="div-container">
        {divs.map(div => (
          <div
            key={div.id}
            className="custom-div"
            style={{
              height: div.height,
              width: div.width,
              backgroundColor: div.backgroundColor
            }}
          >
            {div.width.replace('px', '')}x{div.height.replace('px', '')}
          </div>
        ))}
      </div>
    </div>
  );
}

function Exercise4() {
  return (
    <section className="exercise-section">
      <h2>Exercice 4 - Créateur de divs stylisées</h2>
      <DivCreator />
    </section>
  );
}

export default App;