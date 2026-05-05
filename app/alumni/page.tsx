
"use client";

import { useState } from "react";

export default function AlumniPage() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  const alumni = [
    { name: "Aisha Mohammed", photo: "/image 4.png" },
    { name: "Chinedu Okeke", photo: "/image 4.png" },
    { name: "Fatima Yusuf", photo: "/image 4.png" },
    { name: "Tunde Adebayo", photo: "/image 4.png" },
    { name: "Ngozi Eze", photo: "/image 4.png" },
    { name: "Ibrahim Sani", photo: "/image 4.png" },
    { name: "Blessing Okafor", photo: "/image 4.png" },
    { name: "Emeka Nwosu", photo: "/image 4.png" },
    { name: "Hauwa Ali", photo: "/image 4.png" },
    { name: "Yusuf Bello", photo: "/image 4.png" },
    { name: "Chioma Okonkwo", photo: "/image 4.png" },
    { name: "Abdullahi Musa", photo: "/image 4.png" },
  ];

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowSuccess(true);

    setTimeout(() => {
      (e.target as HTMLFormElement).reset();
      setPhotoPreview(null);
      setShowSuccess(false);
    }, 10000);
  };
  const [searchTerm, setSearchTerm] = useState("");
const filteredAlumni = alumni.filter((person) =>
  person.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
);

  return (
    <div className="container">
      <h1>Our Alumni</h1>

      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="alumni-search"
        />
      </div>


      <div className="alumni-grid">
  {filteredAlumni.length === 0 ? (
    <p className="no-results">Alumni not found</p>
  ) : (
    filteredAlumni.map((person, index) => (
      <div key={index} className="alumni-card">
        <img src={person.photo} alt={person.name} className="alumni-photo" />
        <div className="alumni-name">{person.name}</div>
      </div>
    ))
  )}
</div>

        <hr className="section-divider" />
     
      <div className="registration-section">
        <h2 className="form-heading">REGISTER AS ALUMNI</h2>

        <form id="alumniForm" onSubmit={handleSubmit}>
          <div className="form-group1">
            <label htmlFor="fullName">Full Name *</label>
            <input type="text" id="fullName" required placeholder="Enter your full name" />
          </div>

          <div className="form-group">
            <label htmlFor="dob">Date of Birth *</label>
            <input type="date" id="dob" required />
          </div>

          <div className="form-group">
            <label htmlFor="completionDate">Date Completed Program *</label>
            <input type="date" id="completionDate" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input type="email" id="email" required placeholder="your.email@example.com" />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" placeholder="+234 ..." />
          </div>

          <div className="form-group">
            <label htmlFor="occupation">Current Occupation</label>
            <input type="text" id="occupation" placeholder="e.g. Security Consultant, Teacher..." />
          </div>

          
          <div className="form-group">
            <label htmlFor="courses">Course Category *</label>
            <select id="courses" required>
              <option value="">Select your course</option>
              <option value="Junior">Junior Courses</option>
              <option value="Senior">Senior Courses</option>
              <option value="Intermediate">Intermediate Courses</option>
              <option value="Executive/Professional">Executive / Professional Courses</option>
              <option value="Women">Women Courses</option>
              <option value="lifesaving">Life Saving Courses</option>
              <option value="Special">Special Courses</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="photo">Profile Picture</label>
            <input type="file" id="photo" accept="image/*" onChange={handlePhotoChange} />
            <div className="photo-preview-container">
              {photoPreview && (
                <img id="photoPreview" src={photoPreview} alt="Profile preview" />
              )}
            </div>
          </div>

          <button type="submit" className="submit-btn1">Submit Registration</button>
        </form>

        {showSuccess && (
          <div className="success-message">
            <h3></h3>
            <p>Thank you for registering. You will receive an email of confirmation shortly.</p>
          </div>
        )}
      </div>
    </div>
  );
}