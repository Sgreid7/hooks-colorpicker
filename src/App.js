import React, { Component, useState } from 'react'
import InputSection from './components/InputSection'
import styled from 'styled-components'

const App = () => {
  // MATH FUNCTIONS
  const onRandHue = () => Math.floor(Math.random() * 360)
  const onRandPercent = () => Math.floor(Math.random() * 100)
  const onRandAlpha = () => Math.random().toFixed(2)

  const [hue, setHue] = useState(onRandHue)
  const [saturation, setSaturation] = useState(onRandPercent)
  const [lightness, setLightness] = useState(onRandPercent)
  const [alpha, setAlpha] = useState(onRandAlpha)

  // HSLA CHANGE FUNCTIONS
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

  // GENERATE RANDOM COLOR
  const onRandomColor = () => {
    setHue(onRandHue())
    setSaturation(onRandPercent())
    setLightness(onRandPercent())
    setAlpha(onRandAlpha())
  }

  return (
    <>
      <Header className="color">
        <h2>A customizable HSL color selector</h2>
        <p>
          Select a color using the hue, saturation, lightness, and alpha sliders
        </p>
      </Header>
      <SlidersSection isOpen={false} className="sliders">
        <InputSection
          name="h"
          type="range"
          className="slider"
          min="0"
          max="360"
          value={hue}
          onChange={onHueChange}
        />
        <InputSection
          name="s"
          type="range"
          className="slider"
          min="0"
          max="100"
          value={saturation}
          onChange={onSaturationChange}
        />
        <InputSection
          name="l"
          type="range"
          className="slider"
          min="0"
          max="100"
          value={lightness}
          onChange={onLightnessChange}
        />
        <InputSection
          name="a"
          type="range"
          className="slider"
          min="0"
          max="1"
          step="0.01"
          value={alpha}
          onChange={onAlphaChange}
        />
        <RandomButton onClick={onRandomColor}>RANDOM</RandomButton>
      </SlidersSection>
      <P>COLOR</P>
      <ColorBox
        hue={hue}
        saturation={saturation}
        lightness={lightness}
        alpha={alpha}
      />
      <P>
        hsla(
        {hue}, {saturation}%, {lightness}%, {alpha})
      </P>
    </>
  )
}
export default App
const Header = styled.section`
  font-size: 1.5rem;
  text-align: center;
  font-style: italic;

  h2 {
    color: #fff;
    text-shadow: 0.1rem 0.1rem 0.1rem #03dffc;
    display: relative;
  }

  p {
    color: #fff;
    text-shadow: 0.07rem 0.07rem 0.07rem #03dffc;
  }
`
const SlidersSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
  /* background-color: ${({ isOpen }) => (isOpen ? 'blue' : 'red')}; */
`
const ColorBox = styled.section`
  height: 5rem;
  width: 16rem;
  border: 0.5rem solid #000;
  margin: 0 auto;
  background-color: ${({ hue, saturation, lightness, alpha }) =>
    `hsl(${hue}, ${saturation}%, ${lightness}%, ${alpha})`};
`
const P = styled.p`
  font-size: 1.5rem;
  text-align: center;
  margin: 1rem;
  color: #fff;
  text-shadow: 0.04rem 0.04rem 0.04rem #03dffc;
`

const RandomButton = styled.button`
  padding: 1rem;
  width: 20vw;
  margin: 1rem;
  border: 0.15rem solid #fff;
  letter-spacing: 0.2rem;
  color: #fff;
  background-color: rgba(0, 0, 0, 0);
  -moz-box-shadow: inset 0 0 0.8rem #03dffc;
  -webkit-box-shadow: inset 0 0 0.8rem #03dffc;
  box-shadow: inset 0 0 0.8rem #03dffc;
  transition: 0.3s ease;

  :hover {
    cursor: pointer;
    transform: translateY(-0.7rem);
    border-radius: 2rem;
    box-shadow: 0 0.2rem 0.2rem #03dffc;
    text-shadow: 0.1rem 0.1rem 0.1rem #03dffc;
  }
  :focus {
    outline: none;
  }
`
