import { collections } from "@/data/collections";
import Image from "next/image";
import Link from "next/link";

export default function CollectionsPage() {
  return (
    <div className="bg-background min-h-screen pb-24">
      <div className="bg-primary text-background py-20 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-light mb-6">Material Collections</h1>
        <p className="max-w-2xl mx-auto text-background/80">
          Explore our curated categories of premium decorative surfaces.
        </p>
      </div>

      <div className="container mx-auto px-6 md:px-12 mt-16">
        <div className="space-y-24">
          {collections.map((collection, index) => (
            <div key={collection.id} id={collection.id} className={`flex flex-col md:flex-row gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="w-full md:w-1/2 relative aspect-[4/3] bg-secondary/10 overflow-hidden">
                {collection.image && (
                  <Image 
                    src={collection.image}
                    alt={collection.name}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-light text-primary mb-4">{collection.name}</h2>
                <p className="text-charcoal/70 text-lg mb-8 leading-relaxed max-w-lg">
                  {collection.description}
                </p>
                <Link 
                  href={`/laminates?collection=${collection.id}`}
                  className="inline-block border border-primary text-primary px-6 py-3 text-sm font-medium hover:bg-primary hover:text-background transition-colors"
                >
                  Explore Products
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
