# دليل التخصيص | Customization Guide

## تخصيص المعلومات الشخصية

### 1. معلومات الاتصال

**في ملف `src/components/ContactSection.jsx`:**

```javascript
// غير رقم الواتساب
const whatsappNumber = '+201234567890'; // ضع رقمك هنا

// غير معلومات الاتصال
const contactInfo = [
  {
    icon: Mail,
    title: isRTL ? 'البريد الإلكتروني' : 'Email',
    value: 'your.email@example.com', // ضع بريدك هنا
    href: 'mailto:your.email@example.com'
  },
  {
    icon: Phone,
    title: isRTL ? 'الهاتف' : 'Phone',
    value: whatsappNumber, // سيأخذ الرقم من المتغير أعلاه
    href: `tel:${whatsappNumber}`
  },
  {
    icon: MapPin,
    title: isRTL ? 'الموقع' : 'Location',
    value: isRTL ? 'القاهرة، مصر' : 'Cairo, Egypt', // غير موقعك
    href: '#'
  }
];
```

### 2. الروابط الاجتماعية

**في ملف `src/components/Footer.jsx`:**

```javascript
const socialLinks = [
  {
    icon: Github,
    name: 'GitHub',
    href: 'https://github.com/yourusername', // ضع رابط GitHub الخاص بك
    color: 'hover:text-gray-900 dark:hover:text-gray-100'
  },
  {
    icon: Linkedin,
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/yourusername', // ضع رابط LinkedIn
    color: 'hover:text-blue-600'
  },
  {
    icon: Twitter,
    name: 'Twitter',
    href: 'https://twitter.com/yourusername', // ضع رابط Twitter
    color: 'hover:text-blue-400'
  }
];
```

## إضافة مشاريع جديدة

**في ملف `src/components/PortfolioSection.jsx`:**

```javascript
const projects = [
  // المشاريع الحالية...
  {
    id: 7, // رقم فريد للمشروع
    title: isRTL ? 'اسم المشروع بالعربية' : 'Project Name in English',
    description: isRTL 
      ? 'وصف مفصل للمشروع باللغة العربية يوضح الهدف والتقنيات المستخدمة'
      : 'Detailed project description in English explaining the purpose and technologies used',
    image: '/path/to/project-image.jpg', // مسار الصورة
    category: 'web', // نوع المشروع: web, app, dashboard
    technologies: ['React', 'Node.js', 'MongoDB'], // التقنيات المستخدمة
    liveUrl: 'https://your-project.com', // رابط المشروع المباشر
    githubUrl: 'https://github.com/username/project', // رابط GitHub
    featured: true // true إذا كان مشروع مميز
  }
];
```

### أنواع المشاريع المتاحة:
- `web` - مواقع الويب
- `app` - التطبيقات
- `dashboard` - لوحات التحكم

## تخصيص الألوان

**في ملف `src/App.css`:**

### الثيم الفاتح:
```css
:root {
  --primary: oklch(0.205 0 0);        /* اللون الأساسي */
  --accent: oklch(0.97 0 0);          /* لون التمييز */
  --background: oklch(1 0 0);         /* لون الخلفية */
  --foreground: oklch(0.145 0 0);     /* لون النص */
  --card: oklch(1 0 0);               /* لون البطاقات */
  --border: oklch(0.922 0 0);         /* لون الحدود */
}
```

### الثيم الغامق:
```css
.dark {
  --primary: oklch(0.922 0 0);        /* اللون الأساسي */
  --accent: oklch(0.269 0 0);         /* لون التمييز */
  --background: oklch(0.145 0 0);     /* لون الخلفية */
  --foreground: oklch(0.985 0 0);     /* لون النص */
  --card: oklch(0.205 0 0);           /* لون البطاقات */
  --border: oklch(1 0 0 / 10%);       /* لون الحدود */
}
```

## تخصيص النصوص

**في ملف `src/contexts/LanguageContext.jsx`:**

