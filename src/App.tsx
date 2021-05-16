
import './App.scss';
import Menu from './menu/Menu';
import Content from './body/Content';

const App = () => {
  return (
    <div className="App">
      <div className="background-circle-container">
        <div className="background-circle"></div>
      </div>
      <Menu/>
      <Content/>
    </div>
  );
}

export default App;
