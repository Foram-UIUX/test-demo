import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="bg-background min-h-screen pb-24">
      <div className="bg-primary text-background py-20 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-light mb-6">Inspiration From Real Spaces</h1>
        <p className="max-w-2xl mx-auto text-background/80">
          See how our premium decorative laminates are used in real-world residential and commercial applications.
        </p>
      </div>

      <div className="container mx-auto px-6 md:px-12 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden mb-6 bg-secondary/20">
                {project.image && (
                  <Image 
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
              </div>
              <h2 className="text-xl font-medium text-primary mb-2">{project.name}</h2>
              <div className="flex flex-col text-sm text-charcoal/60 space-y-1 mb-4">
                <span>Location: {project.location}</span>
                <span>Application: {project.application}</span>
              </div>
              <Link 
                href="/contact"
                className="inline-flex items-center text-sm font-medium text-primary hover:text-accent transition-colors"
              >
                View Project Details <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-secondary/10 mt-24 py-24">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h2 className="text-3xl font-light text-primary mb-6">Start Your Project</h2>
          <p className="text-charcoal/70 mb-8">
            Ready to bring your vision to life? Visit our showroom to explore the materials in person and consult with our experts.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-primary text-background px-8 py-3.5 text-sm font-medium hover:bg-charcoal transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
