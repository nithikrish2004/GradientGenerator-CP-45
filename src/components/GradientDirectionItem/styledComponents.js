import styled from 'styled-components'

export const GradientDirectionItemContainer = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  color: #1e293b;
  width: 42%;
  margin: 0.5rem;
  padding: 0;
  border-radius: 0.6rem;
  padding: 1rem 3.5rem;
  opacity: ${props => (props.isSelected ? 1 : 0.5)};
  @media (min-width: 768px) {
    width: 22%;
  }
`

export const GradientDirectionItemButton = styled.button`
  background: inherit;
  border: none;
  border-radius: 0.6rem;
  outline: none;
  cursor: pointer;
  margin: 0;
  padding: 0;
  font-size: 1rem;
  font-weight: 600;
  opacity: ${props => (props.isSelected ? 1 : 0.5)};
`
