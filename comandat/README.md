# Comandat.ro - WordPress Theme

Această temă WordPress este o conversie completă a site-ului webstore Comandat.ro.

## Structura Temei

```
wordpress_theme/
├── header.php          - Header-ul site-ului (meniu, logo, căutare)
├── footer.php          - Footer-ul site-ului
├── front-page.php      - Pagina principală (home)
├── page-shop.php       - Template pentru pagina de produse
├── single-product.php  - Template pentru pagina individuală a produsului
├── index.php           - Template implicit WordPress
├── functions.php       - Funcții și enqueue scripts/styles
├── style.css           - Stylesheet principal (obligatoriu pentru WordPress)
├── js/                 - Folder cu fișierele JavaScript
│   ├── data.js         - Date despre produse
│   ├── components.js   - Componente reutilizabile
│   ├── main.js         - Logica principală
│   ├── products.js     - Logica paginii de produse
│   └── product.js      - Logica paginii individuale de produs
```

## Instalare

### Pasul 1: Copierea Temei
1. Copiază întregul folder `wordpress_theme` în directorul `wp-content/themes/` al instalării tale WordPress
2. Redenumește folderul în `comandat` (opțional, dar recomandat)

### Pasul 2: Activarea Temei
1. Intră în panoul de administrare WordPress
2. Mergi la **Aspect → Teme**
3. Găsește tema "Comandat.ro" și apasă pe **Activează**

### Pasul 3: Configurare Pagini
Creează următoarele pagini în WordPress:

1. **Products** (Slug: `products`)
   - Template: Page Shop
   
2. **About** (Slug: `about`)
   - Template: Default
   
3. **Contact** (Slug: `contact`)
   - Template: Default
   
4. **Dashboard** (Slug: `dashboard`)
   - Template: Default
   
5. **Cart** (Slug: `cart`)
   - Template: Default

### Pasul 4: Setări Permalink
1. Mergi la **Setări → Permalinkuri**
2. Selectează **Nume articol** sau **Structură personalizată**: `/%postname%/`
3. Salvează modificările

## Caracteristici

### ✅ Implementate Complet
- Header responsive cu meniu dropdown pentru categorii (8 categorii)
- Footer complet
- Pagina principală cu:
  - 3 bannere rotative
  - Secțiune "Cele mai bune oferte"
  - Secțiune beneficii (Livrare, Garanție, Retur)
  - Categorii populare
- Meniu mobile complet
- Toate script-urile JavaScript necesare
- Stiluri Tailwind CSS

### 📋 Conformitate cu Site-ul HTML
Tema WordPress este **100% conformă** cu site-ul HTML original:
- ✅ Toate cele 8 categorii în dropdown
- ✅ Toate cele 3 bannere
- ✅ Secțiuni complete de beneficii
- ✅ Meniu mobile complet
- ✅ Toate fișierele JavaScript incluse

## Dependențe

Tema folosește următoarele biblioteci externe (încărcate prin CDN):
- **Tailwind CSS** - Framework CSS
- **Material Icons** - Iconițe Google
- **Inter Font** - Font Google
- **Anime.js** - Animații
- **Splitting.js** - Efecte text

## Note Importante

### JavaScript
Fișierele JavaScript sunt încărcate condiționat:
- `data.js`, `components.js`, `main.js` - pe toate paginile
- `products.js` - doar pe pagina de produse
- `product.js` - doar pe pagina individuală de produs

### Customizare
Pentru a modifica culorile sau stilurile:
1. Editează `style.css` pentru stiluri custom
2. Folosește Tailwind CSS classes în template-uri
3. Modifică `functions.php` pentru a adăuga funcționalități noi

### Compatibilitate
- WordPress 5.0+
- PHP 7.4+
- Responsive design (mobile, tablet, desktop)

## Suport

Pentru probleme sau întrebări, verifică:
1. Că toate fișierele JavaScript sunt în folderul `js/`
2. Că tema este activată corect
3. Că permalinkurile sunt setate corect
4. Consola browser-ului pentru erori JavaScript

## Licență

Această temă este creată pentru Comandat.ro.
