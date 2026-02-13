import { useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { DarkModeContext } from "../../context/DarkModeContext";

const DarkModeButton = () => {
	const { theme, toggleTheme } = useContext(DarkModeContext);
	const icon = theme === "light" ? faMoon : faSun;
    // @ts-ignore
	return <FontAwesomeIcon icon={icon} size="2x" onClick={toggleTheme} />;
};

export default DarkModeButton;
