import styled from "styled-components";
import themeList from "../../config/themeList";
// import "../../assets/scss/_index.scss";
// import { devices } from "../../assets/scss/_respondTo";

export const HeroSite = styled.section`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    min-height: 80vh;
    padding: 0px;

    .user-pic {
        width: 100px;
        height: 100px;
        overflow: hidden;
        border-radius: 100%;
        margin: 20px auto 20px;
        border-left: 3px solid #ddd;
        border-right: 3px solid #ddd;
        border-top: 3px solid #007bff;
        border-bottom: 3px solid #007bff;
        transform: rotate(-30deg);
        transition: 0.5s;

        .pembungkus {
            margin: 10px;

            img {
                padding: 30px;
            }
        }
    }

    .button_trash {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .user-pictures {
        width: 100%;
        height: 120px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;

        .pembungkus {
            width: 100%;
            height: 100%;
            padding: 10px;
            display: flex;
            align-items: center;
            justify-content: center;

            img {
                width: 120px;
                height: 120px;
                padding: 20px;
            }
        }
    }
    .card-box:hover .user-pic {
        transform: rotate(0deg);
        transform: scale(1.1);
    }
    .card-box {
        display: flex;
        flex-direction: column;
        gap: 15px;
        align-items: center;
        padding: 25px;

        background-color: ${({ theme: { theme } }) =>
            theme === themeList.light ? "#fdfdfd" : "#1f2937"};
        border-radius: 10px;
        transition: 0.5s;
        /* cursor: pointer; */
        max-width: 240px;
        min-height: 350px;
        justify-content: space-between;
        box-shadow: rgb(2 12 27 / 70%) 0px 10px 30px -26px;

        .heading_card {
            font-size: 14px;
            font-weight: 500;
            transition: 0.5s;

            color: ${({ theme: { theme } }) =>
                theme === themeList.light ? "#000" : "#fff"};
        }

        .decsription_card {
            width: 180px;
            font-size: 12px;
            font-weight: 400;
            color: ${({ theme: { theme } }) =>
                theme === themeList.light ? "#000" : "#fff"};
            transition: 0.5s;
            text-align: center;
        }

        .form_create {
            display: flex;
            flex-direction: row;
            gap: 20px;

            .button_my-course {
                display: flex;
                align-items: center;
                background-color: #0f8af9;
                padding: 10px 14px;
                border-radius: 6px;
                max-height: 100%;
                font-size: 12px;
                color: #fff;
                gap: 10px;
                transition: 0.3s all ease;
                box-shadow: rgb(2 12 27 / 70%) 0px 10px 30px -15px;

                &:hover {
                    background-color: #0f71c9;
                    transition: 0.3s all ease;
                    transform: scale(1.05);
                }
            }
        }
    }
    .card-box:hover {
        transform: scale(1.02);
    }
    .card-box p {
        color: #808080;
    }

    .project__container {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 50px 50px;
        width: 100%;
        z-index: 1;
        right: 0px;
        left: 0px;
    }

    .project_content {
        display: flex;
        flex-direction: column;
        gap: 40px;
        width: 100%;
    }

    .card_content {
        display: grid;
        grid-template-columns: repeat(5, auto);
        gap: 20px;

        .card {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: #c2c1c1;
            border-radius: 8px;
            height: 180px;
            padding: 20px;
            gap: 20px;

            .img_card {
                height: 70px;
                width: 70px;
                background-color: #fff;
                border-radius: 50%;

                img {
                    padding: 10px;
                }
            }
        }
    }

    .heading {
        display: flex;
        flex-direction: column;
        gap: 10px;

        .heading_one {
            color: ${({ theme: { theme } }) =>
                theme === themeList.light ? "#000" : "#fff"};
            font-size: 18px;
            font-weight: 500;
        }
        p {
            color: ${({ theme: { theme } }) =>
                theme === themeList.light ? "#000" : "#fff"};
            font-size: 12px;
            font-weight: 400;
        }
    }

    .form_create {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .from_search {
            display: flex;
            align-items: center;
            background-color: #fff;
            color: #000;
            height: 40px;
            width: 150px;
            border-radius: 8px;
            padding: 10px;
        }

        .button_hero {
            display: flex;
            flex-direction: row;
            gap: 20px;

            .button_my-course {
                display: flex;
                align-items: center;
                background-color: #fff;
                padding: 4px 14px;
                border-radius: 6px;
                max-height: 100%;
                font-size: 14px;
                color: #000;
                gap: 10px;
                transition: 0.3s all ease;
                box-shadow: rgb(2 12 27 / 70%) 0px 10px 30px -15px;

                input {
                    border-radius: 4px;
                    font-size: 14px;
                    font-weight: 600;

                    &:focus {
                        border: none !important;
                        outline: none;
                    }
                }
            }
        }

        .form_create {
            display: flex;
            flex-direction: row;
            gap: 20px;

            .button_my-course {
                display: flex;
                align-items: center;
                background-color: #0f8af9;
                padding: 10px 14px;
                border-radius: 6px;
                max-height: 100%;
                font-size: 14px;
                color: #fff;
                font-weight: 500;
                gap: 10px;
                transition: 0.3s all ease;
                box-shadow: rgb(2 12 27 / 70%) 0px 10px 30px -15px;

                .button_create {
                    background-color: transparent;
                    cursor: pointer;
                    color: #fff;
                    font-weight: 600;
                    font-size: 14px;
                }

                &:hover {
                    background-color: #0f71c9;
                    transition: 0.3s all ease;
                    transform: scale(1.05);
                }
            }
        }

        .sort_create {
            display: flex;
            flex-direction: row;
            gap: 20px;
        }
    }
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
    box-shadow: rgb(2 12 27 / 70%) 0px 10px 30px -15px;
`;

export const ButtonTrash = styled.button`
    padding: 4px;
    border-radius: 4px;
    border: none;
    background: transparent;
    color: red;
    font-size: 14px;
    cursor: pointer;
    box-shadow: rgb(2 12 27 / 70%) 0px 10px 30px -15px;

    &:hover {
        transform: scale(1.2);
    }

    svg {
        font-size: 18px;
    }
`;

export const ButtonEdit = styled.button`
    padding: 4px;
    border-radius: 4px;
    border: none;
    background: transparent;
    color: #f7df1e;
    font-size: 14px;
    cursor: pointer;
    box-shadow: rgb(2 12 27 / 70%) 0px 10px 30px -15px;

    &:hover {
        transform: scale(1.2);
    }

    svg {
        font-size: 18px;
    }
`;
