
export const metadata = {
  title: "Student Registration Form - CLTC",
  description: "Register for Citizenship and Leadership Training Centre programs",
};

export default function StudentRegistrationPage() {
  return (
    <main>
      <div className="containerr">
        <div className="header1">
          <h1>Student Registration Form</h1>
        </div>

        <div className="form-content">
          <form>
            <div className="form-group">
              <label htmlFor="fullname">Full Name</label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                required
                placeholder="Enter your full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="yourname@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <select id="gender" name="gender" required>
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="prefer-not-to-say">Prefer not to say</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="dob">Date of Birth</label>
              <input type="date" id="dob" name="dob" required />
            </div>

            <div className="form-group">
              <label htmlFor="nationality">Nationality</label>
              <input
                type="text"
                id="nationality"
                name="nationality"
                required
                placeholder="e.g. Nigerian"
              />
            </div>

            <div className="form-group">
              <label htmlFor="state">State of Origin</label>
              <input
                type="text"
                id="state"
                name="state"
                placeholder="e.g. Kano, Lagos, Kaduna..."
              />
            </div>

            <div className="form-group">
              <label htmlFor="lga">Local Government of Origin</label>
              <input
                type="text"
                id="lga"
                name="lga"
                placeholder="e.g. Gwale, Ikeja, Bwari..."
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                placeholder="0803 XXX XXXX"
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Residential Address</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="House number, street, area..."
              />
            </div>

            {/* Courses */}
            <div className="form-group" style={{ marginTop: "2rem" }}>
              <label htmlFor="course">Select Course</label>
              <select id="course" name="course" required>
                <option value="">Choose Course Category</option>
                <option value="junior">Junior Course</option>
                <option value="intermediate">Intermediate Course</option>
                <option value="senior">Senior Course</option>
                <option value="professional">Professional/Executive Course</option>
                <option value="women">Women Course</option>
                <option value="live-saving">Live Saving Course</option>
              </select>
            </div>

            {/* Schools */}
            <div className="form-group" style={{ marginTop: "2rem" }}>
              <label htmlFor="school">Select School</label>
              <select id="school" name="school" required>
                <option value="">Choose training location</option>
                <option value="abuja-fct">Abuja (FCT)</option>
                <option value="jos-pzq">Jos (PZQ)</option>
                <option value="lagos-elite">Lagos Elite School</option>
                <option value="kano-mountain">Kano Mountain School</option>
                <option value="kaduna">Kaduna</option>
                <option value="online">Online Training School</option>
              </select>
            </div>

            <button type="submit" className="submit-btn">
              Submit Registration
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}