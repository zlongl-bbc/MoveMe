import React, { Component } from 'react';

export class Connections extends Component {
  static displayName = Connections.name;

  constructor(props) {
    super(props);
      this.state = {
          from: "",
          connections: [],
          loading: true
      };
  }

  componentDidMount() {
      this.populateConnectionData();
    }

    y
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
            {connections.map(connection =>
            <tr key={connection.date}>
                <td>{connection.from}</td>
                <td>{connection.to}</td>
                <td>{connection.date}</td>
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
        console.log(this.state);
        const von = "";
        return;
      const response = await fetch('connection?von='+ von + '&bis=bern&date=2019-12-12T00:00:00');
      const data = await response.json();
      console.log(data.connections);
      //this.setState({ connections: data, loading: false });
  }
}
