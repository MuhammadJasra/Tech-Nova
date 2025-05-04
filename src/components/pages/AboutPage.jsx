
import React from 'react';
import AnimatedPage from '@/components/AnimatedPage';
import { motion } from 'framer-motion';
import { Users, Target, Lightbulb, Globe } from 'lucide-react';

const AboutPage = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-primary via-blue-600 to-cyan-500 text-transparent bg-clip-text">About TechNova Solutions</h1>
          <p className="text-lg text-muted-foreground">Driving Innovation, Delivering Excellence.</p>
        </motion.section>

        {/* Our Story */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-semibold mb-4 text-foreground">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              Founded in [Year - e.g., 2018], TechNova Solutions started with a vision to bridge the gap between complex technological challenges and practical, scalable software solutions. We are a team of passionate developers, designers, and strategists dedicated to helping businesses thrive in the digital age.
            </p>
            <p className="text-muted-foreground">
              Our journey has been driven by a commitment to quality, collaboration, and continuous learning, allowing us to serve a diverse clientele across the globe.
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
             <img  class="rounded-lg shadow-lg w-full h-auto object-cover" alt="Team collaboration in modern office" src="https://images.unsplash.com/photo-1603201667141-5a2d4c673378" />
          </motion.div>
        </section>

        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-8">
           <motion.div 
            className="bg-muted/30 p-8 rounded-lg border border-border/50"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
           >
            <Target className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-2xl font-semibold mb-2 text-foreground">Our Mission</h3>
            <p className="text-muted-foreground">
              To empower businesses with innovative, reliable, and scalable software solutions that drive growth and efficiency.
            </p>
          </motion.div>
           <motion.div 
            className="bg-muted/30 p-8 rounded-lg border border-border/50"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            >
            <Lightbulb className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-2xl font-semibold mb-2 text-foreground">Our Vision</h3>
            <p className="text-muted-foreground">
              To be a globally recognized leader in software development, known for our technical expertise, client-centric approach, and commitment to excellence.
            </p>
          </motion.div>
        </section>

        {/* Our Values */}
        <section className="text-center">
           <h2 className="text-3xl font-semibold mb-10 text-foreground">Our Core Values</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Lightbulb, title: 'Innovation', desc: 'Constantly exploring new technologies.' },
              { icon: Users, title: 'Client Focus', desc: 'Putting our clients\' needs first.' },
              { icon: Target, title: 'Integrity', desc: 'Operating with honesty and transparency.' },
              { icon: Globe, title: 'Collaboration', desc: 'Working together to achieve success.' },
            ].map((value, index) => (
              <motion.div 
                key={value.title} 
                className="flex flex-col items-center"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-4 bg-primary/10 rounded-full mb-3">
                   <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-medium mb-1 text-foreground">{value.title}</h4>
                <p className="text-muted-foreground text-sm">{value.desc}</p>
              </motion.div>
            ))}
           </div>
        </section>

      </div>
    </AnimatedPage>
  );
};

export default AboutPage;
