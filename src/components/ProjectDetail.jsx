import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink, Github, Calendar, User, Tag, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, isRTL } = useLanguage();

  // بيانات المشاريع - يجب أن تكون نفس البيانات الموجودة في PortfolioSection
  const projects = [
    {
      id: 1,
      title: isRTL ? 'موقع تجاري إلكتروني' : 'E-commerce Website',
      description: isRTL ? 'متجر إلكتروني متكامل مع نظام دفع آمن وإدارة المنتجات' : 'Complete e-commerce store with secure payment system and product management',
      longDescription: isRTL ? 
        'هذا المشروع عبارة عن متجر إلكتروني متكامل تم تطويره باستخدام أحدث التقنيات. يتضمن المشروع نظام دفع آمن، إدارة المنتجات، نظام المراجعات، وواجهة إدارية شاملة. تم تصميم الموقع ليكون سريع الاستجابة ومتوافق مع جميع الأجهزة.' :
        'This project is a complete e-commerce store developed using the latest technologies. The project includes a secure payment system, product management, review system, and comprehensive admin interface. The website is designed to be responsive and compatible with all devices.',
      image: '/api/placeholder/800/600',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Express.js', 'JWT', 'Cloudinary'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      client: isRTL ? 'شركة التجارة الإلكترونية' : 'E-commerce Company',
      duration: isRTL ? '3 أشهر' : '3 months',
      year: '2024',
      status: isRTL ? 'مكتمل' : 'Completed',
      features: isRTL ? [
        'نظام دفع آمن مع Stripe',
        'إدارة المنتجات والمخزون',
        'نظام المراجعات والتقييمات',
        'لوحة تحكم إدارية',
        'نظام البحث والفلترة',
        'عربة التسوق المتقدمة',
        'نظام الإشعارات',
        'تصميم متجاوب'
      ] : [
        'Secure payment system with Stripe',
        'Product and inventory management',
        'Review and rating system',
        'Admin dashboard',
        'Search and filtering system',
        'Advanced shopping cart',
        'Notification system',
        'Responsive design'
      ],
      challenges: isRTL ? [
        'تحسين أداء الموقع مع قاعدة بيانات كبيرة',
        'تطبيق نظام أمان متقدم',
        'دمج أنظمة الدفع المختلفة',
        'تحسين تجربة المستخدم'
      ] : [
        'Optimizing website performance with large database',
        'Implementing advanced security system',
        'Integrating different payment systems',
        'Improving user experience'
      ],
      gallery: [
        '/api/placeholder/600/400',
        '/api/placeholder/600/400',
        '/api/placeholder/600/400',
        '/api/placeholder/600/400'
      ]
    },
    {
      id: 2,
      title: isRTL ? 'تطبيق إدارة المهام' : 'Task Management App',
      description: isRTL ? 'تطبيق لإدارة المهام والمشاريع مع واجهة سهلة الاستخدام' : 'Task and project management app with user-friendly interface',
      longDescription: isRTL ? 
        'تطبيق شامل لإدارة المهام والمشاريع يساعد الفرق على تنظيم عملهم وزيادة الإنتاجية. يتضمن التطبيق ميزات متقدمة مثل التعاون الجماعي، تتبع الوقت، والتقارير التفصيلية.' :
        'A comprehensive task and project management app that helps teams organize their work and increase productivity. The app includes advanced features such as team collaboration, time tracking, and detailed reports.',
      image: '/api/placeholder/800/600',
      category: 'app',
      technologies: ['React Native', 'Firebase', 'Redux', 'Expo', 'AsyncStorage'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      client: isRTL ? 'شركة إدارة المشاريع' : 'Project Management Company',
      duration: isRTL ? '2 شهر' : '2 months',
      year: '2024',
      status: isRTL ? 'مكتمل' : 'Completed',
      features: isRTL ? [
        'إدارة المهام والمشاريع',
        'التعاون الجماعي',
        'تتبع الوقت',
        'التقارير والإحصائيات',
        'الإشعارات الفورية',
        'العمل بدون اتصال',
        'مزامنة البيانات',
        'واجهة سهلة الاستخدام'
      ] : [
        'Task and project management',
        'Team collaboration',
        'Time tracking',
        'Reports and analytics',
        'Real-time notifications',
        'Offline functionality',
        'Data synchronization',
        'User-friendly interface'
      ],
      challenges: isRTL ? [
        'تحسين الأداء على الأجهزة المختلفة',
        'تطبيق المزامنة في الوقت الفعلي',
        'تصميم واجهة بديهية',
        'إدارة البيانات بدون اتصال'
      ] : [
        'Optimizing performance on different devices',
        'Implementing real-time synchronization',
        'Designing intuitive interface',
        'Managing offline data'
      ],
      gallery: [
        '/api/placeholder/600/400',
        '/api/placeholder/600/400',
        '/api/placeholder/600/400'
      ]
    },
    {
      id: 3,
      title: isRTL ? 'موقع شركة' : 'Corporate Website',
      description: isRTL ? 'موقع شركة احترافي مع نظام إدارة المحتوى' : 'Professional corporate website with content management system',
      longDescription: isRTL ? 
        'موقع شركة احترافي مصمم لعرض خدمات الشركة وإنجازاتها بطريقة جذابة ومهنية. يتضمن الموقع نظام إدارة محتوى متقدم يسمح للشركة بتحديث المحتوى بسهولة.' :
        'A professional corporate website designed to showcase company services and achievements in an attractive and professional way. The website includes an advanced content management system that allows the company to easily update content.',
      image: '/api/placeholder/800/600',
      category: 'web',
      technologies: ['Next.js', 'Tailwind CSS', 'Sanity CMS', 'Vercel', 'TypeScript'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      client: isRTL ? 'شركة الاستشارات التقنية' : 'Tech Consulting Company',
      duration: isRTL ? '1.5 شهر' : '1.5 months',
      year: '2024',
      status: isRTL ? 'مكتمل' : 'Completed',
      features: isRTL ? [
        'تصميم احترافي وحديث',
        'نظام إدارة المحتوى',
        'تحسين محركات البحث',
        'صفحات ديناميكية',
        'نماذج الاتصال',
        'معرض الأعمال',
        'صفحة الفريق',
        'مدونة الشركة'
      ] : [
        'Professional and modern design',
        'Content management system',
        'SEO optimization',
        'Dynamic pages',
        'Contact forms',
        'Portfolio gallery',
        'Team page',
        'Company blog'
      ],
      challenges: isRTL ? [
        'تحسين سرعة التحميل',
        'تطبيق أفضل ممارسات SEO',
        'تصميم واجهة جذابة',
        'دمج نظام إدارة المحتوى'
      ] : [
        'Optimizing loading speed',
        'Implementing SEO best practices',
        'Designing attractive interface',
        'Integrating content management system'
      ],
      gallery: [
        '/api/placeholder/600/400',
        '/api/placeholder/600/400',
        '/api/placeholder/600/400',
        '/api/placeholder/600/400',
        '/api/placeholder/600/400'
      ]
    },
    {
      id: 4,
      title: isRTL ? 'لوحة تحكم تحليلية' : 'Analytics Dashboard',
      description: isRTL ? 'لوحة تحكم لعرض البيانات والإحصائيات بشكل تفاعلي' : 'Interactive dashboard for data visualization and analytics',
      longDescription: isRTL ? 
        'لوحة تحكم متقدمة لعرض وتحليل البيانات بطريقة تفاعلية وبصرية. تتضمن اللوحة مجموعة متنوعة من الرسوم البيانية والمؤشرات التي تساعد في اتخاذ القرارات المبنية على البيانات.' :
        'An advanced dashboard for displaying and analyzing data in an interactive and visual way. The dashboard includes a variety of charts and indicators that help in making data-driven decisions.',
      image: '/api/placeholder/800/600',
      category: 'dashboard',
      technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      client: isRTL ? 'شركة تحليل البيانات' : 'Data Analytics Company',
      duration: isRTL ? '2.5 شهر' : '2.5 months',
      year: '2024',
      status: isRTL ? 'مكتمل' : 'Completed',
      features: isRTL ? [
        'رسوم بيانية تفاعلية',
        'مؤشرات الأداء الرئيسية',
        'فلترة البيانات المتقدمة',
        'تصدير التقارير',
        'التحديث في الوقت الفعلي',
        'لوحات قابلة للتخصيص',
        'تحليلات متقدمة',
        'واجهة سهلة الاستخدام'
      ] : [
        'Interactive charts',
        'Key performance indicators',
        'Advanced data filtering',
        'Report export',
        'Real-time updates',
        'Customizable dashboards',
        'Advanced analytics',
        'User-friendly interface'
      ],
      challenges: isRTL ? [
        'معالجة كميات كبيرة من البيانات',
        'تحسين أداء الرسوم البيانية',
        'تطبيق التحديث في الوقت الفعلي',
        'تصميم واجهة بديهية للبيانات المعقدة'
      ] : [
        'Processing large amounts of data',
        'Optimizing chart performance',
        'Implementing real-time updates',
        'Designing intuitive interface for complex data'
      ],
      gallery: [
        '/api/placeholder/600/400',
        '/api/placeholder/600/400',
        '/api/placeholder/600/400'
      ]
    },
    {
      id: 5,
      title: isRTL ? 'تطبيق الطقس' : 'Weather App',
      description: isRTL ? 'تطبيق الطقس مع توقعات دقيقة وواجهة جميلة' : 'Weather app with accurate forecasts and beautiful interface',
      longDescription: isRTL ? 
        'تطبيق طقس شامل يوفر معلومات دقيقة عن الأحوال الجوية الحالية والتوقعات المستقبلية. يتميز التطبيق بواجهة جميلة وسهلة الاستخدام مع رسوم بيانية تفاعلية.' :
        'A comprehensive weather app that provides accurate information about current weather conditions and future forecasts. The app features a beautiful and easy-to-use interface with interactive charts.',
      image: '/api/placeholder/800/600',
      category: 'app',
      technologies: ['Vue.js', 'Weather API', 'Chart.js', 'Vuex', 'PWA'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      client: isRTL ? 'مشروع شخصي' : 'Personal Project',
      duration: isRTL ? '1 شهر' : '1 month',
      year: '2024',
      status: isRTL ? 'مكتمل' : 'Completed',
      features: isRTL ? [
        'معلومات الطقس الحالية',
        'توقعات لـ 7 أيام',
        'رسوم بيانية للحرارة والرطوبة',
        'البحث عن المدن',
        'الموقع الجغرافي التلقائي',
        'وضع الليل والنهار',
        'إشعارات الطقس',
        'العمل بدون اتصال'
      ] : [
        'Current weather information',
        '7-day forecast',
        'Temperature and humidity charts',
        'City search',
        'Automatic geolocation',
        'Day and night mode',
        'Weather notifications',
        'Offline functionality'
      ],
      challenges: isRTL ? [
        'دمج عدة APIs للطقس',
        'تحسين دقة التوقعات',
        'تصميم واجهة جذابة',
        'تطبيق PWA للعمل بدون اتصال'
      ] : [
        'Integrating multiple weather APIs',
        'Improving forecast accuracy',
        'Designing attractive interface',
        'Implementing PWA for offline functionality'
      ],
      gallery: [
        '/api/placeholder/600/400',
        '/api/placeholder/600/400'
      ]
    },
    {
      id: 6,
      title: isRTL ? 'منصة تعليمية' : 'Learning Platform',
      description: isRTL ? 'منصة تعليمية تفاعلية مع نظام إدارة الدورات' : 'Interactive learning platform with course management system',
      longDescription: isRTL ? 
        'منصة تعليمية شاملة تتيح للمدرسين إنشاء وإدارة الدورات التعليمية، وللطلاب التعلم بطريقة تفاعلية. تتضمن المنصة نظام اختبارات، متابعة التقدم، والتفاعل المباشر بين المدرسين والطلاب.' :
        'A comprehensive learning platform that allows teachers to create and manage educational courses, and students to learn interactively. The platform includes a testing system, progress tracking, and direct interaction between teachers and students.',
      image: '/api/placeholder/800/600',
      category: 'web',
      technologies: ['React', 'Express.js', 'PostgreSQL', 'Socket.io', 'JWT', 'Cloudinary'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      client: isRTL ? 'معهد التعليم الإلكتروني' : 'E-Learning Institute',
      duration: isRTL ? '4 أشهر' : '4 months',
      year: '2024',
      status: isRTL ? 'مكتمل' : 'Completed',
      features: isRTL ? [
        'إنشاء وإدارة الدورات',
        'نظام الاختبارات والتقييم',
        'متابعة تقدم الطلاب',
        'التفاعل المباشر والمناقشات',
        'مكتبة الموارد التعليمية',
        'نظام الشهادات',
        'لوحة تحكم للمدرسين',
        'تطبيق الهاتف المحمول'
      ] : [
        'Course creation and management',
        'Testing and assessment system',
        'Student progress tracking',
        'Live interaction and discussions',
        'Educational resources library',
        'Certificate system',
        'Teacher dashboard',
        'Mobile application'
      ],
      challenges: isRTL ? [
        'تطوير نظام تعليمي متكامل',
        'تطبيق التفاعل في الوقت الفعلي',
        'إدارة المحتوى التعليمي',
        'تحسين تجربة التعلم'
      ] : [
        'Developing integrated learning system',
        'Implementing real-time interaction',
        'Managing educational content',
        'Improving learning experience'
      ],
      gallery: [
        '/api/placeholder/600/400',
        '/api/placeholder/600/400',
        '/api/placeholder/600/400',
        '/api/placeholder/600/400',
        '/api/placeholder/600/400',
        '/api/placeholder/600/400'
      ]
    }
  ];

  const project = projects.find(p => p.id === parseInt(id));

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
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-6xl font-bold text-primary/50">
                    {project.title.charAt(0)}
                  </div>
                </div>
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
                      <div key={index} className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg overflow-hidden">
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-2xl font-bold text-primary/30">
                            {index + 1}
                          </div>
                        </div>
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
                    {isRTL ? 'مشروع' : 'Project'} {project.id} {isRTL ? 'من' : 'of'} {projects.length}
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
                  {project.id < projects.length && (
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

