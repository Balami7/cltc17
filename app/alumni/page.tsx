
"use client";

import { useEffect, useRef, useState } from "react";

export default function AlumniPage() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  const apiBase = process.env.NEXT_PUBLIC_CLTC_API_BASE
  if (!apiBase) return <div className="container">CLTC API base not configured. Set NEXT_PUBLIC_CLTC_API_BASE in environment.</div>
  const [alumni, setAlumni] = useState<Array<{ name: string; photo: string }>>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [columns, setColumns] = useState(1)
  const gridRef = useRef<HTMLDivElement | null>(null)
  const itemsPerPage = 10 * columns

  useEffect(() => {
    let mounted = true
    setLoading(true)
    setError(null)

    fetch(`${apiBase.replace(/\/+$/, '')}/alumni`)
      .then((res) => {
        if (!res.ok) throw new Error(`status ${res.status}`)
        return res.json()
      })
      .then((data) => {
        if (!mounted) return
        // data may be array or object with `alumni` field
        const items = Array.isArray(data) ? data : data?.alumni ?? []
        // normalize: expect items with name and photo (fallback photo)
        const normalized = items.map((it: any) => ({ name: it.name || it.full_name || it.title || 'Unknown', photo: it.photo_urls?.[0] || it.photo || 'sil.jpeg' }))
        setAlumni(normalized)
      })
      .catch((err) => {
        if (!mounted) return
        setError(String(err))
        setAlumni([])
      })
      .finally(() => {
        if (!mounted) return
        setLoading(false)
      })

    return () => {
      mounted = false
    }
  }, [apiBase])

  useEffect(() => {
    const updateColumns = () => {
      if (!gridRef.current) return
      const style = window.getComputedStyle(gridRef.current)
      const count = style.gridTemplateColumns.trim().split(/\s+/).filter(Boolean).length
      setColumns(count || 1)
    }

    updateColumns()
    window.addEventListener('resize', updateColumns)
    return () => window.removeEventListener('resize', updateColumns)
  }, [])

  const [searchTerm, setSearchTerm] = useState("");
  const filteredAlumni = alumni.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase().trim())
  )
  const totalPages = filteredAlumni.length > 0 ? Math.ceil(filteredAlumni.length / itemsPerPage) : 1
  const displayedAlumni = filteredAlumni.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(totalPages)
  }, [currentPage, totalPages])

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

  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm, alumni, columns])

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


      <div ref={gridRef} className="alumni-grid">
        {loading ? (
          <p className="no-results">Loading alumni...</p>
        ) : error ? (
          <p className="no-results">Alumni not found</p>
        ) : filteredAlumni.length === 0 ? (
          <p className="no-results">Alumni not found</p>
        ) : (
          displayedAlumni.map((person, index) => (
            <div key={`${person.name}-${index}`} className="alumni-card">
              <img src={person.photo} alt={person.name} className="alumni-photo" />
              <div className="alumni-name">{person.name}</div>
            </div>
          ))
        )}
      </div>

      {filteredAlumni.length > itemsPerPage && (
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, idx) => {
            const page = idx + 1
            return (
              <button
                key={page}
                type="button"
                className={page === currentPage ? 'active' : ''}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </button>
            )
          })}
        </div>
      )}
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
