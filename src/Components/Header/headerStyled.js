import styled from 'styled-components'

export const ButtonHeaderName = styled.button`
  font-size: 15px;
  color: ${props => props.color || '#a3a3a3'};
  font-weight: 700;
  border: none;
  outline: none;
  background-color: ${props => props.activ || 'rgba(54, 54, 54, 0)'};
  cursor: pointer;
  font-family: 'Myriad Set Pro Ultralight Кириллический';
  height: 25px;
`
export const DivNameActive = styled.div`
  font-size: 15px;
  color: #222121;
  font-weight: 700;
  background-color: rgb(97, 97, 97);
  font-family: 'Myriad Set Pro Ultralight Кириллический';
  position: absolute;
  border: 1px solid rgb(97, 97, 97);
  width: 70px;
  padding: 5px;
  text-align: center;
  display: block;
`
