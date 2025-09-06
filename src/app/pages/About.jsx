import React from 'react';

const About = () => {
  const products = [
    {
      id: 1,
      name: 'Premium Rice',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'High-quality rice varieties sourced from the finest agricultural regions worldwide. We ensure premium quality through rigorous testing and sustainable farming partnerships.',
      features: ['Organic & Non-Organic', 'Multiple Varieties', 'Global Sourcing', 'Quality Certified']
    },
    {
      id: 2,
      name: 'Pure Sugar',
      image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Refined sugar products for industrial and commercial applications. Our sugar meets international standards for purity and consistency.',
      features: ['Refined White Sugar', 'Raw Sugar', 'Industrial Grade', 'Food Grade Certified']
    },
    {
      id: 3,
      name: 'Fresh Seafood',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Premium quality fresh and frozen seafood products from sustainable fisheries. We maintain the cold chain to ensure freshness and quality.',
      features: ['Fresh & Frozen', 'Sustainable Sourcing', 'Cold Chain Maintained', 'Export Quality']
    },
    {
      id: 4,
      name: 'Industrial Chemicals',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Specialty chemicals and industrial compounds for various manufacturing applications. All products comply with international safety standards.',
      features: ['Safety Certified', 'Technical Support', 'Custom Solutions', 'Global Standards']
    },
    {
      id: 5,
      name: 'Maritime Shipping',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Comprehensive shipping and logistics services connecting global markets. Our fleet ensures safe and timely delivery of commodities worldwide.',
      features: ['Global Network', 'Modern Fleet', 'Tracking Systems', 'Insurance Coverage']
    },
    {
      id: 6,
      name: 'Cosmetics Products',
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Premium beauty and cosmetic products manufacturing with focus on quality ingredients and innovative formulations for global markets.',
      features: ['Natural Ingredients', 'Quality Control', 'Private Label', 'Regulatory Compliance']
    },
    {
      id: 7,
      name: 'Fine Tea Collection',
      image: 'https://images.unsplash.com/photo-1597318281675-0ebdb7a8aff9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Exquisite tea varieties sourced from renowned tea gardens around the world. Each blend represents the finest traditions of tea cultivation.',
      features: ['Premium Blends', 'Direct Trade', 'Artisan Quality', 'Sustainable Sourcing']
    }
  ];

  const stats = [
    { number: '1+', label: 'Years Experience' },
    { number: '50+', label: 'Countries Served' },
    { number: '100+', label: 'Happy Clients' },
    { number: '100+', label: 'Tons Traded' }
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Quality First',
      description: 'We never compromise on quality. Every product undergoes rigorous testing and quality assurance before reaching our clients.'
    },
    {
      icon: '🌍',
      title: 'Global Reach',
      description: 'With operations spanning across 50+ countries, we connect producers and consumers worldwide through our extensive network.'
    },
    {
      icon: '🤝',
      title: 'Trust & Reliability',
      description: 'Built on decades of trust, we maintain long-term partnerships with suppliers and clients through transparent business practices.'
    },
    {
      icon: '🌱',
      title: 'Sustainability',
      description: 'We are committed to sustainable trading practices that benefit communities and protect the environment for future generations.'
    }
  ];

  const team = [
    {
      name: 'Pradeep Mishra',
      position: 'Chief Executive Officer',
      image: 'https://lh3.googleusercontent.com/ogw/AF2bZygnDN02Te97on5Wf-4sDfYUPxMX27fbGwu4tJIZbNoA2eI=s64-c-mo',
      experience: '2+ years in global trade'
    },
    {
      name: 'Ranjana Mishra',
      position: 'Head of Operations',
      image: 'https://lh3.googleusercontent.com/ogw/AF2bZygnDN02Te97on5Wf-4sDfYUPxMX27fbGwu4tJIZbNoA2eI=s64-c-mo',
      experience: '5+ years in logistics'
    },
    {
      name: 'Karan Pandey',
      position: 'Quality Assurance Director',
      image: 'https://lh3.googleusercontent.com/ogw/AF2bZygnDN02Te97on5Wf-4sDfYUPxMX27fbGwu4tJIZbNoA2eI=s64-c-mo',
      experience: '1+ years in quality control'
    },
    {
      name: 'Testing Text',
      position: 'Global Sales Manager',
      image: 'https://lh3.googleusercontent.com/ogw/AF2bZygnDN02Te97on5Wf-4sDfYUPxMX27fbGwu4tJIZbNoA2eI=s64-c-mo',
      experience: '1+ years in international sales'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center bg-no-repeat opacity-20"></div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            About <span className="bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">StylishHim Pvt Ltd.</span>
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Connecting global markets with premium commodities for over 25 years. Your trusted partner in international trade.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Story & Mission
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Founded in 1995, Global Trading Co. has grown from a small commodity trading company to a worldwide leader in international trade. We specialize in sourcing, processing, and delivering premium quality products across multiple industries.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our mission is to bridge global markets by providing reliable access to high-quality commodities while maintaining the highest standards of integrity, sustainability, and customer service. We believe in building lasting partnerships that create value for all stakeholders.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Global Trading Operations" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-xl">
                25+
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              What We Provide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse portfolio spans across multiple industries, ensuring we meet the varied needs of our global clientele with premium quality products.
            </p>
          </div>

          <div className="grid gap-8 lg:gap-12">
            {products.map((product, index) => (
              <div key={product.id} className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 lg:h-80 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {product.name}
                  </h3>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide every decision we make and every relationship we build.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced team brings decades of expertise in global trade, logistics, and business development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  />
                  <div className="absolute inset-0 w-32 h-32 rounded-full mx-auto bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied clients worldwide who trust StylishHim Pvt Ltd. for their commodity trading needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-900 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Get Started Today
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;