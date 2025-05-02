
import { useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPage = () => {
  // Reference for scroll animation
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Setup intersection observer for scroll animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    // Select all elements with animate-on-scroll class
    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-dreamable-dark">
      <AnimatedBackground />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <span className="px-3 py-1 bg-dreamable-green/10 text-dreamable-green text-sm rounded-full">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              We are Dreamable
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              A team of passionate digital creators turning dreams into digital reality since March 2024.
            </p>
          </div>
        </div>

        {/* Background elements */}
        <div className="absolute top-1/3 right-0 w-64 h-64 bg-dreamable-green/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-dreamable-green/5 rounded-full blur-3xl"></div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 grid-bg opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 animate-on-scroll" style={{transitionDelay: "200ms", transition: "all 0.6s ease-out"}}>
              <div className="relative">
                <div className="absolute inset-0 border-2 border-dreamable-green/20 rounded-lg transform translate-x-4 translate-y-4"></div>
                <div className="bg-dreamable-gray/20 border border-dreamable-gray/30 p-6 rounded-lg relative">
                  <div className="aspect-video rounded-md overflow-hidden">
                    <img 
                      src="/lovable-uploads/11645b1b-84c7-4031-9e30-8c8165d6dc30.png" 
                      alt="Our Story"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 animate-on-scroll" style={{transitionDelay: "400ms", transition: "all 0.6s ease-out"}}>
              <span className="px-3 py-1 bg-dreamable-green/10 text-dreamable-green text-sm rounded-full">
                Our Story
              </span>
              <h2 className="text-3xl font-bold mt-4 mb-6">
                How We Started
              </h2>
              <p className="text-gray-300 mb-4">
                Dreamable was founded in January 2024 by a group of technology enthusiasts who shared a common vision: to make high-quality digital solutions accessible to businesses of all sizes.
              </p>
              <p className="text-gray-300 mb-4">
                Starting with just a small team of passionate developers, we quickly grew by focusing on delivering exceptional results and building strong client relationships. Today, we are a team of 10 dedicated professionals with diverse expertise across web development, mobile apps, digital marketing, and graphic design.
              </p>
              <p className="text-gray-300 mb-8">
                Our journey began with our first clients: Vishvadeep Incense and Mahadev Box Cricket. The success of these initial projects gave us the momentum to expand our services and take on more challenging projects. We continue to grow while maintaining our commitment to quality, innovation, and client satisfaction.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-dreamable-gray/20 p-3 rounded-lg text-center">
                  <div className="text-dreamable-green text-3xl font-bold mb-1">March 29</div>
                  <p className="text-sm text-gray-400">Founded</p>
                </div>
                <div className="bg-dreamable-gray/20 p-3 rounded-lg text-center">
                  <div className="text-dreamable-green text-3xl font-bold mb-1">10</div>
                  <p className="text-sm text-gray-400">Team Members</p>
                </div>
                <div className="bg-dreamable-gray/20 p-3 rounded-lg text-center">
                  <div className="text-dreamable-green text-3xl font-bold mb-1">2+</div>
                  <p className="text-sm text-gray-400">Clients</p>
                </div>
                <div className="bg-dreamable-gray/20 p-3 rounded-lg text-center">
                  <div className="text-dreamable-green text-3xl font-bold mb-1">5+</div>
                  <p className="text-sm text-gray-400">Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision Section */}
      <section className="py-16 bg-dreamable-darker">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll" style={{transition: "all 0.6s ease-out"}}>
            <span className="px-3 py-1 bg-dreamable-green/10 text-dreamable-green text-sm rounded-full">
              Our Purpose
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Mission & Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-dreamable-gray/10 border border-dreamable-gray/30 p-8 rounded-lg relative overflow-hidden animate-on-scroll" style={{transitionDelay: "200ms", transition: "all 0.6s ease-out"}}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-dreamable-green/5 rounded-full translate-x-1/3 -translate-y-1/3 blur-xl"></div>
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="w-10 h-10 bg-dreamable-green/10 rounded-full flex items-center justify-center text-dreamable-green mr-3 border border-dreamable-green/30">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </span>
                Our Mission
              </h3>
              <p className="text-gray-300">
                To empower businesses through innovative digital solutions that drive growth, enhance user experience, and create lasting value. We are committed to delivering high-quality web and mobile applications that help our clients achieve their business objectives and stay ahead in the digital landscape.
              </p>
            </div>

            <div className="bg-dreamable-gray/10 border border-dreamable-gray/30 p-8 rounded-lg relative overflow-hidden animate-on-scroll" style={{transitionDelay: "400ms", transition: "all 0.6s ease-out"}}>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-dreamable-green/5 rounded-full -translate-x-1/3 translate-y-1/3 blur-xl"></div>
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <span className="w-10 h-10 bg-dreamable-green/10 rounded-full flex items-center justify-center text-dreamable-green mr-3 border border-dreamable-green/30">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </span>
                Our Vision
              </h3>
              <p className="text-gray-300">
                To be the preferred digital partner for businesses seeking innovative solutions, recognized for our technical excellence, creative approach, and commitment to client success. We aim to create a positive impact through technology that transforms how businesses operate and engage with their customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 relative">
        <div className="absolute inset-0 grid-bg opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-on-scroll" style={{transition: "all 0.6s ease-out"}}>
            <span className="px-3 py-1 bg-dreamable-green/10 text-dreamable-green text-sm rounded-full">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              Core Values
            </h2>
            <p className="text-gray-400">
              These principles guide everything we do and define who we are as a company.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-dreamable-gray/10 border border-dreamable-gray/30 p-6 rounded-lg relative overflow-hidden animate-on-scroll" style={{transitionDelay: "100ms", transition: "all 0.6s ease-out"}}>
              <div className="w-12 h-12 bg-dreamable-green/10 rounded-full flex items-center justify-center text-dreamable-green mb-4 border border-dreamable-green/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-400">
                We are committed to delivering high-quality solutions that exceed expectations. We continuously improve our skills and processes to maintain the highest standards in everything we do.
              </p>
            </div>

            <div className="bg-dreamable-gray/10 border border-dreamable-gray/30 p-6 rounded-lg relative overflow-hidden animate-on-scroll" style={{transitionDelay: "200ms", transition: "all 0.6s ease-out"}}>
              <div className="w-12 h-12 bg-dreamable-green/10 rounded-full flex items-center justify-center text-dreamable-green mb-4 border border-dreamable-green/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-400">
                We embrace creativity and forward-thinking to develop innovative solutions. We stay at the forefront of technology trends to provide our clients with cutting-edge digital products.
              </p>
            </div>

            <div className="bg-dreamable-gray/10 border border-dreamable-gray/30 p-6 rounded-lg relative overflow-hidden animate-on-scroll" style={{transitionDelay: "300ms", transition: "all 0.6s ease-out"}}>
              <div className="w-12 h-12 bg-dreamable-green/10 rounded-full flex items-center justify-center text-dreamable-green mb-4 border border-dreamable-green/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Collaboration</h3>
              <p className="text-gray-400">
                We work closely with our clients as partners, valuing their input and feedback. We believe that the best results come from collaborative efforts and open communication.
              </p>
            </div>

            <div className="bg-dreamable-gray/10 border border-dreamable-gray/30 p-6 rounded-lg relative overflow-hidden animate-on-scroll" style={{transitionDelay: "400ms", transition: "all 0.6s ease-out"}}>
              <div className="w-12 h-12 bg-dreamable-green/10 rounded-full flex items-center justify-center text-dreamable-green mb-4 border border-dreamable-green/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Reliability</h3>
              <p className="text-gray-400">
                We deliver on our promises, meet deadlines, and maintain transparent communication throughout the project lifecycle. Our clients can count on us to be there when they need us.
              </p>
            </div>

            <div className="bg-dreamable-gray/10 border border-dreamable-gray/30 p-6 rounded-lg relative overflow-hidden animate-on-scroll" style={{transitionDelay: "500ms", transition: "all 0.6s ease-out"}}>
              <div className="w-12 h-12 bg-dreamable-green/10 rounded-full flex items-center justify-center text-dreamable-green mb-4 border border-dreamable-green/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-gray-400">
                We conduct business with honesty, transparency, and ethical principles. We build trust by being straightforward with our clients and taking responsibility for our actions.
              </p>
            </div>

            <div className="bg-dreamable-gray/10 border border-dreamable-gray/30 p-6 rounded-lg relative overflow-hidden animate-on-scroll" style={{transitionDelay: "600ms", transition: "all 0.6s ease-out"}}>
              <div className="w-12 h-12 bg-dreamable-green/10 rounded-full flex items-center justify-center text-dreamable-green mb-4 border border-dreamable-green/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Growth</h3>
              <p className="text-gray-400">
                We are committed to continuous learning and improvement. We invest in our team's development and strive to help our clients grow their businesses through effective digital solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-dreamable-gray/30 to-dreamable-gray/10 p-8 md:p-12 rounded-2xl border border-dreamable-green/20 relative overflow-hidden animate-on-scroll" style={{transition: "all 0.8s ease-out"}}>
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-dreamable-green/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-dreamable-green/5 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl"></div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Join Our Journey
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's work together to bring your digital dreams to life. Our team is ready to help you achieve your business goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-dreamable-green hover:bg-dreamable-darkgreen text-black text-lg px-8 py-6" asChild>
                  <Link to="/contact">Get in Touch</Link>
                </Button>
                <Button variant="outline" className="border-dreamable-green text-dreamable-green hover:bg-dreamable-green/10 text-lg px-8 py-6" asChild>
                  <Link to="/services">Our Services</Link>
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

export default AboutPage;
