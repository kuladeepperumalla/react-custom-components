import {GoArrowSmallUp, GoArrowSmallDown} from 'react-icons/go'
import { useState } from 'react';
import Table from './Table';

function SortableTable(props){
    const {config, data} = props;
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null)

    const updatedConfig = config.map((column) => {

        if(!column.sortValue){
            return column;
        };

        const handleClick = (lable) =>{
            if(sortBy && lable !== sortBy){
                setSortOrder('asc');
                setSortBy(lable);
                return;
            }
            if (sortOrder === null) {
              setSortOrder("asc");
              setSortBy(lable);
            } else if (sortOrder === "asc") {
              setSortOrder("desc");
              setSortBy(lable);
            } else if (sortOrder === "desc") {
              setSortOrder(null);
              setSortBy(null);
            }
        }

        return {
          ...column,
          header: () => (
            <th className='cursor-pointer hover:bg-gray-100' 
            onClick={() => handleClick(column.label)}>
              <div className="flex items-center">
                {getIcons(column.label, sortBy, sortOrder)}
                {column.label}
              </div>
            </th>
          ),
        };
    })
        let sortedData = data;
        if (sortBy && sortOrder) {
            const { sortValue } = config.find(column => column.label === sortBy);

            sortedData = [...data].sort((a,b)=>{
                const valueA = sortValue(a);
                const valueB = sortValue(b);

                const reverseOrder = sortOrder === "asc"? 1 : -1;

                if(typeof valueA === "string"){
                    return valueA.localeCompare(valueB) * reverseOrder;
                } else {
                    return (valueA - valueB) * reverseOrder;
                }
            })
        }

    return <div>
        <Table {...props} data={sortedData} config={updatedConfig}/>
        </div>
}

const getIcons = (label, sortBy, sortOrder) => {
    if(label !== sortBy){
        return (
          <div>
            <GoArrowSmallUp />
            <GoArrowSmallDown />
          </div>
        );
    }

    if (sortOrder === null) {
      return (
        <div>
          <GoArrowSmallUp />
          <GoArrowSmallDown />
        </div>
      );
    } else if (sortOrder === "asc") {
      return (
        <div>
          <GoArrowSmallUp />
        </div>
      );
    } else if (sortOrder === "desc") {
      return (
        <div>
          <GoArrowSmallDown />
        </div>
      );
    }
}

export default SortableTable