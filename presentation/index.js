// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  es6Logo: require("../assets/es6-logo.png"),
  startWars: require("../assets/star-wars.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "#ff4081"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="#F4DF36">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              ES6 Brown Bag
            </Heading>
            <Link href="https://github.com/nikolenkoanton92/es6-brown-bag">
              <Text bold caps textColor="tertiary">View Slides on Github</Text>
            </Link>
          </Slide>
          <Slide transition={["slide"]} notes="Notes about goal" bgColor="#7cbb00">
            <Heading size="2">
              History
            </Heading>
            <Appear fid="1">
              <Heading size="2">
                Why I need es6?
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size="2">
                ES6 sugar
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size="2">
                Babel
              </Heading>
            </Appear>
          </Slide>
          <Slide bgColor="#000000">
            <Heading size="2" textColor="#ffffff">History</Heading>
            <Image src={images.startWars.replace("/", "")} height="440px" margin="40px 0px 0px 0px" />
          </Slide>
          <Slide bgColor="#ffffff">
            <Layout textColor="#000000">
              <Fill>
                <Appear><ListItem>May - Mocha is invented in Netscape By Brendan Eich</ListItem></Appear>
                <Appear><ListItem>September - Renamed to LiveScript</ListItem></Appear>
                <Appear><ListItem>December - Renamed to Javascript (Because Java was popular)</ListItem></Appear>
                <Appear><ListItem>1996 - JavaScript is taken to standardization in ECMA.</ListItem></Appear>
                <Appear><ListItem>1997 - ECMA-262 (ECMAScript)</ListItem></Appear>
                <Appear><ListItem>1998 - ECMAScript 2</ListItem></Appear>
                <Appear><ListItem>1999 - ECMAScript 3</ListItem></Appear>
              </Fill>
              <Fill>
                <Appear><ListItem>2005 - Mozilla and Macromedia started Work on ECMAScript 4, but they renamed to ECMAScript 3.1</ListItem></Appear>
                <Appear><ListItem>2009 - Opposing parties meet in Oslo and achieve an agreement. ES3.1 is renamed to ES5</ListItem></Appear>
                <Appear><ListItem>2015 - ES6 will be released.</ListItem></Appear>
                <Appear><ListItem>Starting with ES6 - Version names will be based on the year of release. ES6 === ES2016 and ES7 === ES2016</ListItem></Appear>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Why I need use ES6?
            </Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Appear><ListItem>"Bad" Parts are fixed in ES6</ListItem></Appear>
            <Appear><ListItem>Syntax sugar</ListItem></Appear>
            <Appear><ListItem>ES6 JavaScript Standard</ListItem></Appear>
            <Appear><ListItem>Async problem</ListItem></Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading size="3">Block Scope</Heading>
            <Heading size="5">ES5</Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/es5-block")}
              margin="20px auto"
            />
          </Slide>
          <Slide>
            <Appear><Heading size="5">ES6</Heading></Appear>
            <Appear><Heading size="6">const and let is new var</Heading></Appear>
            <CodePane
              lang="js"
              source={require("raw!../assets/es6-block")}
              margin="20px auto"
            />
          </Slide>
          <Slide>
            <Heading size="5">Long string problem</Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/es5-long-string")}
              margin="20px auto"
            />
          </Slide>
          <Slide>
            <Heading size="5">ES6 String template and  interpolate</Heading>
            <Appear>
            <CodePane
              lang="js"
              source={require("raw!../assets/es6-template-string")}
              margin="20px auto"
            />
            </Appear>
            <Appear>
            <CodePane
              lang="js"
              source={require("raw!../assets/es6-interpolate-var-bind")}
              margin="20px auto"
            />
            </Appear>
          </Slide>
          <Slide>
            <Heading size="5">ES6 Object declarations</Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/es6-object-declaration")}
              margin="20px auto"
            />
          </Slide>
          <Slide>
            <Heading size="5">ES6: Default Params</Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/es6-default-params")}
              margin="20px auto"
            />
          </Slide>
          <Slide>
            <Heading size="5">ES5: functions</Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/es5-functions")}
              margin="20px auto"
            />
          </Slide>
          <Slide>
            <Heading size="5">ES6: Arrow functions</Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/es6-arrow-functions")}
              margin="20px auto"
            />
          </Slide>
          <Slide>
            <Heading size="5">ES6: Arrow functions this lexical</Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/es6-arrow-functions-this")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <CodePane
              lang="jsx"
              source={require("raw!../assets/deck.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Full Width
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                Adjustable Darkness
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="primary">
                Background Imagery
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Flexible Layouts</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Left
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Right
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>Wonderfully formatted quotes</Quote>
              <Cite>Ken Wheeler</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Inline Markdown
            </Heading>
            <Markdown>
              {`
![Markdown Logo](${images.markdown.replace("/", "")})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
              `}
            </Markdown>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Combinable Transitions
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>React-Router navigation</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive/>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Made with love in Seattle by
            </Heading>
            <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