```javascript
const translations = {
  ar: {
    // النصوص العربية
    heroTitle: 'مطور ويب محترف', // غير العنوان الرئيسي
    heroSubtitle: 'أقوم بإنشاء مواقع ويب حديثة...', // غير النص التوضيحي
    aboutDescription: 'مطور ويب شغوف...', // غير وصف "نبذة عني"
    // ... باقي النصوص
  },
  en: {
    // النصوص الإنجليزية
    heroTitle: 'Professional Web Developer',
    heroSubtitle: 'I create modern websites...',
    aboutDescription: 'A passionate web developer...',
    // ... باقي النصوص
  }
};
```

## إضافة خدمات جديدة

**في ملف `src/components/ServicesSection.jsx`:**

```javascript
const services = [
  // الخدمات الحالية...
  {
    icon: YourIcon, // أيقونة من Lucide React
    title: isRTL ? 'اسم الخدمة بالعربية' : 'Service Name in English',
    description: isRTL 
      ? 'وصف الخدمة باللغة العربية'
      : 'Service description in English',
    features: isRTL ? [
      'ميزة أولى',
      'ميزة ثانية',
      'ميزة ثالثة',
      'ميزة رابعة'
    ] : [
      'First feature',
      'Second feature', 
      'Third feature',
      'Fourth feature'
    ]
  }
];
```

## تخصيص المهارات

**في ملف `src/components/AboutSection.jsx`:**

```javascript
const skills = [
  // المهارات الحالية...
  {
    icon: YourIcon, // أيقونة من Lucide React
    title: isRTL ? 'اسم المهارة بالعربية' : 'Skill Name in English',
    description: isRTL 
      ? 'وصف المهارة باللغة العربية'
      : 'Skill description in English'
  }
];
```

## تخصيص الإحصائيات

**في ملف `src/components/AboutSection.jsx`:**

```javascript
// في قسم الإحصائيات
[
  { number: '50+', label: isRTL ? 'مشروع مكتمل' : 'Projects Completed' },
  { number: '3+', label: isRTL ? 'سنوات خبرة' : 'Years Experience' },
  { number: '30+', label: isRTL ? 'عميل سعيد' : 'Happy Clients' },
  { number: '24/7', label: isRTL ? 'دعم فني' : 'Support' }
]
```

## تخصيص PWA

**في ملف `public/manifest.json`:**

```json
{
  "name": "اسم التطبيق الكامل",
  "short_name": "اسم مختصر",
  "description": "وصف التطبيق",
  "theme_color": "#000000", // لون الثيم
  "background_color": "#ffffff", // لون الخلفية
  "start_url": "/",
  "display": "standalone"
}
```

## إضافة صفحات جديدة

1. **إنشاء مكون جديد** في `src/components/`
2. **إضافة الترجمات** في `src/contexts/LanguageContext.jsx`
3. **إضافة رابط التنقل** في `src/components/Header.jsx`
4. **استيراد المكون** في `src/App.jsx`

## تخصيص الخطوط

**في ملف `index.html`:**

```html
<!-- استبدال رابط Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

**في ملف `src/App.css`:**

```css
body {
  font-family: 'YourFont', 'Cairo', sans-serif;
}

[dir="rtl"] {
  font-family: 'Cairo', 'YourFont', sans-serif;
}
```

## نصائح مهمة

1. **احفظ نسخة احتياطية** قبل التعديل
2. **اختبر التغييرات** على الثيمين (فاتح وغامق)
3. **تأكد من عمل اللغتين** بعد التعديل
4. **اختبر على أجهزة مختلفة** (موبايل، تابلت، كمبيوتر)
5. **تحقق من عمل PWA** بعد التعديلات

## الحصول على المساعدة

إذا واجهت أي مشاكل أثناء التخصيص:

1. راجع ملف `README.md`
2. تحقق من console المتصفح للأخطاء
3. تأكد من صحة صيغة JSON في الملفات
4. تواصل معي عبر الواتساب أو البريد الإلكتروني

