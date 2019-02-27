import React from "react"
import "./styles.css"

const Align = ({ alignment = "center", children}) => (
	<div className={`Align Align--alignment-${alignment}`}>
		<div className={`Align__spacer-top Align__spacer-top--alignment-${alignment}`} />
		{children}
		<div className={`Align__spacer-bottom Align__spacer-bottom--alignment-${alignment}`} />
	</div>
)
 
export default Align
