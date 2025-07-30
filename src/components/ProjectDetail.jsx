// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { useLanguage } from '../contexts/LanguageContext';
// import { motion } from 'framer-motion';
// import { ArrowLeft, ArrowRight, ExternalLink, Github, Calendar, User, Tag, Star, CheckCircle } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Separator } from '@/components/ui/separator';

// import { projectsData } from '../data/projectsData';

// const ProjectDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { t, isRTL, language } = useLanguage();

//   const currentProjectsData = projectsData[language];
//   const project = currentProjectsData.projects.find(p => p.id === parseInt(id));

//   if (!project) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-2xl font-bold text-foreground mb-4">
//             {isRTL ? 'المشروع غير موجود' : 'Project Not Found'}
//           </h1>
//           <Button onClick={() => navigate('/')}>
//             {isRTL ? 'العودة للرئيسية' : 'Back to Home'}
//           </Button>
//         </div>
//       </div>
//     );
//   }

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         delayChildren: 0.2,
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
//         duration: 0.6
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       {/* Header */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
//       >
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
//           <div className="flex items-center justify-between">
//             <Button
//               variant="ghost"
//               onClick={() => navigate('/')}
//               className="flex items-center space-x-2 rtl:space-x-reverse"
//             >
//               {isRTL ? (
//                 <ArrowRight className="w-4 h-4" />
//               ) : (
//                 <ArrowLeft className="w-4 h-4" />
//               )}
//               <span>{isRTL ? 'العودة للرئيسية' : 'Back to Home'}</span>
//             </Button>
            
//             <div className="flex items-center space-x-4 rtl:space-x-reverse">
//               <Button size="sm" variant="outline" asChild>
//                 <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
//                   <ExternalLink className="w-4 h-4" />
//                 </a>
//               </Button>
//               <Button size="sm" variant="outline" asChild>
//                 <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
//                   <Github className="w-4 h-4" />
//                 </a>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </motion.div>

//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         className="container mx-auto px-4 sm:px-6 lg:px-8 py-8"
//       >
//         {/* Hero Section */}
//         <motion.div variants={itemVariants} className="mb-12">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//             <div>
//               <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
//                 <Badge variant="secondary">{project.category}</Badge>
//                 {project.featured && (
//                   <Badge variant="default">
//                     <Star className="w-3 h-3 mr-1 rtl:mr-0 rtl:ml-1" />
//                     {isRTL ? 'مميز' : 'Featured'}
//                   </Badge>
//                 )}
//               </div>
              
//               <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
//                 {project.title}
//               </h1>
              
//               <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
//                 {project.description}
//               </p>
              
//               <div className="flex flex-wrap gap-4 mb-6">
//                 <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-muted-foreground">
//                   <User className="w-4 h-4" />
//                   <span>{project.client}</span>
//                 </div>
//                 <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-muted-foreground">
//                   <Calendar className="w-4 h-4" />
//                   <span>{project.year}</span>
//                 </div>
//                 <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-muted-foreground">
//                   <CheckCircle className="w-4 h-4" />
//                   <span>{project.status}</span>
//                 </div>
//               </div>
              
//               <div className="flex space-x-4 rtl:space-x-reverse">
//                 <Button size="lg" asChild>
//                   <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
//                     <ExternalLink className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
//                     {isRTL ? 'عرض المشروع' : 'View Project'}
//                   </a>
//                 </Button>
//                 <Button size="lg" variant="outline" asChild>
//                   <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
//                     <Github className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
//                     {isRTL ? 'الكود المصدري' : 'Source Code'}
//                   </a>
//                 </Button>
//               </div>
//             </div>
            
//             <div className="relative">
//               <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg overflow-hidden">
//                 <div className="w-full h-full flex items-center justify-center">
//                   <div className="text-6xl font-bold text-primary/50">
//                     {project.title.charAt(0)}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* Project Details */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
//           {/* Main Content */}
//           <div className="lg:col-span-2 space-y-8">
//             {/* Description */}
//             <motion.div variants={itemVariants}>
//               <Card>
//                 <CardHeader>
//                   <CardTitle>{isRTL ? 'نظرة عامة' : 'Overview'}</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-muted-foreground leading-relaxed">
//                     {project.longDescription}
//                   </p>
//                 </CardContent>
//               </Card>
//             </motion.div>

//             {/* Features */}
//             <motion.div variants={itemVariants}>
//               <Card>
//                 <CardHeader>
//                   <CardTitle>{isRTL ? 'الميزات الرئيسية' : 'Key Features'}</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
//                     {project.features.map((feature, index) => (
//                       <div key={index} className="flex items-center space-x-2 rtl:space-x-reverse">
//                         <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
//                         <span className="text-sm">{feature}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>

//             {/* Challenges */}
//             <motion.div variants={itemVariants}>
//               <Card>
//                 <CardHeader>
//                   <CardTitle>{isRTL ? 'التحديات والحلول' : 'Challenges & Solutions'}</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="space-y-3">
//                     {project.challenges.map((challenge, index) => (
//                       <div key={index} className="flex items-start space-x-2 rtl:space-x-reverse">
//                         <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
//                         <span className="text-sm text-muted-foreground">{challenge}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>

//             {/* Gallery */}
//             <motion.div variants={itemVariants}>
//               <Card>
//                 <CardHeader>
//                   <CardTitle>{isRTL ? 'معرض الصور' : 'Project Gallery'}</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 {project.gallery.map((image, index) => (
//   <div key={index} className="aspect-video rounded-lg overflow-hidden">
//     <img
//       src={image}
//       alt={`Gallery image ${index + 1}`}
//       className="w-full h-full object-cover"
//     />
//   </div>
// ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </div>

//           {/* Sidebar */}
//           <div className="space-y-6">
//             {/* Project Info */}
//             <motion.div variants={itemVariants}>
//               <Card>
//                 <CardHeader>
//                   <CardTitle>{isRTL ? 'معلومات المشروع' : 'Project Info'}</CardTitle>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <div>
//                     <h4 className="font-medium text-sm text-muted-foreground mb-1">
//                       {isRTL ? 'العميل' : 'Client'}
//                     </h4>
//                     <p className="text-foreground">{project.client}</p>
//                   </div>
//                   <Separator />
//                   <div>
//                     <h4 className="font-medium text-sm text-muted-foreground mb-1">
//                       {isRTL ? 'المدة' : 'Duration'}
//                     </h4>
//                     <p className="text-foreground">{project.duration}</p>
//                   </div>
//                   <Separator />
//                   <div>
//                     <h4 className="font-medium text-sm text-muted-foreground mb-1">
//                       {isRTL ? 'السنة' : 'Year'}
//                     </h4>
//                     <p className="text-foreground">{project.year}</p>
//                   </div>
//                   <Separator />
//                   <div>
//                     <h4 className="font-medium text-sm text-muted-foreground mb-1">
//                       {isRTL ? 'الحالة' : 'Status'}
//                     </h4>
//                     <Badge variant="outline">{project.status}</Badge>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>

//             {/* Technologies */}
//             <motion.div variants={itemVariants}>
//               <Card>
//                 <CardHeader>
//                   <CardTitle>
//                     <Tag className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
//                     {isRTL ? 'التقنيات المستخدمة' : 'Technologies Used'}
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="flex flex-wrap gap-2">
//                     {project.technologies.map((tech, index) => (
//                       <Badge key={index} variant="secondary">
//                         {tech}
//                       </Badge>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>

//             {/* Actions */}
//             <motion.div variants={itemVariants}>
//               <Card>
//                 <CardHeader>
//                   <CardTitle>{isRTL ? 'روابط المشروع' : 'Project Links'}</CardTitle>
//                 </CardHeader>
//                 <CardContent className="space-y-3">
//                   <Button className="w-full" asChild>
//                     <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
//                       <ExternalLink className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
//                       {isRTL ? 'عرض المشروع المباشر' : 'View Live Project'}
//                     </a>
//                   </Button>
//                   <Button variant="outline" className="w-full" asChild>
//                     <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
//                       <Github className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
//                       {isRTL ? 'عرض الكود المصدري' : 'View Source Code'}
//                     </a>
//                   </Button>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </div>
//         </div>

//         {/* Navigation */}
//         <motion.div variants={itemVariants}>
//           <Card>
//             <CardContent className="py-6">
//               <div className="flex justify-between items-center">
//                 <Button variant="outline" onClick={() => navigate('/')}>
//                   {isRTL ? (
//                     <ArrowRight className="w-4 h-4 ml-2" />
//                   ) : (
//                     <ArrowLeft className="w-4 h-4 mr-2" />
//                   )}
//                   {isRTL ? 'العودة للمشاريع' : 'Back to Projects'}
//                 </Button>
                
//                 <div className="text-center">
//                   <p className="text-sm text-muted-foreground">
//                     {isRTL ? 'مشروع' : 'Project'} {project.id} {isRTL ? 'من' : 'of'} {currentProjectsData.projects.length}
//                   </p>
//                 </div>
                
//                 <div className="flex space-x-2 rtl:space-x-reverse">
//                   {project.id > 1 && (
//                     <Button variant="outline" onClick={() => navigate(`/project/${project.id - 1}`)}>
//                       {isRTL ? (
//                         <ArrowRight className="w-4 h-4" />
//                       ) : (
//                         <ArrowLeft className="w-4 h-4" />
//                       )}
//                     </Button>
//                   )}
//                   {project.id < currentProjectsData.projects.length && (
//                     <Button variant="outline" onClick={() => navigate(`/project/${project.id + 1}`)}>
//                       {isRTL ? (
//                         <ArrowLeft className="w-4 h-4" />
//                       ) : (
//                         <ArrowRight className="w-4 h-4" />
//                       )}
//                     </Button>
//                   )}
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default ProjectDetail;


import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink, Github, Calendar, User, Tag, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

import { projectsData } from '../data/projectsData';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, isRTL, language } = useLanguage();

  const currentProjectsData = projectsData[language];
  const project = currentProjectsData.projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            {isRTL ? 'المشروع غير موجود' : 'Project Not Found'}
          </h1>
          <Button onClick={() => navigate('/')}>
            {isRTL ? 'العودة للرئيسية' : 'Back to Home'}
          </Button>
        </div>
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
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
        duration: 0.6
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 rtl:space-x-reverse"
            >
              {isRTL ? (
                <ArrowRight className="w-4 h-4" />
              ) : (
                <ArrowLeft className="w-4 h-4" />
              )}
              <span>{isRTL ? 'العودة للرئيسية' : 'Back to Home'}</span>
            </Button>
            
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <Button size="sm" variant="outline" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
              <Button size="sm" variant="outline" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-8"
      >
        {/* Hero Section */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
                <Badge variant="secondary">{project.category}</Badge>
                {project.featured && (
                  <Badge variant="default">
                    <Star className="w-3 h-3 mr-1 rtl:mr-0 rtl:ml-1" />
                    {isRTL ? 'مميز' : 'Featured'}
                  </Badge>
                )}
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                {project.title}
              </h1>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-muted-foreground">
                  <User className="w-4 h-4" />
                  <span>{project.client}</span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{project.year}</span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4" />
                  <span>{project.status}</span>
                </div>
              </div>
              
              <div className="flex space-x-4 rtl:space-x-reverse">
                <Button size="lg" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                    {isRTL ? 'عرض المشروع' : 'View Project'}
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                    {isRTL ? 'الكود المصدري' : 'Source Code'}
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg overflow-hidden">
                {project.gallery && project.gallery.length > 0 ? (
                  <img
                    src={project.gallery[0]}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-6xl font-bold text-primary/50">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle>{isRTL ? 'نظرة عامة' : 'Overview'}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.longDescription}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Features */}
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle>{isRTL ? 'الميزات الرئيسية' : 'Key Features'}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2 rtl:space-x-reverse">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Challenges */}
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle>{isRTL ? 'التحديات والحلول' : 'Challenges & Solutions'}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <div key={index} className="flex items-start space-x-2 rtl:space-x-reverse">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{challenge}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Gallery */}
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle>{isRTL ? 'معرض الصور' : 'Project Gallery'}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.gallery.map((image, index) => (
  <div key={index} className="aspect-video rounded-lg overflow-hidden">
    <img
      src={image}
      alt={`Gallery image ${index + 1}`}
      className="w-full h-full object-cover"
    />
  </div>
))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Info */}
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle>{isRTL ? 'معلومات المشروع' : 'Project Info'}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-1">
                      {isRTL ? 'العميل' : 'Client'}
                    </h4>
                    <p className="text-foreground">{project.client}</p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-1">
                      {isRTL ? 'المدة' : 'Duration'}
                    </h4>
                    <p className="text-foreground">{project.duration}</p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-1">
                      {isRTL ? 'السنة' : 'Year'}
                    </h4>
                    <p className="text-foreground">{project.year}</p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground mb-1">
                      {isRTL ? 'الحالة' : 'Status'}
                    </h4>
                    <Badge variant="outline">{project.status}</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Technologies */}
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle>
                    <Tag className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                    {isRTL ? 'التقنيات المستخدمة' : 'Technologies Used'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Actions */}
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle>{isRTL ? 'روابط المشروع' : 'Project Links'}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                      {isRTL ? 'عرض المشروع المباشر' : 'View Live Project'}
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                      {isRTL ? 'عرض الكود المصدري' : 'View Source Code'}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Navigation */}
        <motion.div variants={itemVariants}>
          <Card>
            <CardContent className="py-6">
              <div className="flex justify-between items-center">
                <Button variant="outline" onClick={() => navigate('/')}>
                  {isRTL ? (
                    <ArrowRight className="w-4 h-4 ml-2" />
                  ) : (
                    <ArrowLeft className="w-4 h-4 mr-2" />
                  )}
                  {isRTL ? 'العودة للمشاريع' : 'Back to Projects'}
                </Button>
                
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    {isRTL ? 'مشروع' : 'Project'} {project.id} {isRTL ? 'من' : 'of'} {currentProjectsData.projects.length}
                  </p>
                </div>
                
                <div className="flex space-x-2 rtl:space-x-reverse">
                  {project.id > 1 && (
                    <Button variant="outline" onClick={() => navigate(`/project/${project.id - 1}`)}>
                      {isRTL ? (
                        <ArrowRight className="w-4 h-4" />
                      ) : (
                        <ArrowLeft className="w-4 h-4" />
                      )}
                    </Button>
                  )}
                  {project.id < currentProjectsData.projects.length && (
                    <Button variant="outline" onClick={() => navigate(`/project/${project.id + 1}`)}>
                      {isRTL ? (
                        <ArrowLeft className="w-4 h-4" />
                      ) : (
                        <ArrowRight className="w-4 h-4" />
                      )}
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectDetail;

