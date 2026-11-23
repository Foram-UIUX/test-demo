import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { ArrowLeft, ChevronRight } from "lucide-react";

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.id,
  }));
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find(p => p.id === params.slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products.filter(p => p.collection === product.collection && p.id !== product.id).slice(0, 3);

  return (
    <div className="bg-background min-h-screen pb-24">
      <div className="container mx-auto px-6 md:px-12 pt-8 pb-12">
        <div className="flex items-center text-sm text-charcoal/60 mb-8 space-x-2">
          <Link href="/laminates" className="hover:text-primary transition-colors flex items-center">
            <ArrowLeft size={14} className="mr-1" /> Back to Catalogue
          </Link>
          <ChevronRight size={14} />
          <span>{product.collection}</span>
          <ChevronRight size={14} />
          <span className="text-primary font-medium">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Gallery */}
          <div className="relative aspect-square md:aspect-[3/4] bg-secondary/10 border border-secondary/30">
            {product.image && (
              <Image 
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <div className="mb-2 text-sm font-semibold tracking-widest text-accent uppercase">
              {product.collection}
            </div>
            <h1 className="text-4xl md:text-5xl font-light text-primary mb-2">
              {product.name}
            </h1>
            <p className="text-lg text-charcoal/60 mb-8">
              Code: {product.code}
            </p>

            <p className="text-charcoal/80 leading-relaxed mb-10">
              {product.description}
            </p>

            <div className="grid grid-cols-2 gap-y-6 gap-x-8 mb-10 border-t border-b border-secondary/30 py-8">
              <div>
                <p className="text-xs text-charcoal/50 uppercase tracking-widest mb-1">Finish</p>
                <p className="font-medium text-primary">{product.finish}</p>
              </div>
              <div>
                <p className="text-xs text-charcoal/50 uppercase tracking-widest mb-1">Color Family</p>
                <p className="font-medium text-primary">{product.colorFamily}</p>
              </div>
              <div>
                <p className="text-xs text-charcoal/50 uppercase tracking-widest mb-1">Thickness</p>
                <p className="font-medium text-primary">1.0mm / 1.25mm</p>
              </div>
              <div>
                <p className="text-xs text-charcoal/50 uppercase tracking-widest mb-1">Sheet Size</p>
                <p className="font-medium text-primary">8ft x 4ft</p>
              </div>
            </div>

            <div className="bg-white p-8 border border-secondary/30">
              <h3 className="text-lg font-medium text-primary mb-4">Looking for this finish?</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href={`/contact?product=${product.code}`}
                  className="bg-primary text-background px-6 py-3 text-sm font-medium hover:bg-charcoal transition-colors text-center w-full"
                >
                  Enquire Now
                </Link>
                <Link 
                  href="/contact"
                  className="border border-primary text-primary px-6 py-3 text-sm font-medium hover:bg-primary hover:text-background transition-colors text-center w-full"
                >
                  Visit Showroom
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="container mx-auto px-6 md:px-12 mt-16 border-t border-secondary/30 pt-16">
          <h2 className="text-2xl font-light text-primary mb-8">Related Finishes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {relatedProducts.map(rp => (
              <div key={rp.id} className="group border border-secondary/30 bg-white hover:border-primary transition-colors">
                <div className="relative aspect-[4/3] bg-secondary/10 overflow-hidden">
                  {rp.image && (
                    <Image 
                      src={rp.image}
                      alt={rp.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium text-primary mb-1">{rp.name}</h3>
                  <p className="text-sm text-charcoal/60 mb-3">
                    {rp.finish} · {rp.code}
                  </p>
                  <Link 
                    href={`/laminates/${rp.id}`}
                    className="text-sm font-medium text-accent hover:text-primary transition-colors flex items-center"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
