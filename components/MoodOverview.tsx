"use client";

import { LineChart, Line, YAxis, Tooltip, XAxis, ResponsiveContainer, Label } from "recharts";

const moodData = [
  { date: "8", mood: 4 },
  { date: "9", mood: 5 },
  { date: "10", mood: 3 },
  { date: "11", mood: 4 },
  { date: "12", mood: 5 },
  { date: "13", mood: 4 },
  { date: "14", mood: 5 },
];

const moodEmojis = {
  1: "🤩", 
  2: "😃", 
  3: "🥱", 
  4: "😡",
  5: "😞", 
};

const MoodOverview: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md flex flex-col items-start border-r-4 max-w-lg">
      <div className="flex justify-between w-full mb-0">
        <h3 className="text-lg font-semibold mb-2 ">Mood Overview</h3>
        <div className="bg-gray-200 px-2 py-1 mb-2  rounded-md text-sm">Weekly ▼</div>
      </div>
      <ResponsiveContainer width="90%" height={200}>
        <LineChart data={moodData}>
          <XAxis dataKey="date">
            <Label value="Dates" position="bottom" offset={-10} />
          </XAxis>
          <YAxis tickFormatter={(value) => moodEmojis[value] || ""} domain={[1, 5]}>
            <Label value="Mood" angle={-90} position="left" offset={-10} />
          </YAxis>
          <Tooltip content={({ payload }) => {
            const moodValue = payload?.[0]?.value;
            return <div>{moodEmojis[moodValue] || "No mood"}</div>;
          }} />
          <Line type="monotone" dataKey="mood" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MoodOverview;
