import styled from 'styled-components';

export const Content = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
`;

export const Item = styled.div`
    width: 100%;
    background-color: var(--tertiary);
    padding: 10px 30px;
    border-radius: 8px;
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    margin-bottom: 30px;

    p {
        color: var(--secondary);
        font-size: 20px;

        span {
            color: var(--primary);
        }
    }
`;

