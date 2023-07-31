
export const metadata = {
  title: "Brandon Nielsen | Web Developer",
  description: "Brandon Nielsen, web developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body
      // className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
