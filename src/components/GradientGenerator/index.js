import {Component} from 'react'

import {
  GradientGeneratorBgContainer,
  GradientGeneratorHeader,
  GradientDirectionSelectionContainer,
  GradientGeneratorSubSectionText,
  GradientDirectionsList,
  GradientColorSelectionContainer,
  GradientColorPickersList,
  GradientColorPickerContainer,
  GradientColorPicker,
  GradientGeneratorButton,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

export default class GradientGenerator extends Component {
  state = {
    oldGradientColor1: '#8ae323',
    oldGradientColor2: '#014f7b',
    newGradientColor1: '#8ae323',
    newGradientColor2: '#014f7b',
    selectedGradientDirection: gradientDirectionsList[0].value,
  }

  onColorChange = colorChangeEvent => {
    const chosenColor = colorChangeEvent.target.value
    const colorPickerElementId = colorChangeEvent.target.id

    const updatedColorState = {}
    updatedColorState[colorPickerElementId] = chosenColor

    this.setState(updatedColorState)
  }

  onGenerateGradient = generateGradientClickEvent => {
    generateGradientClickEvent.preventDefault()

    this.setState(previousColorState => {
      const {newGradientColor1, newGradientColor2} = previousColorState

      return {
        oldGradientColor1: newGradientColor1,
        oldGradientColor2: newGradientColor2,
      }
    })
  }

  onGradientDirectionSelection = directionValue =>
    this.setState({
      selectedGradientDirection: directionValue,
    })

  render() {
    const {
      oldGradientColor1,
      oldGradientColor2,
      newGradientColor1,
      newGradientColor2,
      selectedGradientDirection,
    } = this.state

    return (
      <GradientGeneratorBgContainer
        data-testid="gradientGenerator"
        gradientDirection={selectedGradientDirection}
        gradientColor1={oldGradientColor1}
        gradientColor2={oldGradientColor2}
      >
        <GradientGeneratorHeader>
          Generate a CSS Color Gradient
        </GradientGeneratorHeader>

        <GradientDirectionSelectionContainer>
          <GradientGeneratorSubSectionText>
            Choose Direction
          </GradientGeneratorSubSectionText>
          <GradientDirectionsList>
            {gradientDirectionsList.map(gradientDirectionsListItem => (
              <GradientDirectionItem
                key={gradientDirectionsListItem.directionId}
                itemData={gradientDirectionsListItem}
                isItemSelected={
                  gradientDirectionsListItem.value === selectedGradientDirection
                }
                onDirectionItemSelection={this.onGradientDirectionSelection}
              />
            ))}
          </GradientDirectionsList>
        </GradientDirectionSelectionContainer>

        <GradientColorSelectionContainer onSubmit={this.onGenerateGradient}>
          <GradientGeneratorSubSectionText>
            Pick the Colors
          </GradientGeneratorSubSectionText>
          <GradientColorPickersList>
            <GradientColorPickerContainer>
              <GradientGeneratorSubSectionText>
                {newGradientColor1}
              </GradientGeneratorSubSectionText>
              <GradientColorPicker
                id="newGradientColor1"
                type="color"
                value={newGradientColor1}
                onChange={this.onColorChange}
                bgColor={newGradientColor1}
              />
            </GradientColorPickerContainer>

            <GradientColorPickerContainer>
              <GradientGeneratorSubSectionText>
                {newGradientColor2}
              </GradientGeneratorSubSectionText>
              <GradientColorPicker
                id="newGradientColor2"
                type="color"
                value={newGradientColor2}
                onChange={this.onColorChange}
                bgColor={newGradientColor2}
              />
            </GradientColorPickerContainer>
          </GradientColorPickersList>
          <GradientGeneratorButton type="submit">
            Generate
          </GradientGeneratorButton>
        </GradientColorSelectionContainer>
      </GradientGeneratorBgContainer>
    )
  }
}
