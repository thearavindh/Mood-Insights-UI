const WeeklyStreak: React.FC = () => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold">Your Weekly Streak</h3>
      <div className="flex justify-between mt-4">
        {days.map((day, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <span className="text-sm mb-1">{day}</span> 
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${
                idx < 5
                  ? "border-blue-500 bg-white text-blue-500"
                  : "border-gray-400 bg-white text-gray-400"
              }`}
            />
            <span className="text-sm mt-1">{idx + 8}</span> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyStreak;
