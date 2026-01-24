import SectionTitle from "../SectionTitle";
import trainer1 from "../../assets/images/trainer1.jpg";
import trainer2 from "../../assets/images/trainer2.jpg";
import trainer3 from "../../assets/images/trainer3.jpg";

const trainers = [
  { name: "Jane Doe", role: "Yoga Trainer", image: trainer1 },
  { name: "Nick Hunter", role: "Strength Coach", image: trainer2 },
  { name: "Sarah Lee", role: "Cardio Trainer", image: trainer3 },
];

function TrainersSection() {
  return (
    <section className="trainers-section" id="trainers">
      <div className="container">
        <SectionTitle
          title="Our Best Trainers"
          text="Work with passionate professionals who focus on form, progression, and confidence."
        />
        <TrainerGrid items={trainers} />
      </div>
    </section>
  );
}

function TrainerGrid({ items }) {
  return (
    <div className="trainer-grid">
      {items.map((trainer) => (
        <TrainerCard key={trainer.name} trainer={trainer} />
      ))}
    </div>
  );
}

function TrainerCard({ trainer }) {
  return (
    <figure className="trainer-card">
      <img src={trainer.image} alt={trainer.name} />
      <figcaption>
        <h4>{trainer.name}</h4>
        <span>{trainer.role}</span>
      </figcaption>
    </figure>
  );
}

export default TrainersSection;
