import { useState } from 'react';
import { GoChevronDown } from 'react-icons/go';
import Panel from './Panel';

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    // CLOSE DROPDOWN
    setIsOpen(false);
    // WHAT OPTION DID THE USER CLICK ON???
    onChange(option)
  };



  const renderedOptions = options.map((option,i) => {
    return (
      <div onClick={() => handleOptionClick(option)} key={option.value}>
        {option.label}
      </div>
    );
  });



  return (
    <div className='w-48 relative'>
      <Panel className="flex justify-between items-center cursor-pointer" onClick={handleClick}>
        {value?.label || 'select..'}
        <GoChevronDown />
        </Panel>
      {isOpen && <div>{renderedOptions}
      </div>}
    </div>
  );
}

export default Dropdown;
