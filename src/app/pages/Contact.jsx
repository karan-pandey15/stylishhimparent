


// "use client"
// import React, { useState } from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     subject: '',
//     message: '',
//     productInterest: ''
//   });

//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [focusedField, setFocusedField] = useState('');

//   const contactInfo = [
//     { 
//       icon: '✉️', 
//       text: 'ranjanmishra93@gmail.com', 
//       label: 'Primary Email',
//       gradient: 'from-blue-500 to-cyan-500'
//     },
//     { 
//       icon: '📱', 
//       text: '93117 84712', 
//       label: 'Phone Number',
//       gradient: 'from-green-500 to-emerald-500'
//     },
//     { 
//       icon: '🏢', 
//       text: 'Info@stylishhim.com', 
//       label: 'Business Email',
//       gradient: 'from-purple-500 to-pink-500'
//     }
//   ];

//   const globalPresence = [
//     {
//       country: 'Head Office – India',
//       address: 'B-317, Sudarshan Park, New Delhi – 110015',
//       email: 'info.india@stylishhim.com'
//     },
//     {
//       country: 'United Arab Emirates (Dubai)',
//       address: 'Sheikh Zayed Road, Business District, Dubai',
//       email: 'info.dubai@stylishhim.com'
//     },
//     {
//       country: 'Vietnam',
//       address: 'District 1, Ho Chi Minh City',
//       email: 'info.vietnam@stylishhim.com'
//     },
//     {
//       country: 'Thailand (Bangkok)',
//       address: 'Sukhumvit – Asok Business Area, Bangkok',
//       email: 'info.thailand@stylishhim.com'
//     },
//     {
//       country: 'Madagascar',
//       address: 'Antananarivo Central Business District, Mahajanga',
//       email: 'info.madagascar@stylishhim.com'
//     },
//     {
//       country: 'Democratic Republic Of The Congo (Kinshasa)',
//       address: 'Gombe Business District, Kinshasa',
//       email: 'info.congo@stylishhim.com'
//     },
//     {
//       country: 'Kenya (Nairobi)',
//       address: 'Westlands, Nairobi',
//       email: 'info.kenya@stylishhim.com'
//     },
//     {
//       country: 'Mauritius',
//       address: 'Ebene Cybercity, Port Louis',
//       email: 'info.mauritius@stylishhim.com'
//     }
//   ];

//   const businessHours = [
//     { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM', isOpen: true },
//     { day: 'Saturday', hours: '9:00 AM - 2:00 PM', isOpen: true },
//     { day: 'Sunday', hours: 'Closed', isOpen: false }
//   ];

//   const products = [
//     'Premium Rice 🌾',
//     'Pure Sugar 🍬',
//     'Fresh Seafood 🐟',
//     'Industrial Chemicals ⚗️',
//     'Maritime Shipping 🚢',
//     'Cosmetics Products 💄',
//     'Fine Tea Collection 🍵'
//   ];

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitted(true);
    
//     setTimeout(() => {
//       setIsSubmitted(false);
//       setFormData({
//         name: '',
//         email: '',
//         phone: '',
//         subject: '',
//         message: '',
//         productInterest: ''
//       });
//     }, 4000);
//   };

//   const features = [
//     {
//       icon: '🌟',
//       title: '24/7 Premium Support',
//       description: 'Round-the-clock expert assistance for all your trading needs',
//       color: 'from-yellow-400 to-orange-500'
//     },
//     {
//       icon: '🌍',
//       title: 'Global Excellence',
//       description: 'Serving premium clients across 50+ countries worldwide',
//       color: 'from-blue-400 to-indigo-500'
//     },
//     {
//       icon: '⚡',
//       title: 'Lightning Response',
//       description: 'We respond to all inquiries within 2 hours guaranteed',
//       color: 'from-purple-400 to-pink-500'
//     },
//     {
//       icon: '🔐',
//       title: 'Bank-Grade Security',
//       description: 'Military-grade encryption for all transactions',
//       color: 'from-green-400 to-teal-500'
//     }
//   ];

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20">
//         {/* Animated Background Elements */}
//         <div className="fixed inset-0 overflow-hidden pointer-events-none">
//           <div className="absolute -top-20 -right-20 w-48 h-48 sm:w-80 sm:h-80 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
//           <div className="absolute -bottom-20 -left-20 w-48 h-48 sm:w-80 sm:h-80 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-purple-300/10 to-pink-300/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
//         </div>

//         {/* Hero Section */}
//         <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-16 sm:py-20 lg:py-32">
//           <div className="absolute inset-0">
//             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
//             <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-purple-900/80 to-blue-900/90"></div>
//           </div>
          
//           {/* Floating Elements */}
//           <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-3 sm:w-4 h-3 sm:h-4 bg-white/20 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
//           <div className="absolute top-20 sm:top-40 right-5 sm:right-20 w-4 sm:w-6 h-4 sm:h-6 bg-cyan-400/30 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
//           <div className="absolute bottom-10 sm:bottom-20 left-1/4 w-2 sm:w-3 h-2 sm:h-3 bg-purple-400/40 rounded-full animate-bounce" style={{animationDelay: '3s'}}></div>

//           <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
//             <div className="mb-6 sm:mb-8">
//               <span className="inline-block px-4 sm:px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs sm:text-sm font-semibold text-cyan-300 border border-white/20 mb-4 sm:mb-6">
//                 🚀 Get In Touch With Experts
//               </span>
//             </div>
            
//             <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black mb-6 sm:mb-8 leading-tight">
//               <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
//                 Contact
//               </span>
//               <br />
//               <span className="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
//                 Our Team
//               </span>
//             </h1>
            
//             <p className="text-base sm:text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-10">
//               Connect with our global trading experts and transform your commodity trading experience. 
//               <span className="text-cyan-300 font-semibold">We're here 24/7 to help you succeed.</span>
//             </p>

