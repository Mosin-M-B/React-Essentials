import { useState } from "react";
import { CoreConcept } from "./Components/CoreConcept/CoreConcept";
import { Header } from "./Components/Header/Header";
import { TabButton } from "./Components/TabButton/TabButton";
import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data";
import { reactDescription, genrateInt } from "./Components/Header/Header";

function App() {

  const description = reactDescription[genrateInt(2)];

  const [content, setContent] = useState();

  const handalSelect = (selected) => {
    setContent(selected);
    console.log(selected);
  };
  console.log("from App ");

  let tabContent = <p id="p">Pleas Cilick on Button to Chose the Topic</p>;
  if (content) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[content].title}</h3>
        <p>{EXAMPLES[content].description}</p>
        <pre>
          <code>{EXAMPLES[content].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>{description} Concepts</h2>
          <ul>
          {CORE_CONCEPTS.map((item,index)=><CoreConcept key={index} {...item}/>)}
            
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected = { content === 'components' }
              onSelect={() => handalSelect("components")}
              lable="Component"
            ></TabButton>{" "}
            {/*1st approch*/}
            <TabButton isSelected = { content === 'jsx' } onSelect={() => handalSelect("jsx")}>JSX</TabButton>{" "}
            {/*2nd approch*/}
            <TabButton isSelected = { content === 'props' } onSelect={() => handalSelect("props")}>
              Props
            </TabButton>
            {/*2nd approch*/}
            <TabButton isSelected = { content === 'state' } onSelect={() => handalSelect("state")}>
              State
            </TabButton>{" "}
            {/*2nd approch*/}
          </menu>
        </section>
      </main>
      {tabContent}
    </>
  );
}

export default App;
