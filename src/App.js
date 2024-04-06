import './App.css';

const App = () => {
  const arr = ['Austria', 'Belgium', 'Canada'];

  const handleClick = (event, key) => {
    console.log(event.target);
    console.log('key index: ', key);
  };

  return (
    <div>
      {arr.map((element, key) => (
        <div
          onClick={event => handleClick(event, key)}
          key={key}
        >
          {element}
          <hr />
        </div>
      ))}
    </div>
  );
};

export default App;
