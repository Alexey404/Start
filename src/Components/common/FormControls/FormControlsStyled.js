import styled from 'styled-components'

export const InputStiled = styled.input`
  border: 1px solid ${props => props.color || 'rgb(107, 107, 107)'};

  color: #a3a3a3;
  font-family: 'Myriad Set Pro Ultralight Кириллический';
  outline: none;
  background-color: Transparent;
  border-radius: 4px;
  padding: 5px;
  margin: 10px 0px;
  font-size: ${props => props.fontSize || '15px'};
`
