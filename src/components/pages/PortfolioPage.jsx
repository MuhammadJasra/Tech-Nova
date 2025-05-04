
import React from 'react';
import AnimatedPage from '@/components/AnimatedPage';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

// Placeholder data - replace with actual projects
const projects = [
  {
    title: "Project Alpha",
    description: "A revolutionary SaaS platform for project management, enhancing team collaboration and productivity.",
    imageDesc: "Screenshot of Project Alpha dashboard with charts and task lists",
    tags: ["SaaS", "React", "Node.js", "Cloud"],
    liveUrl: "#",
    repoUrl: "#",
    bgColor: "from-blue-50 to-indigo-50"
  },
  {
    title: "Beta Analytics Suite",
    description: "Custom analytics dashboard providing real-time insights for a leading e-commerce client.",
     imageDesc: "Clean interface of Beta Analytics Suite showing various data visualizations",
    tags: ["Data Visualization", "Python", "API", "Custom"],
    liveUrl: "#",
    bgColor: "from-cyan-50 to-blue-50"
  },
  {
    title: "Gamma Mobile App",
    description: "Cross-platform mobile application connecting local service providers with customers.",
     imageDesc: "Mobile app screens for Gamma App showcasing user profiles and map view",
    tags: ["Mobile App", "React Native", "Firebase"],
    liveUrl: "#",
    repoUrl: "#",
     bgColor: "from-purple-50 to-pink-50"
  },
   {
    title: "Delta Enterprise System",
    description: "Modernized a legacy enterprise system, improving performance and user experience.",
     imageDesc: "Comparison screenshots showing old vs new interface for Delta system",
    tags: ["System Modernization", "Java", "Cloud Migration"],
    bgColor: "from-green-50 to-teal-50"
  },
];

const PortfolioPage = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-primary via-blue-600 to-cyan-500 text-transparent bg-clip-text">Our Work</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing some of the innovative solutions we've delivered for our clients worldwide.
          </p>
        </motion.section>

        {/* Portfolio Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
            <Card className={`h-full flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br ${project.bgColor}`}>
              <CardHeader className="p-0">
                 <img  class="w-full h-48 object-cover" alt={project.title + " Screenshot"} src="https://images.unsplash.com/photo-1694388001616-1176f534d72f" />
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <CardTitle className="text-2xl mb-2 text-foreground">{project.title}</CardTitle>
                 <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0 flex justify-end gap-3">
                 {project.repoUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" /> Code
                    </a>
                  </Button>
                 )}
                 {project.liveUrl && (
                  <Button variant="default" size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                     Live Demo <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                 )}
              </CardFooter>
            </Card>
             </motion.div>
          ))}
        </section>
      </div>
    </AnimatedPage>
  );
};

export default PortfolioPage;
