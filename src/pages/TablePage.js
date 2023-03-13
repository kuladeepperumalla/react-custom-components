import Table from "../components/Table";

function TablePage(){
    const data = [
        {name:'orange', color:'bg-orange-500', score:5},
        {name:'apple', color:'bg-red-500', score:3},
        {name:'banana', color:'bg-yello-500', score:1},
        {name:'lime', color:'bg-yello-500', score:4}
    ]
    return (
    <div>
        <Table data={data}/>
    </div>
    )
}

export default TablePage;