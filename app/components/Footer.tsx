export default function Footer() {
  const year = new Date().getFullYear();
  return (
  <footer
    className="mt-6 md:mt-12 w-full py-4 md:py-6 text-center text-sm text-gray-600"
    style={{
      // subtle translucent overlay so the body's gradient shows through and the footer blends
      background: "linear-gradient(180deg, rgba(255,255,255,0.0), rgba(255,255,255,0.03))",
      backdropFilter: "saturate(120%) blur(4px)",
    }}
  >
      <div className="max-w-6xl mx-auto px-4">© {year} Hashify. All rights reserved.</div>
    </footer>
  );
}
