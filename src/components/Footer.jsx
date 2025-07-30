import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  MessageCircle, 
  Mail,
  Heart,
  ArrowUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const { t, isRTL } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      href: 'https://github.com/yourusername',
      color: 'hover:text-gray-900 dark:hover:text-gray-100'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/yourusername',
      color: 'hover:text-blue-600'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      href: 'https://twitter.com/yourusername',
      color: 'hover:text-blue-400'
    },
    {
      icon: MessageCircle,
      name: 'WhatsApp',
      href: 'https://wa.me/+201234567890',
      color: 'hover:text-green-500'
    },
    {
      icon: Mail,
      name: 'Email',
      href: 'mailto:karem2033.kk@gmail.com',
      color: 'hover:text-red-500'
    }
  ];

  const quickLinks = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'portfolio', href: '#portfolio' },
    { key: 'services', href: '#services' },
    { key: 'contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Kareem Khalil
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
                  {isRTL 
                    ? 'أصمّم وأطوّر وأقود تنفيذ منتجات رقمية عالية التأثير، تشمل المواقع والتطبيقات ولوحات التحكم، باستخدام أحدث التقنيات وبتركيز على النتائج الفعلية.'
                    : 'I design, develop, and lead high-impact digital products—websites, mobile apps, and admin systems—built with modern technologies and focused on real-world results.'
                  }
                </p>
                
                {/* Social Links */}
                <div className="flex space-x-4 rtl:space-x-reverse">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground transition-all duration-300 hover:scale-110 ${social.color}`}
                      title={social.name}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  {isRTL ? 'روابط سريعة' : 'Quick Links'}
                </h4>
                <ul className="space-y-2">
                  {quickLinks.map((link) => (
                    <li key={link.key}>
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(link.href);
                        }}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        {t(link.key)}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  {isRTL ? 'معلومات التواصل' : 'Contact Info'}
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-muted-foreground">
                    <Mail className={`w-4 h-4 ${isRTL ? 'ml-3' : 'mr-3'} text-primary`} />
                    <a href="mailto:karem2003.kk@gmail.com" className="hover:text-primary transition-colors">
                      karem2003.kk@gmail.com
                    </a>
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <MessageCircle className={`w-4 h-4 ${isRTL ? 'ml-3' : 'mr-3'} text-primary`} />
                    <a href="https://wa.me/+201285122680" className="hover:text-primary transition-colors">
                      +201285122680
                    </a>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-muted-foreground text-sm mb-4 sm:mb-0"
            >
              © {new Date().getFullYear()} Kareem Khalil. {t('allRightsReserved')}
              <span className="inline-flex items-center mx-2">
                {isRTL ? 'صُنع بـ' : 'Made with'}
                <Heart className="w-4 h-4 text-red-500 mx-1" />
                {isRTL ? 'في مصر' : 'in Egypt'}
              </span>
            </motion.p>

            {/* Back to Top Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Button
                variant="outline"
                size="sm"
                onClick={scrollToTop}
                className="flex items-center"
              >
                <ArrowUp className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {isRTL ? 'العودة للأعلى' : 'Back to Top'}
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

