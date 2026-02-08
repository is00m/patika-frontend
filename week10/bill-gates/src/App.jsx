import { useState } from 'react'
import './App.css'

const STARTING_BALANCE = 100_000_000_000

const PRODUCTS = [
  { id: 'big-mac', name: 'Big Mac', price: 2, emoji: '🍔' },
  { id: 'flip-flops', name: 'Flip Flops', price: 3, emoji: '🩴' },
  { id: 'coke-pack', name: 'Coca-Cola Pack', price: 5, emoji: '🥤' },
  { id: 'movie-ticket', name: 'Movie Ticket', price: 12, emoji: '🎟️' },
  { id: 'book', name: 'Book', price: 15, emoji: '📘' },
  { id: 'lobster-dinner', name: 'Lobster Dinner', price: 45, emoji: '🦞' },
  { id: 'video-game', name: 'Video Game', price: 60, emoji: '🎮' },
  { id: 'amazon-echo', name: 'Amazon Echo', price: 99, emoji: '🔊' },
  { id: 'netflix-year', name: 'Year of Netflix', price: 100, emoji: '🎬' },
  { id: 'air-jordans', name: 'Air Jordans', price: 125, emoji: '👟' },
  { id: 'airpods', name: 'Airpods', price: 199, emoji: '🎧' },
  { id: 'gaming-console', name: 'Gaming Console', price: 299, emoji: '🕹️' },
  { id: 'drone', name: 'Drone', price: 350, emoji: '🛸' },
  { id: 'smartphone', name: 'Smartphone', price: 699, emoji: '📱' },
  { id: 'bike', name: 'Bike', price: 800, emoji: '🚲' },
  { id: 'kitten', name: 'Kitten', price: 1_500, emoji: '🐱' },
  { id: 'puppy', name: 'Puppy', price: 1_500, emoji: '🐶' },
  { id: 'auto-rickshaw', name: 'Auto Rickshaw', price: 2_300, emoji: '🛺' },
  { id: 'horse', name: 'Horse', price: 2_500, emoji: '🐴' },
  { id: 'acre-farmland', name: 'Acre of Farmland', price: 3_000, emoji: '🌾' },
  { id: 'designer-handbag', name: 'Designer Handbag', price: 5_500, emoji: '👜' },
  { id: 'hot-tub', name: 'Hot Tub', price: 6_000, emoji: '🛁' },
  { id: 'luxury-wine', name: 'Luxury Wine', price: 7_000, emoji: '🍷' },
  { id: 'diamond-ring', name: 'Diamond Ring', price: 10_000, emoji: '💍' },
  { id: 'jet-ski', name: 'Jet Ski', price: 12_000, emoji: '🛥️' },
  { id: 'rolex', name: 'Rolex', price: 15_000, emoji: '⌚' },
  { id: 'ford-f150', name: 'Ford F-150', price: 30_000, emoji: '🚚' },
  { id: 'tesla', name: 'Tesla', price: 75_000, emoji: '🚗' },
  { id: 'monster-truck', name: 'Monster Truck', price: 150_000, emoji: '🚙' },
  { id: 'ferrari', name: 'Ferrari', price: 250_000, emoji: '🏎️' },
  { id: 'single-family-home', name: 'Single Family Home', price: 300_000, emoji: '🏠' },
  { id: 'gold-bar', name: 'Gold Bar', price: 700_000, emoji: '🪙' },
  {
    id: 'mcdonalds-franchise',
    name: 'McDonalds Franchise',
    price: 1_500_000,
    emoji: '🍟',
  },
  { id: 'superbowl-ad', name: 'Superbowl Ad', price: 5_250_000, emoji: '🏈' },
  { id: 'yacht', name: 'Yacht', price: 7_500_000, emoji: '🛥️' },
  { id: 'm1-abrams', name: 'M1 Abrams', price: 8_000_000, emoji: '🪖' },
  { id: 'formula-1', name: 'Formula 1 Car', price: 15_000_000, emoji: '🏎️' },
  { id: 'apache', name: 'Apache Helicopter', price: 31_000_000, emoji: '🚁' },
  { id: 'mansion', name: 'Mansion', price: 45_000_000, emoji: '🏰' },
  { id: 'make-a-movie', name: 'Make a Movie', price: 100_000_000, emoji: '🎥' },
  { id: 'boeing-747', name: 'Boeing 747', price: 148_000_000, emoji: '✈️' },
  { id: 'mona-lisa', name: 'Mona Lisa', price: 780_000_000, emoji: '🖼️' },
  { id: 'skyscraper', name: 'Skyscraper', price: 850_000_000, emoji: '🏙️' },
  { id: 'cruise-ship', name: 'Cruise Ship', price: 930_000_000, emoji: '🛳️' },
  { id: 'nba-team', name: 'NBA Team', price: 2_120_000_000, emoji: '🏀' },
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

  const handleQuantityChange = (product, value) => {
    const current = cart[product.id]
    const nextValue = Number.parseInt(value, 10)
    const nextQuantity = Number.isNaN(nextValue) ? 0 : Math.max(nextValue, 0)

    if (nextQuantity === current) return

    if (nextQuantity > current) {
      const desiredAdd = nextQuantity - current
      const maxAffordable = Math.floor(balance / product.price)
      const actualAdd = Math.min(desiredAdd, maxAffordable)
      if (actualAdd <= 0) return

      setBalance((prev) => prev - actualAdd * product.price)
      setCart((prev) => ({
        ...prev,
        [product.id]: prev[product.id] + actualAdd,
      }))
      return
    }

    const removeCount = current - nextQuantity
    setBalance((prev) => prev + removeCount * product.price)
    setCart((prev) => ({
      ...prev,
      [product.id]: nextQuantity,
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
        <div className="hero-card">
          <div className="hero-avatar" aria-hidden="true">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Bill_Gates_2018.jpg"
              alt="Bill Gates"
            />
          </div>
          <h1>Spend Bill Gates' Money</h1>
        </div>
      </header>

      <div className="balance-bar" aria-live="polite">
        {formatMoney(balance)}
      </div>

      <main className="container">
        <div className="layout">
          <section className="product-grid">
            {PRODUCTS.map((product) => {
              const quantity = cart[product.id]
              const canBuy = balance >= product.price
              const canSell = quantity > 0

              return (
                <article className="product-card" key={product.id}>
                  <div className="product-image" aria-hidden="true">
                    <span className="emoji" role="img" aria-label={product.name}>
                      {product.emoji}
                    </span>
                  </div>
                  <div className="product-info">
                    <h2>{product.name}</h2>
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
                    <input
                      className="qty-input"
                      type="number"
                      min="0"
                      value={quantity}
                      onChange={(event) =>
                        handleQuantityChange(product, event.target.value)
                      }
                      aria-label={`${product.name} quantity`}
                    />
                    <button
                      className="btn buy"
                      onClick={() => handleBuy(product)}
                      disabled={!canBuy}
                    >
                      Buy
                    </button>
                  </div>
                </article>
              )}
            )}
          </section>

          <aside className="receipt">
            <h3>Your Receipt</h3>
            {receiptItems.length === 0 ? (
              <p className="receipt-empty">
                You have not purchased anything yet.
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
                  <span>Total</span>
                  <span>{formatMoney(totalSpent)}</span>
                </div>
              </div>
            )}
          </aside>
        </div>
      </main>
    </div>
  )
}

export default App