//             <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm">
//               <span className="px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">⚡ Instant Response</span>
//               <span className="px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">🌍 Global Experts</span>
//               <span className="px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">🔒 Secure Platform</span>
//             </div>
//           </div>
//         </section>

//         {/* Contact Form & Info Section */}
//         <section className="py-16 sm:py-20 lg:py-32 relative">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="grid lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-20">
              
//               {/* Contact Form */}
//               <div className="lg:col-span-2">
//                 <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-6 sm:p-8 lg:p-12 relative overflow-hidden">
                  
//                   {/* Decorative Elements */}
//                   <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-xl"></div>
//                   <div className="absolute bottom-0 left-0 w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-xl"></div>

//                   <div className="relative z-10">
//                     <div className="text-center mb-8 sm:mb-10">
//                       <div className="inline-flex items-center justify-center w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-4 shadow-lg">
//                         <span className="text-xl sm:text-2xl">💬</span>
//                       </div>
//                       <h2 className="text-2xl sm:text-4xl font-black text-gray-900 mb-4">
//                         Send Us a <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Message</span>
//                       </h2>
//                       <p className="text-sm sm:text-lg text-gray-600">Let's start a conversation about your trading needs</p>
//                     </div>
                    
//                     {isSubmitted ? (
//                       <div className="text-center py-12 sm:py-16">
//                         <div className="inline-flex items-center justify-center w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mb-6 shadow-2xl animate-pulse">
//                           <span className="text-3xl sm:text-4xl">✨</span>
//                         </div>
//                         <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
//                           Message Sent Successfully!
//                         </h3>
//                         <p className="text-gray-600 text-sm sm:text-lg">Thank you for reaching out! Our team will respond within 2 hours.</p>
//                         <div className="mt-6">
//                           <div className="inline-flex items-center px-4 sm:px-6 py-3 bg-green-50 text-green-700 rounded-full font-semibold text-xs sm:text-sm">
//                             <span className="animate-pulse mr-2">🎉</span>
//                             We'll be in touch soon!
//                           </div>
//                         </div>
//                       </div>
//                     ) : (
//                       <div className="space-y-6 sm:space-y-8">
//                         <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
//                           <div className="relative">
//                             <label className="block text-gray-800 font-bold mb-3 flex items-center text-sm sm:text-base">
//                               <span className="mr-2">👤</span> Full Name *
//                             </label>
//                             <input
//                               type="text"
//                               name="name"
//                               value={formData.name}
//                               onChange={handleInputChange}
//                               onFocus={() => setFocusedField('name')}
//                               onBlur={() => setFocusedField('')}
//                               required
//                               className={`w-full px-4 sm:px-6 py-3 sm:py-4 border-2 rounded-2xl transition-all duration-300 bg-white/70 backdrop-blur-sm ${
//                                 focusedField === 'name' 
//                                   ? 'border-blue-500 shadow-lg shadow-blue-500/25 scale-[1.02]' 
//                                   : 'border-gray-200 hover:border-blue-300'
//                               } focus:outline-none text-sm sm:text-base`}
//                               placeholder="Enter your full name"
//                             />
//                             {focusedField === 'name' && (
//                               <div className="absolute -bottom-2 left-4 sm:left-6 text-xs text-blue-600 font-semibold">
//                                 ✨ Looking good!
//                               </div>
//                             )}
//                           </div>
//                           <div className="relative">
//                             <label className="block text-gray-800 font-bold mb-3 flex items-center text-sm sm:text-base">
//                               <span className="mr-2">📧</span> Email Address *
//                             </label>
//                             <input
//                               type="email"
//                               name="email"
//                               value={formData.email}
//                               onChange={handleInputChange}
//                               onFocus={() => setFocusedField('email')}
//                               onBlur={() => setFocusedField('')}
//                               required
//                               className={`w-full px-4 sm:px-6 py-3 sm:py-4 border-2 rounded-2xl transition-all duration-300 bg-white/70 backdrop-blur-sm ${
//                                 focusedField === 'email' 
//                                   ? 'border-purple-500 shadow-lg shadow-purple-500/25 scale-[1.02]' 
//                                   : 'border-gray-200 hover:border-purple-300'
//                               } focus:outline-none text-sm sm:text-base`}
//                               placeholder="Enter your email"
//                             />
//                           </div>
//                         </div>

//                         <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
//                           <div>
//                             <label className="block text-gray-800 font-bold mb-3 flex items-center text-sm sm:text-base">
//                               <span className="mr-2">📱</span> Phone Number
//                             </label>
//                             <input
//                               type="tel"
//                               name="phone"
//                               value={formData.phone}
//                               onChange={handleInputChange}
//                               className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-200 rounded-2xl focus:border-green-500 focus:outline-none transition-all duration-300 bg-white/70 backdrop-blur-sm hover:border-green-300 text-sm sm:text-base"
//                               placeholder="Enter your phone number"
//                             />
//                           </div>
//                           <div>
//                             <label className="block text-gray-800 font-bold mb-3 flex items-center text-sm sm:text-base">
//                               <span className="mr-2">🛍️</span> Product Interest
//                             </label>
//                             <select
//                               name="productInterest"
//                               value={formData.productInterest}
//                               onChange={handleInputChange}
//                               className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-200 rounded-2xl focus:border-orange-500 focus:outline-none transition-all duration-300 bg-white/70 backdrop-blur-sm hover:border-orange-300 text-sm sm:text-base"
//                             >
//                               <option value="">Select a product</option>
//                               {products.map((product, index) => (
//                                 <option key={index} value={product}>{product}</option>
//                               ))}
//                             </select>
//                           </div>
//                         </div>

//                         <div>
//                           <label className="block text-gray-800 font-bold mb-3 flex items-center text-sm sm:text-base">
//                             <span className="mr-2">💡</span> Subject *
//                           </label>
//                           <input
//                             type="text"
//                             name="subject"
//                             value={formData.subject}
//                             onChange={handleInputChange}
//                             required
//                             className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-200 rounded-2xl focus:border-cyan-500 focus:outline-none transition-all duration-300 bg-white/70 backdrop-blur-sm hover:border-cyan-300 text-sm sm:text-base"
//                             placeholder="What's this about?"
//                           />
//                         </div>

