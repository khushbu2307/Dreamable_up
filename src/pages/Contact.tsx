
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import ContactForm from "@/components/ContactForm";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-dreamable-dark">
      <AnimatedBackground />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden animate-fade-in">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="px-3 py-1 bg-dreamable-green/10 text-dreamable-green text-sm rounded-full">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Have a project in mind? We'd love to hear about it. Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>

        {/* Background elements */}
        <div className="absolute top-1/3 right-0 w-64 h-64 bg-dreamable-green/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-dreamable-green/5 rounded-full blur-3xl"></div>
      </section>

      {/* Contact Section */}
      <section className="py-16 relative animate-fade-in" style={{animationDelay: "0.2s"}}>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <div className="bg-dreamable-gray/10 border border-dreamable-gray/30 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                <ContactForm />
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="bg-dreamable-gray/10 border border-dreamable-gray/30 p-8 rounded-lg shadow-lg mb-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-dreamable-green/10 rounded-full flex items-center justify-center text-dreamable-green mr-4 border border-dreamable-green/30">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Location</h3>
                      <p className="text-gray-400">Online Service</p>
                      <p className="text-gray-400">Gujarat, India</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-dreamable-green/10 rounded-full flex items-center justify-center text-dreamable-green mr-4 border border-dreamable-green/30">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Email</h3>
                      <p className="text-gray-400">dreamable.in@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-dreamable-gray/10 border border-dreamable-gray/30 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Business Hours</h2>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-400">Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-400">Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 relative animate-fade-in" style={{animationDelay: "0.6s"}}>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400">
              Find answers to common questions about working with us.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-dreamable-gray/10 border border-dreamable-gray/30 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-2">How long does it take to complete a project?</h3>
              <p className="text-gray-400">
                Project timelines vary depending on the scope and complexity. A simple website might take 2-4 weeks, while more complex applications can take 2-3 months. We'll provide you with a specific timeline during our initial consultation.
              </p>
            </div>

            <div className="bg-dreamable-gray/10 border border-dreamable-gray/30 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-2">What is your payment structure?</h3>
              <p className="text-gray-400">
                We typically require a 50% deposit to begin work, with the remaining balance due upon project completion. For larger projects, we can arrange milestone-based payments. We accept bank transfers and major credit cards.
              </p>
            </div>

            <div className="bg-dreamable-gray/10 border border-dreamable-gray/30 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-2">Do you provide ongoing support after launch?</h3>
              <p className="text-gray-400">
                Yes, we offer various maintenance and support packages to ensure your website or application continues to run smoothly after launch. These can include regular updates, security patches, content updates, and technical support.
              </p>
            </div>

            <div className="bg-dreamable-gray/10 border border-dreamable-gray/30 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Can you help with existing websites or applications?</h3>
              <p className="text-gray-400">
                Absolutely! We can work with your existing digital assets to improve, update, or expand their functionality. We'll first conduct an assessment to understand the current state and then recommend the best approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
