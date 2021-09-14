import './App.css';
import './components/TodoPage';
import { TodoPage } from './components/TodoPage';
import { LoginPage } from './components/LoginPage';

function App() {
  return (
    <div className='App'>
      <LoginPage />
      <TodoPage />
    </div>
  );
}

export default App;
