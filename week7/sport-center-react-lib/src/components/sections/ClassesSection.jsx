import { useState } from "react";
import SectionTitle from "../SectionTitle";
import yogaImg from "../../assets/images/yoga.jpg";
import groupImg from "../../assets/images/group.webp";
import soloImg from "../../assets/images/solo.jpg";
import stretchingImg from "../../assets/images/stret.webp";

const classTabs = [
  { id: "yoga", label: "Yoga" },
  { id: "group", label: "Group" },
  { id: "solo", label: "Solo" },
  { id: "stretching", label: "Stretching" },
];

const classData = {
  yoga: {
    title: "Why are your Yoga?",
    desc:
      "Find balance, flexibility, and calm with guided flows designed for beginners and experienced athletes.",
    subtitle: "When comes Yoga Your Time.",
    schedule: [
      "Saturday-Sunday: 8:00am - 10:00am",
      "Monday-Tuesday: 10:00am - 12:00pm",
      "Wednesday-Friday: 3:00pm - 6:00pm",
    ],
    image: yogaImg,
    alt: "Yoga class",
  },
  group: {
    title: "Why choose Group classes?",
    desc:
      "Train together, push harder, and stay motivated with high-energy group sessions led by pros.",
    subtitle: "Group Class Time.",
    schedule: [
      "Monday-Wednesday: 7:00am - 9:00am",
      "Thursday-Friday: 6:00pm - 8:00pm",
      "Saturday: 9:00am - 11:00am",
    ],
    image: groupImg,
    alt: "Group class",
  },
  solo: {
    title: "Solo training focus",
    desc:
      "Personalized routines and one-on-one coaching to meet your individual performance goals.",
    subtitle: "Solo Training Time.",
    schedule: [
      "Daily: 6:00am - 8:00am",
      "Daily: 12:00pm - 2:00pm",
      "Daily: 6:00pm - 9:00pm",
    ],
    image: soloImg,
    alt: "Solo training",
  },
  stretching: {
    title: "Stretching for recovery",
    desc:
      "Improve mobility and reduce soreness with guided stretching sessions.",
    subtitle: "Stretching Time.",
    schedule: [
      "Tuesday-Thursday: 9:00am - 10:00am",
      "Tuesday-Thursday: 4:00pm - 5:00pm",
      "Sunday: 11:00am - 12:00pm",
    ],
    image: stretchingImg,
    alt: "Stretching class",
  },
};

function ClassesSection() {
  const [activeTab, setActiveTab] = useState("yoga");
  const activeClass = classData[activeTab];

  return (
    <section className="classes-section" id="classes">
      <div className="container">
        <SectionTitle
          title="Our Classes"
          text="Choose a focus area and see the daily plan. Every class comes with a dedicated trainer and tailored timing."
        />
        <ClassButtons activeTab={activeTab} onSelect={setActiveTab} />
        <ClassBody data={activeClass} />
      </div>
    </section>
  );
}

function ClassButtons({ activeTab, onSelect }) {
  return (
    <div className="class-buttons">
      {classTabs.map((tab) => (
        <button
          key={tab.id}
          className={`class-btn${activeTab === tab.id ? " active" : ""}`}
          onClick={() => onSelect(tab.id)}
          type="button"
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

function ClassBody({ data }) {
  return (
    <div className="class-body">
      <ClassText
        title={data.title}
        desc={data.desc}
        subtitle={data.subtitle}
        schedule={data.schedule}
      />
      <ClassImage src={data.image} alt={data.alt} />
    </div>
  );
}

function ClassText({ title, desc, subtitle, schedule }) {
  return (
    <div className="class-text">
      <h3>{title}</h3>
      <p>{desc}</p>
      <h4>{subtitle}</h4>
      <ClassSchedule items={schedule} />
    </div>
  );
}

function ClassSchedule({ items }) {
  return (
    <ul className="class-schedule">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function ClassImage({ src, alt }) {
  return (
    <div className="class-image">
      <img src={src} alt={alt} />
    </div>
  );
}

export default ClassesSection;
