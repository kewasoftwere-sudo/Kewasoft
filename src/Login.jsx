import React from 'react';
import { loginWithGoogle } from './firebase/authService';

export default function Login({ onLoginSuccess }) {
  const handleLogin = async () => {
    try {
      const user = await loginWithGoogle();
      if (user) {
        onLoginSuccess(user);
      }
    } catch (error) {
      alert("Login failed! Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-2xl w-full max-w-md text-center">
        <h1 className="text-3xl font-bold tracking-wider text-cyan-400 mb-2">KEWASOFT</h1>
        <p className="text-slate-400 mb-8 text-sm">Next-Gen Expense Tracker & Analytics</p>
        <button
          onClick={handleLogin}
          className="w-full flex items-center justify-center gap-3 bg-white text-slate-900 font-semibold py-3 px-4 rounded-xl hover:bg-slate-100 transition duration-200 shadow-md"
        >
          <img 
            src="https://www.svgrepo.com/show/475656/google-color.svg" 
            alt="Google logo" 
            className="w-5 h-5"
          />
          Sign in with Google
        </button>
        <p className="text-xs text-slate-500 mt-6">
          Secure authentication powered by Firebase & Google OAuth.
        </p>
      </div>
    </div>
  );
}
