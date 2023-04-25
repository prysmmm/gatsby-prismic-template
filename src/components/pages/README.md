## Checklist

### Pages

- [] index.ts dans le dossier de la page doit exporter la page avec son nom `export { default as Home } from './home'`
- [] Ne pas exporter les interfaces
- [] Utiliser `PageProps` pour les Props
- [] La nom  de la query GraphQL doit avoir le format suivant :
    - nom de la const `const homePageQuery`
    - nom de la query `query HomePageQuery`
- Les fragments des sections doivent être appelé sur la Query de la page
- Les variables de data passer aux sections doivent avoir le type Data de la section en question et avoir le nom sans maj.
  - `const homeHeroData: HomeHeroData = {}`

```
interface HomePageData {}

interface Props extends PageProps<HomePageData> {}
```

### Sections

- [] forwardRef sur la section
- [] Appliquer les props sur le composant Root
- [] Exporter les interfaces Data mais pas interface Props
- [] Nommer les props `Props`
- [] Utiliser `SectionProps` pour les Props + extends des Props de la section Root
- [] La nom  de la query GraphQL doit avoir le format suivant :
  - nom de la const `const homeHeroSectionFragment`
  - nom de la query `fragment HomeHeroSectionFragment`
- [] Les fragments des sections doivent partir de Query
  - `fragment HomeHeroSectionFragment on Query {}`
- Les espaces entre les sections doivent être géré depuis la page

```
export interface HomeHeroData {}

interface Props extends SectionProps<HomeHeroData>, BoxProps {}
```

### GraphQL

- [] Les clés richText doivent utiliser le fragment `...RichTextFragment`