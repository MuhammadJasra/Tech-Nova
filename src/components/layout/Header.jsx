
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Code, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Blog', path: '/blog' },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const activeStyle = {
    fontWeight: 'bold',
    color: 'hsl(var(--primary))', // Use primary color for active link
    textDecoration: 'underline',
    textUnderlineOffset: '4px',
  };

  const linkClasses = "text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200";
  const mobileLinkClasses = "block py-2 px-4 text-lg font-medium text-foreground hover:bg-secondary rounded-md transition-colors duration-200";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 mr-6">
          <Code className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg bg-gradient-to-r from-primary via-blue-600 to-cyan-500 text-transparent bg-clip-text">
            TechNova
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => linkClasses}
              style={({ isActive }) => isActive ? activeStyle : undefined}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild className="hidden md:inline-flex">
            <Link to="/contact">Contact Us</Link>
          </Button>
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="absolute top-16 left-0 w-full bg-background border-b border-border/40 shadow-md md:hidden p-4 z-40"
        >
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => mobileLinkClasses}
                style={({ isActive }) => isActive ? activeStyle : undefined}
                onClick={toggleMobileMenu} // Close menu on link click
              >
                {item.name}
              </NavLink>
            ))}
            <Button asChild className="w-full mt-4">
              <Link to="/contact" onClick={toggleMobileMenu}>Contact Us</Link>
            </Button>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
