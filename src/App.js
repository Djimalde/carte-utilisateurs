import "./App.css";

function App() {
  //Javascript
  const user = {
    name: " KOMDA ABDOUL ",
    age: 32,
    email: "komda@beac.int",
    hobbies: ["gaming", "reader", "Coder"],
  };
  // fonction pour determiner le style de couleur basé sur l'age
  const getAgeStyle = (age) => {
    if (age < 18) {
      return { background: "red" }; // style pour les moins de 18ans
    } else if (age >= 18) {
      return { background: "green" }; //style pour les plus de 18ans
    } else if (age > 65) {
      return { background: "brown" }; //style pour les admis à la retraite
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1> Carte Utilisateur </h1>
        <div className="user-card" style={getAgeStyle(user.age)}>
          <div>{user.name}</div>
          <div>{user.age} ans</div>
          <div>{user.email}</div>
          {user.hobbies.map((hobby, index) => (
            <div key={index} className="hobby">
              {hobby}
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
