# دليل نشر الموقع على Vercel

## المتطلبات المسبقة
- حساب على [Vercel](https://vercel.com)
- حساب على [GitHub](https://github.com) (اختياري ولكن مُوصى به)

## طريقة النشر

### الطريقة الأولى: النشر المباشر من خلال Vercel CLI

1. **تثبيت Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **تسجيل الدخول:**
   ```bash
   vercel login
   ```

3. **النشر:**
   ```bash
   vercel --prod
   ```

### الطريقة الثانية: النشر من خلال GitHub (مُوصى بها)

1. **رفع المشروع على GitHub:**
   - أنشئ مستودع جديد على GitHub
   - ارفع ملفات المشروع:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/username/repository-name.git
   git push -u origin main
   ```

2. **ربط المستودع بـ Vercel:**
   - اذهب إلى [Vercel Dashboard](https://vercel.com/dashboard)
   - اضغط على "New Project"
   - اختر المستودع من GitHub
   - اضغط على "Deploy"

### الطريقة الثالثة: النشر من خلال واجهة Vercel

1. اذهب إلى [Vercel](https://vercel.com)
2. اضغط على "New Project"
3. اختر "Browse all templates" أو "Import Git Repository"
4. ارفع ملفات المشروع مباشرة

## إعدادات المشروع على Vercel

### إعدادات البناء (Build Settings):
- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

### متغيرات البيئة (Environment Variables):
لا توجد متغيرات بيئة مطلوبة حالياً.

## الملفات المهمة للنشر

### 1. vercel.json
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/sw.js",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=0, must-revalidate"
        },
        {
          "key": "Service-Worker-Allowed",
          "value": "/"
        }
      ]
    },
    {
      "source": "/manifest.json",
      "headers": [
        {
          "key": "Content-Type",
          "value": "application/manifest+json"
        }
      ]
    }
  ]
}
```

### 2. package.json
تأكد من وجود scripts البناء:
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

## ميزات المشروع

### ✅ جاهز للنشر
- ✅ React Router مُعد بشكل صحيح
- ✅ صفحات تفاصيل المشاريع تعمل
- ✅ التنقل بين الصفحات يعمل
- ✅ التصميم المتجاوب
- ✅ دعم اللغة العربية والإنجليزية
- ✅ PWA جاهز
- ✅ ملف vercel.json مُعد

### المسارات المتاحة:
- `/` - الصفحة الرئيسية
- `/project/1` - تفاصيل المشروع الأول
- `/project/2` - تفاصيل المشروع الثاني
- `/project/3` - تفاصيل المشروع الثالث
- `/project/4` - تفاصيل المشروع الرابع
- `/project/5` - تفاصيل المشروع الخامس
- `/project/6` - تفاصيل المشروع السادس

## نصائح مهمة

1. **تأكد من البناء محلياً قبل النشر:**
   ```bash
   npm run build
   npm run preview
   ```

2. **تحديث المحتوى:**
   - يمكنك تعديل بيانات المشاريع في `src/components/PortfolioSection.jsx`
   - يمكنك تعديل بيانات صفحات التفاصيل في `src/components/ProjectDetail.jsx`

3. **إضافة مشاريع جديدة:**
   - أضف المشروع الجديد في كلا الملفين المذكورين أعلاه
   - تأكد من تطابق البيانات بين الملفين

4. **تخصيص التصميم:**
   - الألوان والخطوط في `src/index.css`
   - المكونات في مجلد `src/components/`

## استكشاف الأخطاء

### مشكلة 404 عند تحديث الصفحة:
- تأكد من وجود ملف `vercel.json` مع إعدادات الـ rewrites

### مشكلة في البناء:
- تأكد من تثبيت جميع التبعيات: `npm install`
- تحقق من عدم وجود أخطاء في الكود

### مشكلة في التنقل:
- تأكد من استخدام `Link` من `react-router-dom` وليس `<a>`

## الدعم

إذا واجهت أي مشاكل، تأكد من:
1. تحديث Node.js إلى أحدث إصدار
2. حذف `node_modules` و `package-lock.json` وإعادة التثبيت
3. التأكد من صحة ملف `vercel.json`

---

**المشروع جاهز للنشر على Vercel! 🚀**

