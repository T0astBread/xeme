/* eslint-disable import/no-extraneous-dependencies */
import {render} from "react-dom"
import {Page as FillViewport, Box, ScrollView} from "react-layout-components"
import HeaderBar from "./components/presentation/HeaderBar"
import HorizontalNav from "./components/layout/HorizontalNav"
import Link from "./components/presentation/Link"
import HelloWorld from "./components/presentation/HelloWorld"
import Page from "./components/layout/Page"
import "./styles.css"

const root = document.getElementById("root")

render((
	<FillViewport>
		<Page
			top={
				<HeaderBar>
					<h1>Hello world</h1>
					<HorizontalNav>
						<Link>Home</Link>
						<Link isExternal>t0ast.cc</Link>
						<Link isRedirect>Redirect</Link>
					</HorizontalNav>
				</HeaderBar>
			}
			topIsSticky={false}
			left={
				<Box width={250} style={{
					backgroundColor: "var(--background-2)",
					borderRight: "1px solid var(--primary-2)"
				}}>
					<section>
						<h1 className="Typography--placeholder">Left Panel</h1>
					</section>
				</Box>
			}
			right={(
				<Box width={200} style={{
					backgroundColor: "var(--background-2)",
					borderLeft: "1px solid var(--primary-2)"
				}}>
				<section>
					<h1 className="Typography--placeholder">Right Panel</h1>
				</section>
			</Box>
			)}
			bottom={(
				<Box fit height={100} style={{
					backgroundColor: "var(--background-2)",
					borderTop: "1px solid var(--primary-2)"
				}}>
				<section>
					<h1 className="Typography--placeholder">Bottom Panel</h1>
				</section>
			</Box>
			)}>
			<div>
				<section>
					<h1>Heading 1</h1>
					<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus voluptate, repellendus harum tempore sit aliquam deleniti mollitia, alias sapiente voluptatum ad? Assumenda mollitia laudantium a molestias nobis molestiae cupiditate quas.</p>
					<HelloWorld />
				</section>
				<section>
					<h2>Heading 2</h2>
					<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus voluptate, repellendus harum tempore sit aliquam deleniti mollitia, alias sapiente voluptatum ad? Assumenda mollitia laudantium a molestias nobis molestiae cupiditate quas.</p>
					<p>
						<div className="Typography--placeholder">Pretend there's an image here</div>
						<i className="Typography--caption">Image caption</i>
					</p>
				</section>
				<section>
					<h3>Heading 3</h3>
					<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus voluptate, repellendus harum tempore sit aliquam deleniti mollitia, alias sapiente voluptatum ad? Assumenda mollitia laudantium a molestias nobis molestiae cupiditate quas.</p>
				</section>
				<section>
					<h4>Heading 4</h4>
					<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus voluptate, repellendus harum tempore sit aliquam deleniti mollitia, alias sapiente voluptatum ad? Assumenda mollitia laudantium a molestias nobis molestiae cupiditate quas.</p>
				</section>
				<section>
					<h5>Heading 5</h5>
					<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus voluptate, repellendus harum tempore sit aliquam deleniti mollitia, alias sapiente voluptatum ad? Assumenda mollitia laudantium a molestias nobis molestiae cupiditate quas.</p>
				</section>
			</div>
		</Page>
	</FillViewport>
), root)
