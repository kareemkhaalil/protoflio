// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useLanguage } from '../contexts/LanguageContext';
// import { motion } from 'framer-motion';
// import { ExternalLink, Github, Eye, Filter, ArrowRight } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { projectsData } from '../data/projectsData';

// const PortfolioSection = () => {
//   const { language, isRTL } = useLanguage();
//   const currentProjectsData = projectsData[language];
//   const [activeFilter, setActiveFilter] = useState('all');

//   const categories = Object.keys(currentProjectsData.categories).map(key => ({
//     key: key,
//     label: currentProjectsData.categories[key]
//   }));

//   const filteredProjects = activeFilter === 'all' 
//     ? currentProjectsData.projects 
//     : currentProjectsData.projects.filter(project => project.category === activeFilter);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         delayChildren: 0.3,
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         duration: 0.5
//       }
//     }
//   };

//   return (
//     <section id="portfolio" className="py-20 lg:py-32">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <motion.h2 
//             variants={itemVariants}
//             className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
//           >
//             {currentProjectsData.title}
//           </motion.h2>
//           <motion.p 
//             variants={itemVariants}
//             className="text-lg text-muted-foreground max-w-2xl mx-auto"
//           >
//             {currentProjectsData.description}
//           </motion.p>
//         </motion.div>

//         {/* Filter Buttons */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="flex flex-wrap justify-center gap-4 mb-12"
//         >
//           {categories.map((category) => (
//             <motion.button
//               key={category.key}
//               variants={itemVariants}
//               onClick={() => setActiveFilter(category.key)}
//               className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
//                 activeFilter === category.key
//                   ? 'bg-primary text-primary-foreground shadow-lg'
//                   : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
//               }`}
//             >
//               <Filter className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'} inline`} />
//               {category.label}
//             </motion.button>
//           ))}
//         </motion.div>

//         {/* Projects Grid */}
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//         >
//           {filteredProjects.map((project) => (
//             <motion.div
//               key={project.id}
//               variants={itemVariants}
//               className="group relative bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border"
//             >
//               {/* Project Image */}
//               <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 <div className="w-full h-full flex items-center justify-center">
//                   <div className="text-4xl font-bold text-primary/50">
//                     {project.title.charAt(0)}
//                   </div>
//                 </div>
                
//                 {/* Overlay Actions */}
//                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                   <div className="flex space-x-4 rtl:space-x-reverse">
//                     <Button size="sm" variant="secondary" asChild>
//                       <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
//                         <ExternalLink className="w-4 h-4" />
//                       </a>
//                     </Button>
//                     <Button size="sm" variant="secondary" asChild>
//                       <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
//                         <Github className="w-4 h-4" />
//                       </a>
//                     </Button>
//                   </div>
//                 </div>

//                 {/* Featured Badge */}
//                 {project.featured && (
//                   <div className="absolute top-4 right-4 rtl:right-auto rtl:left-4">
//                     <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
//                       {isRTL ? 'مميز' : 'Featured'}
//                     </span>
//                   </div>
//                 )}
//               </div>

//               {/* Project Info */}
//               <div className="p-6">
//                 <div className="flex items-center justify-between mb-3">
//                   <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
//                     {project.category}
//                   </span>
//                   <span className="text-xs text-muted-foreground">
//                     {project.year}
//                   </span>
//                 </div>

//                 <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
//                   {project.title}
//                 </h3>

//                 <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
//                   {project.description}
//                 </p>

//                 {/* Technologies */}
//                 <div className="flex flex-wrap gap-1 mb-4">
//                   {project.technologies.slice(0, 3).map((tech, index) => (
//                     <span
//                       key={index}
//                       className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                   {project.technologies.length > 3 && (
//                     <span className="text-xs text-muted-foreground px-2 py-1">
//                       +{project.technologies.length - 3}
//                     </span>
//                   )}
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="flex space-x-3 rtl:space-x-reverse">
//                   <Button size="sm" className="flex-1" asChild>
//                     <Link to={`/project/${project.id}`}>
//                       <Eye className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
//                       {isRTL ? 'عرض التفاصيل' : 'View Details'}
//                     </Link>
//                   </Button>
//                   <Button size="sm" variant="outline" asChild>
//                     <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
//                       <ExternalLink className="w-4 h-4" />
//                     </a>
//                   </Button>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Stats Section */}
//         {/* <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
//         >
//           <motion.div variants={itemVariants} className="text-center">
//             <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
//               {currentProjectsData.projects.length}+
//             </div>
//             <div className="text-muted-foreground">
//               {isRTL ? 'مشروع مكتمل' : 'Completed Projects'}
//             </div>
//           </motion.div>
          