//                         <div>
//                           <label className="block text-gray-800 font-bold mb-3 flex items-center text-sm sm:text-base">
//                             <span className="mr-2">✍️</span> Message *
//                           </label>
//                           <textarea
//                             name="message"
//                             value={formData.message}
//                             onChange={handleInputChange}
//                             required
//                             rows="4 sm:rows-6"
//                             className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-200 rounded-2xl focus:border-pink-500 focus:outline-none transition-all duration-300 bg-white/70 backdrop-blur-sm hover:border-pink-300 resize-none text-sm sm:text-base"
//                             placeholder="Tell us how we can help you achieve your trading goals..."
//                           ></textarea>
//                         </div>

//                         <button
//                           onClick={handleSubmit}
//                           className="group relative w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-4 sm:py-5 px-6 sm:px-8 rounded-2xl font-bold text-base sm:text-lg hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transform hover:scale-[1.02] transition-all duration-300 shadow-xl hover:shadow-2xl overflow-hidden"
//                         >
//                           <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
//                           <span className="relative flex items-center justify-center">
//                             <span className="mr-2 sm:mr-3 text-xl sm:text-2xl group-hover:animate-bounce">🚀</span>
//                             Send Message
//                             <span className="ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-300">💫</span>
//                           </span>
//                         </button>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               {/* Contact Information */}
//               <div className="space-y-6 sm:space-y-8">
//                 {/* Contact Details */}
//                 <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-6 sm:p-8 relative overflow-hidden">
//                   <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-bl from-cyan-500/20 to-transparent rounded-full blur-xl"></div>
                  
//                   <div className="relative z-10">
//                     <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-6 sm:mb-8 flex items-center">
//                       <span className="mr-2 sm:mr-3">📞</span>
//                       Get In Touch
//                     </h3>
//                     <div className="space-y-4 sm:space-y-6">
//                       {contactInfo.map((contact, index) => (
//                         <div key={index} className="group relative">
//                           <div className="flex items-center p-4 sm:p-6 bg-gradient-to-r from-white/50 to-white/30 backdrop-blur-sm rounded-2xl border border-white/30 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] cursor-pointer">
//                             <div className={`w-10 sm:w-14 h-10 sm:h-14 bg-gradient-to-r ${contact.gradient} rounded-xl flex items-center justify-center mr-4 sm:mr-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
//                               <span className="text-lg sm:text-xl text-white">{contact.icon}</span>
//                             </div>
//                             <div>
//                               <div className="text-xs sm:text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">
//                                 {contact.label}
//                               </div>
//                               <div className="text-gray-900 font-bold text-base sm:text-lg group-hover:text-blue-600 transition-colors duration-300">
//                                 {contact.text}
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Global Presence */}
//                 <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-6 sm:p-8 relative overflow-hidden">
//                   <div className="absolute bottom-0 left-0 w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-xl"></div>
                  
//                   <div className="relative z-10">
//                     <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-6 sm:mb-8 flex items-center">
//                       <span className="mr-2 sm:mr-3">🌍</span>
//                       Global Presence
//                     </h3>
//                     <div className="space-y-4 sm:space-y-6">
//                       {globalPresence.map((office, index) => (
//                         <div key={index} className="group p-4 sm:p-6 bg-gradient-to-r from-white/50 to-white/30 backdrop-blur-sm rounded-2xl border border-white/30 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
//                           <div className="flex items-start">
//                             <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
//                               <span className="text-lg sm:text-xl text-white">🏢</span>
//                             </div>
//                             <div>
//                               <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
//                                 {office.country}
//                               </h4>
//                               <p className="text-gray-600 text-sm sm:text-base">{office.address}</p>
//                               <p className="text-blue-600 font-semibold text-sm sm:text-base">✉️ {office.email}</p>
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Business Hours */}
//                 <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-6 sm:p-8 relative overflow-hidden">
//                   <div className="absolute bottom-0 left-0 w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-xl"></div>
                  
//                   <div className="relative z-10">
//                     <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-6 sm:mb-8 flex items-center">
//                       <span className="mr-2 sm:mr-3">⏰</span>
//                       Business Hours
//                     </h3>
//                     <div className="space-y-4">
//                       {businessHours.map((schedule, index) => (
//                         <div key={index} className={`flex justify-between items-center p-3 sm:p-4 rounded-2xl transition-all duration-300 ${
//                           schedule.isOpen 
//                             ? 'bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200' 
//                             : 'bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200'
//                         }`}>
//                           <span className="text-gray-700 font-bold flex items-center text-sm sm:text-base">
//                             {schedule.isOpen ? <span className="mr-2 text-green-500">🟢</span> : <span className="mr-2 text-gray-400">⚫</span>}
//                             {schedule.day}
//                           </span>
//                           <span className={`font-black text-sm sm:text-base ${schedule.isOpen ? 'text-green-600' : 'text-gray-500'}`}>
//                             {schedule.hours}
//                           </span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Why Choose Us */}
//                 <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-6 sm:p-8 relative overflow-hidden">
//                   <div className="absolute top-0 left-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-purple-400/20 to-transparent rounded-full blur-2xl"></div>
                  
