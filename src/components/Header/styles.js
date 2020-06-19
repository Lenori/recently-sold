import styled, {css} from 'styled-components';

export const Content = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 960px;
    right: 90px;
    top: 35px;
    z-index: 2;

    @media (max-width: 1300px) {
        display: none;
        position: fixed;
        flex-direction: column;
        align-items: flex-end;
        background-color: var(--primary);
        right: 0;
        top: 0;
        width: auto;
        height: 100%;
        justify-content: start;
        padding: 38px;

        ${props => props.show && css`        
            display: block !important;
        `}
    }
`;

export const Item = styled.p`
    color: var(--tertiary);
    font-size: 20px;

        img {
            margin: 0 10px 0 -10px;
        }

        ${props => props.button && css`        
            color: var(--primary);
            background-color: var(--tertiary);
            padding: 10px 30px;
            border-radius: 8px;
            box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
            display: flex;
            align-items: center;
        `}

        @media (max-width: 1300px) {
            margin-bottom: 25px;
        }
`;