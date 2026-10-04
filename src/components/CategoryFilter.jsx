function CategoryFilter(props) {
  return (
    <div className="horizontal-categories">
      {props.categories.map(function (cat) {
        const isSelected = props.selectedCategory === cat
        return (
          <button
            key={cat}
            type="button"
            className={`filter-pill ${isSelected ? 'active' : ''}`}
            onClick={function () {
              props.onSelectCategory(cat)
            }}
          >
            {cat}
          </button>
        )
      })}
    </div>
  )
}

export default CategoryFilter
