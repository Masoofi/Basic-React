import { Component } from "react";

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Action</th>
            </tr>
        </thead>
    )
}


const TableBody = (props) => {
    const {charactorsData,removeCharactor} = props
    
    const rows = charactorsData.map((charactors,index) => {
         return(<tr key={index}><td>{charactors.name}</td><td>{charactors.job}</td><td><button onClick={() =>removeCharactor(index)}>Delete</button></td></tr>)
    })

    return (
        <tbody>
          {rows}
        </tbody>
    )
}


class Table extends Component {
    render() {
        const {charactorsData,removeCharactor} = this.props
        return (
            <table>
                <TableHeader/>
                <TableBody removeCharactor={removeCharactor}  charactorsData={charactorsData}/>
            </table>
        )
    }
}

export default Table;