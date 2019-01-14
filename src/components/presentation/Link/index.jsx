import React from "react"
import styles from "./styles.css"

const Link = ({ isExternal, isRedirect, children }) => (
	<span className={`Link ${isExternal ? "Link--external" : ""} ${isRedirect ? "Link--redirect" : ""}`}>
		{children}
	</span>
)
 
export default Link