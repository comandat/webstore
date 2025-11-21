<?php
/* Template Name: Shop Page */
get_header();
?>

<div class="container mx-auto px-3 py-6">
    <div class="max-w-7xl mx-auto">
        <div class="mb-8">
            <nav class="flex" aria-label="Breadcrumb">
                <ol class="inline-flex items-center space-x-1 md:space-x-3">
                    <li class="inline-flex items-center">
                        <a href="<?php echo home_url(); ?>" class="text-gray-700 hover:text-green-600 inline-flex items-center">
                            <span class="material-icons mr-2" style="font-size: 20px;">home</span>
                            Acasă
                        </a>
                    </li>
                    <li>
                        <div class="flex items-center">
                            <span class="material-icons text-gray-400">chevron_right</span>
                            <span class="ml-1 text-gray-500 md:ml-2">Produse</span>
                        </div>
                    </li>
                </ol>
            </nav>
        </div>

        <div class="flex flex-col lg:flex-row gap-8">
            <aside class="lg:w-1/4">
                <div class="filter-sidebar">
                    <div class="flex items-center justify-between mb-6">
                        <h2 class="text-xl font-semibold text-gray-800">Filtre</h2>
                        <button id="clear-all-filters"
                            class="text-sm text-green-600 hover:text-green-700 font-medium">
                            Șterge tot
                        </button>
                    </div>

                    <div class="space-y-6">
                        <!-- Filters content from products.html -->
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Categorie</label>
                            <select id="category-filter"
                                class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                                <option value="">Toate Categoriile</option>
                                <option value="electronics">Electronice</option>
                                <option value="laptops">Laptopuri</option>
                                <option value="gaming">Gaming</option>
                                <option value="fashion">Modă</option>
                                <option value="home">Casă și Grădină</option>
                                <option value="beauty">Îngrijire Personală</option>
                                <option value="sports">Sport și Travel</option>
                            </select>
                        </div>
                        <!-- Other filters... -->
                        <div class="pt-4 border-t border-gray-200">
                            <button id="apply-filters"
                                class="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors">
                                Aplică Filtre
                            </button>
                        </div>
                    </div>
                </div>
            </aside>

            <main class="lg:w-3/4">
                <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                    <div>
                        <h1 id="page-title" class="text-2xl md:text-3xl font-bold text-gray-800">Toate Produsele</h1>
                        <p id="results-count" class="text-gray-600 mt-1">Se încarcă produsele...</p>
                    </div>

                    <div class="flex items-center gap-4">
                        <div class="flex items-center gap-2">
                            <span class="text-sm text-gray-600">Vizualizare:</span>
                            <button id="grid-view" class="view-toggle active">
                                <span class="material-icons text-sm">grid_view</span>
                            </button>
                            <button id="list-view" class="view-toggle">
                                <span class="material-icons text-sm">view_list</span>
                            </button>
                        </div>

                        <div class="flex items-center gap-2">
                            <span class="text-sm text-gray-600">Sortează:</span>
                            <select id="sort-select"
                                class="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm">
                                <option value="relevance">Relevanță</option>
                                <option value="price_asc">Preț: Crescător</option>
                                <option value="price_desc">Preț: Descrescător</option>
                                <option value="name">Nume: A-Z</option>
                                <option value="condition">Condiție</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div id="active-filters" class="mb-6">
                </div>

                <div id="products-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <!-- PHP Loop for products -->
                    <?php
                    $args = array( 'post_type' => 'product', 'posts_per_page' => 12 );
                    $loop = new WP_Query( $args );
                    while ( $loop->have_posts() ) : $loop->the_post();
                        ?>
                        <div class="product-card">
                            <a href="<?php the_permalink(); ?>">
                                <?php if (has_post_thumbnail()) : ?>
                                    <?php the_post_thumbnail('medium', ['class' => 'w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105']); ?>
                                <?php else : ?>
                                    <img src="https://via.placeholder.com/300" alt="<?php the_title(); ?>" class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105">
                                <?php endif; ?>
                            </a>
                            <div class="p-4">
                                <h3 class="text-lg font-semibold text-gray-800 mb-2"><?php the_title(); ?></h3>
                                <p class="text-green-600 font-bold"><?php echo get_post_meta(get_the_ID(), 'price', true); ?> Lei</p>
                            </div>
                        </div>
                        <?php
                    endwhile;
                    wp_reset_query();
                    ?>
                </div>

                <div id="products-list" class="space-y-4 hidden">
                </div>

                <div id="loading-spinner" class="flex justify-center items-center py-12 hidden">
                    <div class="loading-spinner"></div>
                </div>

                <div id="no-results" class="text-center py-12 hidden">
                    <div class="bg-gray-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span class="material-icons text-gray-400 text-4xl">search_off</span>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-800 mb-2">Nu am găsit produse</h3>
                    <p class="text-gray-600 mb-6">Încercați să modificați filtrele sau termenii de căutare.</p>
                    <button id="reset-filters"
                        class="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                        Resetează Filtrele
                    </button>
                </div>

                <div id="pagination" class="flex justify-center items-center mt-8 gap-2">
                    <?php
                    echo paginate_links( array(
                        'total' => $loop->max_num_pages
                    ) );
                    ?>
                </div>
            </main>
        </div>
    </div>
</div>

<?php get_footer(); ?>
