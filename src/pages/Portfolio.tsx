import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import PortfolioItem from "@/components/PortfolioItem";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

const PortfolioPage = () => {
  const [filter, setFilter] = useState<string>("all");

  // Sample portfolio data with removed projects
  const portfolioItems = [
    {
      id: 1,
      title: "Vishvadeep.in",
      description: "Company landing page for Dhoop and Aggarbatti products featuring elegant design and e-commerce functionality.",
      imageSrc: "https://via.placeholder.com/600x340/111/333?text=Vishvadeep.in",
      tags: ["Web Development", "E-commerce", "UI/UX"],
      link: "https://vishvadeep.in",
      category: "web"
    },
    {
      id: 2,
      title: "Mahadev Box Cricket Admin App",
      description: "A custom admin application for managing box cricket bookings, schedules, and customer management.",
      imageSrc: "https://via.placeholder.com/600x340/111/333?text=MahadevBoxCricket",
      tags: ["Web App", "Admin Dashboard", "Booking System"],
      link: "https://mahadevboxcricket.dreamable.in",
      category: "app"
    }
  ];

  const filteredItems = filter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filter);

  return (
    <div className="min-h-screen bg-dreamable-dark">
      <AnimatedBackground />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="px-3 py-1 bg-dreamable-green/10 text-dreamable-green text-sm rounded-full">
              Our Work
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Portfolio
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Explore our recent projects and see how we've helped businesses transform their digital presence.
            </p>
          </div>
        </div>

        {/* Background elements */}
        <div className="absolute top-1/3 right-0 w-64 h-64 bg-dreamable-green/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-dreamable-green/5 rounded-full blur-3xl"></div>
      </section>

      {/* Portfolio Section */}
      <section className="py-12 relative">
        <div className="absolute inset-0 grid-bg opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button 
              className={`px-6 py-2 rounded-full transition-colors ${filter === 'all' ? 'bg-dreamable-green text-black' : 'bg-dreamable-gray/20 text-white hover:bg-dreamable-gray/30'}`}
              onClick={() => setFilter('all')}
            >
              All Projects
            </button>
            <button 
              className={`px-6 py-2 rounded-full transition-colors ${filter === 'web' ? 'bg-dreamable-green text-black' : 'bg-dreamable-gray/20 text-white hover:bg-dreamable-gray/30'}`}
              onClick={() => setFilter('web')}
            >
              Websites
            </button>
            <button 
              className={`px-6 py-2 rounded-full transition-colors ${filter === 'app' ? 'bg-dreamable-green text-black' : 'bg-dreamable-gray/20 text-white hover:bg-dreamable-gray/30'}`}
              onClick={() => setFilter('app')}
            >
              Applications
            </button>
            <button 
              className={`px-6 py-2 rounded-full transition-colors ${filter === 'design' ? 'bg-dreamable-green text-black' : 'bg-dreamable-gray/20 text-white hover:bg-dreamable-gray/30'}`}
              onClick={() => setFilter('design')}
            >
              Design
            </button>
          </div>

          {/* Portfolio grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <PortfolioItem
                key={item.id}
                title={item.title}
                description={item.description}
                imageSrc={item.imageSrc}
                tags={item.tags}
                link={item.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Client Statistics Section */}
      <section className="py-20 bg-dreamable-darker">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-dreamable-green text-4xl md:text-5xl font-bold mb-2">10+</div>
                <p className="text-gray-400">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="text-dreamable-green text-4xl md:text-5xl font-bold mb-2">5+</div>
                <p className="text-gray-400">Happy Clients</p>
              </div>
              <div className="text-center">
                <div className="text-dreamable-green text-4xl md:text-5xl font-bold mb-2">100%</div>
                <p className="text-gray-400">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 grid-bg opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="px-3 py-1 bg-dreamable-green/10 text-dreamable-green text-sm rounded-full">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Our Development Process
            </h2>
            <p className="text-gray-400">
              We follow a structured approach to ensure successful project delivery.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="w-16 h-16 bg-dreamable-green/10 rounded-full flex items-center justify-center text-dreamable-green text-2xl font-bold border border-dreamable-green/30">
                    1
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-3">Discovery</h3>
                  <p className="text-gray-300">
                    We start by understanding your business, goals, target audience, and requirements. This phase involves detailed discussions to align our vision with yours.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="w-16 h-16 bg-dreamable-green/10 rounded-full flex items-center justify-center text-dreamable-green text-2xl font-bold border border-dreamable-green/30">
                    2
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-3">Planning & Design</h3>
                  <p className="text-gray-300">
                    We create a detailed project plan and design mockups for your approval. This phase sets the foundation for your project's visual and functional aspects.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="w-16 h-16 bg-dreamable-green/10 rounded-full flex items-center justify-center text-dreamable-green text-2xl font-bold border border-dreamable-green/30">
                    3
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-3">Development</h3>
                  <p className="text-gray-300">
                    Our developers build your solution using modern technologies and best practices. We follow an iterative approach with regular updates and feedback sessions.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="w-16 h-16 bg-dreamable-green/10 rounded-full flex items-center justify-center text-dreamable-green text-2xl font-bold border border-dreamable-green/30">
                    4
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-3">Testing & Launch</h3>
                  <p className="text-gray-300">
                    We conduct thorough testing to ensure quality and performance before launching your project. This phase includes fixing any issues and final refinements.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="w-16 h-16 bg-dreamable-green/10 rounded-full flex items-center justify-center text-dreamable-green text-2xl font-bold border border-dreamable-green/30">
                    5
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-3">Support & Maintenance</h3>
                  <p className="text-gray-300">
                    We provide ongoing support and maintenance to ensure your solution continues to perform optimally and evolves with your business needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dreamable-darker">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-dreamable-gray/30 to-dreamable-gray/10 p-8 md:p-12 rounded-2xl border border-dreamable-green/20 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-dreamable-green/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-dreamable-green/5 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl"></div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Next Project?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with custom digital solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-dreamable-green hover:bg-dreamable-darkgreen text-black text-lg px-8 py-6" asChild>
                  <Link to="/contact">Start a Project</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PortfolioPage;