//                   <div className="relative z-10">
//                     <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-6 sm:mb-8 text-center">
//                       <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                         Why Choose Us?
//                       </span>
//                     </h3>
//                     <div className="space-y-4 sm:space-y-6">
//                       {features.map((feature, index) => (
//                         <div key={index} className="group p-3 sm:p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/40 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
//                           <div className="flex items-start">
//                             <div className={`w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mr-3 sm:mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
//                               <span className="text-lg sm:text-xl text-white">{feature.icon}</span>
//                             </div>
//                             <div>
//                               <h4 className="font-black text-gray-900 mb-2 text-base sm:text-lg group-hover:text-blue-600 transition-colors duration-300">
//                                 {feature.title}
//                               </h4>
//                               <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
//                                 {feature.description}
//                               </p>
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Location Section */}
//         <section className="py-16 sm:py-20 lg:py-32 bg-white/50 backdrop-blur-xl relative">
//           <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-12 sm:mb-16">
//               <div className="inline-flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl mb-4 sm:mb-6 shadow-2xl">
//                 <span className="text-2xl sm:text-3xl">🏢</span>
//               </div>
//               <h2 className="text-3xl sm:text-5xl font-black text-gray-900 mb-4 sm:mb-6">
//                 Visit Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Office</span>
//               </h2>
//               <p className="text-base sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
//                 Located in the heart of the business district, our modern office space is designed for productive meetings and consultations.
//               </p>
//             </div>

//             <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
//               <div className="relative">
//                 <div className="bg-gradient-to-br from-blue-100 via-purple-50 to-pink-50 rounded-3xl h-64 sm:h-80 lg:h-96 flex items-center justify-center shadow-2xl relative overflow-hidden">
//                   <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl"></div>
//                   <div className="text-center relative z-10">
//                     <div className="text-6xl sm:text-8xl mb-4 sm:mb-6 animate-pulse">🗺️</div>
//                     <p className="text-gray-700 font-bold text-lg sm:text-xl mb-2">Interactive Map</p>
//                     <p className="text-gray-500 text-sm sm:text-lg">Coming Soon</p>
//                     <p className="text-gray-600 font-semibold mt-2 sm:mt-4 text-sm sm:text-base">📍 123 Trade Center, Business District</p>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="space-y-6 sm:space-y-8">
//                 <div className="group p-6 sm:p-8 bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
//                   <div className="flex items-start">
//                     <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4 sm:mr-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
//                       <span className="text-xl sm:text-2xl text-white">📍</span>
//                     </div>
//                     <div>
//                       <h4 className="text-xl sm:text-2xl font-black text-gray-900 mb-2 sm:mb-3 group-hover:text-red-600 transition-colors duration-300">
//                         Office Address
//                       </h4>
//                       <p className="text-gray-600 leading-relaxed text-sm sm:text-lg">
//                         123 Trade Center, Business District<br />
//                         Premium Commercial Complex, Floor 15<br />
//                         Metropolitan City, State - 110001<br />
//                         <span className="text-blue-600 font-semibold">🌟 Premium Location</span>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="group p-6 sm:p-8 bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
//                   <div className="flex items-start">
//                     <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mr-4 sm:mr-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
//                       <span className="text-xl sm:text-2xl text-white">🚗</span>
//                     </div>
//                     <div>
//                       <h4 className="text-xl sm:text-2xl font-black text-gray-900 mb-2 sm:mb-3 group-hover:text-green-600 transition-colors duration-300">
//                         Parking & Access
//                       </h4>
//                       <p className="text-gray-600 leading-relaxed text-sm sm:text-lg">
//                         🅿️ Free valet parking available<br />
//                         🚇 Metro station: 2 minutes walk<br />
//                         🚌 Major bus routes: 5 minutes walk<br />
//                         <span className="text-green-600 font-semibold">✅ Wheelchair Accessible</span>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Enhanced Call to Action */}
//         <section className="py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
//           <div className="absolute inset-0">
//             <div className="absolute top-0 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
//             <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
//             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 h-64 sm:h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
//           </div>
          
//           <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
//             <div className="mb-8 sm:mb-10">
//               <div className="inline-flex items-center justify-center w-16 sm:w-24 h-16 sm:h-24 bg-white/10 backdrop-blur-sm rounded-full mb-6 sm:mb-8 shadow-2xl">
//                 <span className="text-3xl sm:text-4xl">🚀</span>
//               </div>
//               <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 leading-tight">
//                 Ready to Start Your
//                 <br />
//                 <span className="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
//                   Trading Journey?
//                 </span>
//               </h2>
//               <p className="text-base sm:text-2xl text-blue-100 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
//                 Join thousands of satisfied clients who trust us for their global commodity trading needs. 
//                 <span className="text-cyan-300 font-bold">Your success is our mission.</span>
//               </p>
//             </div>
            
//             <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 sm:mb-12">
//               <button className="group relative px-8 sm:px-12 py-4 sm:py-5 bg-white text-blue-900 rounded-2xl font-black text-base sm:text-xl hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 overflow-hidden">
//                 <span className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
//                 <span className="relative flex items-center justify-center">
//                   <span className="mr-2 sm:mr-3 text-xl sm:text-2xl group-hover:animate-bounce">💼</span>
//                   Request Quote
//                   <span className="ml-2 sm:ml-3 group-hover:rotate-12 transition-transform duration-300">✨</span>
//                 </span>
//               </button>
//               <button className="group px-8 sm:px-12 py-4 sm:py-5 border-2 sm:border-3 border-white text-white rounded-2xl font-black text-base sm:text-xl hover:bg-white hover:text-blue-900 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105">
//                 <span className="flex items-center justify-center">
//                   <span className="mr-2 sm:mr-3 text-xl sm:text-2xl group-hover:animate-pulse">📅</span>
//                   Schedule Meeting
//                   <span className="ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-300">🎯</span>
//                 </span>
//               </button>
//             </div>

//             <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
//               <div className="p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
//                 <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">⚡</div>
//                 <div className="text-base sm:text-lg font-bold mb-1 sm:mb-2">Instant Response</div>
//                 <div className="text-blue-200 text-xs sm:text-sm">Get replies within 2 hours</div>
//               </div>
//               <div className="p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
//                 <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">🌍</div>
//                 <div className="text-base sm:text-lg font-bold mb-1 sm:mb-2">Global Network</div>
//                 <div className="text-blue-200 text-xs sm:text-sm">50+ countries served</div>
//               </div>
//               <div className="p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
//                 <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">🔒</div>
//                 <div className="text-base sm:text-lg font-bold mb-1 sm:mb-2">Secure Trading</div>
//                 <div className="text-blue-200 text-xs sm:text-sm">Bank-grade security</div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default Contact;


