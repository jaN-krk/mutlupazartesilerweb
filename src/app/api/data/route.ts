import { NextResponse } from 'next/server'

const Technologies = [
    {
        base: "devicon:angular",
        styling: "devicon:tailwindcss",
    },
    {
        base: "devicon:html5",
        styling: "devicon:bootstrap",
    },
    {
        base: "devicon:react",
        styling: "devicon:materialui",
    },
    {
        base: "devicon:html5",
        styling: "devicon:tailwindcss",
    },
    {
        base: "devicon:react",
        styling: "devicon:tailwindcss",
    },
    {
        base: "devicon:nextjs",
        styling: "devicon:materialui",
    },
    {
        base: "devicon:react",
        styling: "devicon:bootstrap",
    },
    {
        base: "devicon:nextjs",
        styling: "devicon:tailwindcss",
    },
    {
        base: "devicon:angular",
        styling: "devicon:materialui",
    },
    {
        base: "devicon:nextjs",
        styling: "devicon:bootstrap",
    },
    {
        base: "devicon:angular",
        styling: "devicon:bootstrap",
    },
];

const DocText = [
    {
        icon: "tabler:chart-bar-popular",
        title: "Profesyonel Yükseliş",
        text: "Çalışanlarınızın yetkinliklerini artırın.",
    },
    {
        icon: "tabler:books",
        title: "Sektöre Özel Eğitim",
        text: "Turizm ve hizmet sektörüne uygun çözümler.",
    },
    {
        icon: "tabler:laurel-wreath-1",
        title: "Başarıya Odaklanın",
        text: "Profesyonel gelişimi en üst seviyeye taşıyın.",
    },
];

const Portfolio = [
    {
        image: "/images/productdoc/mp1.jpeg",
    },
    {
        image: "/images/productdoc/mp2.jpeg",
    },
    {
        image: "/images/productdoc/mp3.jpg",
    },
    {
        image: "/images/productdoc/mp4.jpeg",
    },
    {
        image: "/images/productdoc/mp5.jpeg",
    },
];

const MonthlyPlans = [
    {
        type: "Personal",
        price: 19,
        text: "For individuals looking for a simple CRM solution",
        benefits: [
            "Basic CRM features",
            "Unlimited Personal Pipelines",
            "Email Power Tools",
        ],
    },
    {
        type: "Professional",
        price: 49,
        text: "For individuals looking for a simple CRM solution",
        benefits: [
            "Basic CRM features",
            "Unlimited Personal Pipelines",
            "Email Power Tools",
            "Unlimited Shared Pipelines",
        ],
    },
    {
        type: "Enterprise",
        price: 99,
        text: "For individuals looking for a simple CRM solution",
        benefits: [
            "Basic CRM features",
            "Unlimited Personal Pipelines",
            "Email Power Tools",
            "Unlimited Shared Pipelines",
            "Full API Access",
        ],
    },
];

const yearlyPlans = [
    {
        type: "Personal",
        price: 149,
        text: "For individuals looking for a simple CRM solution",
        benefits: [
            "Basic CRM features",
            "Unlimited Personal Pipelines",
            "Email Power Tools",
        ],
    },
    {
        type: "Professional",
        price: 299,
        text: "For individuals looking for a simple CRM solution",
        benefits: [
            "Basic CRM features",
            "Unlimited Personal Pipelines",
            "Email Power Tools",
            "Unlimited Shared Pipelines",
        ],
    },
    {
        type: "Enterprise",
        price: 599,
        text: "For individuals looking for a simple CRM solution",
        benefits: [
            "Basic CRM features",
            "Unlimited Personal Pipelines",
            "Email Power Tools",
            "Unlimited Shared Pipelines",
            "Full API Access",
        ],
    },
];

const Questions = [
    {
        question: "Mutlu Pazartesiler nedir?",
        answer:
            "Eğitim ve danışmanlık hizmetleri sunan bir şirkettir.",
    },
    {
        question: "Hangi hizmetler veriyorsunuz?",
        answer:
            "Çalışan eğitimleri, rehberlik ve kişisel gelişim hizmetleri.",
    },
    {
        question: "Nasıl iletişime geçebilirim?",
        answer:
            "İletişim formu veya e-posta ile bize ulaşabilirsiniz.",
    },
    {
        question: "Hizmetler hangi bölgelerde sunuluyor?",
        answer:
            "Türkiye genelinde hizmet vermekteyiz.",
    },
    {
        question: "Ücretler nasıl?",
        answer:
            "Paketlere göre değişiklik göstermektedir.",
    },
    {
        question: "Hizmet almak için ön koşul var mı?",
        answer:
            "Herkes başvurabilir; özel şartlar paketlere göre değişir.",
    },
];

const Testimonial = [
    {
        review:
            "Her fikir bir sanat eseridir.",
        name: "Fulya Engin",
        post: "Kurucu",
        Image: "/images/profile.png",
    },
    {
        review:
            "İlham sizden, bizden eyleme dönüşür.",
        name: "Fulya Engin",
        post: "Kurucu",
        Image: "/images/profile.png",
    },
    {
        review:
            "Küçük bir mesaj, büyük bir fark yaratır.",
        name: "Fulya Engin",
        post: "Kurucu",
        Image: "/images/profile.png",
    },
];

// const partners = [
//     {
//         image: "/images/info/amazon.svg",
//     },
//     {
//         image: "/images/info/microsoft.svg",
//     },
//     {
//         image: "/images/info/google.svg",
//     },
//     {
//         image: "/images/info/unique.svg",
//     },
// ];

export const GET = () => {
    return NextResponse.json({
        Technologies,
        DocText,
        Portfolio,
        MonthlyPlans,
        yearlyPlans,
        Questions,
        Testimonial,
        // partners,
    })
}