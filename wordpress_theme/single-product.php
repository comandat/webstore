<?php get_header(); ?>

<?php while ( have_posts() ) : the_post(); ?>
<div class="container mx-auto px-3 py-6">
    <div class="bg-white p-4 md:p-6 rounded-lg shadow-lg mb-6 fade-in">
        <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div class="md:col-span-5">
                <div class="mb-4">
                    <?php if (has_post_thumbnail()) : ?>
                        <?php the_post_thumbnail('large', ['class' => 'w-full h-auto rounded-lg object-cover aspect-square', 'id' => 'product-image']); ?>
                    <?php else : ?>
                        <img id="product-image" alt="<?php the_title(); ?>"
                            class="w-full h-auto rounded-lg object-cover aspect-square" src="https://via.placeholder.com/600" />
                    <?php endif; ?>
                </div>
                <div id="image-thumbnails" class="grid grid-cols-4 gap-2">
                    <!-- Thumbnails would be dynamic -->
                </div>
            </div>

            <div class="md:col-span-7">
                <h1 id="product-title" class="text-2xl md:text-3xl font-semibold text-gray-800 mb-4"><?php the_title(); ?></h1>

                <div class="flex items-center mb-4">
                    <span id="product-condition" class="condition-badge mr-3 bg-green-100 text-green-800">Ca Nou</span>
                    <div class="flex items-center text-sm text-gray-600">
                        <span class="material-icons mr-1 text-yellow-500">star</span>
                        <span>4.5 (128 recenzii)</span>
                    </div>
                </div>

                <div class="mb-6">
                    <p id="product-original-price" class="text-lg text-gray-600 line-through">€<?php echo get_post_meta(get_the_ID(), 'original_price', true); ?></p>
                    <div class="flex items-baseline">
                        <p id="product-price" class="text-3xl font-bold text-green-600">€<?php echo get_post_meta(get_the_ID(), 'price', true); ?></p>
                        <span id="discount-badge"
                            class="ml-3 bg-red-100 text-red-800 text-sm font-semibold px-2 py-1 rounded">-10%</span>
                    </div>
                </div>

                <div class="mb-6">
                    <h2 class="text-base font-medium text-gray-800 mb-3">Alege Condiția:</h2>
                    <div id="condition-buttons" class="grid grid-cols-3 gap-2">
                        <!-- Condition buttons -->
                        <button
                            class="condition-btn border-2 border-gray-300 rounded-lg py-3 px-2 text-center hover:border-green-500 focus:outline-none transition-all text-sm"
                            data-condition="Ca Nou" data-price="0">
                            <span class="block font-medium text-gray-800">Ca Nou</span>
                            <span class="text-xs text-gray-500">+€0.00</span>
                        </button>
                        <!-- More buttons... -->
                    </div>
                    <div id="condition-description" class="mt-2 text-sm text-gray-600">
                        Mici semne de uzură, aproape invizibile, 100% funcțional.
                    </div>
                </div>

                <div class="flex gap-3 mb-6">
                    <button id="add-to-cart-btn"
                        class="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-150 ease-in-out transform hover:-translate-y-0.5">
                        <span class="material-icons mr-2 align-middle">shopping_cart</span>
                        Adaugă în Coș
                    </button>
                    <button id="add-to-wishlist-btn"
                        class="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                        <span class="material-icons text-gray-600">favorite_border</span>
                    </button>
                </div>

                <div class="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-6">
                    <div class="flex items-center">
                        <span class="material-icons mr-2 text-green-600">local_shipping</span>
                        <div>
                            <p class="font-medium">Livrare Rapidă</p>
                            <p>1-2 zile lucrătoare</p>
                        </div>
                    </div>
                    <!-- More features... -->
                </div>
            </div>
        </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div class="lg:col-span-2">
            <div class="bg-white p-6 rounded-lg shadow-lg mb-6">
                <h2 class="text-xl font-semibold text-gray-800 mb-4">Descriere Produs</h2>
                <div id="product-description" class="text-gray-600 leading-relaxed">
                    <?php the_content(); ?>
                </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-lg">
                <h2 class="text-xl font-semibold text-gray-800 mb-4">Specificații Tehnice</h2>
                <div id="product-specs" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <!-- Specs would be dynamic -->
                </div>
            </div>
        </div>

        <div>
            <div class="bg-white p-6 rounded-lg shadow-lg mb-6">
                <h3 class="text-lg font-semibold text-gray-800 mb-4">Recenzii Clienti</h3>
                <div class="space-y-4">
                    <!-- Reviews would be dynamic -->
                </div>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-lg">
                <h3 class="text-lg font-semibold text-gray-800 mb-4">Produse Similare</h3>
                <div id="similar-products" class="space-y-3">
                    <!-- Similar products would be dynamic -->
                </div>
            </div>
        </div>
    </div>
</div>
<?php endwhile; ?>

<?php get_footer(); ?>
