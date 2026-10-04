function Sidebar(props) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <span className="brand-logo">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2v6a3 3 0 0 1-6 0V2" />
            <path d="M15 2v10" />
            <path d="M15 12v10" />
            <path d="M6 2v20" />
            <path d="M6 2a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4" />
          </svg>
        </span>
        <span className="brand-name">FoodApp</span>
      </div>

      <nav className="sidebar-nav">
        <div className="nav-section">
          <button type="button" className="nav-item active">
            <span className="nav-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </span>
            <span>Accueil</span>
          </button>
        </div>

        <div className="categories-section">
          <h3 className="sidebar-heading">Catégories</h3>
          <ul className="category-list">
            {props.categories.map(function (cat) {
              const isSelected = props.selectedCategory === cat
              return (
                <li key={cat}>
                  <button
                    type="button"
                    className={`category-btn ${isSelected ? 'active' : ''}`}
                    onClick={function () {
                      props.onSelectCategory(cat)
                    }}
                  >
                    {cat}
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </aside>
  )
}

export default Sidebar
