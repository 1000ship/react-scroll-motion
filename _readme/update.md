# Update Notes

> The notes is written since version 0.2.0

## version 0.2.0

- Fix rendering error with StickyAnimation on mobile iOS device
  - In Safari on iOS, `window.innerHeight` value is weired when scroll up and down
  - Use `window.screen.height` rather than `innerHeight` when if iOS Safari
  - Recognize environment data likes OS, browser from `navigator.userAgent`
- Correct some mistype
- Create update notes

## version 0.2.3

- Fix typescript error on `Batch`
- Fix mis-typo in README
- Fix CSS styles on `scroll-snap`


## version 0.2.4

- Fix lots of typescript error

## version 0.2.5

- Fix NextJS error
  - `ReferenceError: navigator is not defined`

## version 0.2.6

- Remove unnecessary files on npm.js publishing
