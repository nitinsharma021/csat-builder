function Header({ onReset }) {
  return (
    <header className="app-header">
      <div className="brand">
        <div className="brand-mark">✦</div>

        <div>
          <h1>CSAT Builder</h1>
          <p>Design your customer feedback experience</p>
        </div>
      </div>

      <button className="reset-button" onClick={onReset}>
        ↻ Reset
      </button>
    </header>
  );
}

export default Header;