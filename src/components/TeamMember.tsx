
interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, bio }) => {
  return (
    <div className="group relative bg-dreamable-gray/20 border border-dreamable-gray/30 rounded-lg overflow-hidden transition-all duration-300 hover:border-dreamable-green/50 animate-fade-in">
      <div className="p-6">
        <div className="w-16 h-16 mx-auto bg-dreamable-green/10 rounded-full mb-4 flex items-center justify-center text-2xl font-bold text-dreamable-green border border-dreamable-green/30 group-hover:border-dreamable-green/70 transition-all duration-300">
          {name.charAt(0)}
        </div>
        <h3 className="text-xl font-bold text-center mb-1 group-hover:text-dreamable-green transition-colors duration-300">{name}</h3>
        <p className="text-dreamable-green/70 text-center text-sm mb-3">{role}</p>
        <p className="text-gray-400 text-center text-sm">{bio}</p>
      </div>
    </div>
  );
};

export default TeamMember;
