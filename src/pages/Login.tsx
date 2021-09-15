import "../styles/login.scss";

export function Login() {
  return (
    <div id="page-login">
      <aside>
        <h1>ETM</h1>
        <span className="sub">Consultoria e Sistemas</span>
      </aside>
      <main>
        <div className="main-container">
          <form>
            <p>LOGIN</p> 
            <input type="text" className="Input-text" id="input" placeholder="Email" />
            <input type="text" placeholder="Senha" />
            <button type="submit">Entrar</button>
          </form>
        </div>
      </main>
    </div>
  );
}
