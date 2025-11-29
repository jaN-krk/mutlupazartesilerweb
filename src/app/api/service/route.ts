import { NextResponse } from 'next/server'

const ServicesData = [
    {
        icon: "solar:notebook-bookmark-linear",
        title: "Kurumlara özel eğitim çözümleri",
        slug: "kurumlara-ozel-egitim-cozumleri",
        image: "/images/ServiceDetail/EdTechAppImage.png",
        description:
            "Müşterilerinizi Mutlu Edin, Sadakati Artırın! Turizm, otelcilik, çağrı merkezi, sağlık sektörü veya mağazacılık.",
        detail:
            "Hangi sektörde olursanız olun, müşteri memnuniyeti işinizin kalbinde yer alır. Mutlu Pazartesiler olarak, müşterilerinizi memnun etmek ve sadakat oluşturmak için size özel eğitim programları sunuyoruz. Çalışanlarınızın müşteri beklentilerini aşmaları, şikayetleri etkin bir şekilde yönetmeleri ve müşteri deneyimini mükemmelleştirmeleri konusunda eğitiyoruz. Sonuç? Artan satışlar, güçlenen müşteri bağlılığı ve uzun vadeli başarı!",
        features: [
            // {
            //     title: "Course Management System",
            //     description:
            //         " Manage courses with multimedia support, helping both students and instructors organize and engage in learning materials.",
            // },
            // {
            //     title: "Student Profiles & Progress Tracking",
            //     description:
            //         " Track and manage students' progress with personalized learning paths, enabling educators to provide targeted support.",
            // },
            // {
            //     title: "Interactive Quizzes & Exams",
            //     description:
            //         " Create and grade interactive quizzes and exams, providing real-time feedback to students.",
            // },
            // {
            //     title: "Video & Audio Integration",
            //     description:
            //         " Incorporate multimedia elements like videos and audio for enhanced learning experiences.",
            // },
            // {
            //     title: "Real-Time Chat",
            //     description:
            //         " Enable instant communication between students and instructors for better engagement.",
            // },
        ],
    },
    {
        icon: "solar:cart-3-linear",
        title: "İletişimin Gücünü Keşfedin",
        slug: "iletisim-gucunu-kesfedin",
        image: "/images/ServiceDetail/eCommerceImage.png",
        description:
            "İletişim, hayatımızın her anında kritik bir rol oynar. Peki, bu gücü daha etkin kullanmaya ne dersiniz?",
        detail:
            "Mutlu Pazartesiler olarak sunduğumuz psikoloji temelli iletişim eğitimi, iş hayatınızda ve sosyal yaşantınızda hemen uygulayabileceğiniz etkili stratejilerle dolu. Eğlenceli ve interaktif bir ortamda, katılımcılar sadece iş yerinde değil, aynı zamanda sosyal hayatlarında da kullanabilecekleri yeni iletişim becerilerini öğreniyor. Bu eğitimle, karşınızdakini daha iyi anlayacak, mesajlarınızı daha etkili bir şekilde iletecek ve ekipler arası ilişkileri güçlendireceksiniz.",
        features: [
            // {
            //     title: "Product Catalog",
            //     description:
            //         "Create a dynamic product catalog with advanced search filters and sorting options to improve customer experience.",
            // },
            // {
            //     title: "Secure Checkout Process",
            //     description:
            //         "Offer a secure checkout experience with multiple payment gateways for a seamless transaction process.",
            // },
            // {
            //     title: "Inventory Management",
            //     description:
            //         "Track inventory in real-time, ensuring stock levels are always accurate and updated.",
            // },
            // {
            //     title: "Customer Reviews & Ratings",
            //     description:
            //         "Allow customers to leave reviews and ratings, building trust and influencing purchasing decisions.",
            // },
            // {
            //     title: "Admin Dashboard",
            //     description:
            //         "Manage sales, orders, and customer data easily through a centralized admin dashboard.",
            // },
        ],
    },
    {
        icon: "solar:video-frame-replace-linear",
        title: "Yöneticilik Yetkinliklerinizi Zirveye Taşıyın!",
        slug: "yoneticilik-yetkinliklerinizi-zirveye-tasin",
        image: "/images/ServiceDetail/CRMAppsImage.png",
        description:
            "Başarılı bir işletmenin anahtarı, etkili liderlik ve güçlü yönetim becerileridir.",
        detail:
            "Mutlu Pazartesiler olarak, yöneticilerinizi daha etkili, kararlı ve vizyoner liderlere dönüştürmek için özel olarak tasarlanmış eğitim programları sunuyoruz. Bu eğitimler, liderlik becerilerini geliştirir, karar alma süreçlerini hızlandırır ve ekip motivasyonunu artırır. Sonuç? Güçlü bir yönetim, verimli bir çalışma ortamı ve sürdürülebilir büyüme!",
        features: [
            // {
            //     title: "Client Database & Segmentation",
            //     description:
            //         "Organize clients and prospects into segments for targeted marketing and effective customer management.",
            // },
            // {
            //     title: "Sales Pipeline Management",
            //     description:
            //         "Manage leads and opportunities at various stages of the sales pipeline to ensure smooth transitions.",
            // },
            // {
            //     title: "Email Marketing & Automation",
            //     description:
            //         "Automate email campaigns and marketing workflows to nurture leads and drive conversions.",
            // },
            // {
            //     title: "Third-Party App Integration",
            //     description:
            //         "Integrate with popular tools like Mailchimp and Salesforce to streamline CRM and SaaS processes.",
            // },
            // {
            //     title: "Customizable Reports & Dashboards",
            //     description:
            //         "Generate and customize detailed reports and dashboards to monitor business performance.",
            // },
        ],
    },
    {
        icon: "solar:stethoscope-linear",
        title: "Turizm ve Otelcilikte Fark Yaratan Eğitimler: Departmana Özel, Canlandırmalarla Bezeli!",
        slug: "turizm-ve-otelcilikte-fark-yaratan-egitimler-departmana-ozel-canlandirmalarla-bezeli",
        image: "/images/ServiceDetail/HealthAppImage.png",
        description:
            "Turizm ve otelcilik sektöründe başarı, her departmanın mükemmel uyumuyla gelir.",
        detail:
            "Mutlu Pazartesiler olarak, yiyecek içecek departmanından misafir ilişkilerine, önbürodan güvenlik ve kat hizmetlerine kadar her birim için özel olarak tasarlanmış, tamamen sektöre özgü eğitimler sunuyoruz. Bu eğitimlerde, çalışanlarınızın günlük iş akışını daha etkili hale getirecek canlandırmalarla, başka hiçbir yerde bulamayacağınız içerikler sunuyoruz.",
        features: [
            // {
            //     title: "Workout Logging & Progress Tracking",
            //     description:
            //         "Log exercises and monitor progress to help users reach their fitness goals.",
            // },
            // {
            //     title: "Nutrition Tracking & Meal Suggestions",
            //     description:
            //         "Track meals and provide personalized meal suggestions based on the user's health goals.",
            // },
            // {
            //     title: "Integration with Wearable Devices",
            //     description:
            //         "Sync with wearable devices like Fitbit and Apple Health to gather more fitness data.",
            // },
            // {
            //     title: "Social Features & Community Support",
            //     description:
            //         "Engage with others by sharing progress, challenges, and encouraging social interactions.",
            // },
            // {
            //     title: "Health Analytics & Reporting",
            //     description:
            //         "Analyze health data over time and provide reports to track long-term fitness progress.",
            // },
        ],
    },
    {
        icon: "solar:chart-square-linear",
        title: "İşe alım desteği veriyoruz",
        slug: "ise-alim-destegi-veriyoruz",
        image: "/images/ServiceDetail/WebAnalyticsAppsImage.png",
        description:
            "Özellikle hizmet merkezleri profesyonelleri, turizm acenteleri – firmaları çalışanları,",
        detail:
            "tekstil sektöründe çeşitli uzmanlıklar, insan kaynakları çalışanları, otelcilik alanında uzman pozisyonların seçme ve yerleştirmelerinde deneyimliyiz. İhtiyaclarınızı dinliyor, sizin adınıza görüşmelerinizi yapıyor ve öneriyoruz. Seçilen adaylara teklifinizi sunarak, çalışma başlangıcına kadar rehberlik ediyoruz.",
        features: [
            // {
            //     title: "Real-Time User Analytics Dashboard",
            //     description:
            //         "Track visitors, their behavior, and website performance metrics in real-time.",
            // },
            // {
            //     title: "Customizable Metrics & Filters",
            //     description:
            //         "Filter and customize the data view to gain more specific insights into website performance.",
            // },
            // {
            //     title: "Google Analytics & Third-Party Tool Integration",
            //     description:
            //         "Integrate with tools like Google Analytics to enhance tracking and data collection.",
            // },
            // {
            //     title: "Traffic Source Tracking",
            //     description:
            //         "Monitor the sources of your website traffic, such as search engines, social media, and paid campaigns.",
            // },
            // {
            //     title: "Heatmap Integration",
            //     description:
            //         "Visualize user interactions on pages with heatmaps to better understand behavior and improve design.",
            // },
        ],
    },
    {
        icon: "solar:hand-money-linear",
        title: "Bireysel eğitimler",
        slug: "bireysel-egitimler",
        image: "/images/ServiceDetail/BankingandFinanceImage.png",
        description:
            "Kariyer hedefi olan insan kaynakları çalışanlarına ya da",
        detail:
            "Kariyer hedefi olan insan kaynakları çalışanlarına ya da adaylarına mülakat becerileri eğitimi, yöneticilere etkili sunum becerileri eğitimi ve iletişim becerileri konularında bireysel online eğitimler veriyoruz. Kişiye ya da gruba özel!",
        features: [
            // {
            //     title: "Account & Transaction Management",
            //     description:
            //         "Manage financial accounts and track transactions efficiently from a secure interface.",
            // },
            // {
            //     title: "Investment Portfolio Tracking",
            //     description:
            //         "Track investments and portfolio performance in real-time with up-to-date market data.",
            // },
            // {
            //     title: "Credit Score & Loan Management",
            //     description:
            //         "Monitor credit scores and apply for loans directly through the app with ease.",
            // },
            // {
            //     title: "Real-Time Market Data & Stock Updates",
            //     description:
            //         "Get real-time financial market data and stock updates to make informed investment decisions.",
            // },
            // {
            //     title: "Security Features",
            //     description:
            //         "Protect user data with advanced security features, including two-factor authentication and encryption.",
            // },
        ],
    },
];

export const GET = () => {
    return NextResponse.json({
        ServicesData,
    })
}