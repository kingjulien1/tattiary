import "./globals.css";

export const metadata = {
  title: "tattiary",
  description:
    "Platform for tattoo artists & shops to announce residencies & guestspots",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="retro" lang="en">
      <body>{children}</body>
    </html>
  );
}
