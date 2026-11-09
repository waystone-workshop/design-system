# Waystone Workshop design system

Shared foundations for our products: warm forest surfaces, pale lime accents,
quiet typography, consistent spacing and controls. Products can have their own
layouts; they should use the same semantic roles and assets.

## Use

Install a pinned release:

```sh
npm install https://github.com/waystone-workshop/design-system/archive/refs/tags/v0.1.0.tar.gz
```

In a Node build script, call `require('@waystone-workshop/design-system').copyAssets`
with an absolute output path. Link `styles/tokens.css` before
`styles/components.css` from the copied directory. Everything is bundled at build
time: no runtime CDN or cross-repository filesystem dependency is required.

Use `--ww-*` semantic tokens in product CSS. Shared HTML primitives are prefixed
`ww-`: button, button-primary, input, panel, label, brand, and icon. The primitive
CSS does not reset a product's body or override its framework.

## Assets and conventions

- `assets/mark.svg`: existing sparkle mark, in the shared lime accent.
- `assets/icons/*.svg`: curated Heroicons outline icons. Use the same 24px grid,
  1.5px stroke and outline style across products; don't mix icon families.
- `assets/icons.svg`: the same icons as an SVG symbol sprite for websites.
- System fonts are intentional; new products need no external font request.
- Keep focus visible, provide text labels, respect reduced motion, and never use
  color as the only indication of state. Product contrast should be checked on
  the final surface; the muted token is for supporting text, not disabled labels.

Open the gallery with `npm start` (http://localhost:4174). It documents actual
tokens and components rather than a separate visual mockup.

## Releases

Run `npm test`, bump the package version, commit and tag `vX.Y.Z`, then push the
tag. Consumers upgrade explicitly and commit their lockfiles. Never move a tag.
Use a major version for renamed/removed tokens or incompatible asset paths.
Add product-specific UI to product repositories, not this package.
