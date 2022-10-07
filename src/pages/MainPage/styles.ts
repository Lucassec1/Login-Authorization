import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
`; 

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;    
    justify-content: center;

    margin-top: 200px;

    width: 296px;
    height: 384px;

    padding: 20px;
    gap: 12px;

    button {
        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 8px;
        border: none;

        cursor: pointer;

        width: 114px;
        height: 40px;

        p {
            font-weight: 600;
            font-size: 14px;
            color: var(--base-color);
        }
    }
`;

export const CardImg = styled.div`
    background-image: url(${props => props.photo});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    width: 200px;
    height: 200px;

    border-radius: 50%;
`; 

export const CardName = styled.h6`
    display: flex;
    align-items: center;
    justify-content: center;
    
    font-size: 16px;

    color: var(--white);

    width: 100%;
    height: 30px;
`; 

export const CardEmail = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 14px;

    color: var(--white);

    width: 100%;
    height: 30px;
`; 