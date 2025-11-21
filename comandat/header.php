<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header id="page-header"
    class="sticky top-0 z-40 p-2 transition-transform duration-300 ease-in-out bg-white/90 backdrop-blur-sm shadow-sm">
    <div class="container mx-auto px-3">
        <div class="relative">
            <div id="header-card" class="relative z-20 flex flex-col">
                <div class="flex items-center justify-between px-4 py-3">
                    <div class="flex items-center space-x-3 flex-shrink-0">
                        <div class="bg-green-600 p-2 rounded-full flex items-center justify-center">
                            <span class="material-icons text-white" style="font-size: 24px;">shopping_bag</span>
                        </div>
                        <a class="text-xl font-bold text-gray-800 hidden lg:block" href="<?php echo home_url(); ?>">Comandat.ro</a>
                    </div>

                    <div class="flex-1 mx-4 hidden md:block">
                        <div class="relative max-w-md mx-auto">
                            <input id="search-input"
                                class="w-full pl-12 pr-4 py-2.5 rounded-full bg-gray-100 text-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:bg-white"
                                placeholder="Caută produse..." type="text" />
                            <span
                                class="material-icons absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                                style="font-size: 20px;">search</span>
                        </div>
                    </div>

                    <div class="flex items-center space-x-2 flex-shrink-0">
                        <a href="<?php echo home_url('/dashboard'); ?>"
                            class="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors">
                            <img alt="User Avatar"
                                class="w-8 h-8 rounded-full border-2 border-transparent group-hover:border-green-500"
                                src="https://i.pravatar.cc/32?u=a042581f4e29026704d"
                                onerror="this.onerror=null;this.src='https://placehold.co/32x32/E2E8F0/4A5568?text=U';" />
                            <span class="hidden lg:block text-sm font-medium">Contul meu</span>
                        </a>
                        <a href="<?php echo home_url('/wishlist'); ?>"
                            class="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors">
                            <span class="material-icons" style="font-size: 24px;">favorite_border</span>
                            <span class="hidden lg:block text-sm font-medium">Favorite</span>
                        </a>
                        <a href="<?php echo home_url('/cart'); ?>"
                            class="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors relative">
                            <span class="material-icons" style="font-size: 24px;">shopping_cart</span>
                            <span class="hidden lg:block text-sm font-medium">Coșul meu</span>
                            <span id="cart-count" class="cart-count hidden">0</span>
                        </a>
                        <button id="mobile-menu-btn" class="lg:hidden p-2 text-gray-600 hover:text-green-600">
                            <span class="material-icons">menu</span>
                        </button>
                    </div>
                </div>

                <div class="border-t border-gray-200 px-4 py-2">
                    <nav class="flex items-center space-x-4">
                        <div class="relative" id="products-menu-container">
                            <button id="products-toggle-btn"
                                class="flex items-center px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-100 rounded-full transition-all">
                                <span class="material-icons mr-2" style="font-size: 20px;">menu</span>
                                Produse
                                <span class="material-icons ml-1 text-xs">expand_more</span>
                            </button>
                            <div id="products-menu" class="products-dropdown">
                                <div class="p-2">
                                    <a href="<?php echo home_url('/products?category=laptops'); ?>"
                                        class="flex items-center w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                                        <span class="material-icons mr-3 text-gray-500">laptop</span>
                                        <div>
                                            <span class="font-medium">Laptop, Tablete & Telefoane</span>
                                            <p class="text-xs text-gray-500">Ultimele modele disponibile</p>
                                        </div>
                                    </a>
                                    <a href="<?php echo home_url('/products?category=pc'); ?>"
                                        class="flex items-center w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                                        <span class="material-icons mr-3 text-gray-500">desktop_windows</span>
                                        <div>
                                            <span class="font-medium">PC, Periferice & Software</span>
                                            <p class="text-xs text-gray-500">Echipamente performante</p>
                                        </div>
                                    </a>
                                    <a href="<?php echo home_url('/products?category=tv'); ?>"
                                        class="flex items-center w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                                        <span class="material-icons mr-3 text-gray-500">tv</span>
                                        <div>
                                            <span class="font-medium">TV, Audio-Video & Foto</span>
                                            <p class="text-xs text-gray-500">Divertisment de calitate</p>
                                        </div>
                                    </a>
                                    <a href="<?php echo home_url('/products?category=home'); ?>"
                                        class="flex items-center w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                                        <span class="material-icons mr-3 text-gray-500">kitchen</span>
                                        <div>
                                            <span class="font-medium">Electrocasnice & Climatizare</span>
                                            <p class="text-xs text-gray-500">Confort și eficiență</p>
                                        </div>
                                    </a>
                                    <a href="<?php echo home_url('/products?category=gaming'); ?>"
                                        class="flex items-center w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                                        <span class="material-icons mr-3 text-gray-500">sports_esports</span>
                                        <div>
                                            <span class="font-medium">Gaming, Cărți & Birotică</span>
                                            <p class="text-xs text-gray-500">Lumea jocurilor și educației</p>
                                        </div>
                                    </a>
                                    <a href="<?php echo home_url('/products?category=fashion'); ?>"
                                        class="flex items-center w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                                        <span class="material-icons mr-3 text-gray-500">checkroom</span>
                                        <div>
                                            <span class="font-medium">Fashion</span>
                                            <p class="text-xs text-gray-500">Stil și eleganță</p>
                                        </div>
                                    </a>
                                    <a href="<?php echo home_url('/products?category=beauty'); ?>"
                                        class="flex items-center w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                                        <span class="material-icons mr-3 text-gray-500">face</span>
                                        <div>
                                            <span class="font-medium">Îngrijire personală & Cosmetică</span>
                                            <p class="text-xs text-gray-500">Frumusețe și sănătate</p>
                                        </div>
                                    </a>
                                    <a href="<?php echo home_url('/products?category=sports'); ?>"
                                        class="flex items-center w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                                        <span class="material-icons mr-3 text-gray-500">sports_soccer</span>
                                        <div>
                                            <span class="font-medium">Sport & Travel</span>
                                            <p class="text-xs text-gray-500">Aventură și mișcare</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <a class="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-full transition-all"
                            href="<?php echo home_url('/products'); ?>">Oferte Speciale</a>
                        <a class="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-full transition-all"
                            href="<?php echo home_url('/about'); ?>">Despre Noi</a>
                        <a class="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-full transition-all"
                            href="<?php echo home_url('/contact'); ?>">Contact</a>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</header>

