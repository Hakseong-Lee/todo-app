import { Routes, Route } from 'react-router-dom';
import GlobalStyle from './style/globalStyle';
import LoginPage from './pages/auth/LoginPage';
import SignUpPage from './pages/auth/SignupPage';
import TodoPage from './pages/TodoPage';

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/todo" element={<TodoPage />} />
      </Routes>
    </>
  );
}

export default App;
