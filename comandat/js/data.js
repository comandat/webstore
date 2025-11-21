const productsData = [
    {
        id: 1,
        name: "Aparat Foto Vintage Canon",
        price: 120.50,
        originalPrice: 150.00,
        condition: "Foarte Bun",
        category: "electronics",
        brand: "Canon",
        image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500",
        description: "Aparat foto vintage în stare excelentă, perfect pentru fotografii artistice. Acest aparat oferă o calitate excepțională a imaginii și este ideal atât pentru începători cât și pentru fotografi entuziaști. Include obiectiv standard și toate accesoriile originale.",
        specs: { 
            "Megapixeli": "18MP", 
            "Zoom": "3x optical",
            "Tip Senzor": "APS-C",
            "ISO": "100-6400",
            "Video": "Full HD 1080p"
        },
        rating: 4.5,
        reviews: 23,
        images: [
            "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500",
            "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=500",
            "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
            "https://images.unsplash.com/photo-1617005082133-548c4dd26f3e?w=500"
        ]
    },
    {
        id: 2,
        name: "Dronă Profesională DJI",
        price: 450.00,
        originalPrice: 650.00,
        condition: "Ca Nou",
        category: "electronics",
        brand: "DJI",
        image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500",
        description: "Dronă profesională cu cameră 4K și autonomie de zbor de 30 minute. Perfectă pentru fotografii aeriene și videoclipuri profesionale. Include controller, baterii suplimentare și geantă de transport premium.",
        specs: { 
            "Rezoluție Video": "4K 60fps", 
            "Timp de Zbor": "30 minute",
            "Distanță": "7 km",
            "Greutate": "595g",
            "Stabilizare": "3-axis gimbal"
        },
        rating: 4.8,
        reviews: 15,
        images: [
            "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500",
            "https://images.unsplash.com/photo-1506947411487-a56738267384?w=500",
            "https://images.unsplash.com/photo-1521405924368-64c332b40842?w=500",
            "https://images.unsplash.com/photo-1473968512647-49393b3e2738?w=500"
        ]
    },
    {
        id: 3,
        name: "Smartwatch Apple Series 7",
        price: 199.99,
        originalPrice: 299.99,
        condition: "Foarte Bun",
        category: "electronics",
        brand: "Apple",
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500",
        description: "Smartwatch elegant cu monitorizare sănătate și notificări inteligente. Ecran Always-On Retina, monitorizare ECG, rezistență la apă și multe alte funcții avansate pentru un stil de viață sănătos.",
        specs: { 
            "Display": "45mm OLED", 
            "Baterie": "18 ore",
            "Conectivitate": "GPS + Cellular",
            "Rezistență": "50m waterproof",
            "Senzori": "ECG, SpO2"
        },
        rating: 4.6,
        reviews: 42,
        images: [
            "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500",
            "https://images.unsplash.com/photo-1617625802912-cde586faf331?w=500",
            "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?w=500",
            "https://images.unsplash.com/photo-1617625802912-cde586faf331?w=500"
        ]
    },
    {
        id: 4,
        name: "Troller de Călătorie Samsonite",
        price: 85.00,
        originalPrice: 120.00,
        condition: "Bun",
        category: "fashion",
        brand: "Samsonite",
        image: "https://images.unsplash.com/photo-1585155770416-075f702c11e5?w=500",
        description: "Troller de călătorie robust și ușor, ideal pentru vacanțe.",
        specs: { capacity: "75L", weight: "3.2kg" },
        rating: 4.3,
        reviews: 18
    },
    {
        id: 5,
        name: "iPhone 13 Pro Max",
        price: 780.99,
        originalPrice: 999.99,
        condition: "Foarte Bun",
        category: "electronics",
        brand: "Apple",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
        description: "Smartphone modern cu ecran OLED și performanțe de top.",
        specs: { storage: "256GB", color: "Graphite" },
        rating: 4.9,
        reviews: 67
    },
    {
        id: 6,
        name: "Laptop Dell XPS 15",
        price: 1200.00,
        originalPrice: 1500.00,
        condition: "Ca Nou",
        category: "laptops",
        brand: "Dell",
        image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=500",
        description: "Laptop performant cu procesor i7 și 16GB RAM pentru task-uri solicitante. Ecran 4K OLED, placă grafică dedicată și design premium din aluminiu. Ideal pentru editare video și design grafic.",
        specs: { 
            "Procesor": "Intel i7-11800H", 
            "RAM": "16GB DDR4",
            "Stocare": "512GB SSD NVMe",
            "Display": "15.6\" 4K OLED",
            "Placă Video": "NVIDIA RTX 3050"
        },
        rating: 4.7,
        reviews: 34,
        images: [
            "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=500",
            "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=500",
            "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
            "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500"
        ]
    },
    {
        id: 7,
        name: "Scaun Gaming Razer",
        price: 250.00,
        originalPrice: 350.00,
        condition: "Foarte Bun",
        category: "gaming",
        brand: "Razer",
        image: "https://images.unsplash.com/photo-1605733513594-2a7730057d38?w=500",
        description: "Scaun gaming ergonomic cu suport lombar și cotiere ajustabile.",
        specs: { material: "PU Leather", weight: "22kg" },
        rating: 4.4,
        reviews: 28
    },
    {
        id: 8,
        name: "Căști Audio Sony WH-1000XM4",
        price: 180.00,
        originalPrice: 250.00,
        condition: "Bun",
        category: "electronics",
        brand: "Sony",
        image: "https://images.unsplash.com/photo-1550009158-94ae76552485?w=500",
        description: "Căști audio Hi-Fi cu sunet de înaltă fidelitate și confort superior. Tehnologie de anulare a zgomotului, baterie de 30 de ore și calitate audio excepțională pentru cea mai bună experiență auditivă.",
        specs: { 
            "Tip": "Over-ear wireless", 
            "Baterie": "30 ore",
            "Anulare Zgomot": "Activă HD",
            "Conectivitate": "Bluetooth 5.0",
            "Greutate": "254g"
        },
        rating: 4.8,
        reviews: 56,
        images: [
            "https://images.unsplash.com/photo-1550009158-94ae76552485?w=500",
            "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500",
            "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500",
            "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=500"
        ]
    },
    {
        id: 9,
        name: "Rucsac Urban Peak Design",
        price: 65.50,
        originalPrice: 90.00,
        condition: "Foarte Bun",
        category: "fashion",
        brand: "Peak Design",
        image: "https://images.unsplash.com/photo-1618384887924-37898b6baf30?w=500",
        description: "Rucsac urban modern cu compartimente organizate și design minimalist.",
        specs: { capacity: "20L", waterproof: "Da" },
        rating: 4.6,
        reviews: 19
    },
    {
        id: 10,
        name: "Pantofi Sport Nike Air Max",
        price: 95.00,
        originalPrice: 130.00,
        condition: "Bun",
        category: "fashion",
        brand: "Nike",
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500",
        description: "Pantofi sport ușori și confortabili pentru alergare și fitness.",
        specs: { size: "42", color: "Negru/Alb" },
        rating: 4.5,
        reviews: 41
    },
    {
        id: 11,
        name: "Pantofi Eleganți Armani",
        price: 130.00,
        originalPrice: 180.00,
        condition: "Ca Nou",
        category: "fashion",
        brand: "Armani",
        image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500",
        description: "Pantofi eleganți din piele naturală, perfecți pentru ocazii speciale.",
        specs: { material: "Piele", size: "41" },
        rating: 4.7,
        reviews: 12
    },
    {
        id: 12,
        name: "Espressor Automat DeLonghi",
        price: 299.99,
        originalPrice: 450.00,
        condition: "Foarte Bun",
        category: "home",
        brand: "DeLonghi",
        image: "https://images.unsplash.com/photo-1618384887924-37898b6baf30?w=500",
        description: "Espressor automat cu râșniță incorporată și multiple setări de cafea.",
        specs: { pressure: "15 bar", capacity: "1.8L" },
        rating: 4.4,
        reviews: 25
    },
    {
        id: 13,
        name: "Boxă Bluetooth JBL",
        price: 45.99,
        originalPrice: 70.00,
        condition: "Resigilat",
        category: "electronics",
        brand: "JBL",
        image: "https://images.unsplash.com/photo-1558089687-f282ffcbc0d4?w=500",
        description: "Boxă bluetooth portabilă cu sunet puternic și bass profund.",
        specs: { power: "20W", battery: "12 ore" },
        rating: 4.3,
        reviews: 38
    },
    {
        id: 14,
        name: "Cameră DSLR Canon EOS",
        price: 550.00,
        originalPrice: 750.00,
        condition: "Foarte Bun",
        category: "electronics",
        brand: "Canon",
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
        description: "Cameră foto digitală DSLR pentru fotografi profesioniști.",
        specs: { megapixels: "24MP", sensor: "APS-C" },
        rating: 4.8,
        reviews: 22
    },
    {
        id: 15,
        name: "Monitor Gaming ASUS",
        price: 320.00,
        originalPrice: 450.00,
        condition: "Bun",
        category: "gaming",
        brand: "ASUS",
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
        description: "Monitor gaming cu rată de refresh de 144Hz și timp de răspuns rapid.",
        specs: { size: "27 inch", resolution: "2560x1440" },
        rating: 4.6,
        reviews: 31
    },
    {
        id: 16,
        name: "Tabletă iPad Pro 11",
        price: 650.00,
        originalPrice: 850.00,
        condition: "Foarte Bun",
        category: "laptops",
        brand: "Apple",
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500",
        description: "Tabletă profesională cu ecran Liquid Retina și performanțe excepționale.",
        specs: { storage: "128GB", display: "11 inch" },
        rating: 4.9,
        reviews: 45
    },
    {
        id: 17,
        name: "Router Wi-Fi 6 ASUS",
        price: 120.00,
        originalPrice: 180.00,
        condition: "Ca Nou",
        category: "electronics",
        brand: "ASUS",
        image: "https://images.unsplash.com/photo-1587202372635-57a5a1c5f3b3?w=500",
        description: "Router de ultimă generație cu viteze de până la 5400 Mbps.",
        specs: { speed: "5400 Mbps", coverage: "250m²" },
        rating: 4.5,
        reviews: 16
    },
    {
        id: 18,
        name: "Aspirator Robot iRobot",
        price: 280.00,
        originalPrice: 400.00,
        condition: "Foarte Bun",
        category: "home",
        brand: "iRobot",
        image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500",
        description: "Aspirator robot inteligent cu navigație avansată și control vocal.",
        specs: { battery: "90 min", capacity: "0.4L" },
        rating: 4.4,
        reviews: 29
    }
];

// Export for module usage if needed, but also keep global for simple script inclusion
if (typeof module !== 'undefined' && module.exports) {
    module.exports = productsData;
} else {
    window.productsData = productsData;
}
