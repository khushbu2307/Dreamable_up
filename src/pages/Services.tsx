import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-dreamable-dark">
      <AnimatedBackground />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden animate-fade-in">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="px-3 py-1 bg-dreamable-green/10 text-dreamable-green text-sm rounded-full">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Comprehensive Digital Solutions for Your Business
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We offer a range of services to help businesses thrive in the digital landscape.
            </p>
          </div>
        </div>

        {/* Background elements */}
        <div className="absolute top-1/3 right-0 w-64 h-64 bg-dreamable-green/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-dreamable-green/5 rounded-full blur-3xl"></div>
      </section>

      {/* Web Development Section */}
      <section id="web-development" className="py-16 relative animate-fade-in" style={{animationDelay: "0.2s"}}>
        <div className="absolute inset-0 grid-bg opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="bg-dreamable-gray/10 border border-dreamable-gray/30 rounded-lg p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-dreamable-green/5 rounded-full translate-x-1/3 -translate-y-1/3 blur-xl"></div>
                <h3 className="text-3xl font-bold mb-4">Web Development</h3>
                <p className="text-gray-300 mb-6">
                  We build custom websites that are tailored to your business needs, visually stunning, and optimized for performance and user experience.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-dreamable-green mr-2">✓</span>
                    <span>Responsive website development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-dreamable-green mr-2">✓</span>
                    <span>E-commerce websites</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-dreamable-green mr-2">✓</span>
                    <span>Content management systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-dreamable-green mr-2">✓</span>
                    <span>Website maintenance and support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-dreamable-green mr-2">✓</span>
                    <span>Performance optimization</span>
                  </li>
                </ul>
                <p className="text-gray-400 italic mb-6">
                  "Dreamable transformed our online presence with a beautiful website that perfectly captures our brand's essence." - Rajesh Patel, Vishvadeep
                </p>
                <Button className="bg-dreamable-green hover:bg-dreamable-darkgreen text-black" asChild>
                  <Link to="/contact">Get Started</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 border-2 border-dreamable-green/20 rounded-lg transform translate-x-4 translate-y-4"></div>
                <div className="bg-dreamable-gray/20 border border-dreamable-gray/30 p-6 rounded-lg relative">
                  <div className="aspect-video rounded-md overflow-hidden">
                    <img 
                      src="/lovable-uploads/4a3b86d3-0af0-49cf-87de-229814a6c721.png" 
                      alt="Web Development"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Development Section */}
      <section id="mobile-apps" className="py-16 bg-dreamable-darker animate-fade-in" style={{animationDelay: "0.3s"}}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="md:w-1/2">
              <div className="bg-dreamable-gray/10 border border-dreamable-gray/30 rounded-lg p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-32 h-32 bg-dreamable-green/5 rounded-full -translate-x-1/3 -translate-y-1/3 blur-xl"></div>
                <h3 className="text-3xl font-bold mb-4">Mobile App Development</h3>
                <p className="text-gray-300 mb-6">
                  We create native and cross-platform mobile applications that provide seamless user experiences and help you engage with your customers on-the-go.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-dreamable-green mr-2">✓</span>
                    <span>iOS app development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-dreamable-green mr-2">✓</span>
                    <span>Android app development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-dreamable-green mr-2">✓</span>
                    <span>Cross-platform app development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-dreamable-green mr-2">✓</span>
                    <span>App maintenance and updates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-dreamable-green mr-2">✓</span>
                    <span>App store optimization</span>
                  </li>
                </ul>
                <Button className="bg-dreamable-green hover:bg-dreamable-darkgreen text-black" asChild>
                  <Link to="/contact">Get Started</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 border-2 border-dreamable-green/20 rounded-lg transform -translate-x-4 translate-y-4"></div>
                <div className="bg-dreamable-gray/20 border border-dreamable-gray/30 p-6 rounded-lg relative">
                  <div className="flex justify-center">
                    <div className="relative w-64 p-4">
                      <div className="absolute inset-0 bg-dreamable-gray/80 rounded-3xl border-4 border-dreamable-gray"></div>
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-dreamable-dark rounded-b-xl"></div>
                      <div className="relative bg-dreamable-gray/40 rounded-2xl overflow-hidden aspect-[9/19] border-4 border-dreamable-gray/40">
                        <img 
                          src="/lovable-uploads/5d1e1a8d-b2e6-4fde-9f0c-9bc023ceba02.png" 
                          alt="Mobile App UI"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Web Apps Section */}
      <section id="custom-web-apps" className="py-16 relative animate-fade-in" style={{animationDelay: "0.4s"}}>
        <div className="absolute inset-0 grid-bg opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="bg-dreamable-gray/10 border border-dreamable-gray/30 rounded-lg p-6 relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-dreamable-green/5 rounded-full translate-x-1/3 translate-y-1/3 blur-xl"></div>
                <h3 className="text-3xl font-bold mb-4">Custom Web Applications</h3>
                <p className="text-gray-300 mb-6">
                  We develop custom web applications that automate processes, improve efficiency, and solve complex business problems.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-dreamable-green mr-2">✓</span>
                    <span>Business process automation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-dreamable-green mr-2">✓</span>
                    <span>CRM and ERP solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-dreamable-green mr-2">✓</span>
                    <span>Custom admin dashboards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-dreamable-green mr-2">✓</span>
                    <span>Booking and reservation systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-dreamable-green mr-2">✓</span>
                    <span>Integration with third-party services</span>
                  </li>
                </ul>
                <p className="text-gray-400 italic mb-6">
                  "The admin application developed by Dreamable has streamlined our booking process and saved us countless hours." - Sunil Kumar, Mahadev Box Cricket
                </p>
                <Button className="bg-dreamable-green hover:bg-dreamable-darkgreen text-black" asChild>
                  <Link to="/contact">Get Started</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 border-2 border-dreamable-green/20 rounded-lg transform translate-x-4 -translate-y-4"></div>
                <div className="bg-dreamable-gray/20 border border-dreamable-gray/30 p-6 rounded-lg relative">
                  <div className="aspect-video rounded-md overflow-hidden">
                    <img 
                      src="/lovable-uploads/11fb0eea-c3f0-45eb-92a8-305f0ddb851d.png" 
                      alt="Custom Web App"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Marketing Section */}
      <section id="digital-marketing" className="py-16 bg-dreamable-darker animate-fade-in" style={{animationDelay: "0.5s"}}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <div className="md:w-1/2">
              <div className="bg-dreamable-gray/10 border border-dreamable-gray/30 rounded-lg p-6 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-dreamable-green/5 rounded-full -translate-x-1/3 translate-y-1/3 blur-xl"></div>
                <h3 className="text-3xl font-bold mb-4">Digital Marketing</h3>
                <p className="text-gray-300 mb-6">
                  We help businesses grow their online presence, attract more customers, and increase conversions through targeted digital marketing strategies.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-dreamable-green mr-2">✓</span>
                    <span>Search Engine Optimization (SEO)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-dreamable-green mr-2">✓</span>
                    <span>Social Media Marketing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-dreamable-green mr-2">✓</span>
                    <span>Pay-Per-Click (PPC) Advertising</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-dreamable-green mr-2">✓</span>
                    <span>Email Marketing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-dreamable-green mr-2">✓</span>
                    <span>Content Marketing</span>
                  </li>
                </ul>
                <Button className="bg-dreamable-green hover:bg-dreamable-darkgreen text-black" asChild>
                  <Link to="/contact">Get Started</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 border-2 border-dreamable-green/20 rounded-lg transform -translate-x-4 -translate-y-4"></div>
                <div className="bg-dreamable-gray/20 border border-dreamable-gray/30 p-6 rounded-lg relative">
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src="/lovable-uploads/aa400043-f37c-4272-8602-eda0021bb8fe.png" 
                      alt="Digital Marketing"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Graphics Design Section */}
      <section id="graphic-design" className="py-16 relative animate-fade-in" style={{animationDelay: "0.6s"}}>
        <div className="absolute inset-0 grid-bg opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="bg-dreamable-gray/10 border border-dreamable-gray/30 rounded-lg p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-dreamable-green/5 rounded-full translate-x-1/3 -translate-y-1/3 blur-xl"></div>
                <h3 className="text-3xl font-bold mb-4">Graphic Design</h3>
                <p className="text-gray-300 mb-6">
                  We create visually stunning designs that communicate your brand message effectively and leave a lasting impression on your audience.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <span className="text-dreamable-green mr-2">✓</span>
                    <span>Logo and brand identity design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-dreamable-green mr-2">✓</span>
                    <span>UI/UX design</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-dreamable-green mr-2">✓</span>
                    <span>Print design (brochures, business cards, etc.)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-dreamable-green mr-2">✓</span>
                    <span>Social media graphics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-dreamable-green mr-2">✓</span>
                    <span>Packaging design</span>
                  </li>
                </ul>
                <Button className="bg-dreamable-green hover:bg-dreamable-darkgreen text-black" asChild>
                  <Link to="/contact">Get Started</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 border-2 border-dreamable-green/20 rounded-lg transform translate-x-4 translate-y-4"></div>
                <div className="bg-dreamable-gray/20 border border-dreamable-gray/30 p-6 rounded-lg relative">
                  <div className="rounded-md overflow-hidden">
                    <img 
                      src="/lovable-uploads/edcbdfe1-8fa5-4443-b056-28c59e4aeea4.png" 
                      alt="Graphic Design"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-dreamable-darker animate-fade-in" style={{animationDelay: "0.7s"}}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="px-3 py-1 bg-dreamable-green/10 text-dreamable-green text-sm rounded-full">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              How We Work
            </h2>
            <p className="text-gray-400">
              Our streamlined process ensures efficient delivery of high-quality solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-dreamable-gray/10 border border-dreamable-gray/30 p-6 rounded-lg relative">
              <div className="w-12 h-12 flex items-center justify-center bg-dreamable-green/10 rounded-full mb-4 text-dreamable-green border border-dreamable-green/30">
                <span className="text-lg font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Discovery</h3>
              <p className="text-gray-400">We understand your requirements, goals, and expectations through detailed consultations.</p>
            </div>

            <div className="bg-dreamable-gray/10 border border-dreamable-gray/30 p-6 rounded-lg relative">
              <div className="w-12 h-12 flex items-center justify-center bg-dreamable-green/10 rounded-full mb-4 text-dreamable-green border border-dreamable-green/30">
                <span className="text-lg font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Planning</h3>
              <p className="text-gray-400">We create a detailed plan outlining the scope, timeline, deliverables, and milestones for your project.</p>
            </div>

            <div className="bg-dreamable-gray/10 border border-dreamable-gray/30 p-6 rounded-lg relative">
              <div className="w-12 h-12 flex items-center justify-center bg-dreamable-green/10 rounded-full mb-4 text-dreamable-green border border-dreamable-green/30">
                <span className="text-lg font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Development</h3>
              <p className="text-gray-400">Our team designs and develops your solution with regular updates and feedback sessions.</p>
            </div>

            <div className="bg-dreamable-gray/10 border border-dreamable-gray/30 p-6 rounded-lg relative">
              <div className="w-12 h-12 flex items-center justify-center bg-dreamable-green/10 rounded-full mb-4 text-dreamable-green border border-dreamable-green/30">
                <span className="text-lg font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Delivery</h3>
              <p className="text-gray-400">We thoroughly test, deploy, and provide training on your new solution to ensure satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden animate-fade-in" style={{animationDelay: "0.8s"}}>
        <div className="absolute inset-0 grid-bg opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-dreamable-gray/30 to-dreamable-gray/10 p-8 md:p-12 rounded-2xl border border-dreamable-green/20 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-dreamable-green/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-dreamable-green/5 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl"></div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Next Project?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Contact us today to discuss your requirements and how we can help bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-dreamable-green hover:bg-dreamable-darkgreen text-black text-lg px-8 py-6" asChild>
                  <Link to="/contact">Get in Touch</Link>
                </Button>
                <Button variant="outline" className="border-dreamable-green text-dreamable-green hover:bg-dreamable-green/10 text-lg px-8 py-6" asChild>
                  <Link to="/portfolio">View Our Work</Link>
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

export default ServicesPage;
