import styled from "styled-components";
// import { Link } from "react-scroll";
// import { devices } from "../../assets/scss/_respondTo";
import themeList from "../../config/themeList";

export const HeaderSite = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    position: sticky;
    font-size: 1rem;
    height: 80px;
    z-index: 6;
    top: 0;
    transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);

    &.shrink {
        background-color: ${({ theme: { theme } }) =>
            theme === themeList.light ? "#ffffff" : "rgba(10, 17, 26, 0.9)"};
        height: 70px;
        transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
`;

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px 50px;
    width: 100%;
    z-index: 1;
    right: 0px;
    left: 0px;

    .header {
        &__content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100%;
            width: 100%;
            gap: 10px;
        }

        &__logo {
            display: flex;
            align-items: center;
            width: 100%;
            height: 100%;

            .logo {
                width: 40px;
                height: 40px;
            }
        }

        &__profile {
            display: flex;
            flex-direction: row;
            gap: 10px;
            align-items: center;
            height: 100%;

            .profile {
                display: flex;
                align-items: center;
                height: 100%;
                gap: 10px;

                .profile_img {
                    width: 35px;
                    height: 35px;
                }

                .text_profile {
                    color: ${({ theme: { theme } }) =>
                        theme === themeList.light ? "#000" : "#fff"};
                    font-size: 14px;
                }
            }
        }
    }
`;
