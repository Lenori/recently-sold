import styled from 'styled-components';

export const Content = styled.div`
    width: 100%;
    color: var(--tertiary);
    padding: 90px 0 0;

    @media (max-width: 900px) {
        padding: 20px 0;
    }

    div {        
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin: 20px 0 0;        

        p {
            font-size: 20px;
            margin-bottom: 10px;
            width: 50%;

            @media (max-width: 900px) {
                width: 100%;
            }
        }

        @media (max-width: 900px) {
            flex-direction: column;
        }
    }
`;
