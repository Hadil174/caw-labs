import ProfileCard from './components/ProfileCard';

function App() {
  return (
    <div>
      <h1>My Team</h1>

      {/* Utilisation du composant avec différents props */}
      <ProfileCard
        name="Adil Chekati"
        role="Senior Lecturer"
        email="adil.chekati@univ-constantine2.dz"
      />

      <ProfileCard
        name="Mohamed Amin Bouchehed"
        role="Frontend Engineer"
        email="aminlazir@gmail.com"
      />
    </div>
  );
}

export default App;
