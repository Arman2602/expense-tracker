const colorClasses = {
  blue: "bg-blue-100 text-blue-600",
  green: "bg-green-100 text-green-600",
  orange: "bg-orange-100 text-orange-600",
  purple: "bg-purple-100 text-purple-600",
};

const SummaryCard = ({
  title,
  value,
  icon: Icon,
  color = "blue",
}) => {
  return (
    <div
      className="
        rounded-xl
        border
        border-gray-200
        bg-slate-900
        p-5
        shadow-sm
        transition-all
        duration-200
        hover:-translate-y-1
        hover:shadow-md
      "
    >
      {/* Top Section */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">
            {title}
          </p>
        </div>

        <div
          className={`
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            ${colorClasses[color]}
          `}
        >
          <Icon size={22} />
        </div>
      </div>

      {/* Value */}
      <h2 className="mt-6 text-3xl font-bold tracking-tight text-white">
        {value}
      </h2>
    </div>
  );
};

export default SummaryCard;