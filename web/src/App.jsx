import { useState } from "react";
import "./style.css";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import DashboardContent from "./components/DashboardContent";
import DashboardCards from "./components/DashboardCards";
import Footer from "./components/Footer";
import FindDoctor from "./components/Find-Doctor";

function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <div className="dashboard">

      <Sidebar setPage={setPage} />

      <main className="main">

        {page === "dashboard" && (
          <>
            <Header />

            <section className="content">
              <DashboardContent />
              <DashboardCards />
            </section>

            <Footer />
          </>
        )}

        {page === "findDoctor" && (
          <FindDoctor />
        )}

      </main>

    </div>
  );
}

export default App;