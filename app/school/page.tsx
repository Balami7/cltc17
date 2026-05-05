export const metadata = {
  title: "Training Schools - Citizenship and Leadership Training Centre",
  description: "CLTC Training Schools across Nigeria",
};

export default function TrainingSchoolsPage() {
  const schools = [
    { id: 1, name: "Mountain School", location: "Shere Hills, Jos" },
    { id: 2, name: "Sea School", location: "Apapapa, Lagos" },
    { id: 3, name: "Desert School", location: "Fika, Yobe" },
    { id: 4, name: "Forest School", location: "Aluu, Rivers" },
    { id: 5, name: "Sahel School", location: "Kastina" },
    { id: 6, name: "Kadannah School", location: "Kaduna" },
  ];

  return (
    <main>
      <div className="container">
        <div className="courses-header">
          <h1>Training Schools</h1>
        </div>

        <div className="schools-grid">
          {schools.map((school) => (
            <div key={school.id} className="school-card">
              <h3>{school.name}</h3>
              <p>{school.location}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}