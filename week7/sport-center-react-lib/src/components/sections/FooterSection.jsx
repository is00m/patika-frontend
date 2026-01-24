import logoImg from "../../assets/images/logo.png";

const infoLinks = [
  { label: "About Us", href: "#home" },
  { label: "Classes", href: "#classes" },
  { label: "Blog", href: "#review" },
  { label: "Contact", href: "#contact" },
];

const helpfulLinks = [
  { label: "Services", href: "#purchase" },
  { label: "Support", href: "#trainers" },
  { label: "Terms and Service", href: "#contact" },
  { label: "Privacy Policy", href: "#contact" },
];

function FooterSection() {
  return (
    <footer className="site-footer">
      <FooterGrid>
        <FooterBrand />
        <FooterColumn title="Information" links={infoLinks} />
        <FooterColumn title="Helpful Links" links={helpfulLinks} />
      </FooterGrid>
    </footer>
  );
}

function FooterGrid({ children }) {
  return <div className="container footer-grid">{children}</div>;
}

function FooterBrand() {
  return (
    <div className="footer-brand">
      <img src={logoImg} alt="Powerfull logo" />
      <p>
        Powerfull is your daily training partner for strength, balance, and
        lasting motivation.
      </p>
    </div>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div className="footer-col">
      <h4>{title}</h4>
      {links.map((link) => (
        <a key={link.label} href={link.href}>
          {link.label}
        </a>
      ))}
    </div>
  );
}

export default FooterSection;
