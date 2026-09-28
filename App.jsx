import { useState } from 'react';
import Dashboard from './components/Dashboard';
import FindClinic from './components/find-clinic';
import DoctorSearch from './components/DoctorSearch';

const pages = [
  { id: 'dashboard', label: 'Dashboard', icon: '⌂' },
  { id: 'doctor', label: 'Find Doctor', icon: '♙' },
  { id: 'clinic', label: 'Find Clinic', icon: '✚' },
];

function App() {
  const [activePage, setActivePage] = useState('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const pageContent = {
    dashboard: <Dashboard onToggleSidebar={() => setSidebarCollapsed((collapsed) => !collapsed)} />,
    doctor: <DoctorSearch />,
    clinic: <FindClinic />,
  };

  return (
    <div className="app-shell">
      <aside className={sidebarCollapsed ? 'app-sidebar collapsed' : 'app-sidebar'}>
        <h1 className="app-brand">MyPatientHUB</h1>
        <nav className="app-navigation" aria-label="Main navigation">
          {pages.map((page) => (
            <button
              key={page.id}
              type="button"
              className={activePage === page.id ? 'nav-button active' : 'nav-button'}
              aria-current={activePage === page.id ? 'page' : undefined}
              onClick={() => setActivePage(page.id)}
              title={sidebarCollapsed ? page.label : undefined}
            >
              <span className="nav-icon" aria-hidden="true">{page.icon}</span>
              <span className="nav-label">{page.label}</span>
            </button>
          ))}
        </nav>
      </aside>
      <main className="app-content">{pageContent[activePage]}</main>
    </div>
  );
}

export default App;