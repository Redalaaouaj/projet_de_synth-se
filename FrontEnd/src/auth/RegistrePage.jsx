import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const RegisterPage = () => {
  const [activeTab, setActiveTab] = useState('user');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userTel, setUserTel] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userPasswordConfirmation, setUserPasswordConfirmation] = useState('');

  const navigate = useNavigate();

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-cover bg-center min-h-screen flex items-center justify-center" style={{ backgroundImage: `url(bg.webp)` }}>
      <div className="bg-gray-300 bg-opacity-90 p-8 rounded-lg shadow-lg register-form ">
        <img className="logo-allocazion-register" src='allocazion.png' alt="logo" style={{width:'300px'}}/>
        <div className="flex justify-center mb-5">
          <button className={`px-4 py-2 rounded-tl-lg ${activeTab === 'user' ? 'bg-blue-800 text-white' : 'bg-gray-200 text-gray-800'}`} onClick={() => handleTabChange('user')}>
            Locataire
          </button>
          <button className={`px-4 py-2 rounded-tr-lg ${activeTab === 'agence' ? 'bg-blue-800 text-white' : 'bg-gray-200 text-gray-800'}`} onClick={() => handleTabChange('agence')}>
            Entreprise
          </button>
        </div>
        {activeTab === 'user' && (
          <form action='/' className="flex flex-col">

            <input
              type="text"
              placeholder="Nom d'utilisateur"
              value={userName}
              onChange={() => onClick(setUserName(e.target.value))}
              className={`mb-4 px-4 py-2 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-600 ${userName ? 'border-blue-600' : ''}`}
            />
            <input
              type="text"
              placeholder="Email"
              value={userEmail}
              onChange={() => onClick(setUserEmail(e.target.value))}
              className={`mb-4 px-4 py-2 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-600 ${userEmail ? 'border-blue-600' : ''}`}
            />
            <input
              type="text"
              placeholder="Téléphone"
              value={userTel}
              onChange={() => onClick(setUserTel(e.target.value))}
              className={`mb-4 px-4 py-2 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-600 ${userTel ? 'border-blue-600' : ''}`}
            />
            <input
              type="password"
              placeholder="Mot de passe"
              value={userPassword}
              onChange={() => onClick(setUserPassword(e.target.value))}
              className={`mb-4 px-4 py-2 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-600 ${userPassword ? 'border-blue-600' : ''}`}
            />
            <input
              type="password"
              placeholder="Confirmation de mot de passe"
              value={userPasswordConfirmation}
              onChange={(e) => setUserPasswordConfirmation(e.target.value)}
              className={`mb-4 px-4 py-2 rounded-md border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-600 ${userPasswordConfirmation ? 'border-blue-600' : ''}`}
            />
            <button type="submit" className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">S'enregistrer</button>
          </form>
        )}


        <div className="mt-4 text-center">
          <Link to="/login" className="text-blue-500 hover:underline">Se connecter?</Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
