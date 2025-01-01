import './App.css';

function App() {
  return (
    <div className="App">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
          <button type="button" className="find-password-button">
            Find My Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
