import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import HeroImage from './components/HeroImage';
import DepartmentSelection from './components/DepartmentSelection';
import MainDashboard from './components/MainDashboard';

type ViewState = 'login' | 'selection' | 'dashboard';

const App: React.FC = () => {
  const [view, setView] = useState<ViewState>('login');

  const handleLogin = () => {
    setView('selection');
  };

  const handleDepartmentSelect = (deptId: string) => {
    console.log(`Selected department: ${deptId}`);
    if (deptId === 'DIT') {
      setView('dashboard');
    } else {
      // For now, other departments also go to dashboard or stay (customizable)
      // Based on request "saat diklik departemen DIT akan pindah ke halam utama"
      // We will default to dashboard for demo purposes, or specifically check DIT.
      // Let's allow all for navigation, but specifically DIT was requested.
      setView('dashboard');
    }
  };

  if (view === 'dashboard') {
    return <MainDashboard />;
  }

  if (view === 'selection') {
    return <DepartmentSelection onSelect={handleDepartmentSelect} />;
  }

  return (
    <div className="flex min-h-screen w-full bg-white">
      {/* Left Side: Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16 xl:p-24 bg-white z-10">
        <LoginForm onLogin={handleLogin} />
      </div>

      {/* Right Side: Hero Image (Hidden on mobile) */}
      <div className="hidden lg:block w-1/2 relative bg-gray-900">
        <HeroImage />
      </div>
    </div>
  );
};

export default App;