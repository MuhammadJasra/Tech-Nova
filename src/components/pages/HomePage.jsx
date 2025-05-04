
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Cpu, Layers, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedPage from '@/components/AnimatedPage';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <AnimatedPage>
      <div className="space-y-16 md:space-y-24">
        {/* Hero Section */}
        <motion.section 
          className="text-center py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-cyan-50 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-primary via-blue-600 to-cyan-500 text-transparent bg-clip-text"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Innovate. Build. Scale.
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            TechNova Solutions empowers businesses worldwide with cutting-edge SaaS products and bespoke software development tailored to your unique needs.
          </motion.p>
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5, type: 'spring', stiffness: 100 }}
          >
            <Button size="lg" asChild>
              <Link to="/services" className="group">
                Explore Our Services <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </motion.section>

        {/* Services Overview */}
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">What We Do</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            We provide end-to-end software solutions, turning complex challenges into intuitive digital experiences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-white to-blue-50">
                <CardContent className="p-6 text-center flex flex-col items-center">
                  <div className="p-3 bg-primary/10 rounded-full mb-4 inline-block">
                    <Layers className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">SaaS Solutions</h3>
                  <p className="text-muted-foreground text-sm">
                    Ready-to-deploy software platforms designed for efficiency and growth.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-white to-cyan-50">
                <CardContent className="p-6 text-center flex flex-col items-center">
                   <div className="p-3 bg-primary/10 rounded-full mb-4 inline-block">
                    <Cpu className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Custom Development</h3>
                  <p className="text-muted-foreground text-sm">
                    Tailor-made software crafted precisely to meet your business objectives.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
             <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-white to-indigo-50">
                <CardContent className="p-6 text-center flex flex-col items-center">
                   <div className="p-3 bg-primary/10 rounded-full mb-4 inline-block">
                    <Rocket className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Technology Consulting</h3>
                  <p className="text-muted-foreground text-sm">
                    Expert guidance to navigate your digital transformation journey.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Client Logos */}
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Trusted by Global Leaders</h2>
           <p className="text-muted-foreground mb-10">
            We are proud to partner with innovative companies across various industries.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
             <motion.div whileHover={{ scale: 1.1, opacity: 1 }} transition={{ type: 'spring', stiffness: 300 }}>
                <img  class="h-10 grayscale hover:grayscale-0 transition-all duration-300" alt="Client Logo 1" src="https://images.unsplash.com/photo-1686140386811-099f53c0dd54" />
            </motion.div>
             <motion.div whileHover={{ scale: 1.1, opacity: 1 }} transition={{ type: 'spring', stiffness: 300 }}>
                <img  class="h-12 grayscale hover:grayscale-0 transition-all duration-300" alt="Client Logo 2" src="https://images.unsplash.com/photo-1577853218878-695588673979" />
            </motion.div>
             <motion.div whileHover={{ scale: 1.1, opacity: 1 }} transition={{ type: 'spring', stiffness: 300 }}>
                <img  class="h-9 grayscale hover:grayscale-0 transition-all duration-300" alt="Client Logo 3" src="https://images.unsplash.com/photo-1596394723541-3555aa6b843a" />
            </motion.div>
             <motion.div whileHover={{ scale: 1.1, opacity: 1 }} transition={{ type: 'spring', stiffness: 300 }}>
                <img  class="h-11 grayscale hover:grayscale-0 transition-all duration-300" alt="Client Logo 4" src="https://images.unsplash.com/photo-1649000808933-1f4aac7cad9a" />
            </motion.div>
             <motion.div whileHover={{ scale: 1.1, opacity: 1 }} transition={{ type: 'spring', stiffness: 300 }}>
                <img  class="h-10 grayscale hover:grayscale-0 transition-all duration-300" alt="Client Logo 5" src="https://images.unsplash.com/photo-1678957949479-b1e876bee3f1" />
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-16 bg-gradient-to-r from-primary to-blue-600 rounded-lg shadow-xl">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4"
             initial={{ y: -20, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
          >
            Ready to Start Your Next Project?
          </motion.h2>
          <motion.p 
            className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Let's discuss how TechNova Solutions can help you achieve your business goals.
          </motion.p>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5, type: 'spring', stiffness: 120 }}
          >
          <Button variant="secondary" size="lg" asChild>
            <Link to="/contact" className="group">
              Get in Touch <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          </motion.div>
        </section>
      </div>
    </AnimatedPage>
  );
};

export default HomePage;
