import styled from 'styled-components';
import 'react-rangeslider/lib/index.css'

export const Content = styled.div`
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin: 0 auto;
    min-height: 100vh;
    padding: 90px;

    @media (max-width: 1150px) {
        flex-direction: column;
        padding: 0 0 90px 0;
    }
`;

export const Half = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    width: 50%;
    z-index: 1;   

    @media (max-width: 1150px) {
        width: 100%;
    }
`;

export const Range = styled.section`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 30px;

    p {
        color: white;
        font-size: 20px;
        margin-right: 10px;
        user-select: none;
    }

    .rangeslider-horizontal {
        width: 300px;
        height: 1px;
        margin-top: 26px;
        margin-right: 10px;
    }

    .rangeslider-horizontal .rangeslider__fill {
        background-color: var(--tertiary);
        height: 5px;
        margin-top: -2px;
    }

    .rangeslider, .rangeslider .rangeslider__fill {
        box-shadow: none;
    }

    .rangeslider-horizontal .rangeslider__handle:after {
        display: none;
    }

    .rangeslider .rangeslider__handle {
        box-shadow: none;
        border: none;
    }

    .rangeslider__handle-label {
        color: white;
        position: absolute;
        top: -27px;
        left: -133px;
        width: 300px;
        font-size: 16px;
        text-align: center;
        user-select: none;
    }
`;

export const Input = styled.input`
    border: none;
    background-color: transparent;
    border-bottom: 1px solid var(--tertiary);
    width: 80%;
    padding: 10px 10px 10px 0;
    color: var(--tertiary);
    font-size: 20px;

    &::placeholder {
        color: var(--tertiary);
    }
`;

export const Actions = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    width: 100%;
    z-index: 1;
    margin-top: 90px;

    @media (max-width: 1150px) {
        width: 90%;
        margin: 90px auto 0;
    }

    button {
        margin-left: 20px;
        font-size: 20px;
    }
`;