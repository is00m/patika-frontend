import { useState } from 'react'
import './App.css'

const STARTING_BALANCE = 100_000_000_000

const PRODUCTS = [
  {
    id: 'signal-watch',
    name: 'Signal Watch',
    price: 950,
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'atlas-earbuds',
    name: 'Atlas Earbuds',
    price: 680,
    image:
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'neural-headset',
    name: 'Neural Headset',
    price: 8_500,
    image:
      'https://images.pexels.com/photos/7241309/pexels-photo-7241309.jpeg?cs=srgb&dl=pexels-eren-li-7241309.jpg&fm=jpg',
  },
  {
    id: 'robo-chef',
    name: 'Robo Chef',
    price: 45_000,
    image:
      'https://images.pexels.com/photos/4252150/pexels-photo-4252150.jpeg?cs=srgb&dl=pexels-cottonbro-4252150.jpg&fm=jpg',
  },
  {
    id: 'cloud-atelier',
    name: 'Cloud Atelier',
    price: 120_000,
    image:
      'https://images.pexels.com/photos/10922370/pexels-photo-10922370.jpeg?cs=srgb&dl=pexels-elgolovchenko-10922370.jpg&fm=jpg',
  },
  {
    id: 'pulse-bike',
    name: 'Pulse Bike',
    price: 280_000,
    image:
      'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'solar-roadster',
    name: 'Solar Roadster',
    price: 2_800_000,
    image:
      'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'hydro-jet',
    name: 'Hydro Jet',
    price: 6_500_000,
    image:
      'https://images.pexels.com/photos/18636561/pexels-photo-18636561.jpeg?cs=srgb&dl=pexels-keeganjchecks-18636561.jpg&fm=jpg',
  },
  {
    id: 'sky-loft',
    name: 'Sky Loft Penthouse',
    price: 32_000_000,
    image:
      'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'coastal-manor',
    name: 'Coastal Manor',
    price: 85_000_000,
    image:
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'island-chain',
    name: 'Private Island Chain',
    price: 650_000_000,
    image:
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'ocean-dome',
    name: 'Ocean Research Dome',
    price: 1_250_000_000,
    image:
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'aurora-habitat',
    name: 'Aurora Habitat',
    price: 1_750_000_000,
    image:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'orbital-hotel',
    name: 'Orbital Hotel',
    price: 4_250_000_000,
    image:
      'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'lunar-haven',
    name: 'Lunar Haven',
    price: 11_400_000_000,
    image:
      'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'mars-supply',
    name: 'Mars Supply Line',
    price: 12_000_000_000,
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'education-grid',
    name: 'Global Education Grid',
    price: 5_000_000_000,
    image:
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'clean-energy',
    name: 'Clean Energy Basin',
    price: 6_400_000_000,
    image:
      'https://images.pexels.com/photos/33813856/pexels-photo-33813856.jpeg?cs=srgb&dl=pexels-vitaliy-bratkov-903020757-33813856.jpg&fm=jpg',
  },
  {
    id: 'chip-fab',
    name: 'Microchip Fab',
    price: 7_200_000_000,
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'quantum-cluster',
    name: 'Quantum AI Cluster',
    price: 9_800_000_000,
    image:
      'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?cs=srgb&dl=pexels-cookiecutter-1148820.jpg&fm=jpg',
  },
  {
    id: 'planetary-shield',
    name: 'Planetary Shield',
    price: 55_000_000_000,
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
      <header className="site-header">
        <div className="avatar" aria-hidden="true">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Bill_Gates_2018.jpg"
            alt="Bill Gates"
          />
        </div>
        <div>
          <h1>Spend Bill Gates' Money</h1>
          <p className="subtitle">How fast can you spend it all?</p>
        </div>
      </header>

      <div className="balance-bar" aria-live="polite">
        {formatMoney(balance)}
      </div>

      <main className="container">
        <section className="product-grid">
          {PRODUCTS.map((product) => {
            const quantity = cart[product.id]
            const canBuy = balance >= product.price
            const canSell = quantity > 0

            return (
              <article className="product-card" key={product.id}>
                <div className="product-image">
                  <img src={product.image} alt={product.name} loading="lazy" />
                </div>
                <div className="product-info">
                  <h2>{product.name}</h2>
                  <p className="product-price">{formatMoney(product.price)}</p>
                </div>
                <div className="product-actions">
                  <button
                    className="btn"
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
            )
          })}
        </section>

        <section className="receipt">
          <h3>Your Receipt</h3>
          {receiptItems.length === 0 ? (
            <p className="receipt-empty">You have not purchased anything yet.</p>
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
        </section>
      </main>
    </div>
  )
}

export default App
