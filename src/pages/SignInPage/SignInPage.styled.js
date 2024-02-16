import styled from 'styled-components'
import { hover01 } from '../../components/Common/Common.styled'

export const SignInContainer = styled.div`
    display: block;
    width: 100vw;
    min-height: 100vh;
    margin: 0 auto;
`

export const ModalBtnEnter = styled.button`
    width: 100%;
    height: 30px;
    background-color: #565eef;
    border-radius: 4px;
    margin-top: 20px;
    margin-bottom: 20px;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 21px;
    font-weight: 500;
    letter-spacing: -0.14px;
    color: #ffffff;
    ${hover01}
    @media screen and (max-width: 375px) {
        height: 40px;
    }
`

export const ModalBtnEnterLink = styled.a`
    width: 100%;
    height: 100%;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
`
