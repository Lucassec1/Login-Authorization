import styled from 'styled-components';

export const Container = styled.div`
    position: relative;

    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
`;

export const Form = styled.div`
    margin-top: 200px;

    width: 360px;
    height: 444px;
    padding: 20px;

    z-index: 5;

    div {
        width: 320px;
        height: 63px;

        margin-bottom: 16px;

        p {
            font-weight: 600;
            font-size: 16px; 
            
            color: var(--white);
        }
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 8px;
        border: none;

        cursor: pointer;

        width: 320px;
        height: 40px;

        p {
            font-weight: 600;
            font-size: 14px;
            color: var(--base-color);
        }
    }
`;

export const Divider = styled.hr`
    border: 0;

    width: 320px;
    
	border-top: 1px solid var(--grey1);
`;

export const Input = styled.input`
    width: 320px;
    height: 40px;

    padding: 12px;
    margin-top: 5px;

    border-radius: 8px;
    border: 2px solid var(--grey2);

    &:hover {
        border: 2px solid var(--green1);
    }
    
    &:focus {
        border: 2px solid var(--secondary);
    }
    
    font-weight: 500;
    font-size: 16px;
    
    color: var(--base-color);
    
    ::-webkit-input-placeholder {
        color: var(--grey2);
    }
`;

export const Title = styled.h6`
    font-weight: 600;
    font-size: 50px;

    text-align: center;

    color: var(--white);

    margin-bottom: 20px;
`;

export const Imgleft = styled.img`
    position: absolute;
    left: 0px;

    height: 100vh;
`;

export const ImgTopRight = styled.img`
    position: absolute;
    top: 0px;
    right: 0px;

    height: 55vh;
`;

export const ImgBottomRight = styled.img`
    position: absolute;
    bottom: 0px;
    right: 0px;

    height: 50vh;
`;
