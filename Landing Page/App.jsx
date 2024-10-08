import {useState, Fragment} from 'react';
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import TabButton from './components/TabButton.jsx';
import{EXAMPLES} from'./data.js';


function App() {
  const [selectedTopic, setSelectedTopic] = useState();
 
  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }
  console.log('APP COMPONENT EXECUTING');
  return (
    <Fragment>
      <Header />
      <main>
       <CoreConcepts />
        <section id="examples">
          <h2> Examples</h2>
          <menu>
           <TabButton isSelected= {selectedTopic ==='components'} 
           onSelect={() => handleSelect('components')}>
            Components
            </TabButton>
           <TabButton isSelected= {selectedTopic ==='jsx'} 
           onSelect={() => handleSelect('jsx')}>
            Jsx
           </TabButton>
           <TabButton isSelected= {selectedTopic ==='props'}
            onSelect={() => handleSelect('props')}>
            Props
           </TabButton>
           <TabButton isSelected= {selectedTopic ==='state'} 
           onSelect={() => handleSelect('state')}>
            State
            </TabButton> 
          </menu>
            {!selectedTopic ? (
              <p>Please select a topic.</p> 
            ):(
               <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
              {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>)}
           
        </section>
      </main>
      </Fragment>
  );
}

export default App;     
            
           
        
