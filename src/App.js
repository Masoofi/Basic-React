import { Component } from "react";
import Table from "./Table";
import Form from "./Form";
import ApiExample from "./ApiExample";




class App extends Component {
    state = {
        charactors: []
    }

    removeCharactor = (index) => {
        const { charactors } = this.state;

        let filtered = charactors.filter((charactors, i) => {
            return i!== index
        });
        this.setState({ charactors: filtered })
    };
     
    handleSubmit = (charactors) =>{
       this.setState({charactors:[...this.state.charactors,charactors]})
    }

    render() {
        
        const {charactors} = this.state

        return (
            <div className='App'>
                <section id="sec">
                    <div class="container ">
                        <h1>Form Entry</h1>
                         <Form handleSubmit={this.handleSubmit}/>
                        <hr></hr>
                        <Table  removeCharactor={this.removeCharactor}
                         charactorsData={charactors} />
                        <h2>API Examples</h2>
                        <ApiExample/>
                    </div>
                </section>
            </div>
        )
    }
}

export default App;