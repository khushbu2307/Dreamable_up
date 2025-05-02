
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import AnimatedBackground from "@/components/AnimatedBackground";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-dreamable-dark flex items-center justify-center relative">
      <AnimatedBackground />
      <div className="relative z-10 text-center max-w-xl px-4">
        <div className="mb-8 relative">
          <div className="text-[120px] md:text-[180px] font-bold text-gradient leading-none">404</div>
          <div className="absolute -bottom-4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-dreamable-green/50 to-transparent"></div>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-xl text-gray-300 mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-dreamable-green hover:bg-dreamable-darkgreen text-black" size="lg" asChild>
            <Link to="/">Back to Home</Link>
          </Button>
          <Button variant="outline" className="border-dreamable-green text-dreamable-green hover:bg-dreamable-green/10" size="lg" asChild>
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
