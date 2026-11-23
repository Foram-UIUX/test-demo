import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { collections } from "@/data/collections";
import { products } from "@/data/products";
import { applications } from "@/data/applications";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_laminate_interior.jpg"
            alt="Sophisticated interior featuring premium laminate surfaces"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 md:px-12 text-center text-background">
          <div className="inline-flex items-center space-x-2 bg-background/10 backdrop-blur-md px-4 py-1.5 rounded-full mb-6 border border-background/20">
            <MapPin size={14} className="text-accent" />
            <span className="text-xs font-medium tracking-wide uppercase">Ahmedabad, Gujarat</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6 max-w-4xl mx-auto text-balance">
            Surfaces That Define <br />
            <span className="font-medium text-background">Beautiful Spaces.</span>
          </h1>
          <p className="text-lg md:text-xl text-background/80 mb-10 max-w-2xl mx-auto font-light">
            Discover premium laminates designed to bring character, durability, and refined style to residential and commercial interiors.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/laminates"
              className="bg-accent text-background px-8 py-3.5 text-sm font-medium hover:bg-accent/90 transition-colors w-full sm:w-auto"
            >
              Explore Laminates
            </Link>
            <Link 
              href="/contact"
              className="bg-transparent border border-background text-background px-8 py-3.5 text-sm font-medium hover:bg-background hover:text-primary transition-colors w-full sm:w-auto"
            >
              Visit Our Showroom
            </Link>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/5] md:aspect-square w-full">
              <Image
                src="/images/woodgrain_laminate.jpg"
                alt="Premium Woodgrain Laminate Sample"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="mb-4">
                <span className="text-xs font-semibold tracking-widest text-accent uppercase">Our Showroom</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-light text-primary mb-6 text-balance">
                Where Design Meets <span className="font-medium">Material.</span>
              </h2>
              <p className="text-charcoal/70 text-lg mb-8 leading-relaxed">
                Explore an extensive range of premium laminates, textures, patterns, and finishes curated for modern interiors. Visit our Ahmedabad showroom to experience the materials, colors, and textures in person.
              </p>
              <Link 
                href="/about"
                className="inline-flex items-center text-primary font-medium hover:text-accent transition-colors group"
              >
                Discover Our Showroom 
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* LAMINATE COLLECTIONS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-light text-primary mb-4">
                Explore Our <span className="font-medium">Collections</span>
              </h2>
              <p className="text-charcoal/70 max-w-xl">
                Curated material categories designed to inspire your next architectural or interior project.
              </p>
            </div>
            <Link 
              href="/collections"
              className="hidden md:inline-flex items-center text-sm font-medium text-primary hover:text-accent transition-colors group pb-2 border-b border-primary hover:border-accent"
            >
              View All Collections
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.slice(0, 8).map((collection) => (
              <Link 
                key={collection.id} 
                href={`/collections#${collection.id}`}
                className="group block relative overflow-hidden bg-background aspect-square"
              >
                <div className="absolute inset-0 bg-charcoal/5 group-hover:bg-transparent transition-colors z-10" />
                {/* Fallback color if image is missing */}
                <div className="absolute inset-0 bg-secondary/30" /> 
                <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
                  <h3 className="text-xl font-medium text-primary mb-2 group-hover:text-accent transition-colors">
                    {collection.name}
                  </h3>
                  <p className="text-sm text-charcoal/70 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    Explore Collection →
                  </p>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link 
              href="/collections"
              className="inline-flex items-center text-sm font-medium text-primary border border-primary px-6 py-3"
            >
              View All Collections
            </Link>
          </div>
        </div>
      </section>

      {/* PRODUCT CATALOGUE SNIPPET */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-light text-primary mb-4">
              Find Your <span className="font-medium">Finish.</span>
            </h2>
            <p className="text-charcoal/70 max-w-xl mx-auto">
              A glimpse into our extensive catalogue of premium laminate surfaces.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.slice(0, 3).map((product) => (
              <div key={product.id} className="group">
                <div className="relative aspect-[4/3] mb-4 overflow-hidden bg-secondary/20">
                  {/* Placeholder for product image */}
                </div>
                <div>
                  <h3 className="text-lg font-medium text-primary">{product.name}</h3>
                  <p className="text-sm text-charcoal/60 mb-3">
                    {product.collection} · {product.finish} Finish · Code: {product.code}
                  </p>
                  <Link 
                    href={`/laminates/${product.id}`}
                    className="text-sm font-medium text-accent hover:text-primary transition-colors flex items-center"
                  >
                    View Details <ArrowRight size={14} className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link 
              href="/laminates"
              className="inline-block bg-primary text-background px-8 py-3.5 text-sm font-medium hover:bg-charcoal transition-colors"
            >
              Browse Full Catalogue
            </Link>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-light text-primary mb-4">
              Designed for <span className="font-medium">Every Space.</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {applications.slice(0, 3).map((app) => (
              <div key={app.id} className="group cursor-pointer">
                <div className="relative aspect-video overflow-hidden mb-4 bg-secondary/20">
                  {/* Placeholder */}
                </div>
                <h3 className="text-xl font-medium text-primary mb-2">{app.name}</h3>
                <p className="text-charcoal/70 text-sm leading-relaxed">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 bg-primary text-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <h3 className="text-xl font-medium text-accent mb-4">Wide Selection</h3>
              <p className="text-background/70 leading-relaxed text-sm">
                A curated range of colors, patterns, textures, and finishes for any design requirement.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-accent mb-4">Quality Materials</h3>
              <p className="text-background/70 leading-relaxed text-sm">
                Products selected for exceptional durability, performance, and lasting visual appeal.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-accent mb-4">Expert Guidance</h3>
              <p className="text-background/70 leading-relaxed text-sm">
                Our showroom team helps architects and homeowners find the right surface for their project.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-accent mb-4">Experience in Person</h3>
              <p className="text-background/70 leading-relaxed text-sm">
                See, touch, and compare finishes at our state-of-the-art Ahmedabad showroom.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SHOWROOM EXPERIENCE */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="bg-white p-12 md:p-24 border border-secondary/30 text-center max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-light text-primary mb-6">
              See It. Touch It. <span className="font-medium">Experience It.</span>
            </h2>
            <p className="text-charcoal/70 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Digital images can only show so much. Visit our Ahmedabad showroom to explore the actual colors, textures, and finishes before making your final material selection.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href="/contact"
                className="bg-primary text-background px-8 py-3.5 text-sm font-medium hover:bg-charcoal transition-colors"
              >
                Plan Your Visit
              </Link>
              <a 
                href="https://wa.me/919876543210" 
                target="_blank"
                rel="noreferrer"
                className="bg-transparent border border-primary text-primary px-8 py-3.5 text-sm font-medium hover:bg-primary hover:text-background transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
            <p className="mt-8 text-sm font-medium text-charcoal/50 uppercase tracking-widest">
              Ahmedabad, Gujarat
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
