import { useState } from "react";
import logoImg from "../../assets/images/logo.png";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#classes", label: "Classes" },
  { href: "#bmi", label: "BMI" },
  { href: "#trainers", label: "Trainers" },
  { href: "#review", label: "Review" },
  { href: "#contact", label: "Contact" },
];

function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="hero-wrap" id="home">
      <Navbar isOpen={isOpen} onToggle={() => setIsOpen((prev) => !prev)} />
      <div className="container hero">
        <HeroContent />
        <HeroCard />
      </div>
    </header>
  );
}

function Navbar({ isOpen, onToggle }) {
  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <Logo />
        <NavToggle isOpen={isOpen} onToggle={onToggle} />
        <NavLinks isOpen={isOpen} />
      </div>
    </nav>
  );
}

function Logo() {
  return (
    <a href="#home" className="logo">
      <img src={logoImg} alt="Powerfull logo" />
    </a>
  );
}

function NavToggle({ isOpen, onToggle }) {
  return (
    <button
      className="nav-toggle"
      aria-expanded={isOpen}
      aria-controls="navMenu"
      onClick={onToggle}
    >
      Menu
    </button>
  );
}

function NavLinks({ isOpen }) {
  return (
    <ul className={`nav-links${isOpen ? " open" : ""}`} id="navMenu">
      {navLinks.map((link) => (
        <li key={link.href}>
          <a href={link.href}>{link.label}</a>
        </li>
      ))}
      <li>
        <a href="#contact" className="btn btn-small">
          Join Us
        </a>
      </li>
    </ul>
  );
}

function HeroContent() {
  return (
    <div className="hero-content">
      <span className="eyebrow">POWERFULL</span>
      <h1>
        Group Practice
        <br />
        With Trainer
      </h1>
      <p>
        Build strength and focus with guided classes, personalized routines,
        and a community that keeps you moving.
      </p>
      <div className="hero-actions">
        <a className="btn" href="#contact">
          Sign Up
        </a>
        <a className="btn btn-outline" href="#classes">
          Details
        </a>
      </div>
    </div>
  );
}

function HeroCard() {
  return (
    <div className="hero-card">
      <strong>Daily Motivation</strong>
      <p>
        Train with certified coaches, track your progress, and reach new goals
        every week.
      </p>
      <div className="hero-actions">
        <a className="btn btn-outline" href="#bmi">
          Check BMI
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
