# Garceaux — site agence

Site vitrine de l’agence digitale **Garceaux**.  
Stack actuelle : **HTML5 + CSS3 + JavaScript** (sans framework).

## Identité (provisoire)

- **Marque** : Garceaux (wordmark typographique, pas de logo fichier)
- **Ton** : vouvoiement, clair, pro et humain
- **Positionnement** : sites qui attirent, convainquent et convertissent — pour indépendants, PME et startups
- **Email affiché** : contact@garceaux.fr (boîte à créer plus tard)
- **Formulaire** : Formspree → réception sur deveauxmerick@gmail.com (`js/contact-form.js`)
- **Domaine SEO** : `https://garceaux.fr` (provisoire — à aligner partout si l’URL finale change)

## Objectif

Présenter les services, rassurer, et convertir des visiteurs en prospects.

## Pages

| Fichier | Rôle |
|---------|------|
| `index.html` | Accueil |
| `services.html` | Services |
| `a-propos.html` | À propos |
| `contact.html` | Contact (Formspree) |
| `merci.html` | Confirmation d’envoi (`noindex`) |
| `realisations.html` | Portfolio (GMK, Alfred Society) |

## Lancer en local

```bash
python3 -m http.server 8000
```

Ouvrir [http://localhost:8000](http://localhost:8000).

## SEO en place

- Titles et meta descriptions uniques
- Balises Open Graph (partage social)
- URLs canoniques
- `sitemap.xml` + `robots.txt`
- Données structurées JSON-LD (page d’accueil)
- `merci.html` exclu de l’indexation

**À faire plus tard** : image Open Graph (`og:image`, ~1200×630), Search Console une fois le site en ligne.

## Structure

```
agence-digitale/
├── index.html
├── services.html
├── a-propos.html
├── contact.html
├── merci.html
├── realisations.html
├── css/style.css
├── js/main.js
├── js/contact-form.js
├── robots.txt
├── sitemap.xml
└── README.md
```

## Prochaines briques (ordre suggéré)

1. Hébergement + domaine (+ e-mail `contact@garceaux.fr`)
2. Image OG / captures réalisations
3. Affinage design / animations
4. Next.js seulement si un besoin concret l’exige