//           <motion.div variants={itemVariants} className="text-center">
//             <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
//               {currentProjectsData.projects.filter(p => p.featured).length}+
//             </div>
//             <div className="text-muted-foreground">
//               {isRTL ? 'مشروع مميز' : 'Featured Projects'}
//             </div>
//           </motion.div>
          
//           <motion.div variants={itemVariants} className="text-center">
//             <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
//               100%
//             </div>
//             <div className="text-muted-foreground">
//               {isRTL ? 'رضا العملاء' : 'Client Satisfaction'}
//             </div>
//           </motion.div>
          
//           <motion.div variants={itemVariants} className="text-center">
//             <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
//               24/7
//             </div>
//             <div className="text-muted-foreground">
//               {isRTL ? 'الدعم الفني' : 'Technical Support'}
//             </div>
//           </motion.div>
//         </motion.div> */}

//         {/* CTA Section */}
//         <motion.div
//           variants={itemVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="text-center mt-16"
//         >
//           <h3 className="text-2xl font-bold text-foreground mb-4">
//             {isRTL ? 'لديك مشروع في ذهنك؟' : 'Have a project in mind?'}
//           </h3>
//           <p className="text-muted-foreground mb-6">
//             {isRTL ? 'دعنا نتحدث حول كيف يمكنني مساعدتك في تحقيق أهدافك' : "Let's talk about how I can help you achieve your goals"}
//           </p>
//           <Button size="lg" asChild>
//             <a href="#contact">
//               {isRTL ? 'تواصل معي' : 'Contact Me'}
//               <ArrowRight className={`w-4 h-4 ${isRTL ? 'mr-2' : 'ml-2'}`} />
//             </a>
//           </Button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default PortfolioSection;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye, Filter, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { projectsData } from '../data/projectsData';

const PortfolioSection = () => {
  const { language, isRTL } = useLanguage();
  const currentProjectsData = projectsData[language];
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = Object.keys(currentProjectsData.categories).map(key => ({
    key: key,
    label: currentProjectsData.categories[key]
  }));

  const filteredProjects = activeFilter === 'all' 
    ? currentProjectsData.projects 
    : currentProjectsData.projects.filter(project => project.category === activeFilter);

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
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          >
            {currentProjectsData.title}
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            {currentProjectsData.description}
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.key}
              variants={itemVariants}
              onClick={() => setActiveFilter(category.key)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category.key
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              <Filter className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'} inline`} />
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                {project.gallery && project.gallery.length > 0 ? (
                  <img
                    src={project.gallery[0]}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-4xl font-bold text-primary/50">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                )}
                
                {/* Overlay Actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4 rtl:space-x-reverse">
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button size="sm" variant="secondary" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
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
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {project.year}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs text-muted-foreground px-2 py-1">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3 rtl:space-x-reverse">
                  <Button size="sm" className="flex-1" asChild>
                    <Link to={`/project/${project.id}`}>
                      <Eye className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                      {isRTL ? 'عرض التفاصيل' : 'View Details'}
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        {/* <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <motion.div variants={itemVariants} className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              {currentProjectsData.projects.length}+
            </div>
            <div className="text-muted-foreground">
              {isRTL ? 'مشروع مكتمل' : 'Completed Projects'}
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              {currentProjectsData.projects.filter(p => p.featured).length}+
            </div>
            <div className="text-muted-foreground">
              {isRTL ? 'مشروع مميز' : 'Featured Projects'}
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              100%
            </div>
            <div className="text-muted-foreground">
              {isRTL ? 'رضا العملاء' : 'Client Satisfaction'}
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
              24/7
            </div>
            <div className="text-muted-foreground">
              {isRTL ? 'الدعم الفني' : 'Technical Support'}
            </div>
          </motion.div>
        </motion.div> */}

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">
            {isRTL ? 'لديك مشروع في ذهنك؟' : 'Have a project in mind?'}
          </h3>
          <p className="text-muted-foreground mb-6">
            {isRTL ? 'دعنا نتحدث حول كيف يمكنني مساعدتك في تحقيق أهدافك' : "Let's talk about how I can help you achieve your goals"}
          </p>
          <Button size="lg" asChild>
            <a href="#contact">
              {isRTL ? 'تواصل معي' : 'Contact Me'}
              <ArrowRight className={`w-4 h-4 ${isRTL ? 'mr-2' : 'ml-2'}`} />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;

