import React, { useState } from 'react';

function InfoCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`bg-white rounded-lg shadow-md p-6 transform transition-all duration-300 ease-in-out
        ${isHovered ? 'scale-105 shadow-xl -translate-y-2' : ''}
        hover:bg-gradient-to-br from-white to-blue-50`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-4 mb-4">
        <span className={`text-3xl transform transition-transform duration-300 ${isHovered ? 'scale-125' : ''}`}>
          {icon}
        </span>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function FeatureSection({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-8 hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>
      <ul className="list-disc list-inside space-y-2">
        {items.map((item, index) => (
          <li
            key={index}
            className="text-gray-600 transform transition-all duration-300 hover:translate-x-2 hover:text-blue-600"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const mainFeatures = [
    {
      icon: "👤",
      title: "User Management",
      description: "Complete user registration system with account management and admin controls."
    },
    {
      icon: "🔑",
      title: "Key System",
      description: "Generate and manage keys with customizable duration and device limits."
    },
    {
      icon: "💰",
      title: "Balance System",
      description: "Integrated balance management with admin controls and automated deductions."
    },
    {
      icon: "🔄",
      title: "Referral Program",
      description: "Built-in referral system for user growth and rewards."
    }
  ];

  const commands = [
    '/start - Start the bot and display the main menu.',
    '/help - Display the list of available commands.',
    '/register <password> - Register a new account.',
    '/myaccount - View account information.',
    '/generatekey <duration> <max_devices> - Generate a new key.',
    '/resetdevice <key_id> - Reset the device ID for a key.',
    '/addbalance <username> <amount> - Add balance to a user\'s account (Admin only).',
    '/promote <username> <level> - Promote a user to a specified level (Admin only).',
    '/setprice <duration> <price> - Set the price for a key duration (Admin only).',
    '/generatereferral - Generate a referral code (Admin only).',
  ];


  const techStack = [
    "Python 3.x",
    "MySQL Database",
    "Telegram Bot API",
    "Flask Web Framework",
    "Secure Password Hashing",
    "Logging System"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 animate-gradient">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fadeIn">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4 animate-gradient">
            Telegram Bot Management System Kuro Panel Bot Version made by tg@xiutencent

          </h1>
          <p className="text-xl text-gray-600 opacity-0 animate-slideUp">
            A comprehensive solution for user and key management
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mainFeatures.map((feature, index) => (
            <div
              key={index}
              className="opacity-0 animate-fadeIn"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <InfoCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="opacity-0 animate-slideInLeft">
            <FeatureSection title="Available Commands" items={commands} />
          </div>
          <div className="opacity-0 animate-slideInRight">
            <FeatureSection title="Technology Stack" items={techStack} />
          </div>
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-md p-8 transform transition-all duration-500 hover:shadow-xl">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Getting Started</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-gray-700">Installation</h3>
              <p className="text-gray-600">Quick setup with pip install for all dependencies.</p>
              <div className="bg-gray-100 p-4 rounded-lg transform transition-all duration-300 hover:scale-105">
                <code className="text-sm">pip install mysql-connector-python python-telegram-bot Flask</code>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;