import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';

export class Index extends Component {
    static displayName = Index.name;
    

    constructor(props) {
        super(props);
        this.state = {
            from: "",
            to: "",
            date: "",
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {

        this.props.history.push({
            pathname: 'connections',
            state: { params: this.state }
        });

    }


    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <p>Welcome to your new single-page application, built with:</p>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        From:
                      <input type="text" value={this.state.from} onChange={(event) => this.setState({ from: event.target.value }) } />
                    </label>

                    <label>
                        To:
                      <input type="text" value={this.state.to} onChange={(event, to) => this.setState({ to: event.target.value})} />
                    </label>

                    <label>
                        Date:
                        <input type="text" value={this.state.date} onChange={(event, date) => this.setState({ date: event.target.value})} />
                     </label>
                     <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}
