const stats = [
  { value: "325", label: "Course" },
  { value: "405", label: "Work Out" },
  { value: "305", label: "Working Hour" },
  { value: "705", label: "Happy Client" },
];

function StatsSection() {
  return (
    <section className="stats">
      <StatsContainer>
        <StatsGrid stats={stats} />
      </StatsContainer>
    </section>
  );
}

function StatsContainer({ children }) {
  return <div className="container">{children}</div>;
}

function StatsGrid({ stats: items }) {
  return (
    <div className="stats-grid">
      {items.map((item) => (
        <StatCard key={item.label} value={item.value} label={item.label} />
      ))}
    </div>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="stat-card">
      <h3>{value}</h3>
      <p>{label}</p>
    </div>
  );
}

export default StatsSection;
