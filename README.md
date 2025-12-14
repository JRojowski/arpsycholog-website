# Gabinet Psychologiczny - Agnieszka Rojowska

Nowoczesna, minimalistyczna strona internetowa gabinetu psychologicznego Agnieszki Rojowskiej.

## Struktura projektu

```
mama/
├── index.html          # Strona główna
├── o-mnie.html         # Strona "O mnie"
├── zakres-pomocy.html  # Strona "Zakres pomocy"
├── cennik.html         # Strona "Cennik"
├── kontakt.html        # Strona "Kontakt"
├── styles.css          # Główny arkusz stylów
├── script.js           # Skrypty JavaScript
└── README.md           # Ten plik
```

## Wdrażanie na GitHub Pages

### Opcja 1: Automatyczne wdrażanie z głównej gałęzi

1. **Utwórz repozytorium na GitHub:**
   - Przejdź na [github.com](https://github.com)
   - Kliknij "New repository"
   - Nazwij repozytorium (np. `arpsycholog-website`)
   - Wybierz "Public" (GitHub Pages wymaga publicznego repozytorium dla darmowego planu)
   - Kliknij "Create repository"

2. **Prześlij pliki do repozytorium:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - new website"
   git branch -M main
   git remote add origin https://github.com/TWOJA-NAZWA-UZYTKOWNIKA/TWOJA-NAZWA-REPOZYTORIUM.git
   git push -u origin main
   ```

3. **Włącz GitHub Pages:**
   - Przejdź do ustawień repozytorium (Settings)
   - Przewiń do sekcji "Pages"
   - W sekcji "Source" wybierz "Deploy from a branch"
   - Wybierz branch "main" i folder "/ (root)"
   - Kliknij "Save"
   - Twoja strona będzie dostępna pod adresem: `https://TWOJA-NAZWA-UZYTKOWNIKA.github.io/TWOJA-NAZWA-REPOZYTORIUM/`

### Opcja 2: Wdrażanie z gałęzi `gh-pages`

Jeśli chcesz mieć kod źródłowy w gałęzi `main`, a stronę w `gh-pages`:

```bash
git checkout -b gh-pages
git push origin gh-pages
```

Następnie w ustawieniach GitHub Pages wybierz branch `gh-pages`.

## Edycja treści (dla użytkowników nietechnicznych)

### Podstawowa edycja tekstu

Wszystkie pliki HTML można edytować bezpośrednio w przeglądarce na GitHub:

1. Przejdź do pliku, który chcesz edytować (np. `o-mnie.html`)
2. Kliknij ikonę ołówka (Edit)
3. Znajdź tekst, który chcesz zmienić
4. Wprowadź zmiany
5. Przewiń w dół i kliknij "Commit changes"

**UWAGA:** Zmiany będą widoczne na stronie po kilku minutach (GitHub Pages potrzebuje czasu na aktualizację).

### Edycja konkretnych sekcji

#### Zmiana tekstu na stronie głównej (`index.html`)

- **Tytuł hero:** Znajdź `<h2 class="hero-title">` i zmień tekst między tagami
- **Podtytuł:** Znajdź `<p class="hero-subtitle">` i zmień tekst
- **Tekst wprowadzający:** Znajdź sekcję `<section class="intro">` i edytuj paragrafy `<p>`

#### Zmiana informacji kontaktowych (`kontakt.html`)

- **Adres:** Znajdź `<strong>Adres:</strong>` i zmień tekst w następującym `<span>`
- **Telefon:** Znajdź `<strong>Telefon:</strong>` i zmień numer w `<a href="tel:...">`
- **Email:** Znajdź `<strong>Email:</strong>` i zmień adres w `<a href="mailto:...">`

#### Zmiana cennika (`cennik.html`)

- **Cena konsultacji:** Znajdź pierwszy `<div class="pricing-item">` i zmień tekst w `<p>`
- **Cena psychoterapii:** Znajdź drugi `<div class="pricing-item">` i zmień tekst w `<p>`
- **Zasady odwoływania:** Znajdź sekcję z `<h2>Zasady odwoływania</h2>` i edytuj paragraf poniżej

#### Zmiana zakresu pomocy (`zakres-pomocy.html`)

- **Lista usług:** Znajdź sekcję `<ul>` i edytuj poszczególne `<li>` (każdy punkt listy)
- **Tekst wprowadzający:** Edytuj paragrafy `<p>` na początku strony

#### Zmiana informacji "O mnie" (`o-mnie.html`)

- Wszystkie paragrafy `<p>` zawierają informacje o psychologu - możesz je edytować bezpośrednio

### Zmiana kolorów i stylów

Plik `styles.css` zawiera wszystkie style. Główne kolory są zdefiniowane na początku pliku w sekcji `:root`:

```css
:root {
    --color-primary: #6B8E9F;        /* Główny kolor (niebiesko-szary) */
    --color-secondary: #D4C5B9;      /* Kolor pomocniczy (beżowy) */
    --color-text: #2C3E50;           /* Kolor tekstu głównego */
    --color-text-light: #5A6C7D;     /* Kolor tekstu jaśniejszego */
    --color-bg: #FAF9F7;             /* Kolor tła */
}
```

Aby zmienić kolory, edytuj wartości hex (np. `#6B8E9F` na `#8B9DC3`).

### Dodawanie nowych stron

1. Skopiuj istniejący plik HTML (np. `o-mnie.html`)
2. Zmień nazwę pliku na nową (np. `faq.html`)
3. Edytuj zawartość w sekcji `<main>`
4. Dodaj link do menu w pliku `index.html` i wszystkich innych plikach HTML:
   ```html
   <li><a href="faq.html">FAQ</a></li>
   ```

## Funkcje techniczne

- **Responsywność:** Strona automatycznie dostosowuje się do urządzeń mobilnych
- **Menu mobilne:** Na małych ekranach menu przekształca się w hamburger menu
- **SEO:** Wszystkie strony mają odpowiednie meta tagi dla wyszukiwarek
- **Dostępność:** Strona spełnia podstawowe wymagania dostępności (a11y)
- **Szybkość:** Brak zewnętrznych zależności, szybkie ładowanie

## Aktualizacja strony po zmianach

### Automatyczna aktualizacja

GitHub Pages automatycznie odświeża stronę po każdym pushu do repozytorium. Proces wygląda następująco:

1. **Wprowadź zmiany lokalnie** i zapisz pliki
2. **Wykonaj commit i push:**
   ```bash
   git add .
   git commit -m "Opis zmian"
   git push
   ```
3. **Poczekaj 1-5 minut** - GitHub Pages potrzebuje czasu na przetworzenie zmian
4. **Odśwież stronę w przeglądarce** (możesz użyć Ctrl+F5 lub Cmd+Shift+R aby wymusić odświeżenie cache)

### Sprawdzanie statusu wdrożenia

1. Przejdź do swojego repozytorium na GitHub
2. Kliknij zakładkę **"Actions"** (jeśli widzisz)
3. Sprawdź czy wdrożenie zakończyło się sukcesem (zielony znaczek ✓)

### Rozwiązywanie problemów

**Strona nie odświeża się po kilku minutach:**
- Sprawdź czy wszystkie zmiany zostały wypushowane: `git status`
- Upewnij się, że GitHub Pages jest włączone w Settings → Pages
- Wyczyść cache przeglądarki (Ctrl+Shift+Delete lub Cmd+Shift+Delete)
- Spróbuj otworzyć stronę w trybie incognito/prywatnym

**Zmiany nie są widoczne:**
- Sprawdź czy pliki są w odpowiednich folderach (np. `img/` dla obrazów)
- Upewnij się, że ścieżki do plików są poprawne (względne, np. `img/logo.png`)
- Sprawdź konsolę przeglądarki (F12) czy nie ma błędów 404

## Wsparcie

W razie problemów z edycją lub wdrażaniem:
1. Sprawdź, czy wszystkie pliki są w repozytorium
2. Upewnij się, że GitHub Pages jest włączone w ustawieniach
3. Poczekaj kilka minut po wprowadzeniu zmian (GitHub Pages potrzebuje czasu na aktualizację)
4. Sprawdź logi w zakładce "Actions" w repozytorium

## Pozycjonowanie w wyszukiwarkach (SEO)

Tak, możliwe jest pozycjonowanie statycznej strony na GitHub Pages w Google i innych wyszukiwarkach. Oto praktyczne sposoby:

### 1. Meta tagi SEO (już zaimplementowane)

Strona już ma podstawowe meta tagi w każdym pliku HTML:
- `<meta name="description">` - opis strony
- `<meta name="keywords">` - słowa kluczowe
- `<title>` - tytuł strony

**Możesz je edytować** w każdym pliku HTML, aby były bardziej specyficzne i zawierały lokalne słowa kluczowe (np. "psycholog Lublin", "psychoterapia Lublin").

### 2. Dodaj structured data (Schema.org)

Stwórz plik `schema.json` w głównym katalogu:

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Gabinet Psychologiczny Agnieszka Rojowska",
  "description": "Konsultacje psychologiczne i psychoterapia indywidualna dla młodzieży i osób dorosłych w Lublinie",
  "url": "https://TWOJA-DOMENA.github.io/repo",
  "telephone": "+48603758800",
  "email": "arpsycholog@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "ul. Kaprysowa 1",
    "addressLocality": "Lublin",
    "addressCountry": "PL"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "51.2636499",
    "longitude": "22.5466094"
  },
  "priceRange": "100 zł",
  "areaServed": {
    "@type": "City",
    "name": "Lublin"
  }
}
```

Następnie dodaj do każdego pliku HTML w sekcji `<head>`:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Gabinet Psychologiczny Agnieszka Rojowska",
  ...
}
</script>
```

