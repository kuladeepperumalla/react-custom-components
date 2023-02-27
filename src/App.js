import Accordion from './components/Accordion'


function App() {
const items = [
  {
    id: "qeqw",
    label: "Can I use react on a project",
    content: "You can use react on any project you want",
  },
  {
    id: "3ew",
    label: "Can I use react on a project",
    content: "You can use react on any project you want",
  },
  {
    id: "e3r",
    label: "Can I use react on a project",
    content: "You can use react on any project you want",
  },
];
return <Accordion items={items}/>
}

export default App;
