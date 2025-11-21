<?php get_header(); ?>

<main class="container mx-auto px-3 py-8 mt-24">
    <section class="mb-12">
        <div class="banner-container">
            <!-- Static banners for now, could be dynamic -->
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
            <!-- More banners... -->
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
                <!-- PHP Loop for products would go here -->
                <?php
                if ( have_posts() ) :
                    while ( have_posts() ) : the_post();
                        // Display product card
                        the_title('<h3>', '</h3>');
                    endwhile;
                else :
                    echo '<p>No products found</p>';
                endif;
                ?>
            </div>
        </div>
    </section>

    <!-- Other sections... -->
</main>

<?php get_footer(); ?>
