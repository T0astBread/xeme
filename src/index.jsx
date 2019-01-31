/* eslint-disable import/no-extraneous-dependencies */
import { render } from "react-dom"
import { Box } from "react-layout-components"
import HeaderBar from "./components/presentation/HeaderBar"
import HorizontalNav from "./components/layout/HorizontalNav"
import Link from "./components/presentation/Link"
import HelloWorld from "./components/presentation/HelloWorld"
import Page from "./components/layout/Page"
import Image from "./components/presentation/Image"
import FillViewport from "./components/layout/FillViewport"
import "./styles.css"
import sampleImage from "./images/hicc.gif"
import sampleImage2 from "./images/small.jpg"

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
			topIsSticky={true}
			left={
				<Box fit width={250} style={{
					backgroundColor: "var(--background-2)",
					borderRight: "1px solid var(--primary-2)"
				}}>
					<section>
						<h1 className="Typography--placeholder">Left Panel</h1>
					</section>
				</Box>
			}
			right={(
				<Box fit width={215} style={{
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
					<p>Autem et sunt nemo deserunt sit dolores. Quis rerum cum voluptatem sit voluptatibus rerum. Et magnam magnam molestiae sed officia sunt vel. Rerum delectus exercitationem quo.</p>
					<Image src={sampleImage} alt="Sample image (Yasuna from Kill Me Baby having a hiccup)" caption="GIF from Kill Me Baby (much recommended)" />
				</section>
				<section>
					<Box>
						<Image src={sampleImage2} alt="Sample image (Agiri from Kill Me Baby)" caption="Lorem ipsum dolor sit amet. Need a linewrap. Don't do drugs." width={200} />
						<div style={{flex: "1"}}>
							<h3>Heading 3</h3>
							<p>Voluptatem fuga eaque cum optio ut enim omnis. Rerum accusantium qui voluptas et ipsa quae non. Hic quia cum vitae molestias. Ut dolor est nobis mollitia enim sed debitis. Est ut placeat nihil laboriosam doloribus. Quod ea incidunt dicta qui soluta ipsam ab.</p>
						</div>
					</Box>
				</section>
				<section>
					<h4>Heading 4</h4>
					<p>Alias dolorem aspernatur accusamus sunt alias maiores. Ut amet voluptatem voluptate sed ut occaecati et ipsa. Voluptas velit hic tempora alias ut officia nostrum. Eos et cum asperiores. Accusamus ab quasi hic rerum.</p>
				</section>
				<section>
					<h5>Heading 5</h5>
					<p>Suscipit quasi impedit accusamus officia. Aperiam laudantium magni sit rerum. Nesciunt voluptate consequatur aspernatur non provident id illo. Facere et sint nihil assumenda ex dolores. Accusantium accusantium libero eum consequuntur nulla et eaque.</p>
				</section>
			</div>
		</Page>
	</FillViewport>
), root)
