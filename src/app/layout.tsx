import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Open_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const openSans = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"],
    weight: ['400']
});

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ['400']
})

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Portfolio",
    description: "",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${poppins.variable} ${openSans.variable} antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
