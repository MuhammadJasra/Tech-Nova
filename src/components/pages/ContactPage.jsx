
import React from 'react';
import AnimatedPage from '@/components/AnimatedPage';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic form data handling (replace with actual submission logic)
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log("Form Data:", data);

    // Simulate API call
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
      variant: "default", // 'default' is often styled like success
    });
    e.target.reset(); // Reset form fields
  };


  return (
    <AnimatedPage>
      <div className="space-y-16">
        {/* Page Header */}
         <motion.section 
          className="text-center py-12 bg-gradient-to-br from-blue-50 via-white to-cyan-50 rounded-lg"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          >
          <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-primary via-blue-600 to-cyan-500 text-transparent bg-clip-text">Get In Touch</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have a question about our services or want to discuss a project, feel free to reach out.
          </p>
        </motion.section>

        <section className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
           <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
           >
            <Card className="bg-gradient-to-br from-white to-blue-50 border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send Us a Message</CardTitle>
                 <CardDescription>Fill out the form below and we'll respond as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" name="name" placeholder="Your Name" required />
                    </div>
                     <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" placeholder="your.email@example.com" required />
                    </div>
                  </div>
                   <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" name="subject" placeholder="Subject of your message" required />
                    </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" name="message" placeholder="Type your message here..." rows={5} required />
                  </div>
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-semibold text-foreground">Contact Information</h2>
            <p className="text-muted-foreground">
              Alternatively, you can reach us through the following channels. We look forward to connecting with you!
            </p>
            <div className="space-y-4 text-foreground">
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 bg-primary/10 rounded-full">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a href="mailto:info@technovasolutions.com" className="text-muted-foreground hover:text-primary transition-colors">
                    info@technovasolutions.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                 <div className="mt-1 p-2 bg-primary/10 rounded-full">
                    <Phone className="h-5 w-5 text-primary" />
                 </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                 <div className="mt-1 p-2 bg-primary/10 rounded-full">
                    <MapPin className="h-5 w-5 text-primary" />
                 </div>
                <div>
                  <h4 className="font-medium">Office Address</h4>
                  <p className="text-muted-foreground">
                    123 Innovation Drive<br />
                    Tech City, TX 75001<br />
                    United States
                  </p>
                </div>
              </div>
            </div>
            {/* Optional: Add a map here using OpenStreetMap or another provider if requested */}
          </motion.div>
        </section>
      </div>
    </AnimatedPage>
  );
};

export default ContactPage;

