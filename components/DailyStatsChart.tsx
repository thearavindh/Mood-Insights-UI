"use client";

import { BarChart, Bar, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
  { name: "Sun", mindfulness: 18, meditation: 18, fitness: 28, sleep: 10 },
  { name: "Mon", mindfulness: 20, meditation: 20, fitness: 30, sleep: 9 },
  { name: "Tue", mindfulness: 10, meditation: 10, fitness: 20, sleep: 7 },
  { name: "Wed", mindfulness: 15, meditation: 15, fitness: 25, sleep: 8 },
  { name: "Thu", mindfulness: 10, meditation: 10, fitness: 20, sleep: 7 },
  { name: "Fri", mindfulness: 25, meditation: 25, fitness: 35, sleep: 9 },
  { name: "Sat", mindfulness: 22, meditation: 22, fitness: 32, sleep: 8 },
];

const CustomBar = (props: any) => {
  const { x, y, width, height, fill } = props;
  const radius = 5;

  return (
    <path
      fill={fill}
      d={`M${x},${y + height} 
        L${x},${y} 
        C${x + width / 4},${y - radius} ${x + width - width / 4},${y - radius} ${x + width},${y}
        L${x + width},${y + height} Z`}
    />
  );
};

const DailyStatsChart: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex flex-col justify-between items-start mb-4">
        <div className="flex justify-between items-center w-full">
          <h2 className="font-bold text-lg">Avg Time Spent Daily</h2>
          <span className="text-sm text-gray-500">+3 This Week</span>
        </div>
        <span className="text-xl font-semibold text-gray-800">1 H 20M</span>
      </div>

      <BarChart
        width={350}
        height={300}
        data={data}
        margin={{ top: 20, right: 10, left: 10, bottom: 25 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend
          layout="horizontal"
          verticalAlign="bottom"
          content={({ payload }) => (
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", width: "100%" }}>
              <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
                <div style={{ display: "flex", alignItems: "center", marginBottom: "5px" }}>
                  <div style={{ backgroundColor: "#F3CDC1", width: "12px", height: "12px", marginRight: "5px" }} />
                  <span>Mindfulness 20m</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", marginBottom: "5px" }}>
                  <div style={{ backgroundColor: "#4A75B9", width: "12px", height: "12px", marginRight: "5px" }} />
                  <span>Sleep 10m</span>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
                <div style={{ display: "flex", alignItems: "center", marginBottom: "5px" }}>
                  <div style={{ backgroundColor: "#EB9285", width: "12px", height: "12px", marginRight: "5px" }} />
                  <span>Meditation 20m</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", marginBottom: "5px" }}>
                  <div style={{ backgroundColor: "#ACAD85", width: "12px", height: "12px", marginRight: "5px" }} />
                  <span>Fitness 30m</span>
                </div>
              </div>
            </div>
          )}
          wrapperStyle={{
            paddingTop: 40,
          }}
        />

        <Bar dataKey="mindfulness" stackId="a" fill="#F3CDC1" barSize={15} shape={<CustomBar />} />
        <Bar dataKey="meditation" stackId="a" fill="#EB9285" barSize={15} shape={<CustomBar />} />
        <Bar dataKey="fitness" stackId="a" fill="#ACAD85" barSize={15} shape={<CustomBar />} />
        <Bar dataKey="sleep" stackId="a" fill="#4A75B9" barSize={15} shape={<CustomBar />} />
      </BarChart>
    </div>
  );
};

export default DailyStatsChart;
