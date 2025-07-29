import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, Filter, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PortfolioSection = () => {
  const { t, isRTL } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');

  // Sample projects data - يمكن تخصيصها بسهولة
  const projects = [
    {
      id: 1,
      title: isRTL ? 'موقع تجاري إلكتروني' : 'E-commerce Website',
      description: isRTL ? 'متجر إلكتروني متكامل مع نظام دفع آمن وإدارة المنتجات' : 'Complete e-commerce store with secure payment system and product management',
      image: '/api/placeholder/400/300',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: isRTL ? 'تطبيق إدارة المهام' : 'Task Management App',
      description: isRTL ? 'تطبيق لإدارة المهام والمشاريع مع واجهة سهلة الاستخدام' : 'Task and project management app with user-friendly interface',
      image: '/api/placeholder/400/300',
      category: 'app',
      technologies: ['React Native', 'Firebase', 'Redux'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 3,
      title: isRTL ? 'موقع شركة' : 'Corporate Website',
      description: isRTL ? 'موقع شركة احترافي مع نظام إدارة المحتوى' : 'Professional corporate website with content management system',
      image: '/api/placeholder/400/300',
      category: 'web',
      technologies: ['Next.js', 'Tailwind CSS', 'Sanity CMS'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 4,
      title: isRTL ? 'لوحة تحكم تحليلية' : 'Analytics Dashboard',
      description: isRTL ? 'لوحة تحكم لعرض البيانات والإحصائيات بشكل تفاعلي' : 'Interactive dashboard for data visualization and analytics',
      image: '/api/placeholder/400/300',
      category: 'dashboard',
      technologies: ['React', 'D3.js', 'Python', 'FastAPI'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: isRTL ? 'تطبيق الطقس' : 'Weather App',
      description: isRTL ? 'تطبيق الطقس مع توقعات دقيقة وواجهة جميلة' : 'Weather app with accurate forecasts and beautiful interface',
      image: '/api/placeholder/400/300',
      category: 'app',
      technologies: ['Vue.js', 'Weather API', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 6,
      title: isRTL ? 'منصة تعليمية' : 'Learning Platform',
      description: isRTL ? 'منصة تعليمية تفاعلية مع نظام إدارة الدورات' : 'Interactive learning platform with course management system',
      image: '/api/placeholder/400/300',
      category: 'web',
      technologies: ['React', 'Express.js', 'PostgreSQL', 'Socket.io'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    }
  ];

  const categories = [
    { key: 'all', label: isRTL ? 'الكل' : 'All' },
    { key: 'web', label: isRTL ? 'مواقع ويب' : 'Websites' },
    { key: 'app', label: isRTL ? 'تطبيقات' : 'Apps' },
    { key: 'dashboard', label: isRTL ? 'لوحات تحكم' : 'Dashboards' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="portfolio" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t('portfolioTitle')}
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('portfolioDescription')}
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.key}
                variant={activeFilter === category.key ? "default" : "outline"}
                onClick={() => setActiveFilter(category.key)}
                className="px-6 py-2"
              >
                <Filter className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {category.label}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                className="group"
              >
                <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-300 group-hover:scale-105">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <div className="text-4xl font-bold text-primary/50">
                        {project.title.charAt(0)}
                      </div>
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4 rtl:space-x-reverse">
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <Eye className="w-4 h-4" />
                        </a>
                      </Button>
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4 rtl:right-auto rtl:left-4">
                        <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                          {isRTL ? 'مميز' : 'Featured'}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <Link to={`/project/${project.id}`}>
                      <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors cursor-pointer">
                        {project.title}
                      </h3>
                    </Link>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3 rtl:space-x-reverse">
                      <Button size="sm" variant="default" asChild className="flex-1">
                        <Link to={`/project/${project.id}`}>
                          <ArrowRight className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                          {isRTL ? 'عرض التفاصيل' : 'View Details'}
                        </Link>
                      </Button>
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                      <Button size="sm" variant="ghost" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View More Button */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <Button size="lg" variant="outline">
              {isRTL ? 'عرض المزيد من الأعمال' : 'View More Projects'}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;

