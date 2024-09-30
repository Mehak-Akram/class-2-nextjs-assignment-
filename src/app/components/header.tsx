export default function Navbar() {
  return (
    <div>
      <header>
        <nav>
          <a className="left">
            Mehak <span>Akram</span>
          </a>
          <div className="right">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Services</a>
              </li>
              <li>
                <a href="/">Projects</a>
              </li>
              <li>
                <a href="/">Contact Me</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <hr />
    </div>
  );
}