<div id="mobile-menu" class="mobile-menu lg:hidden">
    <div class="flex items-center justify-between p-4 border-b border-gray-200">
        <h2 class="text-lg font-semibold text-gray-800">Meniu</h2>
        <button id="close-mobile-menu" class="p-2 text-gray-600">
            <span class="material-icons">close</span>
        </button>
    </div>
    <nav class="p-4 space-y-4">
        <a href="<?php echo home_url(); ?>" class="flex items-center space-x-3 p-3 text-gray-700 hover:bg-gray-100 rounded-lg">
            <span class="material-icons">home</span>
            <span>Acasă</span>
        </a>
        <a href="<?php echo home_url('/products'); ?>" class="flex items-center space-x-3 p-3 text-gray-700 hover:bg-gray-100 rounded-lg">
            <span class="material-icons">shopping_bag</span>
            <span>Produse</span>
        </a>
        <a href="<?php echo home_url('/about'); ?>" class="flex items-center space-x-3 p-3 text-gray-700 hover:bg-gray-100 rounded-lg">
            <span class="material-icons">info</span>
            <span>Despre Noi</span>
        </a>
        <a href="<?php echo home_url('/contact'); ?>" class="flex items-center space-x-3 p-3 text-gray-700 hover:bg-gray-100 rounded-lg">
            <span class="material-icons">contact_mail</span>
            <span>Contact</span>
        </a>
        <div class="border-t border-gray-200 pt-4">
            <a href="<?php echo home_url('/dashboard'); ?>" class="flex items-center space-x-3 p-3 text-gray-700 hover:bg-gray-100 rounded-lg">
                <span class="material-icons">person</span>
                <span>Contul meu</span>
            </a>
            <a href="<?php echo home_url('/dashboard'); ?>" class="flex items-center space-x-3 p-3 text-gray-700 hover:bg-gray-100 rounded-lg">
                <span class="material-icons">favorite</span>
                <span>Favorite</span>
            </a>
            <a href="<?php echo home_url('/cart'); ?>" class="flex items-center space-x-3 p-3 text-gray-700 hover:bg-gray-100 rounded-lg">
                <span class="material-icons">shopping_cart</span>
                <span>Coșul meu</span>
            </a>
        </div>
    </nav>
</div>