### 3. Utwórz sitemap.xml

Stwórz plik `sitemap.xml` w głównym katalogu:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://TWOJA-DOMENA.github.io/repo/</loc>
    <lastmod>2024-12-14</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://TWOJA-DOMENA.github.io/repo/o-mnie.html</loc>
    <lastmod>2024-12-14</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://TWOJA-DOMENA.github.io/repo/zakres-pomocy.html</loc>
    <lastmod>2024-12-14</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://TWOJA-DOMENA.github.io/repo/cennik.html</loc>
    <lastmod>2024-12-14</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://TWOJA-DOMENA.github.io/repo/kontakt.html</loc>
    <lastmod>2024-12-14</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>
```

**Ważne:** Zamień `TWOJA-DOMENA.github.io/repo` na rzeczywisty adres Twojej strony.

### 4. Utwórz robots.txt

Stwórz plik `robots.txt` w głównym katalogu:

```
User-agent: *
Allow: /

Sitemap: https://TWOJA-DOMENA.github.io/repo/sitemap.xml
```

### 5. Dodaj Open Graph tags (dla social media)

Dodaj do każdego pliku HTML w sekcji `<head>` (po istniejących meta tagach):

```html
<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://TWOJA-DOMENA.github.io/repo/">
<meta property="og:title" content="Gabinet Psychologiczny - Agnieszka Rojowska">
<meta property="og:description" content="Konsultacje psychologiczne i psychoterapia indywidualna dla młodzieży i osób dorosłych w Lublinie">
<meta property="og:image" content="https://TWOJA-DOMENA.github.io/repo/img/logo-small.png">

