import styled, { css } from "styled-components";

interface toastProps {
    toastType: 'success' | 'failed'
}

const typeToast = {

    success: css`
        background: #06d6a0;

        
        `,
    failed: css`
            background: #ffd166;

        `

}

export const ToastContainer = styled.div`

top: 20px;
right: 0;
left: 0;
position: fixed;
z-index: 10;

@media (min-width: 370px){
    top: 20px;
    right: 20px;
    left: unset;
}

`

export const Container = styled.div<toastProps>`

width: 100%;
padding: 12px;
display: flex;
justify-content: center;
align-items: center;
position: relative;
animation: toast-in-right .7s;

@media (min-width: 370px){
    width: 350px;
    padding: 12px 20px;
}

& + div {
    margin-top: 12px;
}

> button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    outline: 0;
    border: none;
    cursor: pointer;
    > svg {
    font-size:24px;
    background: ${props => props.theme.colors.gray};
    color: ${props => props.theme.colors.white};

}
}

> div {

> h3 {
    color: ${props => props.theme.colors.gray};
    font-size: 20px;
    font-weight: 600;
}

> span {
    color: ${props => props.theme.colors.gray};
    font-size: 16px;
    font-weight: 400;


}
}

${props => typeToast[props.toastType]}

@keyframes toast-in-right {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }  
}

`