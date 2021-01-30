# Update Notes

> The notes is written since version 0.2.0

## version 0.2.0

- Fix rendering error with StickyAnimation on mobile iOS device
  - In Safari on iOS, `window.innerHeight` value is weired when scroll up and down
  - Use `window.screen.height` rather than `innerHeight` when if iOS Safari
  - Recognize environment data likes OS, browser from `navigator.userAgent`
- Correct some mistype
- Create update notes

