import './App.css';
import Addtask from './component/Addtask';
import TodoList from './component/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filtered from './component/Filter'
function App() {
  return (
    <div className="container" >
      <Addtask/>

      <TodoList/>
      <hr/>
      < Filtered/>
    </div> 
  );
}

export default App;
