// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
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
  kat: require("../assets/kat.png"),
  es6Logo: require("../assets/es6-logo.png"),
  startWars: require("../assets/star-wars.jpg"),
  browserSupport: require("../assets/es6-support.png"),
  finish: require("../assets/finish.jpg"),
  callbacks: require("../assets/callbacks.png")
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
          <Slide transition={["slide"]} notes="" bgColor="#7cbb00">
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
          <Slide bgColor="#000000" transition={["spin"]}>
            <Heading size="2" textColor="#ffffff">History</Heading>
            <Image src={images.startWars.replace("/", "")} height="440px" margin="40px 0px 0px 0px" />
          </Slide>
          <Slide bgColor="#ffffff" transition={["zoom"]} notes="JavaScript, not to be confused with Java, was created in 10 days in May 1995 by Brendan Eich, then working at Netscape and now of Mozilla.">
            <Layout textColor="#000000">
              <Fill>
                <List>
                <Appear><ListItem>May - Mocha is invented in Netscape By Brendan Eich</ListItem></Appear>
                <Appear><ListItem>September - Renamed to LiveScript</ListItem></Appear>
                <Appear><ListItem>December - Renamed to Javascript (Because Java was popular)</ListItem></Appear>
                </List>
              </Fill>
              <Fill>
                <List>
                  <Appear><ListItem>1996 - JavaScript is taken to standardization in ECMA.</ListItem></Appear>
                  <Appear><ListItem>1997 - ECMA-262 (ECMAScript)</ListItem></Appear>
                  <Appear><ListItem>1998 - ECMAScript 2</ListItem></Appear>
                  <Appear><ListItem>1999 - ECMAScript 3</ListItem></Appear>
                </List>
              </Fill>
            </Layout>
          </Slide>
          <Slide bgColor="#ffffff" transition={["zoom"]}>
            <List>
              <Appear><ListItem>2005 - Mozilla and Macromedia started Work on ECMAScript 4, but they renamed to ECMAScript 3.1</ListItem></Appear>
              <Appear><ListItem>2009 - Opposing parties meet in Oslo and achieve an agreement. ES3.1 is renamed to ES5</ListItem></Appear>
              <Appear><ListItem>2015 - ES6 was released.</ListItem></Appear>
              <Appear><ListItem>Starting with ES6 - Version names will be based on the year of release. ES6 === ES2015 and ES7 === ES2016</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="black" notes="">
            <Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Why I need use ES6?
            </Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="#ffffff">
            <List>
            <Appear><ListItem>"Bad" Parts are fixed in ES6</ListItem></Appear>
            <Appear><ListItem>Syntax sugar</ListItem></Appear>
            <Appear><ListItem>ES6 JavaScript Standard</ListItem></Appear>
            <Appear><ListItem>Async problem</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="#ffffff">
            <Heading size="3">Block Scope</Heading>
            <Heading size="5">ES5</Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/es5-block")}
              margin="20px auto"
            />
          </Slide>
          <Slide bgColor="#ffffff" textColor="black" transition={["spin"]}>
            <Appear><Heading size="5">ES6 Block</Heading></Appear>
            <Appear><Heading size="6">const and let is new var</Heading></Appear>
            <Appear>
            <CodePane
              lang="js"
              source={require("raw!../assets/es6-block")}
              margin="20px auto"
            />
            </Appear>
          </Slide>
          <Slide bgColor="#ffffff" textColor="black" transition={["spin"]}>
            <Heading size="5">Long string problem</Heading>
            <Appear>
            <CodePane
              lang="js"
              source={require("raw!../assets/es5-long-string")}
              margin="20px auto"
            />
            </Appear>
          </Slide>
          <Slide bgColor="#ffffff" textColor="black">
            <Heading size="5">ES6 String template and interpolate</Heading>
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
          <Slide bgColor="#ffffff" textColor="black" transition={["spin"]}>
            <Heading textColor="black" size="5">ES6 Object declarations</Heading>
            <Appear>
            <CodePane
              lang="js"
              source={require("raw!../assets/es6-object-declaration")}
              margin="20px auto"
            />
            </Appear>
          </Slide>
          <Slide bgColor="#ffffff" textColor="black">
            <Heading textColor="black" size="5">ES6: Default Params</Heading>
            <Appear>
            <CodePane
              lang="js"
              source={require("raw!../assets/es6-default-params")}
              margin="20px auto"
            />
            </Appear>
          </Slide>
          <Slide bgColor="#ffffff" textColor="black">
            <Heading textColor="black" size="5">Object destructuring</Heading>
            <CodePane
              lang="js"
              source={require("raw!../assets/es5-object-destructuring")}
              margin="20px auto"
            />
            <Appear>
            <CodePane
              lang="js"
              source={require("raw!../assets/es6-object-destructuring")}
              margin="20px auto"
            />
            </Appear>
          </Slide>
          <Slide bgColor="#ffffff" textColor="black" transition={["spin"]}>
            <Heading textColor="black" size="5">ES5: functions</Heading>
            <Appear>
            <CodePane
              lang="js"
              source={require("raw!../assets/es5-functions")}
              margin="20px auto"
            />
            </Appear>
          </Slide>
          <Slide bgColor="#ffffff" textColor="black">
            <Heading textColor="black" size="5">ES6: Arrow functions</Heading>
            <Appear>
            <CodePane
              lang="js"
              source={require("raw!../assets/es6-arrow-functions")}
              margin="20px auto"
            />
            </Appear>
          </Slide>
          <Slide bgColor="#ffffff" textColor="black" transition={["spin"]}>
            <Heading textColor="black" size="6">ES6: Arrow functions this lexical</Heading>
            <Appear>
            <CodePane
              lang="js"
              source={require("raw!../assets/es6-arrow-functions-this-incorrect")}
              margin="5px auto"
            />
            </Appear>
            <Appear>
            <CodePane
              lang="js"
              source={require("raw!../assets/es6-arrow-functions-this")}
              margin="5px auto"
            />
            </Appear>
          </Slide>
          <Slide bgColor="#ffffff" textColor="black">
            <Heading textColor="black" size="5">ES6: Classes</Heading>
            <Appear>
            <CodePane
              lang="js"
              source={require("raw!../assets/es6-classes")}
              margin="20px auto"
            />
            </Appear>
          </Slide>
          <Slide bgColor="#ffffff" textColor="black" transition={["spin"]}>
            <Heading textColor="black" size="5">ES5: Async programming </Heading>
            <List>
            <Appear><ListItem>Classic solution: callback</ListItem></Appear>
            <Appear><ListItem>Problem: only one callback per async task</ListItem></Appear>
            <Appear><ListItem>Problem: Nested functions create messy code</ListItem></Appear>
            </List>
            <Appear>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/es5-callback-hell")}
              margin="20px auto"
            />
            </Appear>
          </Slide>
          <Slide bgColor="#ffffff" textColor="black" transition={["spin"]}>
            <Heading textColor="black" size="5">ES6: Promise </Heading>
            <List>
            <Appear><ListItem>Object that keeps a result of async function(waiting, resolved, rejected)</ListItem></Appear>
            <Appear><ListItem>Allow to return promise object and work with them</ListItem></Appear>
            <Appear><ListItem>flattens nested promises to avoid "callback hell"</ListItem></Appear>
            </List>
            <Appear>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/es6-promise")}
              margin="20px auto"
            />
            </Appear>
          </Slide>
          <Slide bgColor="#ffffff" textColor="black">
            <Heading textColor="black" size="5">ES5: Modules </Heading>
            <List>
            <Appear><ListItem>Immediately Invoked Function Expression</ListItem></Appear>
            <Appear><ListItem>controls variable exposure</ListItem></Appear>
            </List>
            <Appear>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/es5-module")}
              margin="20px auto"
            />
              </Appear>
          </Slide>
          <Slide bgColor="#ffffff" textColor="black" note="Need using tool suh as browserify, jspm, webpack">
            <Heading size="5" textColor="black">ES6: Modules </Heading>
            <CodePane
              lang="jsx"
              source={require("raw!../assets/es6-module")}
              margin="20px auto"
            />
          </Slide>
          <Slide bgColor="#ffffff" textColor="black" transition={["spin"]}>
            <Heading textColor="black">Other ES6 features</Heading>
              <List>
              <Appear><ListItem>Proxy</ListItem></Appear>
              <Appear><ListItem>Iterators</ListItem></Appear>
              <Appear><ListItem>Generators</ListItem></Appear>
              <Appear><ListItem>Symbols</ListItem></Appear>
              <Appear><ListItem>Map/Set, WeakMap/WeakSet</ListItem></Appear>
              <Appear><ListItem>extended standard library (Number, Math, Array)</ListItem></Appear>
            </List>
          </Slide>
          <Slide bgColor="#ffffff" textColor="black">
            <Heading textColor="black">ES6 Browser Support</Heading>
            <Appear><Image width="600px" src={images.browserSupport.replace("/", "")} margin="40px 0px 0px 0px" /></Appear>
          </Slide>
          <Slide bgColor="#ffffff" textColor="black">
            <Heading textColor="black">Babel</Heading>
            <List>
            <Appear><ListItem>transpile ES2015 to ES6</ListItem></Appear>
            <Appear><ListItem>transpile JSX(React) to JavaScript</ListItem></Appear>
            <Appear><ListItem>transpile any of your cool libriry to ES6/7</ListItem></Appear>
            </List>
            <Link href="https://github.com/nikolenkoanton92/babel-brown-bag">
              <Text bold caps textColor="tertiary">Try to setup Babel</Text>
            </Link>
          </Slide>
          <Slide bgColor="#ffffff" transition={["spin"]}>
            <Heading size="4">Thank you :)</Heading>
            <Image width="460px" src={images.finish.replace("/", "")} margin="40px 10px 0px 10px" />
            <Image width="460px" src={images.callbacks.replace("/", "")} margin="40px 10px 0px 10px" />
          </Slide>
          <Slide bgColor="#ffffff" transition={["slide", "zoom"]}>
          <Heading size="2" margin="0px 0px 80px 0px">References</Heading>
            <Link href="https://github.com/ericdouglas/ES6-Learning" >
              <Text textColor="blue">ECMAScript 6 Learning Repo on Github</Text>
            </Link>
            <Link href="https://babeljs.io/">
              <Text textColor="blue">Babel</Text>
            </Link>
            <Link href="https://github.com/FormidableLabs/spectacle">
              <Text textColor="blue">Spectacle (ReactJS based Presentation Library)</Text>
            </Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
