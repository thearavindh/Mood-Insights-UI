import Header from "@/components/Header";
import StatsCard from "@/components/StatsCard";
import DailyStatsChart from "@/components/DailyStatsChart";
import WeeklyStreak from "@/components/WeeklyStreak";
import MoodOverview from "@/components/MoodOverview";
import WellnessStats from "@/components/WellnessStats";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="p-4 space-y-6">
        <StatsCard />
        <DailyStatsChart />
        <WeeklyStreak />
        <MoodOverview />
        <WellnessStats />
      </div>
    </main>
  );
}
