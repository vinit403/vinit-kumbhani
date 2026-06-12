import "../app/globals.css";

export const metadata = {
  metadataBase: new URL("https://vinit-kumbhani.vercel.app"),

  title: {
    default: "Vinit Kumbhani | Software Developer",
    template: "%s | Vinit Kumbhani",
  },

  description:
    "Vinit Kumbhani is a Software Developer specializing in Next.js, React.js, React Native, Node.js, Firebase, MongoDB, and modern web application development.",

  keywords: [
    "Vinit Kumbhani",
    "Software Developer",
    "React Developer",
    "Next.js Developer",
    "React Native Developer",
    "Node.js Developer",
    "Frontend Developer",
    "Full Stack Developer",
    "JavaScript Developer",
    "Portfolio",
    "Web Developer Surat",
  ],

  authors: [
    {
      name: "Vinit Kumbhani",
    },
  ],

  creator: "Vinit Kumbhani",
  publisher: "Vinit Kumbhani",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
  title: "Vinit Kumbhani | Software Developer",
  description:
    "Software Developer specializing in Next.js, React.js, React Native, Node.js, Firebase and modern web applications.",
  url: "https://vinit-kumbhani.vercel.app",
  siteName: "Vinit Kumbhani Portfolio",
  locale: "en_US",
  type: "website",

  images: [
    {
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "Vinit Kumbhani Portfolio",
    },
  ],
},

twitter: {
  card: "summary_large_image",
  title: "Vinit Kumbhani | Software Developer",
  description:
    "Software Developer specializing in Next.js, React.js, React Native, Node.js, Firebase and modern web applications.",
  images: ["/og-image.png"],
},

  category: "Technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}