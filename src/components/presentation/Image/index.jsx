import React from "react"
import WhiteBox from "../WhiteBox"
import "./styles.css"


const Image = ({ src, alt, width, caption, children }) => (
	<div className="Image" style={{ width: width }}>
		<WhiteBox>
			<div className="Image__inner">
				<img className="Image__img" src={src} alt={alt} />
				{caption && <i className="Image__caption Typography--caption">{caption}</i>}
				<div className="Image__children">
					{children}
				</div>
			</div>
		</WhiteBox>
	</div>
)

export default Image
