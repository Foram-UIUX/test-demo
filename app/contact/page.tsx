"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    projectType: "",
    requiredProduct: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Connect this form to a real backend API or email service (e.g., Resend, Formspree)
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="bg-background min-h-screen">
      <section className="bg-primary text-background py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-light mb-6">Let's Find the Right Surface for Your Space.</h1>
        <p className="max-w-2xl mx-auto text-background/80">
          Whether you're an architect working on a large commercial project or a homeowner designing your dream kitchen, our team is here to help.
        </p>
      </section>

      <section className="py-24 container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-light text-primary mb-8">Visit Our Showroom</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-secondary/20 p-3 shrink-0">
                  <MapPin className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-primary mb-1">Location</h4>
                  <p className="text-charcoal/70 text-sm leading-relaxed">
                    123 Design Boulevard, S.G. Highway<br />
                    Ahmedabad, Gujarat 380015<br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-secondary/20 p-3 shrink-0">
                  <Phone className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-primary mb-1">Call Showroom</h4>
                  <p className="text-charcoal/70 text-sm">
                    +91 98765 43210<br />
                    +91 79 1234 5678
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-secondary/20 p-3 shrink-0">
                  <MessageSquare className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-primary mb-1">WhatsApp Us</h4>
                  <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="text-accent text-sm hover:underline">
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-secondary/20 p-3 shrink-0">
                  <Mail className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="font-medium text-primary mb-1">Email</h4>
                  <p className="text-charcoal/70 text-sm">
                    info@auroralaminates.com
                  </p>
                </div>
              </div>
            </div>

            {/* Showroom Map */}
            <div className="w-full h-64 border border-secondary/50 overflow-hidden relative">
              <iframe
                title="Showroom Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117498.40698188167!2d72.4828139556819!3d23.030554167195863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            
            <div className="mt-6">
              <button className="text-sm font-medium text-primary border-b border-primary pb-1 hover:text-accent hover:border-accent transition-colors">
                Get Directions →
              </button>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="bg-white p-8 md:p-12 border border-secondary/30">
            <h3 className="text-2xl font-light text-primary mb-8">Send an Enquiry</h3>
            
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 text-green-800 p-6 text-center">
                <h4 className="text-lg font-medium mb-2">Thank you for your enquiry!</h4>
                <p className="text-sm">Our team will get back to you shortly.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-sm font-medium text-green-700 underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-charcoal mb-2 uppercase tracking-wide">Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border border-secondary/50 bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-charcoal mb-2 uppercase tracking-wide">Phone</label>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border border-secondary/50 bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-charcoal mb-2 uppercase tracking-wide">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-secondary/50 bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-xs font-medium text-charcoal mb-2 uppercase tracking-wide">Company / Firm (Optional)</label>
                  <input 
                    type="text" 
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full border border-secondary/50 bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="projectType" className="block text-xs font-medium text-charcoal mb-2 uppercase tracking-wide">Project Type</label>
                    <select 
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full border border-secondary/50 bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors appearance-none"
                    >
                      <option value="">Select Project Type</option>
                      <option value="Residential">Residential</option>
                      <option value="Commercial">Commercial / Office</option>
                      <option value="Retail">Retail</option>
                      <option value="Hospitality">Hospitality</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="requiredProduct" className="block text-xs font-medium text-charcoal mb-2 uppercase tracking-wide">Product / Collection</label>
                    <input 
                      type="text" 
                      id="requiredProduct"
                      name="requiredProduct"
                      placeholder="e.g. Walnut Oak WL-204"
                      value={formData.requiredProduct}
                      onChange={handleChange}
                      className="w-full border border-secondary/50 bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-charcoal mb-2 uppercase tracking-wide">Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border border-secondary/50 bg-background px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-y"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-background px-8 py-4 text-sm font-medium hover:bg-charcoal transition-colors disabled:opacity-70"
                >
                  {isSubmitting ? "Sending..." : "Send Enquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
