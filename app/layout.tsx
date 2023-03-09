"use client";

import "@/styles/globals.css"

export default function RootLayout({
	// Layouts must accept a children prop.
	// This will be populated with nested layouts or pages
	children,
  }: {
	children: React.ReactNode;
  }) {
	return (

			<html lang="en" className="w-full h-full">
			<head />
			<body className="w-full h-full">
				{children}
			</body>
			</html>

	);
}
