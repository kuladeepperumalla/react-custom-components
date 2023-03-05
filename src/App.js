import Accordion from './components/Accordion';
import ButtonPage from './pages/ButtonPage'


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
return (
<div>
<Accordion items={items}/> <ButtonPage />
</div>)

}

export default App;
