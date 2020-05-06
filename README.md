# Hooks Colorpicker

An HSL(a) color picker with React, but this time using React Hooks

# Objectives

- Respond to user events in React
- Use hooks in react to drive changes to a user interface
- Use props to drive inline styles to dynamically update the appearance of DOM elements
- Understand RGB vs HSL color models
- Use controlled form inputs in React

# Includes

- [REACT](https://reactjs.org/docs/getting-started.html)
- [HOOKS](https://reactjs.org/docs/hooks-intro.html)
- [STYLED COMPONENTS](https://styled-components.com/)

# Featured Code

```JSX
const onHueChange = (event) => {
    const hue = event.target.value
    setHue(hue)
  }

  const onSaturationChange = (event) => {
    const saturation = event.target.value
    setSaturation(saturation)
  }

  const onLightnessChange = (event) => {
    const lightness = event.target.value
    setLightness(lightness)
  }

  const onAlphaChange = (event) => {
    const alpha = event.target.value
    setAlpha(alpha)
  }
```

# Live Site

- [LIVE SITE](https://hooks-colorpicker-sam.netlify.app/)
