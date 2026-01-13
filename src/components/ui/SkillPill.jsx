const SkillPill = ({ logo, name, bg }) => {
  return (
    <div
      style={{ backgroundColor: bg }}
      className="flex items-center gap-3 px-5 py-3 rounded-xl shadow-sm 
                 hover:scale-105 transition-transform duration-300"
    >
      <img
        src={logo}
        alt={name}
        className="w-6 h-6 object-contain"
        loading="lazy"
      />
      <span className="font-medium text-gray-800 whitespace-nowrap">
        {name}
      </span>
    </div>
  );
};

export default SkillPill;
