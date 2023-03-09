import Accordion from "./components/Accordion";
import ButtonPage from "./pages/ButtonPage";
import Dropdown from "./components/Dropdown";
import { useState } from "react";

function App() {
  const [select, setSelect] = useState(null);

  const handleSelect = (select) => {
    setSelect(select);
  };
  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];

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
      <Accordion items={items} />
      <ButtonPage />
      <div className="flex">
      <Dropdown options={options} value={select} onChange={handleSelect} />
      <Dropdown options={options} value={select} onChange={handleSelect} />
      </div>
    </div>
  );
}

export default App;
