import { applications } from "@/data/applications";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ApplicationsPage() {
  return (
    <div className="bg-background min-h-screen pb-24">
      <div className="bg-primary text-background py-20 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-light mb-6">Applications</h1>
        <p className="max-w-2xl mx-auto text-background/80">
          Discover how our premium laminates can transform any residential or commercial space.
        </p>
      </div>

      <div className="container mx-auto px-6 md:px-12 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {applications.map((app) => (
            <div key={app.id} className="group bg-white border border-secondary/30 p-6 shadow-sm hover:border-primary transition-colors flex flex-col justify-between">
              <div>
                <div className="relative aspect-video overflow-hidden mb-6 bg-secondary/20 border border-secondary/20">
                  {app.image && (
                    <Image 
                      src={app.image}
                      alt={app.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                </div>
                <h2 className="text-2xl font-light text-primary mb-3">{app.name}</h2>
                <p className="text-charcoal/70 mb-6 leading-relaxed">
                  {app.description}
                </p>
              </div>
              <div>
                <Link 
                  href="/projects"
                  className="inline-flex items-center text-sm font-medium text-accent hover:text-primary transition-colors"
                >
                  View Related Projects <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
