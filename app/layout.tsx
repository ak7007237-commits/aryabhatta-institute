import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ARYABHATTA INSTITUTE OF MATHEMATICS AND SCIENCE",
  description:
    "Aryabhatta Institute of Mathematics and Science offers concept-focused Mathematics, Science, English, Physics, Chemistry and Biology education for classes 6th–12th, B.Sc. Mathematics and M.Sc. Mathematics.",
  keywords: [
    "Aryabhatta Institute of Mathematics and Science",
    "Aryabhatta Institute",
    "Mathematics coaching",
    "Science coaching",
    "Physics coaching",
    "Chemistry coaching",
    "Biology coaching",
    "B.Sc Mathematics",
    "M.Sc Mathematics",
    "Amit Kumar",
  ],
  authors: [{ name: "Aryabhatta Institute of Mathematics and Science" }],
  openGraph: {
    title: "ARYABHATTA INSTITUTE OF MATHEMATICS AND SCIENCE",
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