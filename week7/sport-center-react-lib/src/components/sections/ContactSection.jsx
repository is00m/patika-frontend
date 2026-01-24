import SectionTitle from "../SectionTitle";

const contactInfo = [
  { title: "Mobile Number", value: "+1 123 456 7890" },
  { title: "Email Address", value: "info@powerfull.com" },
];

function ContactSection() {
  return (
    <section id="contact">
      <div className="container">
        <SectionTitle
          title="Contact Us"
          text="Reach out to our team for class schedules, pricing, and tours."
        />
        <ContactGrid />
      </div>
    </section>
  );
}

function ContactGrid() {
  return (
    <div className="contact-grid">
      <ContactInfo />
      <ContactMap />
    </div>
  );
}

function ContactInfo() {
  return (
    <div className="contact-info">
      <ContactDetails />
      <ContactForm />
    </div>
  );
}

function ContactDetails() {
  return (
    <div className="contact-details">
      {contactInfo.map((info) => (
        <InfoRow key={info.title} title={info.title} value={info.value} />
      ))}
    </div>
  );
}

function InfoRow({ title, value }) {
  return (
    <div className="info-row">
      <h4>{title}</h4>
      <p>{value}</p>
    </div>
  );
}

function ContactForm() {
  return (
    <form className="contact-form">
      <h3>Make An Appointment</h3>
      <input type="text" placeholder="Your Name" />
      <input type="email" placeholder="Your Email" />
      <textarea placeholder="Your Message"></textarea>
      <button className="btn" type="submit">
        Send Message
      </button>
    </form>
  );
}

function ContactMap() {
  return (
    <div className="contact-map">
      <iframe
        title="Powerfull gym location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12046.437971879703!2d28.9795308!3d41.0082376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9c5b3b713b3%3A0x5e6b20b7f7d3b049!2sSultanahmet%2C%20Fatih%2F%C4%B0stanbul!5e0!3m2!1sen!2str!4v1704380952800!5m2!1sen!2str"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default ContactSection;
