import { Component } from "react";




class Form extends Component {
    intialState = {
        name: "",
        job: "",
    }

    state = this.intialState;

    handelChange = (event) => {
        const { name,value } = event.target
        this.setState({[name]:[value]});
    }

    submitForm = () => {
        let charactors = this.state 
        this.props.handleSubmit(charactors)
        this.setState(this.intialState )
    }

    render() {
        return (
            <form>
                <label htmlFor="name">Name :</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={this.state.name}
                    onChange={this.handelChange}
                />

                <label htmlFor="job">Job :</label>
                <input
                    type="text"
                    name="job"
                    id="job"
                    value={this.state.job}
                    onChange={this.handelChange}
                />
                <input id="subBtn" type="button" onClick={this.submitForm} value="Submit" />
            </form>
        )
    }

}

export default Form;