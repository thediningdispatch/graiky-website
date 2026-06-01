# GRAIKY — Site démo

Site démo one-pager pour le client Graiky (sandwicherie africaine, Paris 12e).
Code HTML/CSS/JS vanilla original, écrit from scratch par BB.

## Lancer le site

Double-clic sur `index.html` — ça s'ouvre dans le navigateur. Pas de build.

## État actuel : infos client injectées

- Adresse : 12 rue de Madagascar, 75012 Paris
- Téléphone : +33 9 83 77 17 39
- Instagram : @graikyparis
- TikTok : @graiky
- Concept reformulé : sandwicherie kebab + touche Afrique de l'Ouest (allocos, attiéké, bissap, dégué, pastels)
- Menu structuré : Sandwichs / Bowls / Dips / Extras & Pastels / Boissons & Dégué
- Produits identifiés depuis la galerie eatbu : SANDWICH BKO, BOWL BKO, GRAIKY FUN, BISSAP, DÉGUÉ, GINGEMBRE

## Ce qui reste à faire avec le client

- Récupérer le PDF du menu complet pour valider les noms et descriptions exactes des sandwichs/bowls
- Confirmer les horaires d'ouverture (placeholder dans la card restaurant)
- Récupérer les vraies photos plats (placeholders Unsplash pour la démo)
- Fournir le logo Graiky (actuellement un "G" carré orange dans la nav et un wordmark dans le footer)
- Photos pour le hero, la galerie Instagram et la section concept

## Stack

- HTML5 sémantique
- CSS variables (palette éditable depuis `:root` dans `styles.css`)
- JS vanilla, zéro framework
- Google Fonts : Anton (display) + Inter (body)
- Images : Unsplash en placeholder

## Palette (modifiable dans `styles.css` → `:root`)

```
--c-bg: #0a0a0a        (noir profond)
--c-cream: #f5f0e6     (crème)
--c-accent: #d94c1a    (orange brûlé — couleur principale)
--c-accent-2: #f3a712  (jaune ocre — secondaire)
```

## Structure des sections

1. Nav sticky (transparente → solide au scroll)
2. Hero plein écran avec photo + titre XXL
3. Concept (texte reformulé du clin d'œil "grec")
4. Marquee animé (KEBAB répété)
5. Signature maison : SANDWICH BKO
6. Menu à tabs (5 catégories)
7. Fondamentaux (allocos, attiéké, bissap, dégué)
8. Presse / vu chez (placeholders à compléter)
9. Instagram feed (grille 8 photos)
10. Restaurant + bouton appel
11. Footer (contact + réseaux + newsletter)

## Notes design

- Mobile-responsive : menu burger sous 820px, grilles qui repassent en 1-2 colonnes
- Animations : scroll reveal, hover cards, marquee infini
- Pas de dépendances externes hors Google Fonts — déployable n'importe où

## Pour publier (si jamais)

Push le dossier sur Netlify, Vercel ou GitHub Pages — site statique, ça marche partout.
