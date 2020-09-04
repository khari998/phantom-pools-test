import React, { useCallback, memo} from 'react';
import './App.css';

const ALL_NAMES = ["foo", "bar", "baz"];

interface NameListItemProps {
  readonly name: string;
  readonly onNameClick: (clickedName: string) => void;
}

const NameListItem: React.FC<NameListItemProps> = memo(({ onNameClick, name}) =>  (
  <li>
      <button onClick={() => onNameClick(name)}>{name}</button>
  </li>
)); 

const NameList: React.FC = memo(() => {
  
  const [lastClickedName, setLastClickedName] = React.useState<
    string | undefined
  >(undefined); 
  
  return (
    <div>
      <h1>
        {lastClickedName === undefined
          ? "No Name Clicked Yet"
          : lastClickedName}
      </h1>
      <ul>
        {ALL_NAMES.map((name: string, idx: number) => (
          <NameListItem key={idx} name={name} onNameClick={useCallback(() => setLastClickedName(name), [name])}/>
        ))}
      </ul>
    </div>
  );
});


function App() {
  return (
    <div className="App">
      <NameList/>
    </div>
  );
}

export default App;
