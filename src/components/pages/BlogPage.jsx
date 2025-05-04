
import React from 'react';
import AnimatedPage from '@/components/AnimatedPage';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, User } from 'lucide-react';
import { motion } from 'framer-motion';

// Placeholder blog posts
const posts = [
  {
    id: 1,
    title: "The Future of SaaS: Trends to Watch in 2025",
    excerpt: "Explore the key trends shaping the Software-as-a-Service industry, from AI integration to vertical SaaS solutions.",
    author: "Jane Doe",
    date: "2025-04-28",
    imageDesc: "Abstract digital art representing future technology trends",
    category: "SaaS",
    bgColor: "from-blue-50 to-indigo-50"
  },
  {
    id: 2,
    title: "Choosing the Right Tech Stack for Your Custom Software",
    excerpt: "A deep dive into selecting the optimal technologies for building scalable and maintainable custom applications.",
    author: "John Smith",
    date: "2025-04-15",
     imageDesc: "Diagram showing different technology logos connected",
    category: "Development",
     bgColor: "from-cyan-50 to-blue-50"
  },
  {
    id: 3,
    title: "Migrating to the Cloud: A Step-by-Step Guide",
    excerpt: "Practical advice and best practices for planning and executing a successful cloud migration strategy.",
    author: "Alex Green",
    date: "2025-03-30",
     imageDesc: "Stylized cloud icon with arrows indicating migration process",
    category: "Cloud",
     bgColor: "from-purple-50 to-pink-50"
  },
   {
    id: 4,
    title: "The Importance of UX/UI in Software Development",
    excerpt: "Why user experience and user interface design are critical for the success of any software product.",
    author: "Sarah Lee",
    date: "2025-03-10",
     imageDesc: "Wireframe sketches and UI design elements on a screen",
    category: "Design",
     bgColor: "from-green-50 to-teal-50"
  },
];

const BlogPage = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-primary via-blue-600 to-cyan-500 text-transparent bg-clip-text">TechNova Insights</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest trends, insights, and news from the world of software development and technology.
          </p>
        </motion.section>

        {/* Blog Posts Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
             <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
            <Card className={`h-full flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br ${post.bgColor}`}>
              <CardHeader className="p-0">
                 <img  class="w-full h-48 object-cover" alt={post.title} src="https://images.unsplash.com/photo-1675270714610-11a5cadcc7b3" />
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                 <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-full mb-2 inline-block">
                   {post.category}
                 </span>
                <CardTitle className="text-xl lg:text-2xl mb-2 text-foreground hover:text-primary transition-colors">
                   <Link to={`/blog/${post.id}`}>{post.title}</Link>
                 </CardTitle>
                <CardDescription>{post.excerpt}</CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                 <div className="text-xs text-muted-foreground space-y-1 sm:space-y-0 sm:space-x-3 flex flex-col sm:flex-row">
                   <span className="flex items-center"><User className="h-3.5 w-3.5 mr-1.5" /> {post.author}</span>
                   <span className="flex items-center"><CalendarDays className="h-3.5 w-3.5 mr-1.5" /> {post.date}</span>
                 </div>
                 <Button variant="link" size="sm" asChild className="text-primary p-0 h-auto group self-end sm:self-center">
                   <Link to={`/blog/${post.id}`}>Read More <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" /></Link>
                 </Button>
              </CardFooter>
            </Card>
             </motion.div>
          ))}
        </section>

         {/* Future: Pagination or Load More */}
         <div className="text-center mt-12">
             {/* Placeholder for pagination */}
             <p className="text-muted-foreground">More posts coming soon...</p>
          </div>

      </div>
    </AnimatedPage>
  );
};

export default BlogPage;
