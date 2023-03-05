import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({items}){
    const [expandedIndex, setExpandedIndex] = useState(-1);
            const handleclick = (nextIndex) => {
                if(expandedIndex === nextIndex){
                    setExpandedIndex(-1);
                }else{
                    setExpandedIndex(nextIndex);
                }
            };

    const renderedItems = items.map((item, index)=>{
        const isExpanded = index === expandedIndex;
        const icon = (
          <span>{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>
        );
        return (
          <div key={item.id}>
            <div
              className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
              onClick={() => handleclick(index)}
            >
              {item.label}
              {icon}
            </div>

            {isExpanded && <div className="border-b p-5">{item.content}</div>}
          </div>
        );
    })
    return (
      <div className="border-x border-t rounded">
        {" "}
        <div className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
          <h1>Accordion</h1>
        </div>
        {renderedItems}
      </div>
    );
}

export default Accordion;