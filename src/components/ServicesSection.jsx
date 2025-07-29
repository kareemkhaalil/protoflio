import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { 
  Code, 
  Smartphone, 
  Palette, 
  Search, 
  ShoppingCart, 
  BarChart3,
  Globe,
  Zap
} from 'lucide-react';

const ServicesSection = () => {
  const { t, isRTL } = useLanguage();

  const services = [
    {
      icon: Code,
      title: isRTL ? 'تطوير مواقع الويب' : 'Web Development',
      description: isRTL ? 'إنشاء مواقع ويب حديثة وسريعة باستخدام أحدث التقنيات' : 'Creating modern and fast websites using the latest technologies',
      features: isRTL ? [
        'مواقع متجاوبة مع جميع الأجهزة',
        'أداء عالي وسرعة تحميل',
        'تصميم حديث وجذاب',
        'أمان وحماية متقدمة'
      ] : [
        'Responsive design for all devices',
        'High performance and fast loading',
        'Modern and attractive design',
        'Advanced security and protection'
      ]
    },
    {
      icon: Smartphone,
      title: isRTL ? 'تطوير التطبيقات' : 'Mobile App Development',
      description: isRTL ? 'تطوير تطبيقات الهاتف المحمول لنظامي iOS و Android' : 'Developing mobile applications for iOS and Android systems',
      features: isRTL ? [
        'تطبيقات أصلية وهجينة',
        'واجهات مستخدم سهلة',
        'تكامل مع الخدمات السحابية',
        'اختبار شامل وضمان الجودة'
      ] : [
        'Native and hybrid applications',
        'User-friendly interfaces',
        'Cloud services integration',
        'Comprehensive testing and quality assurance'
      ]
    },
    {
      icon: Palette,
      title: isRTL ? 'تصميم واجهات المستخدم' : 'UI/UX Design',
      description: isRTL ? 'تصميم تجارب مستخدم استثنائية وواجهات جذابة' : 'Designing exceptional user experiences and attractive interfaces',
      features: isRTL ? [
        'تحليل احتياجات المستخدمين',
        'نماذج أولية تفاعلية',
        'اختبار تجربة المستخدم',
        'دليل الهوية البصرية'
      ] : [
        'User needs analysis',
        'Interactive prototypes',
        'User experience testing',
        'Visual identity guidelines'
      ]
    },
    {
      icon: Search,
      title: isRTL ? 'تحسين محركات البحث' : 'SEO Optimization',
      description: isRTL ? 'تحسين ظهور موقعك في نتائج محركات البحث' : 'Improving your website visibility in search engine results',
      features: isRTL ? [
        'تحليل الكلمات المفتاحية',
        'تحسين المحتوى والهيكل',
        'بناء الروابط الخارجية',
        'تقارير الأداء المفصلة'
      ] : [
        'Keyword analysis',
        'Content and structure optimization',
        'External link building',
        'Detailed performance reports'
      ]
    },
    {
      icon: ShoppingCart,
      title: isRTL ? 'المتاجر الإلكترونية' : 'E-commerce Solutions',
      description: isRTL ? 'إنشاء متاجر إلكترونية متكاملة مع أنظمة الدفع الآمنة' : 'Creating complete e-commerce stores with secure payment systems',
      features: isRTL ? [
        'إدارة المنتجات والمخزون',
        'أنظمة دفع متعددة',
        'لوحة تحكم شاملة',
        'تقارير المبيعات والتحليلات'
      ] : [
        'Product and inventory management',
        'Multiple payment systems',
        'Comprehensive dashboard',
        'Sales reports and analytics'
      ]
    },
    {
      icon: BarChart3,
      title: isRTL ? 'لوحات التحكم التحليلية' : 'Analytics Dashboards',
      description: isRTL ? 'إنشاء لوحات تحكم تفاعلية لعرض البيانات والإحصائيات' : 'Creating interactive dashboards for data visualization and statistics',
      features: isRTL ? [
        'رسوم بيانية تفاعلية',
        'تحديث البيانات في الوقت الفعلي',
        'تصدير التقارير',
        'تخصيص العرض حسب المستخدم'
      ] : [
        'Interactive charts and graphs',
        'Real-time data updates',
        'Report export functionality',
        'User-customized views'
      ]
    }
  ];

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
    <section id="services" className="py-20 lg:py-32 bg-muted/30">
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
              {t('services')}
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {isRTL ? 'أقدم مجموعة شاملة من الخدمات التقنية لتحويل أفكارك إلى واقع رقمي' : 'I offer a comprehensive range of technical services to turn your ideas into digital reality'}
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <div className="bg-card border border-border rounded-lg p-8 h-full hover:shadow-xl hover:border-primary/20 transition-all duration-300 group-hover:scale-105">
                  {/* Service Icon */}
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Service Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className={`w-2 h-2 bg-primary rounded-full ${isRTL ? 'ml-3' : 'mr-3'} mt-2 flex-shrink-0`}></div>
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {isRTL ? 'هل لديك مشروع في ذهنك؟' : 'Have a project in mind?'}
              </h3>
              <p className="text-muted-foreground mb-6">
                {isRTL ? 'دعنا نتحدث حول كيف يمكنني مساعدتك في تحقيق أهدافك' : 'Let\'s talk about how I can help you achieve your goals'}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                {isRTL ? 'ابدأ مشروعك الآن' : 'Start Your Project Now'}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;

