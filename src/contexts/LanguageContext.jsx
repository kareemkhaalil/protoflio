import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  ar: {
    // Navigation
    home: 'الرئيسية',
    about: 'نبذة عني',
    portfolio: 'أعمالي',
    services: 'خدماتي',
    contact: 'تواصل معي',
    
    // Hero Section
    welcome: 'مرحباً بك في موقعي',
    heroTitle: 'مطور تقني يقود الفكرة من التصميم للتنفيذ',
    heroSubtitle: 'أقوم بإنشاء مواقع ويب حديثة وتطبيقات تفاعلية باستخدام أحدث التقنيات',
    viewWork: 'شاهد أعمالي',
    contactMe: 'تواصل معي',
    
    // About Section
    aboutTitle: 'نبذة عني',
    aboutDescription: 'مطور ويب شغوف بإنشاء تجارب رقمية استثنائية. أتخصص في تطوير المواقع الحديثة والتطبيقات التفاعلية.',
    
    // Portfolio Section
    portfolioTitle: 'أعمالي',
    portfolioDescription: 'مجموعة من أفضل أعمالي في تطوير الويب',
    viewProject: 'عرض المشروع',
    
    // Contact Section
    contactTitle: 'تواصل معي',
    contactDescription: 'هل لديك مشروع في ذهنك؟ دعنا نتحدث!',
    name: 'الاسم',
    email: 'البريد الإلكتروني',
    message: 'الرسالة',
    send: 'إرسال',
    
    // Theme
    lightMode: 'الوضع الفاتح',
    darkMode: 'الوضع الغامق',
    
    // Footer
    allRightsReserved: 'جميع الحقوق محفوظة',
  },
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    portfolio: 'Portfolio',
    services: 'Services',
    contact: 'Contact',
    
    // Hero Section
    welcome: 'Welcome to my website',
    heroTitle: 'From Idea to Execution | Tech That Delivers',
    heroSubtitle: 'I create modern websites and interactive applications using the latest technologies',
    viewWork: 'View My Work',
    contactMe: 'Contact Me',
    
    // About Section
    aboutTitle: 'About Me',
    aboutDescription: 'A passionate web developer who creates exceptional digital experiences. I specialize in modern web development and interactive applications.',
    
    // Portfolio Section
    portfolioTitle: 'My Portfolio',
    portfolioDescription: 'A collection of my best work in web development',
    viewProject: 'View Project',
    
    // Contact Section
    contactTitle: 'Contact Me',
    contactDescription: 'Have a project in mind? Let\'s talk!',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    send: 'Send',
    
    // Theme
    lightMode: 'Light Mode',
    darkMode: 'Dark Mode',
    
    // Footer
    allRightsReserved: 'All rights reserved',
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ar');
  const [isRTL, setIsRTL] = useState(true);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('portfolio-language') || 'ar';
    setLanguage(savedLanguage);
    setIsRTL(savedLanguage === 'ar');
    
    // Update document direction and language
    document.documentElement.lang = savedLanguage;
    document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr';
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'ar' ? 'en' : 'ar';
    setLanguage(newLanguage);
    setIsRTL(newLanguage === 'ar');
    localStorage.setItem('portfolio-language', newLanguage);
    
    // Update document direction and language
    document.documentElement.lang = newLanguage;
    document.documentElement.dir = newLanguage === 'ar' ? 'rtl' : 'ltr';
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  const value = {
    language,
    isRTL,
    toggleLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

