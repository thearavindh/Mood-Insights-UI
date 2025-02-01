import "./globals.css";

export const metadata = {
  title: "Mood Insights",
  description: "Track your mood and wellness stats.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100">{children}</body>
    </html>
  );
}
