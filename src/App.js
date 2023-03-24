import { useState } from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import './App.css';
import Human from './tabs/Human'
import Home from './tabs/Home'
import ChatGPT3 from './tabs/ChatGPT3'
import ChatGPT4 from './tabs/ChatGPT4'
import GithubCopilot from './tabs/GithubCopilot'
import GoogleBard from './tabs/GoogleBard'


function App() {
  const [key, setKey] = useState('home')
  return (
    <div className="App">
      <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3 bg-dark text-light"
    >
      <Tab eventKey="home" title="Home">
        <Home />
      </Tab>
      <Tab eventKey="human" title="Human Made">
        <Human />
      </Tab>
      <Tab eventKey="chatgpt3" title="ChatGPT-3">
        <ChatGPT3 />
      </Tab>
      <Tab eventKey="chatgpt4" title="ChatGPT-4">
        <ChatGPT4 />
      </Tab>
      <Tab eventKey="bard" title="Google Bard">
        <GoogleBard />
      </Tab>
      <Tab eventKey="ghcp" title="Github Copilot">
        <GithubCopilot />
      </Tab>
    </Tabs>
    </div>
  );
}

export default App;
