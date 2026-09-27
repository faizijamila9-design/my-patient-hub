function Header() {
  return (
    <header className="header">

      <div className="header-left">

        <button id="menuBtn" className="menu-btn">
          <i className="fa-solid fa-bars"></i>
        </button>

        <div>
          <p className="breadcrumb">
            <i className="fa-solid fa-house"></i>
            / Dashboard
          </p>

          <h3>Dashboard</h3>
        </div>

      </div>

      <div className="header-right">

        <div className="search">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            placeholder="Type here..."
          />
        </div>

        <div className="logout">
          <i className="fa-solid fa-circle-user"></i>
          <button>log out</button>
        </div>

        <i className="fa-solid fa-gear header-icon"></i>
        <i className="fa-solid fa-bell header-icon"></i>

      </div>

    </header>
  );
}

export default Header;