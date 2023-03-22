import Table from './Table';

function SortableTable(props){
    const {config} = props;

    const updatedConfig = config.map((column) => {

        if(!column.sortValue){
            return column;
        };

        const handleClick = (e) =>{
            console.log(e.label)
        }
        return{
            ...column,
            header: () => <th onClick={() => handleClick(column)}>{column.lable} IS SORTABLE</th>

        }
    })
    return <Table {...props} config={updatedConfig}/>
}

export default SortableTable