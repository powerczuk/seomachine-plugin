---
title: Bezpieczeństwo
description: Model bezpieczeństwa, ochrona przed prompt injection i obsługa danych
---

## Model bezpieczeństwa

SEO Machine regularnie pobiera i analizuje treści z web. Ten dokument wyjaśnia jak plugin obsługuje bezpieczeństwo.

### Walidacja danych wejściowych

Wszystkie inputy komend są traktowane jako dane, nie instrukcje. URL-e, keywords i pliki treści są walidowane i sanityzowane przed przetwarzaniem.

### Ochrona przed prompt injection

Treści webowe pobierane podczas analizy są przetwarzane jako dane do scoringu i porównań. Nigdy nie są interpretowane jako komendy.

Plugin nigdy automatycznie nie:

- Publikuje treści na podstawie tego co znajdzie w web
- Modyfikuje plików na podstawie instrukcji z web
- Wysyła danych pod URL-e znalezione w treściach web
- Podąża za łańcuchami przekierowań bez wiedzy użytkownika

### Obsługa danych

**Co SEO Machine czyta:** URL-e które podasz, pliki treści na które wskażesz, wyniki SERP, strony konkurencji.

**Czego NIE robi:** Nie przechowuje kluczy API, nie cachuje danych konkurencji poza sesją, nie wysyła Twoich treści do stron trzecich, nie uzyskuje dostępu do plików których nie udostępniłeś.

### Bezpieczeństwo MCP

Uwierzytelnianie MCP jest obsługiwane przez warstwę protokołu. Klucze API są przechowywane w bezpiecznej konfiguracji Twojej platformy, nie w plikach pluginu. Plugin nigdy nie ma bezpośredniego dostępu do poświadczeń.

### Bezpieczeństwo generowanej treści

Generowane treści są oryginalne (nie kopiowane), zawierają atrybucję źródeł dla twierdzeń, nie zawierają ukrytych elementów i produkują czysty output schema.

## Zgłaszanie podatności

Zgłaszaj problemy bezpieczeństwa przez repozytorium GitHub. Nie ujawniaj publicznie przed dostępnością poprawki. Potwierdzamy zgłoszenia w ciągu 48 godzin, a łatki wdrażamy w ciągu 7 dni.
