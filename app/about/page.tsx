export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="bg-primary text-background py-24 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-light tracking-tight max-w-4xl mx-auto mb-6">
          Materials That Inspire <span className="font-medium text-accent">Better Spaces.</span>
        </h1>
        <p className="text-lg md:text-xl text-background/80 max-w-2xl mx-auto font-light">
          Aurora Laminates is Ahmedabad's premier destination for high-quality decorative surfaces.
        </p>
      </section>

      {/* Content */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="prose prose-lg prose-headings:font-light prose-headings:text-primary prose-a:text-accent max-w-none">
            <h2>Our Story</h2>
            <p className="text-charcoal/80">
              Founded in Ahmedabad, Gujarat, Aurora Laminates was established with a singular vision: to provide architects, interior designers, and homeowners with a curated selection of premium decorative surfaces that elevate interior spaces. 
            </p>
            <p className="text-charcoal/80">
              We understand that the right material can transform a space. Our showroom serves as a tactile library of possibilities, showcasing everything from ultra-matte solid colors to hyper-realistic woodgrains and luxurious metallic finishes.
            </p>
            
            <h2 className="mt-12">Quality Commitment</h2>
            <p className="text-charcoal/80">
              We partner with industry-leading manufacturers to bring you laminates that are not just visually stunning, but engineered for performance. Our materials are selected for their durability, scratch resistance, and color fastness, ensuring your spaces look beautiful for years to come.
            </p>

            <h2 className="mt-12">Our Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-white p-8 border border-secondary/30">
                <div className="text-4xl font-light text-secondary mb-4">01</div>
                <h3 className="text-xl font-medium text-primary mb-2">Understand Your Project</h3>
                <p className="text-sm text-charcoal/70">We begin by understanding your design goals, application requirements, and aesthetic preferences.</p>
              </div>
              <div className="bg-white p-8 border border-secondary/30">
                <div className="text-4xl font-light text-secondary mb-4">02</div>
                <h3 className="text-xl font-medium text-primary mb-2">Explore Materials</h3>
                <p className="text-sm text-charcoal/70">Navigate our curated collections to discover finishes that align with your vision.</p>
              </div>
              <div className="bg-white p-8 border border-secondary/30">
                <div className="text-4xl font-light text-secondary mb-4">03</div>
                <h3 className="text-xl font-medium text-primary mb-2">Compare Finishes</h3>
                <p className="text-sm text-charcoal/70">See and touch the actual materials in our showroom under different lighting conditions.</p>
              </div>
              <div className="bg-white p-8 border border-secondary/30">
                <div className="text-4xl font-light text-secondary mb-4">04</div>
                <h3 className="text-xl font-medium text-primary mb-2">Bring Design to Life</h3>
                <p className="text-sm text-charcoal/70">Finalize your selection and let our premium surfaces define your beautiful space.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Architects & Designers */}
      <section className="bg-secondary/20 py-24">
        <div className="container mx-auto px-6 md:px-12 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-light text-primary mb-6">For Architects & Interior Designers</h2>
          <p className="text-charcoal/80 text-lg mb-10">
            Explore our material collections and discover finishes that bring your concepts to life. We offer comprehensive support, physical samples, and technical specifications for your projects.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-primary text-background px-8 py-3.5 text-sm font-medium hover:bg-charcoal transition-colors">
              Explore Designer Collection
            </button>
            <button className="bg-white border border-primary text-primary px-8 py-3.5 text-sm font-medium hover:bg-primary hover:text-background transition-colors">
              Request Samples
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
