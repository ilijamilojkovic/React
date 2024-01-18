import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import Section from "./Section";
import Tabs from "./Tabs";

const Examples = () => {
    const [selectedTopic, setSelectedTopic] = useState();

    const selectHandler = (selectedButton) => {
        setSelectedTopic(selectedButton);
    }
    let tabContent = <p>Please select a topic.</p>;
    if (selectedTopic) {
        tabContent = (
            <div id='tab-content'>
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>
                        {EXAMPLES[selectedTopic].code}
                    </code>
                </pre>
            </div>
        );
    }
    return (
        <Section id='examples' title='Examples'>
            <Tabs
            buttons={<>
                <TabButton isSelected={selectedTopic === 'components'} onClick={() => selectHandler('components')}>Components</TabButton>
                <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => selectHandler('jsx')}>JSX</TabButton>
                <TabButton isSelected={selectedTopic === 'props'} onClick={() => selectHandler('props')}>Props</TabButton>
                <TabButton isSelected={selectedTopic === 'state'} onClick={() => selectHandler('state')}>State</TabButton>
            </>}>
                {tabContent}
            </Tabs>
        </Section>
    );
}

export default Examples;