const ProgressBar = ({ percentage }) => {
  const progressWidth = Math.min(100, percentage);

  const getProgressColor = () => {
    if (percentage > 100) return "bg-red-500";
    if (percentage >= 90) return "bg-orange-500";
    if (percentage >= 70) return "bg-yellow-500";

    return "bg-green-500";
  };

  return (
    <div className="space-y-2">
      <div className="h-3 w-full overflow-hidden rounded-full bg-zinc-800">
        <div
          className={`h-full rounded-full transition-all duration-500 ${getProgressColor()}`}
          style={{ width: `${progressWidth}%` }}
        />
      </div>

      <div className="flex justify-between text-sm">
        <span className="text-zinc-400">
          {progressWidth.toFixed(1)}% Used
        </span>

      </div>
    </div>
  );
};

export default ProgressBar;