import ProductCard from './ProductCard'

function ProductList(props) {
  if (props.products.length === 0) {
    return (
      <div className="no-products">
        <p>Aucun produit ne correspond à votre recherche.</p>
      </div>
    )
  }

  return (
    <div className="product-grid">
      {props.products.map(function (product) {
        const isFav = props.favoriteIds.includes(product.id)
        return (
          <ProductCard
            key={product.id}
            product={product}
            isFavorite={isFav}
            onToggleFavorite={props.onToggleFavorite}
          />
        )
      })}
    </div>
  )
}

export default ProductList
