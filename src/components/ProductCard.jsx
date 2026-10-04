function ProductCard(props) {
  const product = props.product

  return (
    <div className="product-card">
      <div className="card-image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
          onError={function (e) {
            e.target.onerror = null
            e.target.src = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80'
          }}
        />
        <span className="category-badge">{product.category}</span>
        <button
          type="button"
          className={`favorite-btn ${props.isFavorite ? 'liked' : ''}`}
          onClick={function () {
            props.onToggleFavorite(product.id)
          }}
          aria-label={props.isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
        >
          {props.isFavorite ? '♥' : '♡'}
        </button>
      </div>

      <div className="card-body">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="card-footer">
          <span className="product-price">${product.price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
