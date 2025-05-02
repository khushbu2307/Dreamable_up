import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import FAQItem from '@/components/FAQItem';
import PortfolioItem from '@/components/PortfolioItem';

// Sample images for portfolio
const portfolioImg1 = "https://via.placeholder.com/600x340/111/333?text=Vishvadeep.in";
const portfolioImg2 = "https://via.placeholder.com/600x340/111/333?text=MahadevBoxCricket";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-dreamable-dark">
      <AnimatedBackground />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6 inline-block hero-badge">
              <span className="px-3 py-1 bg-dreamable-green/10 text-dreamable-green text-sm rounded-full">
                Launched January 18th, 2024
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight hero-title">
              Transform Your Digital <span className="text-gradient">Vision</span> Into Reality
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto hero-subtitle">
              Dreamable brings your ideas to life with cutting-edge web development, mobile apps, and digital marketing solutions tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center hero-buttons">
              <Button className="bg-dreamable-green hover:bg-dreamable-darkgreen text-white text-lg px-8 py-6" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button variant="outline" className="border-dreamable-green text-dreamable-green hover:bg-dreamable-green/10 text-lg px-8 py-6" asChild>
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-12 bg-dreamable-darker">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-xl text-gray-400">Trusted by innovative businesses</h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="text-gray-400 hover:text-dreamable-green transition-colors duration-300">
              <p className="text-xl font-semibold">Vishvadeep</p>
            </div>
            <div className="text-gray-400 hover:text-dreamable-green transition-colors duration-300">
              <p className="text-xl font-semibold">Mahadev Box Cricket</p>
            </div>
            <div className="text-gray-400 hover:text-gray-300 transition-colors duration-300 opacity-50">
              <p className="text-xl font-semibold">Your Brand Here</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative overflow-hidden" id="services">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-3 py-1 bg-dreamable-green/10 text-dreamable-green text-sm rounded-full">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Comprehensive Digital Solutions
            </h2>
            <p className="text-gray-400">
              We provide end-to-end digital services to help your business thrive in the digital landscape.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
              title="Web Development"
              description="Custom websites built with modern technologies that are responsive, fast, and user-friendly."
            />
            
            <ServiceCard 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              }
              title="Mobile App Development"
              description="Native and cross-platform mobile applications for iOS and Android that delight users."
            />
            
            <ServiceCard 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              }
              title="Custom Web Apps"
              description="Tailor-made web applications to streamline your business processes and operations."
            />
            
            <ServiceCard 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              }
              title="Digital Marketing"
              description="Strategic digital marketing services to increase your online presence and drive conversions."
            />
            
            <ServiceCard 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              }
              title="Graphics Design"
              description="Eye-catching visuals and branding elements that communicate your brand's message effectively."
            />
            
            <ServiceCard 
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
              title="IT Consulting"
              description="Expert advice on technology solutions to help your business grow and stay competitive."
            />
          </div>

          <div className="text-center mt-12">
            <Button className="bg-dreamable-green hover:bg-dreamable-darkgreen text-black" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-dreamable-darker">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="px-3 py-1 bg-dreamable-green/10 text-dreamable-green text-sm rounded-full">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Dreamable Advantage
            </h2>
            <p className="text-gray-400">
              We combine technical expertise with creative vision to deliver digital solutions that exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-dreamable-gray/10 p-6 rounded-lg border border-dreamable-gray/30">
              <div className="w-12 h-12 flex items-center justify-center bg-dreamable-green/10 rounded-lg text-dreamable-green mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Fast Turnaround</h3>
              <p className="text-gray-400">We deliver high-quality projects within agreed timeframes, ensuring you can meet your business goals without delays.</p>
            </div>

            <div className="bg-dreamable-gray/10 p-6 rounded-lg border border-dreamable-gray/30">
              <div className="w-12 h-12 flex items-center justify-center bg-dreamable-green/10 rounded-lg text-dreamable-green mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Cutting-Edge Technology</h3>
              <p className="text-gray-400">We utilize the latest technologies and best practices to build solutions that are modern, scalable, and future-proof.</p>
            </div>

            <div className="bg-dreamable-gray/10 p-6 rounded-lg border border-dreamable-gray/30">
              <div className="w-12 h-12 flex items-center justify-center bg-dreamable-green/10 rounded-lg text-dreamable-green mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20h2a2 2 0 002-2v10m-6 0a2 2 0 012 2h2a2 2 0 012-2m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Team</h3>
              <p className="text-gray-400">Our team of 10 skilled professionals brings diverse expertise across web development, design, and digital marketing.</p>
            </div>

            <div className="bg-dreamable-gray/10 p-6 rounded-lg border border-dreamable-gray/30">
              <div className="w-12 h-12 flex items-center justify-center bg-dreamable-green/10 rounded-lg text-dreamable-green mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
              <p className="text-gray-400">We provide ongoing support to ensure your digital solutions remain operational and effective at all times.</p>
            </div>

            <div className="bg-dreamable-gray/10 p-6 rounded-lg border border-dreamable-gray/30">
              <div className="w-12 h-12 flex items-center justify-center bg-dreamable-green/10 rounded-lg text-dreamable-green mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Custom Solutions</h3>
              <p className="text-gray-400">We create tailored solutions that address your specific challenges and align with your business objectives.</p>
            </div>

            <div className="bg-dreamable-gray/10 p-6 rounded-lg border border-dreamable-gray/30">
              <div className="w-12 h-12 flex items-center justify-center bg-dreamable-green/10 rounded-lg text-dreamable-green mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Affordable Pricing</h3>
              <p className="text-gray-400">We offer competitive pricing without compromising on quality, ensuring great value for your investment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="px-3 py-1 bg-dreamable-green/10 text-dreamable-green text-sm rounded-full">
              Our Work
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Featured Projects
            </h2>
            <p className="text-gray-400">
              Check out some of our recent work that showcases our expertise and creativity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <PortfolioItem
              title="Vishvadeep.in"
              description="A company landing page for Dhoop and Aggarbatti products featuring elegant design and e-commerce functionality."
              imageSrc={portfolioImg1}
              tags={["Web Development", "E-commerce", "UI/UX"]}
              link="https://vishvadeep.in"
            />
            
            <PortfolioItem
              title="Mahadev Box Cricket Admin App"
              description="A custom admin application for managing box cricket bookings, schedules, and customer management."
              imageSrc={portfolioImg2}
              tags={["Web App", "Admin Dashboard", "Booking System"]}
              link="https://mahadevboxcricket.dreamable.in"
            />
          </div>

          <div className="text-center mt-12">
            <Button className="bg-dreamable-green hover:bg-dreamable-darkgreen text-black" asChild>
              <Link to="/portfolio">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-dreamable-darker">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="px-3 py-1 bg-dreamable-green/10 text-dreamable-green text-sm rounded-full">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-gray-400">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TestimonialCard 
              name="Rajesh Patel"
              role="CEO"
              company="Vishvadeep Incense"
              testimonial="Dreamable transformed our online presence with a beautiful website that perfectly captures our brand's essence. Their attention to detail and prompt delivery exceeded our expectations."
              date="April 2025"
            />
            
            <TestimonialCard 
              name="Sunil Kumar"
              role="Owner"
              company="Mahadev Box Cricket"
              testimonial="The admin application developed by Dreamable has streamlined our booking process and saved us countless hours. Their team was responsive and understood our requirements perfectly."
              date="May 2025"
            />
            
            <TestimonialCard 
              name="Priya Sharma"
              role="Marketing Director"
              company="Global Solutions"
              testimonial="Working with Dreamable was a pleasure. Their team's expertise in digital marketing has significantly improved our online presence and lead generation efforts."
              date="June 2025"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="px-3 py-1 bg-dreamable-green/10 text-dreamable-green text-sm rounded-full">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400">
              Find answers to common questions about our services and processes.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <FAQItem 
              question="What services does Dreamable offer?"
              answer="Dreamable offers a comprehensive range of digital services including web development, mobile app development, custom web applications, digital marketing, and graphic design. We provide end-to-end solutions tailored to your specific business needs."
            />
            
            <FAQItem 
              question="How long does it take to develop a website?"
              answer="The timeline for website development varies depending on the complexity and requirements of the project. A simple informational website can be completed in 2-4 weeks, while more complex e-commerce or custom web applications may take 6-12 weeks. We'll provide you with a specific timeline during our initial consultation."
            />
            
            <FAQItem 
              question="What is your development process?"
              answer="Our development process includes requirement gathering, planning, design, development, testing, deployment, and maintenance. We follow an iterative approach, keeping you involved throughout the process to ensure the final product meets your expectations."
            />
            
            <FAQItem 
              question="How much does a typical project cost?"
              answer="Project costs vary based on scope, complexity, and specific requirements. We offer competitive pricing and will provide a detailed quote after understanding your project needs. We focus on delivering value for your investment while maintaining high quality standards."
            />
            
            <FAQItem 
              question="Do you provide ongoing support after project completion?"
              answer="Yes, we offer ongoing support and maintenance packages to ensure your website or application continues to function optimally. Our support includes regular updates, security patches, performance optimization, and addressing any issues that may arise."
            />
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
                Ready to Transform Your <span className="text-gradient">Digital Presence</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's collaborate to bring your vision to life with our expertise in web development, mobile apps, and digital marketing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-dreamable-green hover:bg-dreamable-darkgreen text-black text-lg px-8 py-6" asChild>
                  <Link to="/contact">Get Started</Link>
                </Button>
                <Button variant="outline" className="border-dreamable-green text-dreamable-green hover:bg-dreamable-green/10 text-lg px-8 py-6" asChild>
                  <a href="mailto:info@dreamable.in">Email Us</a>
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

export default HomePage;
