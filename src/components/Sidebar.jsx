function Sidebar(props) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <span className="brand-logo">🍔</span>
        <span className="brand-name">FoodApp</span>
      </div>

      <nav className="sidebar-nav">
        <div className="nav-section">
          <button type="button" className="nav-item active">
            <span className="nav-icon">🏠</span> Accueil
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
