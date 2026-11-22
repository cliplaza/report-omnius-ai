# Report Omnius AI — sito ufficiale

Sito statico (HTML + CSS + una manciata di righe di JS). Prima il telefono, poi il computer.
Nessun framework, nessun database: le pagine si modificano a mano in pochi minuti.

## Struttura

```
index.html            Home (pagina lunga, blocchi 5.1–5.10 del brief)
privacy.html          Privacy policy + Cookie policy (GDPR)
assets/css/style.css  Tutti gli stili (mobile-first)
assets/js/main.js     Menu mobile, anno footer, banner cookie, controllo modulo
assets/img/           Logo SVG (versione chiara e scura) + favicon
README-ISTRUZIONI.md  Questo file
```

## Logo

- `LOGO-REPORT-OMNIUS-AI.svg` — versione su fondo bianco/chiaro.
- `LOGO-REPORT-OMNIUS-AI-dark.svg` — versione su fondo scuro: la scritta REPORT diventa bianca, barre e OMNIUS AI restano uguali.
- `favicon.svg` — solo le tre barre e la scintilla.

I testi del logo usano «Barlow Condensed» corsivo pesante, lo stesso dei titoli del sito. Per un PNG o per la stampa, esportare dall'SVG.

## Colori (definiti in `style.css`, blocco `:root`)

| Variabile | Colore |
|---|---|
| `--verde` | #009246 |
| `--rosso` | #CE2B37 |
| `--nero`  | #1C1C1C |
| `--grigio`| #F4F4F4 |

## Cosa cambiare prima di pubblicare

Apri i file e cerca le parole in MAIUSCOLO:

1. **DOMINIO-DA-DEFINIRE.it** — e-mail dei contatti (index.html, blocco Contatti).
2. **+39 000 000 0000 / wa.me/390000000000** — telefono e WhatsApp dei contatti.
3. **P.IVA 00000000000 [da confermare]** — footer di index.html.
4. **[DATI DEFINITIVI DEL TITOLARE...]** — privacy.html, chi tratta i dati.
5. **[FOTO VERA DELL'OFFICINA]** — blocco «Fatto in Italia» di index.html: sostituire il `<figure>` con `<img src="assets/img/officina.webp" alt="…">` (formato WebP, massimo ~1500 px).
6. **[LINK ALL'APP]** — il link «Accedi all'app» nel footer ora punta ai contatti.

## Modulo di contatto

Il controllo anti-spam (campo nascosto) e la validazione sono in `assets/js/main.js`. L'invio reale all'e-mail del destinatario si collega al momento del deploy (un endpoint a scelta o un servizio di form hosting): nessun dato viene inviato finché quel passo non è fatto.

## Regole già rispettate da testi e schermate

- Solo dati inventati: signora Rossi, Marco, Fiat Panda, targa AB123CD.
- Nessun nome di gestionale o software concorrente.
- Le funzioni in arrivo portano tutte il bollino rosso «IN ARRIVO».
- Fatture: Report le prepara, l'invio resta all'officina con il suo intermediario.
- Niente revisioni; il meccanico non vede prezzi d'acquisto e margini.

## Aggiornare testi e foto

- Testi: si modificano direttamente in `index.html`, un blocco per sezione.
- Foto: WebP, massimo ~1500 px, in `assets/img/`, al posto dei segnaposto.
- Prezzi: quando Roberto decide i pacchetti, si riempie il blocco `#prezzi` (oggi è la versione «preventivo su misura» prevista dal brief).
