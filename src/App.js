import './App.css';

import Form from './Components/Form/Form';
import ToDoList from './Components/ToDoList/ToDoList';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Ed's Todo List</h1>
      </header>
      <Form />
      <ToDoList/>
    </div>
  );
}

export default App;
