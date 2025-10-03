import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation'; // Your provided Navigation component
import Footer from '../components/Footer';
import services from '../data/services-deep.json';

interface ServiceDetail {
  id: string;
  title: string;
  image: string;
  long_description: string;
  offerings: string[];
  development_process: string;
}

const ServiceDetailPage = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const [service, setService] = useState<ServiceDetail | null>(null);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    const serviceData = services.find(s => s.id === serviceId);
    if (serviceData) {
      setService(serviceData as ServiceDetail);
    }
  }, [serviceId]);

  if (!service) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
        <Navigation />
        Service not found
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Navigation />
      
      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Image Section - **WITH CORRECTED TOP MARGIN** */}
        <div className="relative h-64 md:h-80 w-full mt-16 sm:mt-18 md:mt-20 lg:mt-24">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center drop-shadow-lg px-4">
              {service.title}
            </h1>
          </div>
        </div>

        {/* Service Details Section */}
        <div className="container mx-auto p-8">
          <button
            onClick={() => navigate(-1)}
            className="mb-8 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-purple-600 transition-all duration-300 inline-flex items-center shadow-lg"
          >
            &larr; <span className="ml-2">Back</span>
          </button>
          
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">{service.long_description}</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-rich-black/50 p-6 rounded-lg border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 text-blue-400">What We Offer</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-400">
                {service.offerings.map((offering, index) => (
                  <li key={index}>{offering}</li>
                ))}
              </ul>
            </div>

            <div className="bg-rich-black/50 p-6 rounded-lg border border-white/10">
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Our Development Process</h2>
              <p className="text-gray-400 leading-relaxed">{service.development_process}</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetailPage;
