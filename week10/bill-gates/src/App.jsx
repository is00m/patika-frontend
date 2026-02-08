import { useMemo, useState } from 'react'
import './App.css'

const STARTING_BALANCE = 100_000_000_000

const PRODUCTS = [
  {
    id: 'signal-watch',
    name: 'Signal Watch',
    price: 950,
    tag: 'Minimal daily wearable',
    category: 'Everyday',
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'atlas-earbuds',
    name: 'Atlas Earbuds',
    price: 680,
    tag: 'Crisp silent mode',
    category: 'Everyday',
    image:
      'https://images.unsplash.com/photo-1518441902112-f188b01b3f8f?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'neural-headset',
    name: 'Neural Headset',
    price: 8_500,
    tag: 'Immersive focus gear',
    category: 'Everyday',
    image:
      'https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'robo-chef',
    name: 'Robo Chef',
    price: 45_000,
    tag: 'Autonomous cuisine',
    category: 'Lifestyle',
    image:
      'https://images.unsplash.com/photo-1506368083636-6defb67639f0?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'cloud-atelier',
    name: 'Cloud Atelier',
    price: 120_000,
    tag: 'AI design studio',
    category: 'Lifestyle',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'pulse-bike',
    name: 'Pulse Bike',
    price: 280_000,
    tag: 'Electric endurance',
    category: 'Mobility',
    image:
      'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'solar-roadster',
    name: 'Solar Roadster',
    price: 2_800_000,
    tag: 'Zero emission speed',
    category: 'Mobility',
    image:
      'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'hydro-jet',
    name: 'Hydro Jet',
    price: 6_500_000,
    tag: 'Ocean sprint craft',
    category: 'Mobility',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'sky-loft',
    name: 'Sky Loft Penthouse',
    price: 32_000_000,
    tag: 'Glass city halo',
    category: 'Real Estate',
    image:
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'coastal-manor',
    name: 'Coastal Manor',
    price: 85_000_000,
    tag: 'Private shoreline',
    category: 'Real Estate',
    image:
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'island-chain',
    name: 'Private Island Chain',
    price: 650_000_000,
    tag: 'Remote paradise',
    category: 'Real Estate',
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'ocean-dome',
    name: 'Ocean Research Dome',
    price: 1_250_000_000,
    tag: 'Deep sea science',
    category: 'Science',
    image:
      'https://images.unsplash.com/photo-1504814532849-927dcd1c08f1?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'aurora-habitat',
    name: 'Aurora Habitat',
    price: 1_750_000_000,
    tag: 'Polar city dome',
    category: 'Science',
    image:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'orbital-hotel',
    name: 'Orbital Hotel',
    price: 4_250_000_000,
    tag: 'Zero gravity stay',
    category: 'Space',
    image:
      'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'lunar-haven',
    name: 'Lunar Haven',
    price: 11_400_000_000,
    tag: 'Moonlight retreat',
    category: 'Space',
    image:
      'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'mars-supply',
    name: 'Mars Supply Line',
    price: 12_000_000_000,
    tag: 'Interplanetary logistics',
    category: 'Space',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'education-grid',
    name: 'Global Education Grid',
    price: 5_000_000_000,
    tag: 'Open learning network',
    category: 'Impact',
    image:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'clean-energy',
    name: 'Clean Energy Basin',
    price: 6_400_000_000,
    tag: 'Grid-scale power',
    category: 'Impact',
    image:
      'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'chip-fab',
    name: 'Microchip Fab',
    price: 7_200_000_000,
    tag: 'Advanced semiconductors',
    category: 'Science',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'quantum-cluster',
    name: 'Quantum AI Cluster',
    price: 9_800_000_000,
    tag: 'Ultra compute lab',
    category: 'Science',
    image:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'planetary-shield',
    name: 'Planetary Shield',
    price: 55_000_000_000,
    tag: 'Climate defense',
    category: 'Impact',
    image:
      'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=900&q=80',
  },
]

const formatMoney = (value) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value)

