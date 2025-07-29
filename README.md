# بورتفوليو احترافي | Professional Portfolio

موقع بورتفوليو احترافي متعدد اللغات (عربي/إنجليزي) مع ثيم فاتح وغامق، نظام إدارة الأعمال، نموذج اتصال واتساب، PWA، وتصميم متجاوب.

## المميزات الرئيسية

### 🌐 متعدد اللغات
- دعم كامل للغة العربية والإنجليزية
- تبديل سهل بين اللغات
- دعم RTL للعربية و LTR للإنجليزية

### 🎨 نظام الثيمات
- ثيم فاتح وغامق
- ألوان قابلة للتخصيص بسهولة
- تبديل سلس بين الثيمات

### 📱 تصميم متجاوب
- يعمل بشكل مثالي على جميع الأجهزة
- تصميم mobile-first
- واجهة مستخدم حديثة وجذابة

### 💼 إدارة الأعمال
- عرض المشاريع مع فلترة حسب النوع
- **صفحات تفصيلية منفصلة لكل مشروع** ✨ جديد
- **تفاصيل شاملة للمشاريع مع معرض صور** ✨ جديد
- **معلومات العميل والمدة الزمنية** ✨ جديد
- **التحديات والحلول المطبقة** ✨ جديد
- **التنقل السلس بين المشاريع** ✨ جديد
- سهولة إضافة مشاريع جديدة

### 📞 نموذج اتصال واتساب
- إرسال مباشر للواتساب
- تنسيق احترافي للرسائل
- دعم النصوص العربية والإنجليزية

### 📱 Progressive Web App (PWA)
- قابل للتثبيت كتطبيق
- يعمل دون اتصال بالإنترنت
- أداء محسن

## التقنيات المستخدمة

- **React 18** - مكتبة JavaScript للواجهات
- **React Router DOM** - للتنقل بين الصفحات ✨ جديد
- **Vite** - أداة البناء السريعة
- **Tailwind CSS** - إطار عمل CSS
- **Framer Motion** - مكتبة الأنيميشن
- **Lucide React** - مكتبة الأيقونات
- **shadcn/ui** - مكونات UI جاهزة

## المسارات المتاحة ✨ جديد

- `/` - الصفحة الرئيسية
- `/project/1` - تفاصيل المشروع الأول (موقع تجاري إلكتروني)
- `/project/2` - تفاصيل المشروع الثاني (تطبيق إدارة المهام)
- `/project/3` - تفاصيل المشروع الثالث (موقع شركة)
- `/project/4` - تفاصيل المشروع الرابع (لوحة تحكم تحليلية)
- `/project/5` - تفاصيل المشروع الخامس (تطبيق الطقس)
- `/project/6` - تفاصيل المشروع السادس (منصة تعليمية)

## بنية المشروع

```
portfolio-website/
├── public/
│   ├── manifest.json          # ملف PWA
│   ├── sw.js                 # Service Worker
│   ├── icon-192x192.png      # أيقونة PWA
│   ├── icon-512x512.png      # أيقونة PWA
│   └── apple-touch-icon.png  # أيقونة Apple
├── src/
│   ├── components/           # المكونات
│   │   ├── Header.jsx
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── PortfolioSection.jsx    # محدث - مع روابط التفاصيل
│   │   ├── ProjectDetail.jsx       # جديد - صفحة تفاصيل المشروع
│   │   ├── ServicesSection.jsx
│   │   ├── ContactSection.jsx
│   │   └── Footer.jsx
│   ├── contexts/            # Context للحالة العامة
│   │   ├── LanguageContext.jsx
│   │   └── ThemeContext.jsx
│   ├── App.jsx              # المكون الرئيسي - محدث مع React Router
│   ├── App.css              # الأنماط الرئيسية
│   └── main.jsx             # نقطة الدخول
├── index.html               # ملف HTML الرئيسي
├── vercel.json              # إعدادات Vercel للنشر
├── .gitignore               # ملفات مستبعدة من Git
├── DEPLOYMENT.md            # دليل النشر المفصل
├── package.json             # معلومات المشروع
└── README.md               # هذا الملف
```

