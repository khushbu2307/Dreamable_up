
interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  date: string;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, company, testimonial, date, image }) => {
  return (
    <div className="bg-dreamable-gray/20 border border-dreamable-gray/30 p-6 rounded-lg animate-fade-in">
      <div className="flex items-center mb-4">
        {image ? (
          <div className="w-10 h-10 rounded-full overflow-hidden border border-dreamable-green/30">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
        ) : (
          <div className="w-10 h-10 bg-dreamable-green/20 rounded-full flex items-center justify-center text-dreamable-green border border-dreamable-green/30">
            {name.charAt(0)}
          </div>
        )}
        <div className="ml-3">
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-gray-400">{role}, {company}</p>
        </div>
      </div>
      <blockquote className="mb-3 text-gray-300">"{testimonial}"</blockquote>
      <p className="text-xs text-gray-500">{date}</p>
    </div>
  );
};

export default TestimonialCard;
