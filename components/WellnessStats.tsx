import { FaHeart, FaFire } from 'react-icons/fa';

const WellnessStats: React.FC = () => {
  const balancedProgress = 72; 
  const caloriesProgress = 20; 


  const balancedOffset = (1 - balancedProgress / 100) * 440; 
  const caloriesOffset = (1 - caloriesProgress / 100) * 440;

  return (
    <div className="flex flex-col gap-4 p-6 sm:p-8 bg-white rounded-lg shadow-md">

      <h3 className="text-xl sm:text-2xl font-semibold text-left">Your Wellness Stats</h3>

      <div className="flex gap-4 sm:gap-8">

        <div className="flex items-center justify-between p-4 sm:p-6 bg-white rounded-lg shadow-md w-full sm:w-1/2">
    
          <div className="flex items-center justify-center p-3 sm:p-4 bg-white rounded-full shadow-md relative w-14 sm:w-16 h-14 sm:h-16">
           
            <svg className="absolute inset-0 rotate-90" width="100%" height="100%" viewBox="0 0 120 120">
              <circle
                cx="60"
                cy="60"
                r="55"
                stroke="#e6e6e6"
                strokeWidth="10"
                fill="none"
              />
              <circle
                cx="60"
                cy="60"
                r="55"
                stroke="#3b82f6"
                strokeWidth="10"
                fill="none"
                strokeDasharray="340" 
                strokeDashoffset={balancedOffset} 
                style={{ transition: 'stroke-dashoffset 0.5s ease' }}
              />
            </svg>
            <FaHeart className="text-red-500 text-xl sm:text-2xl z-10" />
          </div>

          <div className="ml-1 sm:ml-4">
            <h4 className="text-xs sm:text-sm font-semibold">Balanced</h4>
            <p className="text-xs sm:text-sm">Score: {balancedProgress}%</p>
          </div>
        </div>

        <div className="flex items-center justify-between p-4 sm:p-6 bg-white rounded-lg shadow-md w-full sm:w-1/2">
 
          <div className="flex items-center justify-center p-3 sm:p-4 bg-white rounded-full shadow-md relative w-14 sm:w-16 h-14 sm:h-16">
     
            <svg className="absolute inset-0 rotate-90" width="100%" height="100%" viewBox="0 0 120 120">
              <circle
                cx="60"
                cy="60"
                r="55"
                stroke="#e6e6e6"
                strokeWidth="10"
                fill="none"
              />
              <circle
                cx="60"
                cy="60"
                r="55"
                stroke="#f87171"
                strokeWidth="10"
                fill="none"
                strokeDasharray="400" 
                strokeDashoffset={caloriesOffset} 
                style={{ transition: 'stroke-dashoffset 0.5s ease' }}
              />
            </svg>
            <FaFire className="text-orange-500 text-xl sm:text-2xl z-10" />
          </div>
    
          <div className="ml-1 sm:ml-4">
            <h4 className="text-xs sm:text-sm font-semibold">Calories</h4>
            <p className="text-xs sm:text-sm">Goal: {caloriesProgress}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WellnessStats;
