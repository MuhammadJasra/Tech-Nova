
import React from 'react';
import AnimatedPage from '@/components/AnimatedPage';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Layers, Cpu, Database, Cloud, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Layers,
    title: "SaaS Product Development",
    description: "We design, build, and launch scalable Software-as-a-Service applications tailored to market needs and your business vision.",
    details: ["Market research & validation", "MVP development", "Multi-tenant architecture", "Subscription & billing integration", "Ongoing maintenance & updates"],
    bgColor: "from-blue-50 to-indigo-50"
  },
  {
    icon: Cpu,
    title: "Custom Software Development",
    description: "Bespoke software solutions crafted to address your unique challenges and optimize your specific business processes.",
    details: ["Requirement analysis & specification", "Agile development lifecycle", "Web & mobile applications", "API development & integration", "Legacy system modernization"],
     bgColor: "from-cyan-50 to-blue-50"
  },
  {
    icon: Cloud,
    title: "Cloud Solutions & Migration",
    description: "Leverage the power of the cloud with our expertise in migration, architecture design, and cloud-native development.",
    details: ["Cloud strategy & consulting", "AWS, Azure, GCP expertise", "Serverless computing", "DevOps & CI/CD implementation", "Cost optimization"],
     bgColor: "from-purple-50 to-pink-50"
  },
   {
    icon: Database,
    title: "Data Engineering & Analytics",
    description: "Transform raw data into actionable insights with robust data pipelines, warehousing, and visualization solutions.",
    details: ["Data pipeline development (ETL/ELT)", "Data warehousing solutions", "Business Intelligence dashboards", "Big Data processing", "Machine Learning integration"],
     bgColor: "from-green-50 to-teal-50"
  },
   {
    icon: ShieldCheck,
    title: "Application Security & Testing",
    description: "Ensure your software is robust, reliable, and secure with our comprehensive testing and security services.",
    details: ["Security audits & penetration testing", "Automated & manual testing", "Performance & load testing", "Code reviews & quality assurance", "Compliance adherence"],
     bgColor: "from-yellow-50 to-orange-50"
  },
];

const ServicesPage = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-primary via-blue-600 to-cyan-500 text-transparent bg-clip-text">Our Services</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive software solutions designed to accelerate your business growth and technological advancement.
          </p>
        </motion.section>

        {/* Services Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`h-full flex flex-col hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br ${service.bgColor}`}>
                <CardHeader className="items-center text-center">
                  <div className="p-3 bg-primary/10 rounded-full mb-3">
                    <service.icon className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-center">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                    {service.details.slice(0, 3).map((detail) => ( // Show first 3 details
                      <li key={detail}>{detail}</li>
                    ))}
                     {service.details.length > 3 && <li>And more...</li>}
                  </ul>
                </CardContent>
                 <div className="p-6 pt-0 mt-auto">
                     <Button variant="link" asChild className="text-primary p-0 h-auto group">
                       <Link to="/contact">Learn More <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" /></Link>
                     </Button>
                 </div>
              </Card>
            </motion.div>
          ))}
        </section>

         {/* Call to Action */}
        <section className="text-center py-16 bg-gradient-to-r from-primary to-blue-600 rounded-lg shadow-xl mt-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Have a Specific Need?
          </motion.h2>
          <motion.p 
            className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto"
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            We excel at creating custom solutions. Let's discuss your unique requirements and build something amazing together.
          </motion.p>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5, type: 'spring', stiffness: 120 }}
          >
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact" className="group">
                Request a Consultation <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </section>

      </div>
    </AnimatedPage>
  );
};

export default ServicesPage;
