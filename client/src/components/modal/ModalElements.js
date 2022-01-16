import styled from "styled-components";
import { FiX } from "react-icons/fi";
import themeList from "../../config/themeList";

export const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    right: 0;
    bottom: 0;
`;

export const ModalWrapper = styled.div`
    width: 400px;
    height: 500px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    color: #000;
    /* display: flex; */
    position: relative;
    z-index: 10;
    border-radius: 10px;
    padding: 40px;
`;

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    color: #141414;
    gap: 20px;
    height: 100%;
    width: 100%;

    .pembungkus {
        display: flex;
        flex-direction: column;
        height: 100%;
        gap: 20px;
    }

    .heading {
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .judul {
            font-size: 16px;
            font-weight: 500;
        }

        p {
            font-size: 12px;
            font-weight: 400;
            color: ${({ theme: { theme } }) =>
                theme === themeList.light ? "#000" : "#000"};
        }
    }

    .content_form {
        display: flex;
        gap: 20px;
        flex-direction: column;
        width: 100%;

        .form {
            display: flex;
            flex-direction: column;
            gap: 10px;

            .text_form {
                font-size: 14px;
                font-weight: 500;
            }

            .input_form {
                border: 0.5px rgba(0, 0, 0, 0.5) solid;
                border-radius: 4px;
                padding: 10px;
                height: 40px;
                font-size: 14px;

                &:focus {
                    outline: none;
                    border: 1px solid #0f8af9;
                }
            }
        }
    }
`;

export const CloseModalButton = styled(FiX)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 24px;
    height: 24px;
    padding: 0;
    z-index: 10;
`;

export const Button = styled.button`
    min-width: 100px;
    padding: 12px 32px;
    border-radius: 4px;
    border: none;
    background: #0f8af9;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
    width: 100%;
    box-shadow: rgb(2 12 27 / 70%) 0px 10px 30px -15px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    &:hover {
        background: #2276c2;
    }
`;
