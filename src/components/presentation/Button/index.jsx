import React from "react"
import "./styles.css"

const Button = ({children, type}) => (
	<button className={`Button Button--type-${type}`}>
		{children}
	</button>
)

export default Button