# 🎞 react-scroll-animator ✨


## **!!This project is practice yet!!**


## Installing

Using npm:

## Preview

![Preview Scroll Animation](_readme/scroll-animation.gif)

## Simple Docs

### Markup Example

```jsx
<ScrollContainer>
  <ScrollPage page={0}>
    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
      <MediumText>Let't me show you scroll animation 😀</MediumText>
    </Animator>
  </ScrollPage>
<ScrollContainer>
```

- `ScrollContainer` must be root

- `ScrollContainer`'s children must be `ScrollPage`

- `ScrollPage` is `position: relative;` thus, if you want use flexbox, make `div` in `ScrollPage`

- `ScrollPage` has `page` props for integer

  *(Honestly, I don't like this way, is there awesome solution?)*

- `Animator` must be in `ScrollPage`

- `Animator` has `animation` props



### Animation Object Example

```javascript
const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());
```

- You can use just single animation likes `Fade()`, `Move()`, ...
- If you want to combinate serveral animations, use `batch(...animations`)
- There's Fade, Move, Sticky, Zoom



### Animation Types and Usages

- `Fade( from:number, to:number )`
  - `from` : initial opacity number (0~1), default `0`
  - `to` : final opacity number (0~1), default `1`
- `FadeIn( ... )`, `FadeOut( ... )`
  - `FadeIn` is for only in-animation
  - `FadeOut` is for only out-animation
  - Also, `MoveIn`, `MoveOut`, `StickyIn`, `StickyOut`, `ZoomIn`, `ZoomOut` is there, and I'll skip writing descriptions about these In/Out

- `Move( dx:number, dy:number, outDx:number, outDy:number )`
  - `dx` : initial x value (unit: px), default `0`
  - `dy` : initial y value (unit: px), default `100`
  - `outDx` : final x value, default `null`
  - `outDy` : final y value, default `-100`
    - If outDx is null, then use dx value rather than outDx, outDy too.
- `Sticky( left:number, top:number )`
  - `left` : value of style.left (unit: %), default `50`(%)
  - `top` : value of style.top (unit: %), default `50(%)`
- `Zoom( from:number, to:number )`
  - `from` : initial scale value, default `10`
  - `to` : final scale value, default `1`
- `batch( ...animations )`



### Animation Object looks like this

```javascript
{
  in: {
    style: { ... }
  },
  out: {
    style: { ... }
  }
}
```

- Each `style` object will be used as react props `style`

- But, there's one thing different

  ```javascript
  {
    in: {
      style: {
        opacity: (value) => value
      }
    },
    out: {
      style: {
        opacity: (value) => (1 - value)
      }
    }
  }
  ```

  Like this, style's value can be `function` type with 1 parameter (name is value)

  `value` is number between 0~1, that means percentage of scroll completion

  Upper animation object's opacity value will acts like 0 -> 1 -> 0, during scroll-up