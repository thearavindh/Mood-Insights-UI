const StatsCard: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold text-[#015682] mb-4">Your Mood Insights</h2>
      
      <div className="p-4 bg-gradient-to-r from-[#015682] to-[#94E8DA] rounded-lg shadow-md">
        <h3 className="text-lg font-bold text-white">Derek, you are doing great!</h3>
        <p className="mt-2 text-sm text-white">
          This week you focused more on your fitness. Your average stress level has
          dropped by <span className="font-bold">8%</span>.
        </p>
      </div>
    </div>
  );
};

export default StatsCard;
