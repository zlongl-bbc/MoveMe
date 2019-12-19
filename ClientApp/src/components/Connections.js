import React, { Component } from 'react';

export class Connections extends Component {
  static displayName = Connections.name;

  constructor(props) {
      super(props);

      this.state = {
          from: props.location.state.params.from,
          to: props.location.state.params.to,
          date: props.location.state.params.date,
          connections: [],
          loading: true
      };
  }

  componentDidMount() {
      this.populateConnectionData();
    }

    static renderConnectionsTable(connections) {
        return (
            <div>
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>From</th>
            <th>To </th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
            {connections.map((connection, key) => 
                <tr key={key}>
                    <td>{connection.from.location.name}</td>
                    <td>{connection.to.location.name}</td>
                    <td>{connection.from.departure}</td>
                </tr>
            )}
        </tbody>
                </table>

            </div>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
        : Connections.renderConnectionsTable(this.state.connections);

    return (
      <div>
        <h1 id="tabelLabel" >Connection forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

    async populateConnectionData() {

        const von = this.state.from;
        const bis = this.state.to;
        const date = this.state.date;

        const response = await fetch('connection?von=' + von + '&bis=' + bis + '&date=' + date);
        const data = await response.json();

        if (response.status == 400) {
            this.props.history.pop({
                pathname: '/',
                state: { params: this.state }
            });
        }

        this.setState({ connections: data.connections, loading: false});
  }
}