<!-- Twitter -->
<meta property="twitter:card" content="summary_large_image">
<meta property="twitter:url" content="https://TWOJA-DOMENA.github.io/repo/">
<meta property="twitter:title" content="Gabinet Psychologiczny - Agnieszka Rojowska">
<meta property="twitter:description" content="Konsultacje psychologiczne i psychoterapia indywidualna dla młodzieży i osób dorosłych w Lublinie">
<meta property="twitter:image" content="https://TWOJA-DOMENA.github.io/repo/img/logo-small.png">
```

### 6. Zarejestruj stronę w Google Search Console

1. Przejdź na [Google Search Console](https://search.google.com/search-console)
2. Dodaj swoją właściwość (adres strony)
3. Zweryfikuj własność (możesz użyć pliku HTML lub meta tagu)
4. Prześlij sitemap.xml

### 7. Optymalizacja treści

- **Używaj lokalnych słów kluczowych:** "psycholog Lublin", "psychoterapia Lublin", "gabinet psychologiczny Lublin"
- **Dodaj więcej treści:** Rozszerz opisy na stronach, dodaj więcej szczegółów o usługach
- **Regularnie aktualizuj treść:** Google preferuje strony z regularnie aktualizowaną treścią

### 8. Linki wewnętrzne

Upewnij się, że wszystkie strony są połączone linkami (już zaimplementowane w menu).

### 9. Optymalizacja obrazów

- Używaj opisowych nazw plików: `agnieszka-rojowska-psycholog.jpg` zamiast `ar_foto.jpg`
- Dodaj alt teksty do wszystkich obrazów (już zaimplementowane)

### 10. Szybkość ładowania

Strona jest już zoptymalizowana (brak zewnętrznych bibliotek, małe obrazy), ale możesz:
- Użyć WebP format dla obrazów
- Dodać lazy loading dla obrazów (już częściowo zaimplementowane)

### Przydatne narzędzia

- [Google PageSpeed Insights](https://pagespeed.web.dev/) - sprawdź szybkość strony
- [Google Rich Results Test](https://search.google.com/test/rich-results) - sprawdź structured data
- [Google Mobile-Friendly Test](https://search.google.com/test/mobile-friendly) - sprawdź responsywność

### Ważne wskazówki

1. **Cierpliwość:** Pozycjonowanie zajmuje czas (zwykle 3-6 miesięcy)
2. **Lokalne SEO:** Skup się na lokalnych frazach ("psycholog Lublin")
3. **Jakość treści:** Pisz naturalnie, dla ludzi, nie tylko dla robotów
4. **Linki zewnętrzne:** Poproś inne strony (np. lokalne portale) o link do Twojej strony

## Licencja

© Agnieszka Rojowska. Wszelkie prawa zastrzeżone.
