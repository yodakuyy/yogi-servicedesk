import React, { useState } from 'react';
import { MicrosoftLogo } from './MicrosoftLogo';
import { Eye, EyeOff } from 'lucide-react';

interface LoginFormProps {
  onLogin: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { email, rememberMe });
    // Simulate login success
    onLogin();
  };

  return (
    <div className="w-full max-w-md space-y-8">
      {/* Header Section */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Login</h1>
        <p className="text-gray-500 text-sm">
          Welcome to the Service Desk Portal
        </p>
      </div>

      {/* Microsoft Sign In */}
      <button
        type="button"
        className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 rounded-full py-3 px-4 text-gray-700 font-medium hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <MicrosoftLogo className="w-5 h-5" />
        <span>Sign in with Microsoft</span>
      </button>

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-gray-400">or Sign in with Email</span>
        </div>
      </div>

      {/* Form Fields */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-1">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email*
          </label>
          <input
            id="email"
            type="email"
            placeholder="mail@website.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="block w-full rounded-full border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition-shadow outline-none"
          />
        </div>

        <div className="space-y-1">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password*
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Min. 8 character"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
              className="block w-full rounded-full border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition-shadow outline-none pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Remember Me */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 font-medium">
              Remember me
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full flex justify-center rounded-full bg-indigo-600 py-3 px-4 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;