import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shakti Sivaraman — Data Analyst",
  description: "Portfolio of Shakti Sivaraman — Data Analyst specialising in Python, SQL, Power BI, Tableau and Data Analytics.",
  keywords: ["Data Analyst", "Python", "SQL", "Power BI", "Tableau", "Data Analytics", "Dublin"],
  authors: [{ name: "Shakti Sivaraman" }],
  openGraph: {
    title: "Shakti Sivaraman — Data Analyst",
    description: "Data Analyst specialising in Python, SQL, Power BI & Tableau",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
