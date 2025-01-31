import React from 'react';
import { Shield, Zap, Star, Crown } from 'lucide-react';

function SystemPackage() {
  const packages = [
    {
      name: "Basic Package",
      icon: <Shield className="w-12 h-12 text-blue-500" />,
      price: "€10/ay",
      features: [
        "Temel moderasyon komutları",
        "Müzik botu özellikleri",
        "24/7 çalışma",
        "Basit seviye sistemi"
      ],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500"
    },
    {
      name: "Advanced Package",
      icon: <Zap className="w-12 h-12 text-purple-500" />,
      price: "€20/ay",
      features: [
        "Tüm Basic özellikleri",
        "Gelişmiş moderasyon",
        "Özel karşılama mesajları",
        "Ekonomi sistemi"
      ],
      image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=500"
    },
    {
      name: "Pro Package",
      icon: <Star className="w-12 h-12 text-yellow-500" />,
      price: "€35/ay",
      features: [
        "Tüm Advanced özellikleri",
        "Özel komutlar",
        "Ticket sistemi",
        "Gelişmiş istatistikler"
      ],
      image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=500"
    },
    {
      name: "Enterprise Package",
      icon: <Crown className="w-12 h-12 text-red-500" />,
      price: "€50/ay",
      features: [
        "Tüm Pro özellikleri",
        "Özel bot geliştirme",
        "7/24 öncelikli destek",
        "Sınırsız özelleştirme"
      ],
      image: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=500"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-center mb-16">Rizeli.dev System Packages</h1>
        <div className="space-y-24">
          {packages.map((pkg, index) => (
            <div key={pkg.name} className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="w-full md:w-1/2">
                <img src={pkg.image} alt={pkg.name} className="rounded-lg shadow-2xl" />
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <div className="flex items-center gap-4">
                  {pkg.icon}
                  <h2 className="text-3xl font-bold">{pkg.name}</h2>
                </div>
                <p className="text-2xl font-semibold text-blue-400">{pkg.price}</p>
                <ul className="space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition">
                  Paketi Seç
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SystemPackage;