import SectionTitle from "../SectionTitle";
import client1 from "../../assets/images/client1.jpg";
import client2 from "../../assets/images/client2.jpg";

const reviews = [
  {
    name: "Diet Expert",
    role: "CEO",
    image: client1,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet commodo sapien. Nulla facilisi ipsum dolor.",
  },
  {
    name: "Cardio Trainer",
    role: "Coach",
    image: client2,
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consequat, nibh a tincidunt aliquet, lorem urna consequat ex.",
  },
];

function ReviewSection() {
  return (
    <section className="review-section" id="review">
      <div className="container">
        <SectionTitle
          title="Review Client"
          text="See what our members say about the experience and support."
        />
        <ReviewGrid items={reviews} />
      </div>
    </section>
  );
}

function ReviewGrid({ items }) {
  return (
    <div className="review-grid">
      {items.map((review) => (
        <ReviewCard key={review.name} review={review} />
      ))}
    </div>
  );
}

function ReviewCard({ review }) {
  return (
    <article className="review-card">
      <ReviewHeader review={review} />
      <p>{review.text}</p>
    </article>
  );
}

function ReviewHeader({ review }) {
  return (
    <div className="review-header">
      <img src={review.image} alt={review.name} />
      <div>
        <h4>{review.name}</h4>
        <span>{review.role}</span>
      </div>
    </div>
  );
}

export default ReviewSection;
