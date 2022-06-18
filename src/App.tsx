import { useState } from 'react';
import { Card } from '@/components/Card';
import { List } from '@/components/List';
import { Enter } from '@/animate/Enter';
import { HoverMove } from '@/animate/HoverMove';
import logo from '@/logo.svg';
import '@/App.css';
import { Aaaa } from './components/Aaaa';
import { MyList } from './components/MyList';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Card title={''}></Card>
      <Aaaa></Aaaa>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Enter>
          <p>Hello Vite + React!</p>
        </Enter>
        <Enter custom={{ duration: 2 }}>
          <HoverMove custom={{ duration: 0.5 }}>
            <HoverMove custom={{ x: -20 }}>
              <p>
                <button
                  type="button"
                  onClick={() => setCount((count) => count + 1)}
                >
                  count is: {count}
                </button>
              </p>
            </HoverMove>
          </HoverMove>
        </Enter>
        <Enter>
          <p>
            Edit <code>App.tsx</code> and save to test HMR updates.
          </p>
        </Enter>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
      <List></List>
      <MyList></MyList>
    </div>
  );
}

export default App;
