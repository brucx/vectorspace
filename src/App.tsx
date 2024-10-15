import React from 'react';
import { Wifi, Coffee, Users, MapPin, Clock, ArrowRight, Cpu, Brain, Zap } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="bg-blue-900 text-white">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-cyan-300">Vector Space</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#about" className="hover:text-cyan-300 transition duration-300">About</a></li>
              <li><a href="#amenities" className="hover:text-cyan-300 transition duration-300">Amenities</a></li>
              <li><a href="#pricing" className="hover:text-cyan-300 transition duration-300">Pricing</a></li>
              <li><a href="#contact" className="hover:text-cyan-300 transition duration-300">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-cyan-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 text-cyan-300">Innovate in Our Tech-Powered Workspace</h2>
          <p className="text-xl mb-8 text-blue-200">Vector Space: Where cutting-edge technology meets human creativity</p>
          <a href="#contact" className="bg-cyan-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-cyan-600 transition duration-300">Book a Tour</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-cyan-300">About Vector Space</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Vector Space" className="rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <p className="text-lg mb-4 text-blue-200">Vector Space is a cutting-edge coworking space designed for tech enthusiasts, data scientists, and innovators. Our mission is to provide a state-of-the-art environment that accelerates technological development and fosters collaboration.</p>
              <p className="text-lg text-blue-200">With advanced computing resources and a community of tech experts, Vector Space offers the perfect ecosystem for pushing the boundaries of technology and innovation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-cyan-300">Amenities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-900 p-6 rounded-lg shadow-md border border-cyan-500">
              <Cpu className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-cyan-300">High-Performance Computing</h3>
              <p className="text-blue-200">Access powerful computing resources for your projects.</p>
            </div>
            <div className="bg-blue-900 p-6 rounded-lg shadow-md border border-cyan-500">
              <Brain className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-cyan-300">Innovation Labs</h3>
              <p className="text-blue-200">Dedicated spaces for research and development.</p>
            </div>
            <div className="bg-blue-900 p-6 rounded-lg shadow-md border border-cyan-500">
              <Zap className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-cyan-300">Smart Workspace</h3>
              <p className="text-blue-200">Cutting-edge office features powered by advanced technology.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-cyan-300">Flexible Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-900 p-8 rounded-lg shadow-md border border-cyan-500">
              <h3 className="text-2xl font-semibold mb-4 text-cyan-300">Day Pass</h3>
              <p className="text-4xl font-bold mb-4 text-white">$50<span className="text-lg font-normal text-blue-200">/day</span></p>
              <ul className="mb-6 text-blue-200">
                <li className="flex items-center mb-2"><ArrowRight className="w-5 h-5 mr-2 text-cyan-400" /> Access to open workspace</li>
                <li className="flex items-center mb-2"><ArrowRight className="w-5 h-5 mr-2 text-cyan-400" /> Basic computing access</li>
                <li className="flex items-center"><ArrowRight className="w-5 h-5 mr-2 text-cyan-400" /> Tech community events</li>
              </ul>
              <a href="#contact" className="block text-center bg-cyan-500 text-white px-4 py-2 rounded-full hover:bg-cyan-600 transition duration-300">Get Started</a>
            </div>
            <div className="bg-gradient-to-b from-blue-800 to-cyan-900 text-white p-8 rounded-lg shadow-md transform scale-105 border border-cyan-400">
              <h3 className="text-2xl font-semibold mb-4 text-cyan-300">Monthly Pro</h3>
              <p className="text-4xl font-bold mb-4">$999<span className="text-lg font-normal text-blue-200">/month</span></p>
              <ul className="mb-6">
                <li className="flex items-center mb-2"><ArrowRight className="w-5 h-5 mr-2 text-cyan-400" /> Unlimited access</li>
                <li className="flex items-center mb-2"><ArrowRight className="w-5 h-5 mr-2 text-cyan-400" /> Dedicated tech workstation</li>
                <li className="flex items-center mb-2"><ArrowRight className="w-5 h-5 mr-2 text-cyan-400" /> Priority computing access</li>
                <li className="flex items-center"><ArrowRight className="w-5 h-5 mr-2 text-cyan-400" /> Tech project consulting</li>
              </ul>
              <a href="#contact" className="block text-center bg-cyan-500 text-white px-4 py-2 rounded-full hover:bg-cyan-600 transition duration-300">Sign Up Now</a>
            </div>
            <div className="bg-blue-900 p-8 rounded-lg shadow-md border border-cyan-500">
              <h3 className="text-2xl font-semibold mb-4 text-cyan-300">Weekly Pass</h3>
              <p className="text-4xl font-bold mb-4 text-white">$299<span className="text-lg font-normal text-blue-200">/week</span></p>
              <ul className="mb-6 text-blue-200">
                <li className="flex items-center mb-2"><ArrowRight className="w-5 h-5 mr-2 text-cyan-400" /> 7-day access</li>
                <li className="flex items-center mb-2"><ArrowRight className="w-5 h-5 mr-2 text-cyan-400" /> Flexible lab use</li>
                <li className="flex items-center"><ArrowRight className="w-5 h-5 mr-2 text-cyan-400" /> 4 hrs high-performance computing time</li>
              </ul>
              <a href="#contact" className="block text-center bg-cyan-500 text-white px-4 py-2 rounded-full hover:bg-cyan-600 transition duration-300">Get Started</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-cyan-300">Contact Us</h2>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-2xl font-semibold mb-4 text-cyan-300">Get in Touch</h3>
              <p className="mb-4 text-blue-200">Interested in joining Vector Space or have any questions? Reach out to us!</p>
              <div className="flex items-center mb-2 text-blue-200">
                <MapPin className="w-5 h-5 mr-2 text-cyan-400" />
                <p>456 Tech Avenue, Innovation Hub, 67890</p>
              </div>
              <div className="flex items-center mb-2 text-blue-200">
                <Clock className="w-5 h-5 mr-2 text-cyan-400" />
                <p>Open 24/7 for members</p>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full px-4 py-2 rounded-md bg-blue-800 border border-cyan-500 text-white placeholder-blue-300" />
                <input type="email" placeholder="Your Email" className="w-full px-4 py-2 rounded-md bg-blue-800 border border-cyan-500 text-white placeholder-blue-300" />
                <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-2 rounded-md bg-blue-800 border border-cyan-500 text-white placeholder-blue-300"></textarea>
                <button type="submit" className="bg-cyan-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-cyan-600 transition duration-300">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-blue-200 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Vector Space. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;