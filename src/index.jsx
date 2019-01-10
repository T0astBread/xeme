/* eslint-disable import/no-extraneous-dependencies */
import { render } from "react-dom"
import HelloWorld from "./components/HelloWorld"
import Page from "./components/Page"

const root = document.getElementById("root")

render((
	<Page>
		<HelloWorld />
	</Page>
), root)
