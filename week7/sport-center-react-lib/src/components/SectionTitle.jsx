function SectionTitle({ title, text, align = "center" }) {
  const classes = ["section-title", align === "left" ? "align-left" : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

export default SectionTitle;
