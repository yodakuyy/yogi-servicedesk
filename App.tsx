import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import HeroImage from './components/HeroImage';
import DepartmentSelection from './components/DepartmentSelection';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return <DepartmentSelection />;
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