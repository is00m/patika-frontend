import { useState } from 'react'
import './App.css'

const STARTING_BALANCE = 100_000_000_000

const PRODUCTS = [
  {
    id: 'signal-watch',
    name: 'Signal Watch',
    price: 950,
    tag: 'Everyday tech',
  },
  {
    id: 'neural-headset',
    name: 'Neural Headset',
    price: 8_500,
    tag: 'Immersive gear',
  },
  {
    id: 'robo-chef',
    name: 'Robo Chef',
    price: 45_000,
    tag: 'Home automation',
  },
  {
    id: 'solar-roadster',
    name: 'Solar Roadster',
    price: 2_800_000,
    tag: 'Electric performance',
  },
  {
    id: 'sky-loft',
    name: 'Sky Loft Penthouse',
    price: 32_000_000,
    tag: 'City skyline living',
  },
  {
    id: 'island-chain',
    name: 'Private Island Chain',
    price: 650_000_000,
    tag: 'Remote paradise',
  },
  {
    id: 'ocean-dome',
    name: 'Ocean Research Dome',
    price: 1_250_000_000,
    tag: 'Deep sea science',
  },
  {
    id: 'aurora-habitat',
    name: 'Aurora Habitat',
    price: 1_750_000_000,
    tag: 'Polar city dome',
  },
  {
    id: 'orbital-hotel',
    name: 'Orbital Hotel',
    price: 4_250_000_000,
    tag: 'Zero gravity stay',
  },
  {
    id: 'education-grid',
    name: 'Global Education Grid',
    price: 5_000_000_000,
    tag: 'Open learning network',
  },
  {
    id: 'chip-fab',
    name: 'Microchip Fab',
    price: 7_200_000_000,
    tag: 'Advanced semiconductors',
  },
  {
    id: 'quantum-cluster',
    name: 'Quantum AI Cluster',
    price: 9_800_000_000,
    tag: 'Ultra compute lab',
  },
  {
    id: 'mars-supply',
    name: 'Mars Supply Line',
    price: 12_000_000_000,
    tag: 'Interplanetary logistics',
  },
  {
    id: 'moon-base',
    name: 'Personal Moon Base',
    price: 18_500_000_000,
    tag: 'Lunar retreat',
  },
  {
    id: 'planetary-shield',
    name: 'Planetary Shield',
    price: 55_000_000_000,
    tag: 'Climate defense',
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
        <div className="hero__content">
          <span className="eyebrow">Spend Lab</span>
          <h1>Spend Bill Gates' budget, but make it cosmic.</h1>
          <p className="subtitle">
            Start with {formatMoney(STARTING_BALANCE)} and build a future.
          </p>
        </div>
        <div className="balance-card">
          <span className="balance-label">Current Balance</span>
          <span className="balance-amount">{formatMoney(balance)}</span>
        </div>
      </header>

      <main className="content">
        <section className="product-grid">
          {PRODUCTS.map((product, index) => {
            const quantity = cart[product.id]
            const canBuy = balance >= product.price
            const canSell = quantity > 0

            return (
              <article
                className="product-card"
                key={product.id}
                style={{ '--i': index }}
              >
                <div className="product-info">
                  <div>
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
