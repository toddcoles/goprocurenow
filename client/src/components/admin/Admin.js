import React, { Component } from 'react';
import Posts from '../posts/Posts';

class Admin extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {/* <div className="col-xs-6 col-lg-4 border">test 2</div> */}
          <div className="col-xs-6 col-sm-6 col-lg-8 border">
            <h6>Admin personnel listing</h6>
            <table>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Larry the Bird</td>
                  <td>@twitter</td>
                  <td>@fat</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-xs-6 col-sm-6 col-lg-4 border">test 2</div>
          {/* <div className="col-xs-6 col-sm-6 col-lg-4 border">test 2</div> */}
        </div>
        <div className="col-xs-6 col-sm-6 col-lg-8 border">
          <Posts />
        </div>
      </div>
    );
  }
}

export default Admin;
