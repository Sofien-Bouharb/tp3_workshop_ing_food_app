function Navbar(props) {
  return (
    <header className="navbar">
      <div className="search-box">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          className="search-input"
          placeholder="Rechercher un plat..."
          value={props.searchText}
          onChange={props.onSearchChange}
        />
      </div>

      <div className="navbar-actions">
        <button
          type="button"
          className="theme-toggle-btn"
          onClick={props.onToggleTheme}
        >
          {props.darkMode ? '☀️ Mode Clair' : '🌙 Mode Sombre'}
        </button>

        <div className="user-profile" title="Profil utilisateur">
          <span className="user-avatar">👤</span>
        </div>
      </div>
    </header>
  )
}

export default Navbar
