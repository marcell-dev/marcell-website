import React from 'react';
import { Code2, Database, FileCode2, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

function App() {
  const technologies = [
    {
      name: 'Discord.js',
      icon: <Terminal className="w-16 h-16 text-indigo-500" />,
      description: 'Powerful Discord bot development framework'
    },
    {
      name: 'MongoDB',
      icon: <Database className="w-16 h-16 text-green-500" />,
      description: 'NoSQL database for flexible data storage'
    },
    {
      name: 'Visual Studio Code',
      icon: <Code2 className="w-16 h-16 text-blue-500" />,
      description: 'Professional code editor'
    },
    {
      name: 'JavaScript',
      icon: <FileCode2 className="w-16 h-16 text-yellow-500" />,
      description: 'Modern programming language'
    }
  ];

  const testimonials = [
    {
      name: "Arda",
      role: "discord'da distopya sunucusunun ownerı",
      content: "marcell çok taşşaklı",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
    },
    {
      name: "rizeli.dev",
      role: "Community Manager",
      content: "adamin amina koyar bu botlar he",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
    },
    {
      name: "marcell.xd",
      role: "baba",
      content: "varsa daha iyisi ciksin karsimiza",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
    },
    {
      name: "ben kimim amk",
      role: "E-Sports Manager",
      content: "7/24 kesintisiz çalışıyor, hiç sorun yaşamadık.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl"></div>
        </div>
        <h1 className="text-6xl font-bold text-center z-10 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
          rizeli.dev bot system
        </h1>
      </div>

      {/* Technologies Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold text-center mb-16">Kullandığımız Teknolojiler</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech) => (
            <div key={tech.name} className="p-6 rounded-lg bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/50 transition">
              <div className="flex flex-col items-center text-center">
                {tech.icon}
                <h3 className="mt-4 text-xl font-semibold">{tech.name}</h3>
                <p className="mt-2 text-gray-400">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold text-center mb-16">Müşteri Yorumları</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="p-6 rounded-lg bg-gray-900/50 backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-300">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Help Center</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Guides</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li><a href="/support" className="text-gray-400 hover:text-white">Support</a></li>
                <li><a href="#marcell.xd" className="text-gray-400 hover:text-white">Discord</a></li>
                <li><a href="#mail@gmail.com" className="text-gray-400 hover:text-white">Email</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">System Package</h3>
              <Link to="/system-package" className="text-blue-400 hover:text-blue-300">
                View Packages →
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;