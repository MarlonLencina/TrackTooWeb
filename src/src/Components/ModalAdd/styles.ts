import styled from "styled-components";

interface ModalProps {
    isModalOpen: boolean;
}

export const Container = styled.div<ModalProps>`
  padding: 20px;
  background: rgba(29,53,87, 0.8);
  width:      100%;
  height:     100%; 
  z-index:    10;
  top:        0; 
  left:       0; 
  position:   fixed;
  display: ${props => props.isModalOpen ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
`
export const Box = styled.div`


position: relative;


`


export const Exit = styled.button`

background: antiquewhite;
position: absolute;
top: 20px;
right: 20px;
border: none;
outline: 0;
background: transparent;

> svg {
    font-size: 36px;
    color: ${props => props.theme.colors.gray};
}

`