## التثبيت والتشغيل

### المتطلبات
- Node.js 18+ 
- pnpm (أو npm/yarn)

### خطوات التثبيت

1. **استنساخ المشروع**
```bash
git clone <repository-url>
cd portfolio-website
```

2. **تثبيت التبعيات**
```bash
pnpm install
```

3. **تشغيل الخادم المحلي**
```bash
pnpm run dev
```

4. **فتح المتصفح**
```
http://localhost:5173
```

## التخصيص

### تغيير المعلومات الشخصية

1. **معلومات الاتصال** - في `src/components/ContactSection.jsx`:
```javascript
const whatsappNumber = '+201234567890'; // غير الرقم هنا
```

2. **الروابط الاجتماعية** - في `src/components/Footer.jsx`:
```javascript
const socialLinks = [
  {
    icon: Github,
    name: 'GitHub',
    href: 'https://github.com/yourusername', // غير الرابط هنا
  },
  // ...
];
```

### إضافة مشاريع جديدة

في `src/components/PortfolioSection.jsx`، أضف مشروع جديد إلى مصفوفة `projects`:

```javascript
const projects = [
  // المشاريع الحالية...
  {
    id: 7, // رقم فريد
    title: isRTL ? 'اسم المشروع بالعربية' : 'Project Name in English',
    description: isRTL ? 'وصف المشروع بالعربية' : 'Project description in English',
    image: '/path/to/image.jpg',
    category: 'web', // web, app, dashboard
    technologies: ['React', 'Node.js'], // التقنيات المستخدمة
    liveUrl: 'https://project-url.com',
    githubUrl: 'https://github.com/username/project',
    featured: true // إذا كان مشروع مميز
  }
];
```

### تخصيص الألوان

الألوان محددة في `src/App.css`. يمكنك تغيير المتغيرات التالية:

```css
:root {
  --primary: oklch(0.205 0 0);        /* اللون الأساسي */
  --accent: oklch(0.97 0 0);          /* لون التمييز */
  --background: oklch(1 0 0);         /* لون الخلفية */
  --foreground: oklch(0.145 0 0);     /* لون النص */
  /* ... باقي الألوان */
}
```

### إضافة لغات جديدة

في `src/contexts/LanguageContext.jsx`، أضف اللغة الجديدة:

```javascript
const translations = {
  ar: { /* الترجمات العربية */ },
  en: { /* الترجمات الإنجليزية */ },
  fr: { /* الترجمات الفرنسية - جديد */ }
};
```

## البناء للإنتاج

```bash
pnpm run build
```

سيتم إنشاء مجلد `dist` يحتوي على الملفات المحسنة للإنتاج.

## النشر على Vercel

1. **إنشاء حساب على Vercel**
2. **ربط المستودع**
3. **النشر التلقائي**

أو باستخدام Vercel CLI:

```bash
npm i -g vercel
vercel --prod
```

## النشر على Netlify

1. **سحب مجلد `dist` إلى Netlify**
2. **أو ربط المستودع للنشر التلقائي**

## المساهمة

1. Fork المشروع
2. إنشاء فرع للميزة الجديدة (`git checkout -b feature/AmazingFeature`)
3. Commit التغييرات (`git commit -m 'Add some AmazingFeature'`)
4. Push للفرع (`git push origin feature/AmazingFeature`)
5. فتح Pull Request

## الترخيص

هذا المشروع مرخص تحت رخصة MIT - راجع ملف [LICENSE](LICENSE) للتفاصيل.

## الدعم

إذا كان لديك أي أسئلة أو مشاكل، يرجى فتح issue في المستودع أو التواصل عبر:

- البريد الإلكتروني: your.email@example.com
- واتساب: +201234567890

## شكر خاص

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [shadcn/ui](https://ui.shadcn.com/)

---

صُنع بـ ❤️ في مصر

"# protoflio" 