function App() {
  const [balance, setBalance] = useState(STARTING_BALANCE)
  const [cart, setCart] = useState(() =>
    PRODUCTS.reduce((acc, product) => {
      acc[product.id] = 0
      return acc
    }, {})
  )
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [query, setQuery] = useState('')

  const categories = useMemo(() => {
    const unique = Array.from(new Set(PRODUCTS.map((product) => product.category)))
    return ['All', ...unique]
  }, [])

  const visibleProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory
      const matchesQuery = normalizedQuery
        ? product.name.toLowerCase().includes(normalizedQuery) ||
          product.tag.toLowerCase().includes(normalizedQuery)
        : true

      return matchesCategory && matchesQuery
    })
  }, [query, selectedCategory])

  const handleBuy = (product) => {
    if (balance < product.price) return
    setBalance((prev) => prev - product.price)
    setCart((prev) => ({
      ...prev,
      [product.id]: prev[product.id] + 1,
    }))
  }

  const handleSell = (product) => {
    if (cart[product.id] === 0) return
    setBalance((prev) => prev + product.price)
    setCart((prev) => ({
      ...prev,
      [product.id]: prev[product.id] - 1,
    }))
  }

  const receiptItems = PRODUCTS.filter((product) => cart[product.id] > 0).map(
    (product) => ({
      ...product,
      quantity: cart[product.id],
      total: cart[product.id] * product.price,
    })
  )

  const totalSpent = receiptItems.reduce((sum, item) => sum + item.total, 0)

  return (
    <div className="app">
      <header className="hero">
        <div>
          <p className="eyebrow">Spend Lab</p>
          <h1>Build a future with Bill Gates' budget.</h1>
          <p className="subtitle">
            Start with {formatMoney(STARTING_BALANCE)} and curate your spend.
          </p>
        </div>
        <div className="balance-card">
          <span className="balance-label">Current Balance</span>
          <span className="balance-amount">{formatMoney(balance)}</span>
        </div>
      </header>

      <main className="content">
        <section className="controls">
          <div className="search">
            <label htmlFor="search">Search</label>
            <input
              id="search"
              type="text"
              placeholder="Search products or tags"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
          <div className="filters">
            <p className="filters-label">Category</p>
            <div className="filters-list">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`chip ${
                    selectedCategory === category ? 'is-active' : ''
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          <div className="results">Showing {visibleProducts.length} items</div>
        </section>

        <section className="product-grid">
          {visibleProducts.map((product) => {
            const quantity = cart[product.id]
            const canBuy = balance >= product.price
            const canSell = quantity > 0

            return (
              <article className="product-card" key={product.id}>
                <div className="product-image">
                  <img src={product.image} alt={product.name} loading="lazy" />
                </div>
                <div className="product-body">
                  <div>
                    <p className="product-category">{product.category}</p>
                    <h2>{product.name}</h2>
                    <p className="product-tag">{product.tag}</p>
                  </div>
                  <p className="product-price">{formatMoney(product.price)}</p>
                </div>
                <div className="product-actions">
                  <button
                    className="btn ghost"
                    onClick={() => handleSell(product)}
                    disabled={!canSell}
                  >
                    Sell
                  </button>
                  <div className="qty" aria-live="polite">
                    {quantity}
                  </div>
                  <button
                    className="btn"
                    onClick={() => handleBuy(product)}
                    disabled={!canBuy}
                  >
                    Buy
                  </button>
                </div>
              </article>
            )
          })}
        </section>

        <section className="receipt">
          <div className="receipt-header">
            <h3>Your Receipt</h3>
            <span className="receipt-hint">Only items you bought show up.</span>
          </div>
          {receiptItems.length === 0 ? (
            <p className="receipt-empty">
              You have not purchased anything yet. Try a Signal Watch.
            </p>
          ) : (
            <div className="receipt-body">
              {receiptItems.map((item) => (
                <div className="receipt-row" key={item.id}>
                  <span className="receipt-name">{item.name}</span>
                  <span className="receipt-qty">x{item.quantity}</span>
                  <span className="receipt-price">
                    {formatMoney(item.total)}
                  </span>
                </div>
              ))}
              <div className="receipt-total">
                <span>Total Spent</span>
                <span>{formatMoney(totalSpent)}</span>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  )
}

export default App