"use client"
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    productInterest: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState('');

  const contactInfo = [
    { 
      icon: '✉️', 
      text: 'ranjanmishra93@gmail.com', 
      label: 'Primary Email',
      gradient: 'from-blue-500 to-cyan-500'
    },
    { 
      icon: '📱', 
      text: '93117 84712', 
      label: 'Phone Number',
      gradient: 'from-green-500 to-emerald-500'
    },
    { 
      icon: '🏢', 
      text: 'Info@stylishhim.com', 
      label: 'Business Email',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const globalPresence = [
    {
      country: 'Head Office – India',
      address: 'B-317, Sudarshan Park, New Delhi – 110015',
      email: 'info.india@stylishhim.com'
    },
    {
      country: 'United Arab Emirates (Dubai)',
      address: 'Sheikh Zayed Road, Business District, Dubai',
      email: 'info.dubai@stylishhim.com'
    },
    {
      country: 'Vietnam',
      address: 'District 1, Ho Chi Minh City',
      email: 'info.vietnam@stylishhim.com'
    },
    {
      country: 'Thailand (Bangkok)',
      address: 'Sukhumvit – Asok Business Area, Bangkok',
      email: 'info.thailand@stylishhim.com'
    },
    {
      country: 'Madagascar',
      address: 'Antananarivo Central Business District, Mahajanga',
      email: 'info.madagascar@stylishhim.com'
    },
    {
      country: 'Democratic Republic Of The Congo (Kinshasa)',
      address: 'Gombe Business District, Kinshasa',
      email: 'info.congo@stylishhim.com'
    },
    {
      country: 'Kenya (Nairobi)',
      address: 'Westlands, Nairobi',
      email: 'info.kenya@stylishhim.com'
    },
    {
      country: 'Mauritius',
      address: 'Ebene Cybercity, Port Louis',
      email: 'info.mauritius@stylishhim.com'
    }
  ];

  const globalTeam = [
    { name: 'Omar Rahman', role: 'Regional Sales Officer, Dubai', email: 'info.dubai@stylishhim.com' },
    { name: 'Nguyen Thanh Hai', role: 'Regional Sales Officer, Vietnam', email: 'info.vietnam@stylishhim.com' },
    { name: 'Somchai Rattanakorn', role: 'Regional Sales Officer, Thailand', email: 'info.thailand@stylishhim.com' },
    { name: 'Andry Rakoto', role: 'Regional Sales Officer, Madagascar', email: 'info.madagascar@stylishhim.com' },
    { name: 'Jean Mbemba', role: 'Regional Sales Officer, Congo', email: 'info.congo@stylishhim.com' },
    { name: 'David Mwangi', role: 'Regional Sales Officer, Kenya', email: 'info.kenya@stylishhim.com' },
    { name: 'Anil Beeharry', role: 'Regional Sales Officer, Mauritius', email: 'info.mauritius@stylishhim.com' }
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM', isOpen: true },
    { day: 'Saturday', hours: '9:00 AM - 2:00 PM', isOpen: true },
    { day: 'Sunday', hours: 'Closed', isOpen: false }
  ];

  const products = [
    'Premium Rice 🌾',
    'Pure Sugar 🍬',
    'Fresh Seafood 🐟',
    'Industrial Chemicals ⚗️',
    'Maritime Shipping 🚢',
    'Cosmetics Products 💄',
    'Fine Tea Collection 🍵'
  ];

  const features = [
    {
      icon: '🌟',
      title: '24/7 Premium Support',
      description: 'Round-the-clock expert assistance for all your trading needs',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: '🌍',
      title: 'Global Excellence',
      description: 'Serving premium clients across 50+ countries worldwide',
      color: 'from-blue-400 to-indigo-500'
    },
    {
      icon: '⚡',
      title: 'Lightning Response',
      description: 'We respond to all inquiries within 2 hours guaranteed',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: '🔐',
      title: 'Bank-Grade Security',
      description: 'Military-grade encryption for all transactions',
      color: 'from-green-400 to-teal-500'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        productInterest: ''
      });
    }, 4000);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/20 overflow-x-hidden">
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-48 h-48 sm:w-80 sm:h-80 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-48 h-48 sm:w-80 sm:h-80 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-purple-300/10 to-pink-300/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-16 sm:py-20 lg:py-32">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-purple-900/80 to-blue-900/90"></div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-3 sm:w-4 h-3 sm:h-4 bg-white/20 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-20 sm:top-40 right-5 sm:right-20 w-4 sm:w-6 h-4 sm:h-6 bg-cyan-400/30 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-10 sm:bottom-20 left-1/4 w-2 sm:w-3 h-2 sm:h-3 bg-purple-400/40 rounded-full animate-bounce" style={{animationDelay: '3s'}}></div>

          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-full">
            <div className="mb-6 sm:mb-8">
              <span className="inline-block px-4 sm:px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-xs sm:text-sm font-semibold text-cyan-300 border border-white/20 mb-4 sm:mb-6">
                🚀 Get In Touch With Experts
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black mb-6 sm:mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent">
                Contact
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                Our Team
              </span>
            </h1>
            
            <p className="text-base sm:text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-10">
              Connect with our global trading experts and transform your commodity trading experience. 
              <span className="text-cyan-300 font-semibold">We're here 24/7 to help you succeed.</span>
            </p>

            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm">
              <span className="px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">⚡ Instant Response</span>
              <span className="px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">🌍 Global Experts</span>
              <span className="px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">🔒 Secure Platform</span>
            </div>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="py-16 sm:py-20 lg:py-32 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
            <div className="grid lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-20">
              
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-6 sm:p-8 lg:p-12 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-xl"></div>
                  <div className="absolute bottom-0 left-0 w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-xl"></div>

                  <div className="relative z-10">
                    <div className="text-center mb-8 sm:mb-10">
                      <div className="inline-flex items-center justify-center w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-4 shadow-lg">
                        <span className="text-xl sm:text-2xl">💬</span>
                      </div>
                      <h2 className="text-2xl sm:text-4xl font-black text-gray-900 mb-4">
                        Send Us a <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Message</span>
                      </h2>
                      <p className="text-sm sm:text-lg text-gray-600">Let's start a conversation about your trading needs</p>
                    </div>
                    
                    {isSubmitted ? (
                      <div className="text-center py-12 sm:py-16">
                        <div className="inline-flex items-center justify-center w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mb-6 shadow-2xl animate-pulse">
                          <span className="text-3xl sm:text-4xl">✨</span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
                          Message Sent Successfully!
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-lg">Thank you for reaching out! Our team will respond within 2 hours.</p>
                        <div className="mt-6">
                          <div className="inline-flex items-center px-4 sm:px-6 py-3 bg-green-50 text-green-700 rounded-full font-semibold text-xs sm:text-sm">
                            <span className="animate-pulse mr-2">🎉</span>
                            We'll be in touch soon!
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-6 sm:space-y-8">
                        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                          <div className="relative">
                            <label className="block text-gray-800 font-bold mb-3 flex items-center text-sm sm:text-base">
                              <span className="mr-2">👤</span> Full Name *
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              onFocus={() => setFocusedField('name')}
                              onBlur={() => setFocusedField('')}
                              required
                              className={`w-full px-4 sm:px-6 py-3 sm:py-4 border-2 rounded-2xl transition-all duration-300 bg-white/70 backdrop-blur-sm ${
                                focusedField === 'name' 
                                  ? 'border-blue-500 shadow-lg shadow-blue-500/25 scale-[1.02]' 
                                  : 'border-gray-200 hover:border-blue-300'
                              } focus:outline-none text-sm sm:text-base`}
                              placeholder="Enter your full name"
                            />
                            {focusedField === 'name' && (
                              <div className="absolute -bottom-2 left-4 sm:left-6 text-xs text-blue-600 font-semibold">
                                ✨ Looking good!
                              </div>
                            )}
                          </div>
                          <div className="relative">
                            <label className="block text-gray-800 font-bold mb-3 flex items-center text-sm sm:text-base">
                              <span className="mr-2">📧</span> Email Address *
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              onFocus={() => setFocusedField('email')}
                              onBlur={() => setFocusedField('')}
                              required
                              className={`w-full px-4 sm:px-6 py-3 sm:py-4 border-2 rounded-2xl transition-all duration-300 bg-white/70 backdrop-blur-sm ${
                                focusedField === 'email' 
                                  ? 'border-purple-500 shadow-lg shadow-purple-500/25 scale-[1.02]' 
                                  : 'border-gray-200 hover:border-purple-300'
                              } focus:outline-none text-sm sm:text-base`}
                              placeholder="Enter your email"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                          <div>
                            <label className="block text-gray-800 font-bold mb-3 flex items-center text-sm sm:text-base">
                              <span className="mr-2">📱</span> Phone Number
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-200 rounded-2xl focus:border-green-500 focus:outline-none transition-all duration-300 bg-white/70 backdrop-blur-sm hover:border-green-300 text-sm sm:text-base"
                              placeholder="Enter your phone number"
                            />
                          </div>
                          <div>
                            <label className="block text-gray-800 font-bold mb-3 flex items-center text-sm sm:text-base">
                              <span className="mr-2">🛍️</span> Product Interest
                            </label>
                            <select
                              name="productInterest"
                              value={formData.productInterest}
                              onChange={handleInputChange}
                              className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-200 rounded-2xl focus:border-orange-500 focus:outline-none transition-all duration-300 bg-white/70 backdrop-blur-sm hover:border-orange-300 text-sm sm:text-base"
                            >
                              <option value="">Select a product</option>
                              {products.map((product, index) => (
                                <option key={index} value={product}>{product}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-gray-800 font-bold mb-3 flex items-center text-sm sm:text-base">
                            <span className="mr-2">💡</span> Subject *
                          </label>
                          <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-200 rounded-2xl focus:border-cyan-500 focus:outline-none transition-all duration-300 bg-white/70 backdrop-blur-sm hover:border-cyan-300 text-sm sm:text-base"
                            placeholder="What's this about?"
                          />
                        </div>

                        <div>
                          <label className="block text-gray-800 font-bold mb-3 flex items-center text-sm sm:text-base">
                            <span className="mr-2">✍️</span> Message *
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows="4 sm:rows-6"
                            className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-gray-200 rounded-2xl focus:border-pink-500 focus:outline-none transition-all duration-300 bg-white/70 backdrop-blur-sm hover:border-pink-300 resize-none text-sm sm:text-base"
                            placeholder="Tell us how we can help you achieve your trading goals..."
                          ></textarea>
                        </div>

                        <button
                          onClick={handleSubmit}
                          className="group relative w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-4 sm:py-5 px-6 sm:px-8 rounded-2xl font-bold text-base sm:text-lg hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 transform hover:scale-[1.02] transition-all duration-300 shadow-xl hover:shadow-2xl overflow-hidden"
                        >
                          <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                          <span className="relative flex items-center justify-center">
                            <span className="mr-2 sm:mr-3 text-xl sm:text-2xl group-hover:animate-bounce">🚀</span>
                            Send Message
                            <span className="ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-300">💫</span>
                          </span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-6 sm:space-y-8">
                {/* Contact Details */}
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-6 sm:p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-bl from-cyan-500/20 to-transparent rounded-full blur-xl"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-6 sm:mb-8 flex items-center">
                      <span className="mr-2 sm:mr-3">📞</span>
                      Get In Touch
                    </h3>
                    <div className="space-y-4 sm:space-y-6">
                      {contactInfo.map((contact, index) => (
                        <div key={index} className="group relative">
                          <div className="flex items-center p-4 sm:p-6 bg-gradient-to-r from-white/50 to-white/30 backdrop-blur-sm rounded-2xl border border-white/30 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] cursor-pointer">
                            <div className={`w-10 sm:w-14 h-10 sm:h-14 bg-gradient-to-r ${contact.gradient} rounded-xl flex items-center justify-center mr-4 sm:mr-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                              <span className="text-lg sm:text-xl text-white">{contact.icon}</span>
                            </div>
                            <div>
                              <div className="text-xs sm:text-sm text-gray-500 font-bold uppercase tracking-wider mb-1">
                                {contact.label}
                              </div>
                              <div className="text-gray-900 font-bold text-base sm:text-lg group-hover:text-blue-600 transition-colors duration-300">
                                {contact.text}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Global Presence */}
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-6 sm:p-8 relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-xl"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-6 sm:mb-8 flex items-center">
                      <span className="mr-2 sm:mr-3">🌍</span>
                      Global Presence
                    </h3>
                    <div className="space-y-4 sm:space-y-6">
                      {globalPresence.map((office, index) => (
                        <div key={index} className="group p-4 sm:p-6 bg-gradient-to-r from-white/50 to-white/30 backdrop-blur-sm rounded-2xl border border-white/30 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                          <div className="flex items-start">
                            <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                              <span className="text-lg sm:text-xl text-white">🏢</span>
                            </div>
                            <div>
                              <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                {office.country}
                              </h4>
                              <p className="text-gray-600 text-sm sm:text-base">{office.address}</p>
                              <p className="text-blue-600 font-semibold text-sm sm:text-base">✉️ {office.email}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-6 sm:p-8 relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-xl"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-6 sm:mb-8 flex items-center">
                      <span className="mr-2 sm:mr-3">⏰</span>
                      Business Hours
                    </h3>
                    <div className="space-y-4">
                      {businessHours.map((schedule, index) => (
                        <div key={index} className={`flex justify-between items-center p-3 sm:p-4 rounded-2xl transition-all duration-300 ${
                          schedule.isOpen 
                            ? 'bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200' 
                            : 'bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200'
                        }`}>
                          <span className="text-gray-700 font-bold flex items-center text-sm sm:text-base">
                            {schedule.isOpen ? <span className="mr-2 text-green-500">🟢</span> : <span className="mr-2 text-gray-400">⚫</span>}
                            {schedule.day}
                          </span>
                          <span className={`font-black text-sm sm:text-base ${schedule.isOpen ? 'text-green-600' : 'text-gray-500'}`}>
                            {schedule.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-6 sm:p-8 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-purple-400/20 to-transparent rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-6 sm:mb-8 text-center">
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Why Choose Us?
                      </span>
                    </h3>
                    <div className="space-y-4 sm:space-y-6">
                      {features.map((feature, index) => (
                        <div key={index} className="group p-3 sm:p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/40 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
                          <div className="flex items-start">
                            <div className={`w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mr-3 sm:mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                              <span className="text-lg sm:text-xl text-white">{feature.icon}</span>
                            </div>
                            <div>
                              <h4 className="font-black text-gray-900 mb-2 text-base sm:text-lg group-hover:text-blue-600 transition-colors duration-300">
                                {feature.title}
                              </h4>
                              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Team Section */}
        <section className="py-16 sm:py-20 lg:py-32 bg-white/50 backdrop-blur-xl relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl mb-4 sm:mb-6 shadow-2xl">
                <span className="text-2xl sm:text-3xl">👥</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-gray-900 mb-4 sm:mb-6">
                Meet Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Global Team</span>
              </h2>
              <p className="text-base sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our dedicated regional sales officers are here to assist you with your trading needs worldwide.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {globalTeam.map((member, index) => (
                <div key={index} className="group p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/30 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                  <div className="flex items-start">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-lg sm:text-xl text-white">👤</span>
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {member.name}
                      </h4>
                      <p className="text-gray-600 text-sm sm:text-base">{member.role}</p>
                      <p className="text-blue-600 font-semibold text-sm sm:text-base">✉️ {member.email}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section className="py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl mb-4 sm:mb-6 shadow-2xl">
                <span className="text-2xl sm:text-3xl">📞</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-gray-900 mb-4 sm:mb-6">
                Contact <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Us</span>
              </h2>
              <p className="text-base sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Reach out to our head office or regional teams for personalized assistance.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-6 sm:p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-bl from-cyan-500/20 to-transparent rounded-full blur-xl"></div>
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-4 sm:mb-6">Head Office (India)</h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-2">B-317, Sudarshan Park, New Delhi – 110015</p>
                  <p className="text-blue-600 font-semibold text-sm sm:text-base">📱 +91-93117 84712</p>
                  <p className="text-blue-600 font-semibold text-sm sm:text-base">✉️ info.india@stylishhim.com</p>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-6 sm:p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-bl from-cyan-500/20 to-transparent rounded-full blur-xl"></div>
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-4 sm:mb-6">Regional Enquiries</h3>
                  <ul className="space-y-2 text-sm sm:text-base">
                    {globalPresence.slice(1).map((office, index) => (
                      <li key={index} className="text-gray-600">
                        <span className="font-bold">{office.country}:</span> <span className="text-blue-600">{office.email}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-6 sm:p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-bl from-cyan-500/20 to-transparent rounded-full blur-xl"></div>
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-4 sm:mb-6">General Enquiries</h3>
                  <p className="text-blue-600 font-semibold text-sm sm:text-base mb-2">✉️ info@stylishhim.com</p>
                  <p className="text-blue-600 font-semibold text-sm sm:text-base">🌐 www.stylishhim.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Email Auto-Reply Template Section */}
        <section className="py-16 sm:py-20 lg:py-32 bg-white/50 backdrop-blur-xl relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl mb-4 sm:mb-6 shadow-2xl">
                <span className="text-2xl sm:text-3xl">✉️</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-gray-900 mb-4 sm:mb-6">
                Email <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Auto-Reply</span>
              </h2>
              <p className="text-base sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Below is the template we use for acknowledging your inquiries.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-6 sm:p-8 relative overflow-hidden max-w-2xl mx-auto">
              <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-bl from-cyan-500/20 to-transparent rounded-full blur-xl"></div>
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-4 sm:mb-6">Auto-Reply Template</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-2"><span className="font-bold">Subject:</span> Thank You For Contacting Stylish Him Exim</p>
                <p className="text-gray-600 text-sm sm:text-base mb-2"><span className="font-bold">Message:</span></p>
                <p className="text-gray-600 text-sm sm:text-base mb-2">Thank You For Reaching Out To Our India Office.</p>
                <p className="text-gray-600 text-sm sm:text-base mb-2">Our Regional Team Will Review Your Inquiry And Respond Shortly.</p>
                <p className="text-gray-600 text-sm sm:text-base">Warm Regards,</p>
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-16 sm:py-20 lg:py-32 bg-white/50 backdrop-blur-xl relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center justify-center w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl mb-4 sm:mb-6 shadow-2xl">
                <span className="text-2xl sm:text-3xl">🏢</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-gray-900 mb-4 sm:mb-6">
                Visit Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Office</span>
              </h2>
              <p className="text-base sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Located in the heart of the business district, our modern office space is designed for productive meetings and consultations.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-100 via-purple-50 to-pink-50 rounded-3xl h-64 sm:h-80 lg:h-96 flex items-center justify-center shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl"></div>
                  <div className="text-center relative z-10">
                    <div className="text-6xl sm:text-8xl mb-4 sm:mb-6 animate-pulse">🗺️</div>
                    <p className="text-gray-700 font-bold text-lg sm:text-xl mb-2">Interactive Map</p>
                    <p className="text-gray-500 text-sm sm:text-lg">Coming Soon</p>
                    <p className="text-gray-600 font-semibold mt-2 sm:mt-4 text-sm sm:text-base">📍 123 Trade Center, Business District</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6 sm:space-y-8">
                <div className="group p-6 sm:p-8 bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
                  <div className="flex items-start">
                    <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4 sm:mr-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-xl sm:text-2xl text-white">📍</span>
                    </div>
                    <div>
                      <h4 className="text-xl sm:text-2xl font-black text-gray-900 mb-2 sm:mb-3 group-hover:text-red-600 transition-colors duration-300">
                        Office Address
                      </h4>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-lg">
                        123 Trade Center, Business District<br />
                        Premium Commercial Complex, Floor 15<br />
                        Metropolitan City, State - 110001<br />
                        <span className="text-blue-600 font-semibold">🌟 Premium Location</span>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="group p-6 sm:p-8 bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
                  <div className="flex items-start">
                    <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mr-4 sm:mr-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-xl sm:text-2xl text-white">🚗</span>
                    </div>
                    <div>
                      <h4 className="text-xl sm:text-2xl font-black text-gray-900 mb-2 sm:mb-3 group-hover:text-green-600 transition-colors duration-300">
                        Parking & Access
                      </h4>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-lg">
                        🅿️ Free valet parking available<br />
                        🚇 Metro station: 2 minutes walk<br />
                        🚌 Major bus routes: 5 minutes walk<br />
                        <span className="text-green-600 font-semibold">✅ Wheelchair Accessible</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Call to Action */}
        <section className="py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 h-64 sm:h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
          </div>
          
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-full">
            <div className="mb-8 sm:mb-10">
              <div className="inline-flex items-center justify-center w-16 sm:w-24 h-16 sm:h-24 bg-white/10 backdrop-blur-sm rounded-full mb-6 sm:mb-8 shadow-2xl">
                <span className="text-3xl sm:text-4xl">🚀</span>
              </div>
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 leading-tight">
                Ready to Start Your
                <br />
                <span className="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                  Trading Journey?
                </span>
              </h2>
              <p className="text-base sm:text-2xl text-blue-100 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                Join thousands of satisfied clients who trust us for their global commodity trading needs. 
                <span className="text-cyan-300 font-bold">Your success is our mission.</span>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 sm:mb-12">
              <button className="group relative px-8 sm:px-12 py-4 sm:py-5 bg-white text-blue-900 rounded-2xl font-black text-base sm:text-xl hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 overflow-hidden">
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center justify-center">
                  <span className="mr-2 sm:mr-3 text-xl sm:text-2xl group-hover:animate-bounce">💼</span>
                  Request Quote
                  <span className="ml-2 sm:ml-3 group-hover:rotate-12 transition-transform duration-300">✨</span>
                </span>
              </button>
              <button className="group px-8 sm:px-12 py-4 sm:py-5 border-2 sm:border-3 border-white text-white rounded-2xl font-black text-base sm:text-xl hover:bg-white hover:text-blue-900 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105">
                <span className="flex items-center justify-center">
                  <span className="mr-2 sm:mr-3 text-xl sm:text-2xl group-hover:animate-pulse">📅</span>
                  Schedule Meeting
                  <span className="ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-300">🎯</span>
                </span>
              </button>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
              <div className="p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">⚡</div>
                <div className="text-base sm:text-lg font-bold mb-1 sm:mb-2">Instant Response</div>
                <div className="text-blue-200 text-xs sm:text-sm">Get replies within 2 hours</div>
              </div>
              <div className="p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">🌍</div>
                <div className="text-base sm:text-lg font-bold mb-1 sm:mb-2">Global Network</div>
                <div className="text-blue-200 text-xs sm:text-sm">50+ countries served</div>
              </div>
              <div className="p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">🔒</div>
                <div className="text-base sm:text-lg font-bold mb-1 sm:mb-2">Secure Trading</div>
                <div className="text-blue-200 text-xs sm:text-sm">Bank-grade security</div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Contact;