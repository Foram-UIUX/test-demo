import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-background pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-2xl font-semibold tracking-tight text-background mb-4 inline-block">
              AURORA<span className="text-accent">.</span>
            </Link>
            <p className="text-secondary text-sm mt-4 leading-relaxed max-w-xs">
              Premium laminate surfaces for residential and commercial interiors. Designed to bring character, durability, and refined style to your spaces.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Navigation</h4>
            <ul className="space-y-3">
              {["Home", "About", "Laminates", "Collections", "Applications", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="text-secondary hover:text-accent transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-secondary">
              <li>Ahmedabad, Gujarat, India</li>
              <li>+91 98765 43210</li>
              <li>info@auroralaminates.com</li>
              <li>WhatsApp Available</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-6">Social</h4>
            <div className="flex space-x-6 mb-8 text-sm">
              <a href="#" className="text-secondary hover:text-accent transition-colors">
                Instagram
              </a>
              <a href="#" className="text-secondary hover:text-accent transition-colors">
                Facebook
              </a>
              <a href="#" className="text-secondary hover:text-accent transition-colors">
                LinkedIn
              </a>
            </div>
            
            <Link
              href="/contact"
              className="inline-block border border-secondary text-secondary hover:bg-secondary hover:text-primary px-6 py-2.5 text-sm font-medium transition-all"
            >
              Visit Our Showroom →
            </Link>
          </div>
        </div>
        
        <div className="border-t border-secondary/20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-secondary/60">
          <p>&copy; {new Date().getFullYear()} Aurora Laminates. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
