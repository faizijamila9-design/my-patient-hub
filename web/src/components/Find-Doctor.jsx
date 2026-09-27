import"../Find-Doctor.css";
function FindDoctor() {
  return (
    <>
      <header className="doctor-header">

        <div className="breadcrumb">
          <span>
            <i className="fa-solid fa-house"></i>
          </span>

          <span>/</span>

          <span>Searchdoctor</span>
        </div>

        <h2>Searchdoctor</h2>

        <div className="top-search">
          <input
            type="text"
            placeholder="Type here..."
          />
        </div>

        <div className="header-icons">

          <button type="button">
            <a href="Login.html">Login</a>
            <i className="fa-solid fa-user"></i>
          </button>

          <span>
            <i className="fa-solid fa-bars"></i>
          </span>

          <span>
            <i className="fa-solid fa-gear"></i>
          </span>

        </div>

        <div className="doctor-intro">
          <h1>Find a Doctor</h1>

          <p>
            Search Doctors and schedule an appointment
          </p>
        </div>

        <div className="search-box">

          <input
            type="text"
            placeholder="Search a doctor by name,specialty"
          />

          <input
            type="text"
            placeholder="Zip Code or Neighborhood"
          />

        </div>

      </header>

      <section className="search-buttons">
        <button type="button">CURRENT</button>
        <button type="button">SEARCH</button>
      </section>

      <section className="special-services">

        <h2>Special Services</h2>

        <div className="service-card">

          <div className="service-icon">
            <i className="fa-solid fa-heart-pulse"></i>
          </div>

          <div className="service-content">
            <h3>Primary card and internal MD</h3>

            <p>
              our doctors partner with you to help you to reach
              your wellness
            </p>
          </div>

          <span className="arrow">
            <i className="fa-solid fa-chevron-down"></i>
          </span>

        </div>

        <div className="service-card">

          <div className="service-icon">
            <i className="fa-solid fa-user-doctor"></i>
          </div>

          <div className="service-content">
            <h3>Emergency Care</h3>

            <p>
              we provide emergency care for adults and children
            </p>
          </div>

          <span className="arrow">
            <i className="fa-solid fa-chevron-down"></i>
          </span>

        </div>

        <div className="service-card">

          <div className="service-icon">
            <i className="fa-solid fa-heart-pulse"></i>
          </div>

          <div className="service-content">
            <h3>Imaging Services</h3>

            <p>From Xray to MR scan we offer...</p>
          </div>

          <span className="arrow">
            <i className="fa-solid fa-chevron-down"></i>
          </span>

        </div>

        <div className="service-card">

          <div className="service-icon">
            <i className="fa-solid fa-plus"></i>
          </div>

          <div className="service-content">
            <h3>Urgent Care</h3>

            <p>we offer urgent care for none...</p>
          </div>

          <span className="arrow">
            <i className="fa-solid fa-chevron-down"></i>
          </span>

        </div>

      </section>

      <section className="specialty-section">

        <h2>Find Doctors By Specialty</h2>

        <p>
          Select a Specialty to View all Doctors
          and schedule an Appointment
        </p>

        <div className="specialty-list">

          <div className="specialty-item">
            <span>Anesthesiology</span>
            <span>
              <i className="fa-solid fa-chevron-down"></i>
            </span>
          </div>

          <div className="specialty-item">
            <span>Dermatology</span>
            <span>
              <i className="fa-solid fa-chevron-down"></i>
            </span>
          </div>

          <div className="specialty-item">
            <span>Emergency Medicine</span>
            <span>
              <i className="fa-solid fa-chevron-down"></i>
            </span>
          </div>

          <div className="specialty-item">
            <span>Neurology</span>
            <span>
              <i className="fa-solid fa-chevron-down"></i>
            </span>
          </div>

          <div className="specialty-item">
            <span>Consultation</span>
            <span>
              <i className="fa-solid fa-chevron-down"></i>
            </span>
          </div>

          <div className="specialty-item">
            <span>Ophthalmology</span>
            <span>
              <i className="fa-solid fa-chevron-down"></i>
            </span>
          </div>

        </div>

      </section>

      <footer className="footer">

        <p>2026,made with by MYPIHUB</p>

        <p>for better web</p>

        <div className="footer-links">
          <a href="#">MYPIHUB</a>
          <a href="#">About us</a>
          <a href="#">Blog</a>
        </div>

      </footer>

    </>
  );
}

export default FindDoctor;