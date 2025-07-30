import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Code, Palette, Smartphone, Globe, Zap, Users } from 'lucide-react';
import { aboutData } from '../data/aboutData'; // استيراد البيانات الجديدة

const AboutSection = () => {
  const { language, isRTL } = useLanguage();
  const currentAboutData = aboutData[language]; // اختيار البيانات حسب اللغة

  const iconMap = {
    'Web Development': Code,
    'Responsive Design': Smartphone,
    'UI/UX Design': Palette,
    'Multilingual Development': Globe,
    'Performance & Speed': Zap,
    'Team Collaboration': Users,
    'تطوير الويب': Code,
    'التصميم المتجاوب': Smartphone,
    'تصميم واجهات المستخدم': Palette,
    'تطوير متعدد اللغات': Globe,
    'الأداء والسرعة': Zap,
    'العمل الجماعي': Users,
  };

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
    <section id="about" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {currentAboutData.title}
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {currentAboutData.description}
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {currentAboutData.sections.map((skill, index) => {
              const IconComponent = iconMap[skill.title];
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="bg-card border border-border rounded-lg p-6 h-full hover:shadow-lg hover:border-primary/20 transition-all duration-300 group-hover:scale-105">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        {IconComponent && <IconComponent className="h-6 w-6 text-primary" />}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {skill.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Stats Section */}
          {/* <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { number: '50+', label: isRTL ? 'مشروع مكتمل' : 'Projects Completed' },
              { number: '3+', label: isRTL ? 'سنوات خبرة' : 'Years Experience' },
              { number: '30+', label: isRTL ? 'عميل سعيد' : 'Happy Clients' },
              { number: '24/7', label: isRTL ? 'دعم فني' : 'Support' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;