import SectionTitle from "../SectionTitle";
import purchase1 from "../../assets/images/purchase1.jpg";
import purchase2 from "../../assets/images/purchase2.jpg";
import purchase3 from "../../assets/images/purchase3.jpg";
import purchase4 from "../../assets/images/purchase4.jpg";

const products = [
  {
    name: "Kettlebell / 5kg",
    image: purchase1,
    oldPrice: "$89,99",
    price: "$59,99",
  },
  {
    name: "Treadmill",
    image: purchase2,
    oldPrice: "$599,99",
    price: "$399,99",
  },
  {
    name: "Adjustable Dumbbell",
    image: purchase3,
    oldPrice: "$249,99",
    price: "$199,99",
  },
  {
    name: "Kettlebell / 3kg",
    image: purchase4,
    oldPrice: "$49,99",
    price: "$39,99",
  },
];

function PurchaseSection() {
  return (
    <section id="purchase">
      <div className="container">
        <SectionTitle
          title="Purchase From Us"
          text="Build your home setup with curated gear from our store."
        />
        <PurchaseGrid items={products} />
      </div>
    </section>
  );
}

function PurchaseGrid({ items }) {
  return (
    <div className="purchase-grid">
      {items.map((product) => (
        <ProductCard key={product.name} product={product} />
      ))}
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <img src={product.image} alt={product.name} />
      <div className="product-info">
        <h4>{product.name}</h4>
        <p>
          <span>{product.oldPrice}</span>
          {product.price}
        </p>
        <button className="btn btn-outline" type="button">
          Add to cart
        </button>
      </div>
    </article>
  );
}

export default PurchaseSection;
