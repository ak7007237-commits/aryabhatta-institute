import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aryabhatta Institute | Mathematics & Science",
  description:
    "Aryabhatta Institute offers concept-focused Mathematics, Science, English and Physics education for classes 6th–12th, B.Sc. Mathematics and M.Sc. Mathematics.",
  keywords: [
    "Aryabhatta Institute",
    "Mathematics coaching",
    "Science coaching",
    "Physics coaching",
    "B.Sc Mathematics",
    "M.Sc Mathematics",
    "Amit Kumar",
  ],
  authors: [{ name: "Aryabhatta Institute" }],
  openGraph: {
    title: "Aryabhatta Institute | Mathematics & Science",
    description:
      "Concept-focused academic guidance from school foundations to postgraduate Mathematics.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
