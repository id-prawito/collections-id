import React, { useEffect, useRef } from "react";
import ThemeSwitcher from "../../config/ThemeSwicter";
import { HeaderContainer, HeaderSite } from "./HeaderComponents";
import profile from "../../assets/favicon.ico";
import messi_white from "../../assets/logo_white.png";
import messi_black from "../../assets/logo_black.png";

const Header = () => {
    const headerRef = useRef(null);
    useEffect(() => {
        const shrinkHeader = () => {
            if (
                document.body.scrollTop > 50 ||
                document.documentElement.scrollTop > 50
            ) {
                headerRef.current.classList.add("shrink");
            } else {
                headerRef.current.classList.remove("shrink");
            }
        };
        window.addEventListener("scroll", shrinkHeader);
        return () => {
            window.removeEventListener("scroll", shrinkHeader);
        };
    }, []);

    const saved = localStorage.getItem("theme");

    return (
        <HeaderSite ref={headerRef}>
            <HeaderContainer>
                <div className="header__content">
                    <div className="header__logo">
                        <div className="logo">
                            {saved === "dark" ? (
                                <img src={messi_white} alt="logo" />
                            ) : (
                                <img src={messi_black} alt="logo" />
                            )}
                        </div>
                    </div>
                    <div className="header__profile">
                        <ThemeSwitcher />
                        <div className="profile">
                            <div className="profile_img">
                                <img src={profile} alt="logo" />
                            </div>
                            <div className="text_profile">
                                Collectionnnnnnnn
                            </div>
                        </div>
                    </div>
                </div>
            </HeaderContainer>
        </HeaderSite>
    );
};

export default Header;
