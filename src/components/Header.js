import React from "react"
import logo from "../logo.svg"
import { NavLink, useLocation } from "react-router-dom"
import { ConnectButton } from "@rainbow-me/rainbowkit"

const Header = () => {
    const location = useLocation()
    //     console.log(location.pathname)

    return (
        <>
            <header>
                <div className="header-wrapper">
                    <div className="nav-logo">
                        <div className="logo">
                            <NavLink to="/">
                                <img src={logo} alt="logo" />
                            </NavLink>
                        </div>
                        <ul>
                            <li>
                                <NavLink to="/">
                                    {location.pathname === "/" ? (
                                        <div className="nav-active">
                                            <span>Home</span>
                                        </div>
                                    ) : (
                                        <div>Home</div>
                                    )}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/swap">
                                    {location.pathname === "/swap" ? (
                                        <div className="nav-active">
                                            <span className="material-symbols-outlined nav-fade-up">
                                                sync
                                            </span>{" "}
                                            <span>Trade</span>
                                        </div>
                                    ) : (
                                        <div>Trade</div>
                                    )}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/launch">
                                    {location.pathname === "/launch" ? (
                                        <div className="nav-active">
                                            <span className="material-symbols-outlined nav-fade-up">
                                                rocket_launch
                                            </span>{" "}
                                            <span>Launch</span>
                                        </div>
                                    ) : (
                                        <div>Launch</div>
                                    )}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/portfolia">
                                    {location.pathname === "/portfolia" ? (
                                        <div className="nav-active">
                                            <span className="material-symbols-outlined nav-fade-up">
                                                app_badging
                                            </span>{" "}
                                            <span>Portfolio</span>
                                        </div>
                                    ) : (
                                        <div>Portfolio</div>
                                    )}
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="wallet-connect">
                        {/* <button className="connect-btn">
                            <span>
                                <svg
                                    width="18"
                                    height="16"
                                    viewBox="0 0 18 16"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M12.6614 0.0430305C13.0144 -0.0234918 13.3778 -0.0116601 13.7258 0.0777152C14.0755 0.167512 14.401 0.333373 14.6792 0.563463C14.9573 0.793552 15.1813 1.0822 15.3351 1.40881C15.4888 1.73542 15.5686 2.09195 15.5687 2.45295V3.14621C16.7297 3.30193 17.625 4.29641 17.625 5.5V13C17.625 14.3117 16.5617 15.375 15.25 15.375H2.75C1.43832 15.375 0.375 14.3117 0.375 13V6.12498V5.5V4.21107C0.374692 3.63998 0.573648 3.08651 0.937574 2.64638C1.30157 2.20616 1.80778 1.90677 2.3689 1.79984L2.37836 1.79803L12.6614 0.0430305ZM14.5687 2.45327V3.125H2.75C2.33742 3.125 1.9494 3.23021 1.61133 3.41525C1.64101 3.36978 1.67335 3.32582 1.70824 3.28361C1.92291 3.02399 2.22108 2.84706 2.55172 2.783L12.8341 1.0281L12.8436 1.0263C13.0537 0.986268 13.27 0.993092 13.4771 1.04628C13.6842 1.09948 13.877 1.19772 14.0418 1.33402C14.2066 1.47032 14.3392 1.6413 14.4303 1.83477C14.5214 2.02819 14.5687 2.23948 14.5687 2.45327ZM1.375 13L1.375 6.12498V5.49905C1.37551 4.7401 1.99092 4.125 2.75 4.125H15.25C16.0094 4.125 16.625 4.74061 16.625 5.5V13C16.625 13.7594 16.0094 14.375 15.25 14.375H2.75C1.99061 14.375 1.375 13.7594 1.375 13ZM12.6805 10.2894C12.8861 10.4267 13.1278 10.5 13.375 10.5C13.7065 10.5 14.0245 10.3683 14.2589 10.1339C14.4933 9.89947 14.625 9.58153 14.625 9.25001C14.625 9.00278 14.5517 8.7611 14.4144 8.55554C14.277 8.34998 14.0818 8.18976 13.8534 8.09515C13.625 8.00054 13.3736 7.97579 13.1311 8.02402C12.8887 8.07225 12.6659 8.1913 12.4911 8.36612C12.3163 8.54094 12.1973 8.76367 12.149 9.00614C12.1008 9.24862 12.1255 9.49996 12.2202 9.72837C12.3148 9.95677 12.475 10.152 12.6805 10.2894Z"
                                        fill="current"
                                    ></path>
                                </svg>
                            </span>
                            <span>Connect</span>
                        </button> */}

                        <ConnectButton label="Connect" />

                        <button className="nav-three-dot">
                            <span className="material-symbols-outlined">
                                more_horiz
                            </span>
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
