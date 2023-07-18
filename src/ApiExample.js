
import { Component } from "react";



class ApiExample extends Component {
    state = {
        data: []
    }



    componentDidMount() {
        let url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=Harry+Potter&format=json&origin=*"
        fetch(url)
            .then((result) => result.json())
            .then((result) => {
                this.setState({ data: result })
            });
    };
    render() {

        console.log("Rendered");

        const list = this.state.data.map((val, index) => {
            return <li key={index}>{val}</li>
        })

        return (
            <ul>
                {list}
            </ul>
        )
    }
}

export default ApiExample;