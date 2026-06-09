"use client";

import { useState } from "react";

const SILHOUETTE = "/sil.jpeg";
const GALLERY_IMAGE = "/gal.jpg";

const schools = [
  {
    id: 1,
    name: "Mountain Training School",
    location: "Jos, Plateau State",
    image: GALLERY_IMAGE,
    coordinator: {
      name: "Mr. Abdulmumuni Adamu Maimako",
      image: SILHOUETTE,
    },
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    gallery: [GALLERY_IMAGE, GALLERY_IMAGE, GALLERY_IMAGE, GALLERY_IMAGE],
  },

  {
    id: 2,
    name: "Sea Training School",
    location: "Apapa, Lagos",
    image: GALLERY_IMAGE,
    coordinator: {
      name: "Dr. Ekundayo Olubumi O.",
      image: SILHOUETTE,
    },
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    gallery: [GALLERY_IMAGE, GALLERY_IMAGE, GALLERY_IMAGE, GALLERY_IMAGE],
  },

  {
    id: 3,
    name: "Valley School",
    location: "Owode Egba",
    image: GALLERY_IMAGE,
    coordinator: {
      name: "Mr. Babalola Yusuf Abiondum",
      image: SILHOUETTE,
    },
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    gallery: [GALLERY_IMAGE, GALLERY_IMAGE, GALLERY_IMAGE, GALLERY_IMAGE],
  },

  {
    id: 4,
    name: "Desert School",
    location: "Fika, Yobe State",
    image: GALLERY_IMAGE,
    coordinator: {
      name: "Mr. Idris Malik",
      image: SILHOUETTE,
    },
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    gallery: [GALLERY_IMAGE, GALLERY_IMAGE, GALLERY_IMAGE, GALLERY_IMAGE],
  },

  {
    id: 5,
    name: "Highland School",
    location: "Ngwo, Enugu State",
    image: GALLERY_IMAGE,
    coordinator: {
      name: "Mrs. Maureen Okeiyi",
      image: SILHOUETTE,
    },
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    gallery: [GALLERY_IMAGE, GALLERY_IMAGE, GALLERY_IMAGE, GALLERY_IMAGE],
  },

  {
    id: 6,
    name: "Savannah Training School",
    location: "Kudan, Zaria, Kaduna State",
    image: GALLERY_IMAGE,
    coordinator: {
      name: "Mr. Danladi Joseph Tunje",
      image: SILHOUETTE,
    },
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    gallery: [GALLERY_IMAGE, GALLERY_IMAGE, GALLERY_IMAGE, GALLERY_IMAGE],
  },

  {
    id: 7,
    name: "Sahel School",
    location: "Kukai, Katsina State",
    image: GALLERY_IMAGE,
    coordinator: {
      name: "Mr. Anthony Arafan",
      image: SILHOUETTE,
    },
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    gallery: [GALLERY_IMAGE, GALLERY_IMAGE, GALLERY_IMAGE, GALLERY_IMAGE],
  },

  {
    id: 8,
    name: "Rockland School",
    location: "Dutse",
    image: GALLERY_IMAGE,
    coordinator: {
      name: "Mr. Musa Abdullahi Ibrahim",
      image: SILHOUETTE,
    },
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    gallery: [GALLERY_IMAGE, GALLERY_IMAGE, GALLERY_IMAGE, GALLERY_IMAGE],
  },

  {
    id: 9,
    name: "Spring School",
    location: "Ekiti State",
    image: GALLERY_IMAGE,
    coordinator: {
      name: "Mr. Oni Caleb",
      image: SILHOUETTE,
    },
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    gallery: [GALLERY_IMAGE, GALLERY_IMAGE, GALLERY_IMAGE, GALLERY_IMAGE],
  },

  {
    id: 10,
    name: "Mobile School",
    location: "Nigeria",
    image: GALLERY_IMAGE,
    coordinator: {
      name: "Mr. Alex Akinnusi",
      image: SILHOUETTE,
    },
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    gallery: [GALLERY_IMAGE, GALLERY_IMAGE, GALLERY_IMAGE, GALLERY_IMAGE],
  },

  {
    id: 11,
    name: "Online School",
    location: "Virtual",
    image: GALLERY_IMAGE,
    coordinator: {
      name: "Mr. Akor Yakubu Gowon",
      image: SILHOUETTE,
    },
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    gallery: [GALLERY_IMAGE, GALLERY_IMAGE, GALLERY_IMAGE, GALLERY_IMAGE],
  },

  {
    id: 12,
    name: "Forest Training School",
    location: "Aluu, Port Harcourt",
    image: GALLERY_IMAGE,
    coordinator: {
      name: "Mrs. Ethel Efere Papele",
      image: SILHOUETTE,
    },
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    gallery: [GALLERY_IMAGE, GALLERY_IMAGE, GALLERY_IMAGE, GALLERY_IMAGE],
  },

  {
    id: 13,
    name: "Women Training School",
    location: "Utu-Jeremi",
    image: GALLERY_IMAGE,
    coordinator: {
      name: "Mrs. Jamisaiye Abiondum",
      image: SILHOUETTE,
    },
    overview:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    gallery: [GALLERY_IMAGE, GALLERY_IMAGE, GALLERY_IMAGE, GALLERY_IMAGE],
  },
];


type School = (typeof schools)[0];

export default function TrainingSchoolsPage() {
  const [selectedSchool, setSelectedSchool] = useState<School | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const closeModal = () => setSelectedSchool(null);
  const closeLightbox = () => setLightboxImage(null);

  return (
    <main>
      <div className="container">
        <div className="courses-header">
          <h1>Training Schools</h1>
        </div>

        <div className="schools-grid">
          {schools.map((school) => (
            <div
              key={school.id}
              className="school-card"
              onClick={() => setSelectedSchool(school)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === "Enter" && setSelectedSchool(school)}
            >
              <div className="school-card-image">
                <img src={school.image} alt={school.name} />
              </div>
              <div className="school-card-body">
                <h3>{school.name}</h3>
                <p>{school.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* School Modal */}
      {selectedSchool && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal} aria-label="Close modal">
              &times;
            </button>

            {/* Coordinator Card */}
            <div className="modal-coordinator">
              <img
                src={selectedSchool.coordinator.image}
                alt={selectedSchool.coordinator.name}
                className="coordinator-avatar"
              />
              <div>
                <p className="coordinator-label">School Coordinator</p>
                <p className="coordinator-name">{selectedSchool.coordinator.name}</p>
              </div>
            </div>

            {/* School Name & Location */}
            <h2 className="modal-school-name">{selectedSchool.name}</h2>
            <p className="modal-school-location">📍 {selectedSchool.location}</p>

            {/* Overview */}
            <div className="modal-overview">
              <h4>Overview</h4>
              <p>{selectedSchool.overview}</p>
            </div>

            {/* Gallery */}
            <div className="modal-gallery-title">
              <h4>Gallery</h4>
            </div>
            <div className="modal-gallery">
              {selectedSchool.gallery.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="gallery-thumb"
                  onClick={() => setLightboxImage(img)}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Lightbox */}
      {lightboxImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox} aria-label="Close lightbox">
            &times;
          </button>
          <img src={lightboxImage} alt="Expanded view" className="lightbox-image" />
        </div>
      )}
    </main>
  );
}