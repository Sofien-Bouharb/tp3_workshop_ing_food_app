import { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import CategoryFilter from './components/CategoryFilter'
import ProductList from './components/ProductList'
import './App.css'

const initialProducts = [
  {
    id: 1,
    name: 'Classic Burger',
    category: 'Burgers',
    description: 'Un burger juteux avec du fromage, salade et sauce spéciale.',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    name: 'BBQ Burger',
    category: 'Burgers',
    description: 'Un burger savoureux avec sauce barbecue et fromage fondu.',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    name: 'Margherita Pizza',
    category: 'Pizza',
    description: 'Sauce tomate, mozzarella et basilic frais.',
    price: 10.99,
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 4,
    name: 'Pasta Alfredo',
    category: 'Pasta',
    description: 'Pâtes crémeuses avec parmesan et herbes.',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281293?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 5,
    name: 'Chocolate Cake',
    category: 'Desserts',
    description: 'Un gâteau au chocolat fondant et délicieux.',
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 6,
    name: 'Fresh Orange Juice',
    category: 'Drinks',
    description: "Un jus d'orange frais et rafraîchissant.",
    price: 3.99,
    image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80',
  },
]

const categories = ['All', 'Burgers', 'Pizza', 'Pasta', 'Desserts', 'Drinks']

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchText, setSearchText] = useState('')
  const [favoriteIds, setFavoriteIds] = useState([])
  const [darkMode, setDarkMode] = useState(false)

  function handleCategorySelect(category) {
    setSelectedCategory(category)
  }

  function handleSearchChange(event) {
    setSearchText(event.target.value)
  }

  function handleToggleFavorite(productId) {
    if (favoriteIds.includes(productId)) {
      setFavoriteIds(favoriteIds.filter(function (id) {
        return id !== productId
      }))
    } else {
      setFavoriteIds([...favoriteIds, productId])
    }
  }

  function handleToggleTheme() {
    setDarkMode(!darkMode)
  }

  const filteredProducts = initialProducts.filter(function (product) {
    const matchesCategory =
      selectedCategory === 'All' || product.category === selectedCategory
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchText.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
      <Sidebar
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
      />

      <main className="main-content">
        <Navbar
          searchText={searchText}
          onSearchChange={handleSearchChange}
          darkMode={darkMode}
          onToggleTheme={handleToggleTheme}
        />

        <section className="promo-banner">
          <div className="banner-content">
            <h1 className="banner-title">
              Des plats délicieux à portée de main !
            </h1>
            <p className="banner-subtitle">
              Commandez vos repas préférés et faites-vous livrer en un rien de temps.
            </p>
            <button type="button" className="btn-order">
              Commander maintenant →
            </button>
          </div>
          <div className="banner-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
              alt="Delicious Burger and Fries"
              className="banner-image"
            />
          </div>
        </section>

        <section className="products-section">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategorySelect}
          />

          <h2 className="section-title">Nos produits</h2>

          <ProductList
            products={filteredProducts}
            favoriteIds={favoriteIds}
            onToggleFavorite={handleToggleFavorite}
          />
        </section>
      </main>
    </div>
  )
}

export default App
