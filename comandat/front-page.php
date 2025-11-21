<?php get_header(); ?>

<main class="container mx-auto px-3 py-8">
    <section class="mb-12">
        <div class="banner-container">
            <div class="banner-slide active" data-slide="0">
                <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop"
                    alt="Banner 1" class="w-full h-full object-cover">
                <div class="banner-content">
                    <div class="text-center text-white px-4">
                        <h1 class="text-4xl md:text-6xl font-bold mb-4">Electronice de Calitate</h1>
                        <p class="text-lg md:text-xl mb-8 max-w-2xl mx-auto">Descoperă produse recondiționate la
                            prețuri incredibile, cu garanție și livrare rapidă</p>
                        <div class="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                            <a href="<?php echo home_url('/products'); ?>"
                                class="block sm:inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                                Vezi Produsele
                            </a>
                            <a href="<?php echo home_url('/about'); ?>"
                                class="block sm:inline-block border-2 border-white hover:bg-white hover:text-gray-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                                Află Mai Multe
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="banner-slide" data-slide="1">
                <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop"
                    alt="Banner 2" class="w-full h-full object-cover">
                <div class="banner-content">
                    <div class="text-center text-white px-4">
                        <h1 class="text-4xl md:text-6xl font-bold mb-4">Reduceri Speciale</h1>
                        <p class="text-lg md:text-xl mb-8 max-w-2xl mx-auto">Economisește până la 80% la produsele
                            recondiționate verificate profesional</p>
                        <div class="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                            <a href="<?php echo home_url('/products?sort=price_asc'); ?>"
                                class="block sm:inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                                Vezi Ofertele
                            </a>
                            <a href="<?php echo home_url('/products'); ?>"
                                class="block sm:inline-block border-2 border-white hover:bg-white hover:text-gray-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                                Toate Produsele
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="banner-slide" data-slide="2">
                <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop"
                    alt="Banner 3" class="w-full h-full object-cover">
                <div class="banner-content">
                    <div class="text-center text-white px-4">
                        <h1 class="text-4xl md:text-6xl font-bold mb-4">Garanție 1 An</h1>
                        <p class="text-lg md:text-xl mb-8 max-w-2xl mx-auto">Cumpără cu încredere - toate produsele
                            noastre beneficiază de garanție completă</p>
                        <div class="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                            <a href="<?php echo home_url('/about'); ?>"
                                class="block sm:inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                                Despre Noi
                            </a>
                            <a href="<?php echo home_url('/contact'); ?>"
                                class="block sm:inline-block border-2 border-white hover:bg-white hover:text-gray-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30">
                <div class="flex items-center space-x-3 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2">
                    <button id="banner-prev" class="text-white hover:text-green-400 transition-colors">
                        <span class="material-icons">chevron_left</span>
                    </button>
                    <div id="banner-dots" class="flex space-x-2">
                        <button class="banner-nav-dot active" data-slide="0"></button>
                        <button class="banner-nav-dot" data-slide="1"></button>
                        <button class="banner-nav-dot" data-slide="2"></button>
                    </div>
                    <button id="banner-next" class="text-white hover:text-green-400 transition-colors">
                        <span class="material-icons">chevron_right</span>
                    </button>
                </div>
            </div>
        </div>
    </section>

    <section class="mb-12">
        <div class="text-center mb-8 fade-in-up">
            <h2 class="text-3xl font-bold text-gray-800 mb-4">Cele mai bune oferte</h2>
            <p class="text-gray-600 max-w-2xl mx-auto">Descoperă produsele noastre recondiționate la prețuri
                incredibile</p>
        </div>

        <div id="offers-carousel" class="relative">
            <div id="offers-track" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <!-- Products will be loaded by JavaScript from data.js -->
            </div>
        </div>
    </section>

    <section class="mb-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div class="category-card stagger-animation">
                <div class="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="material-icons text-green-600 text-3xl">local_shipping</span>
                </div>
                <h3 class="text-xl font-semibold text-gray-800 mb-2">Livrare Rapidă</h3>
                <p class="text-gray-600 text-sm">1-2 zile lucrătoare în toată țara</p>
            </div>
            <div class="category-card stagger-animation">
                <div class="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="material-icons text-blue-600 text-3xl">verified_user</span>
                </div>
                <h3 class="text-xl font-semibold text-gray-800 mb-2">Garanție 1 An</h3>
                <p class="text-gray-600 text-sm">Toate produsele sunt testate și verificate</p>
            </div>
            <div class="category-card stagger-animation">
                <div class="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="material-icons text-purple-600 text-3xl">autorenew</span>
                </div>
                <h3 class="text-xl font-semibold text-gray-800 mb-2">Retur 14 Zile</h3>
                <p class="text-gray-600 text-sm">Satisfacție garantată sau îți returnăm banii</p>
            </div>
        </div>
    </section>

    <section class="mb-12">
        <div class="text-center mb-8 fade-in-up">
            <h2 class="text-3xl font-bold text-gray-800 mb-4">Categorii Populare</h2>
            <p class="text-gray-600 max-w-2xl mx-auto">Explorează cele mai căutate categorii de produse</p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a href="<?php echo home_url('/products?category=laptops'); ?>"
                class="category-card hover:shadow-xl transition-all duration-300 p-6 bg-gradient-to-br from-blue-50 to-blue-100">
                <span class="material-icons text-blue-600 text-5xl mb-3 block">laptop</span>
                <h3 class="text-lg font-semibold text-gray-800">Laptopuri</h3>
                <p class="text-sm text-gray-600 mt-1">De la €299</p>
            </a>
            <a href="<?php echo home_url('/products?category=phones'); ?>"
                class="category-card hover:shadow-xl transition-all duration-300 p-6 bg-gradient-to-br from-green-50 to-green-100">
                <span class="material-icons text-green-600 text-5xl mb-3 block">smartphone</span>
                <h3 class="text-lg font-semibold text-gray-800">Telefoane</h3>
                <p class="text-sm text-gray-600 mt-1">De la €149</p>
            </a>
            <a href="<?php echo home_url('/products?category=tablets'); ?>"
                class="category-card hover:shadow-xl transition-all duration-300 p-6 bg-gradient-to-br from-purple-50 to-purple-100">
                <span class="material-icons text-purple-600 text-5xl mb-3 block">tablet</span>
                <h3 class="text-lg font-semibold text-gray-800">Tablete</h3>
                <p class="text-sm text-gray-600 mt-1">De la €199</p>
            </a>
            <a href="<?php echo home_url('/products?category=gaming'); ?>"
                class="category-card hover:shadow-xl transition-all duration-300 p-6 bg-gradient-to-br from-red-50 to-red-100">
                <span class="material-icons text-red-600 text-5xl mb-3 block">sports_esports</span>
                <h3 class="text-lg font-semibold text-gray-800">Gaming</h3>
                <p class="text-sm text-gray-600 mt-1">De la €399</p>
            </a>
        </div>
    </section>
</main>

<?php get_footer(); ?>
