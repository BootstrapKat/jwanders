// src/components/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-black text-white p-4 mt-4 border-t border-[#e4e7ea]">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Justin W. Anderson. All Rights
          Reserved.
        </p>
        <div className="space-x-4 mt-2">
          {/* Add other social links as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
