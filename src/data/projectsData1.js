export const projectsData = {
  ar: {
    title: "أعمالي",
    description: "مجموعة من أفضل أعمالي في تطوير الويب",
    categories: {
      all: "الكل",
      web: "مواقع ويب",
      app: "تطبيقات",
      dashboard: "لوحات تحكم"
    },
    projects: [
      {
        id: 1,
        title: "موقع التجارة الإلكترونية",
        description: "متجر إلكتروني متكامل مع نظام دفع آمن وإدارة المنتجات",
        image: "/api/placeholder/400/300",
        category: "web",
        technologies: ["React", "Node.js", "MongoDB", "Stripe", "Express.js", "JWT"],
        liveUrl: "https://ecommerce-demo.com",
        githubUrl: "https://github.com/username/ecommerce-project",
        featured: true,
        client: "شركة التجارة الحديثة",
        duration: "3 أشهر",
        year: "2024",
        status: "مكتمل",
        longDescription: "موقع تجارة إلكترونية شامل تم تطويره باستخدام أحدث التقنيات لتوفير تجربة تسوق استثنائية. يتضمن الموقع نظام إدارة متكامل للمنتجات، عربة تسوق ذكية، نظام دفع آمن متعدد الطرق، وواجهة إدارة شاملة للبائعين. تم تصميم الموقع ليكون متجاوباً مع جميع الأجهزة ومحسناً لمحركات البحث.",
        features: [
          "نظام إدارة المنتجات المتقدم",
          "عربة تسوق ذكية مع حفظ العناصر",
          "نظام دفع آمن متعدد الطرق",
          "واجهة إدارة شاملة",
          "نظام المراجعات والتقييمات",
          "تتبع الطلبات في الوقت الفعلي",
          "نظام الخصومات والعروض",
          "دعم متعدد اللغات والعملات"
        ],
        challenges: [
          "تحسين الأداء مع قاعدة بيانات كبيرة",
          "ضمان أمان المعاملات المالية",
          "تطوير واجهة مستخدم سهلة الاستخدام",
          "دعم أنظمة الدفع المتعددة"
        ],
        gallery: [
          "/api/placeholder/600/400",
          "/api/placeholder/600/400",
          "/api/placeholder/600/400",
          "/api/placeholder/600/400"
        ]
      },
      {
        id: 2,
        title: "تطبيق إدارة المهام",
        description: "تطبيق ويب لإدارة المهام والمشاريع مع ميزات التعاون الجماعي",
        image: "/api/placeholder/400/300",
        category: "app",
        technologies: ["React", "Firebase", "Material-UI", "Redux", "PWA"],
        liveUrl: "https://taskmanager-demo.com",
        githubUrl: "https://github.com/username/task-manager",
        featured: true,
        client: "مشروع شخصي",
        duration: "2 أشهر",
        year: "2024",
        status: "مكتمل",
        longDescription: "تطبيق إدارة مهام متطور يساعد الفرق والأفراد على تنظيم أعمالهم بكفاءة. يتضمن التطبيق ميزات متقدمة مثل إنشاء المشاريع، تعيين المهام، تتبع التقدم، التعاون الجماعي، والتقارير التفصيلية. تم تطويره باستخدام تقنيات حديثة لضمان الأداء العالي وسهولة الاستخدام.",
        features: [
          "إنشاء وإدارة المشاريع",
          "تعيين المهام للفريق",
          "تتبع التقدم بالرسوم البيانية",
          "نظام الإشعارات الفورية",
          "التعاون الجماعي في الوقت الفعلي",
          "تقارير الأداء التفصيلية",
          "واجهة سهلة الاستخدام",
          "دعم العمل دون اتصال"
        ],
        challenges: [
          "تطوير نظام التعاون في الوقت الفعلي",
          "تحسين الأداء مع البيانات الكبيرة",
          "تصميم واجهة بديهية للمستخدمين",
          "ضمان أمان البيانات"
        ],
        gallery: [
          "/api/placeholder/600/400",
          "/api/placeholder/600/400",
          "/api/placeholder/600/400"
        ]
      },
      {
        id: 3,
        title: "موقع الشركة المؤسسية",
        description: "موقع شركة احترافي مع نظام إدارة المحتوى ومتعدد اللغات",
        image: "/api/placeholder/400/300",
        category: "web",
        technologies: ["Next.js", "Tailwind CSS", "Sanity CMS", "TypeScript"],
        liveUrl: "https://corporate-demo.com",
        githubUrl: "https://github.com/username/corporate-website",
        featured: true,
        client: "شركة التقنية المتقدمة",
        duration: "4 أشهر",
        year: "2024",
        status: "مكتمل",
        longDescription: "موقع شركة مؤسسية شامل تم تطويره لعرض خدمات الشركة ومنتجاتها بطريقة احترافية. يتضمن الموقع نظام إدارة محتوى متقدم، دعم متعدد اللغات، صفحات خدمات تفاعلية، نظام إدارة الأخبار والمقالات، ونماذج اتصال متطورة. تم تحسين الموقع لمحركات البحث وضمان سرعة التحميل.",
        features: [
          "نظام إدارة المحتوى المتقدم",
          "دعم متعدد اللغات",
          "صفحات خدمات تفاعلية",
          "نظام إدارة الأخبار",
          "تحسين محركات البحث",
          "تصميم متجاوب",
          "سرعة تحميل عالية",
          "نماذج اتصال متطورة"
        ],
        challenges: [
          "تطوير نظام CMS مخصص",
          "تحسين الأداء والسرعة",
          "دعم متعدد اللغات المتقدم",
          "تحسين محركات البحث"
        ],
        gallery: [
          "/api/placeholder/600/400",
          "/api/placeholder/600/400",
          "/api/placeholder/600/400",
          "/api/placeholder/600/400",
          "/api/placeholder/600/400"
        ]
      }
    ]
  },
  en: {
    title: "My Portfolio",
    description: "A collection of my best work in web development",
    categories: {
      all: "All",
      web: "Websites",
      app: "Apps",
      dashboard: "Dashboards"
    },
    projects: [
      {
        id: 1,
        title: "E-commerce Website",
        description: "Complete e-commerce store with secure payment system and product management",
        image: "/api/placeholder/400/300",
        category: "web",
        technologies: ["React", "Node.js", "MongoDB", "Stripe", "Express.js", "JWT"],
        liveUrl: "https://ecommerce-demo.com",
        githubUrl: "https://github.com/username/ecommerce-project",
        featured: true,
        client: "Modern Commerce Company",
        duration: "3 months",
        year: "2024",
        status: "Completed",
        longDescription: "A comprehensive e-commerce website developed using the latest technologies to provide an exceptional shopping experience. The site includes an integrated product management system, smart shopping cart, secure multi-method payment system, and comprehensive admin interface for sellers. The website is designed to be responsive across all devices and optimized for search engines.",
        features: [
          "Advanced product management system",
          "Smart shopping cart with item persistence",
          "Secure multi-method payment system",
          "Comprehensive admin interface",
          "Reviews and ratings system",
          "Real-time order tracking",
          "Discounts and offers system",
          "Multi-language and currency support"
        ],
        challenges: [
          "Performance optimization with large database",
          "Ensuring financial transaction security",
          "Developing user-friendly interface",
          "Supporting multiple payment systems"
        ],
        gallery: [
          "/api/placeholder/600/400",
          "/api/placeholder/600/400",
          "/api/placeholder/600/400",
          "/api/placeholder/600/400"
        ]
      },
      {
        id: 2,
        title: "Task Management App",
        description: "Web application for task and project management with team collaboration features",
        image: "/api/placeholder/400/300",
        category: "app",
        technologies: ["React", "Firebase", "Material-UI", "Redux", "PWA"],
        liveUrl: "https://taskmanager-demo.com",
        githubUrl: "https://github.com/username/task-manager",
        featured: true,
        client: "Personal Project",
        duration: "2 months",
        year: "2024",
        status: "Completed",
        longDescription: "An advanced task management application that helps teams and individuals organize their work efficiently. The app includes advanced features such as project creation, task assignment, progress tracking, team collaboration, and detailed reporting. Developed using modern technologies to ensure high performance and ease of use.",
        features: [
          "Create and manage projects",
          "Assign tasks to team members",
          "Track progress with charts",
          "Real-time notification system",
          "Real-time team collaboration",
          "Detailed performance reports",
          "User-friendly interface",
          "Offline work support"
        ],
        challenges: [
          "Developing real-time collaboration system",
          "Performance optimization with big data",
          "Designing intuitive user interface",
          "Ensuring data security"
        ],
        gallery: [
          "/api/placeholder/600/400",
          "/api/placeholder/600/400",
          "/api/placeholder/600/400"
        ]
      },
      {
        id: 3,
        title: "Corporate Website",
        description: "Professional corporate website with CMS and multi-language support",
        image: "/api/placeholder/400/300",
        category: "web",
        technologies: ["Next.js", "Tailwind CSS", "Sanity CMS", "TypeScript"],
        liveUrl: "https://corporate-demo.com",
        githubUrl: "https://github.com/username/corporate-website",
        featured: true,
        client: "Advanced Technology Company",
        duration: "4 months",
        year: "2024",
        status: "Completed",
        longDescription: "A comprehensive corporate website developed to showcase company services and products professionally. The site includes an advanced content management system, multi-language support, interactive service pages, news and articles management system, and advanced contact forms. The website is optimized for search engines and fast loading speeds.",
        features: [
          "Advanced content management system",
          "Multi-language support",
          "Interactive service pages",
          "News management system",
          "SEO optimization",
          "Responsive design",
          "High loading speed",
          "Advanced contact forms"
        ],
        challenges: [
          "Developing custom CMS system",
          "Performance and speed optimization",
          "Advanced multi-language support",
          "Search engine optimization"
        ],
        gallery: [
          "/api/placeholder/600/400",
          "/api/placeholder/600/400",
          "/api/placeholder/600/400",
          "/api/placeholder/600/400",
          "/api/placeholder/600/400"
        ]
      }
    ]
  }
};

