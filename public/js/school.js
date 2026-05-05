const schools = [
    { name: "Mountain School", location: "Shere Hills, Jos" },
    { name: "Sea School", location: "Apapa, Lagos" },
    { name: "Desert School", location: "Fika, Yobe" },
    { name: "Forest School", location: "Aluu, Rivers" },
    { name: "Sahel School", location: "Kastina" },
    { name: "Kadannah School", location: "Kaduna" },
    { name: "Savannah School", location: "" },
    { name: "Highland School", location: "Enugu" },
    { name: "Valley School", location: "Owode, Ogun" },
    { name: "Mobile School", location: "Abuja" },
    { name: "Women Unit", location: "Otu-Jeremi, Delta" },
    { name: "Spring School", location: "Ilawе, Ekiti" },
    { name: "Rockland Training School", location: "Ligawa" },
    { name: "Online Training School", location: "" }
  ];

  const container = document.getElementById('schoolsList');

  schools.forEach(school => {
    const card = document.createElement('div');
    card.className = 'school-card';

    let locHTML = '';
    if (school.location) {
      const parts = school.location.split(', ');
      if (parts.length === 2) {
        locHTML = `<span class="school-location">${parts[0]}, <span class="location-city">${parts[1]}</span></span>`;
      } else {
        locHTML = `<span class="school-location">${school.location}</span>`;
      }
    }

    card.innerHTML = `
      <div class="school-content">
        <div class="school-name">${school.name}</div>
        ${locHTML ? locHTML : '<span class="school-location">—</span>'}
      </div>
    `;

    container.appendChild(card);
  });