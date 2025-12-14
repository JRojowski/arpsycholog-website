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

## Licencja

© Agnieszka Rojowska. Wszelkie prawa zastrzeżone.
