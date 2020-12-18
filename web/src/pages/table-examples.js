import React from 'react';
import '../styles/table-examples.css';

export default function TableExamples() {
  return (
    <div className="container">
      <h2>Basic table</h2>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Nickname</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Michael</td>
            <td>Scott</td>
            <td>Prison Mike</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Angela</td>
            <td>Martin</td>
            <td>Booster Seat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Pam</td>
            <td>Beesly</td>
            <td>Pam burger</td>
          </tr>
        </tbody>
      </table>

      <h2>With colour</h2>

      <table className="table table-dark">
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
            <th scope="row">1</th>
            <td>Michael</td>
            <td>Scott</td>
            <td>Prison Mike</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Angela</td>
            <td>Martin</td>
            <td>Booster Seat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Pam</td>
            <td>Beesly</td>
            <td>Pam burger</td>
          </tr>
        </tbody>
      </table>

      <h2>Table head options</h2>

      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Michael</td>
            <td>Scott</td>
            <td>Prison Mike</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Angela</td>
            <td>Martin</td>
            <td>Booster Seat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Pam</td>
            <td>Beesly</td>
            <td>Pam burger</td>
          </tr>
        </tbody>
      </table>

      <br />

      <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Michael</td>
            <td>Scott</td>
            <td>Prison Mike</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Angela</td>
            <td>Martin</td>
            <td>Booster Seat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Pam</td>
            <td>Beesly</td>
            <td>Pam burger</td>
          </tr>
        </tbody>
      </table>

      <h2>Striped rows</h2>

      <table className="table table-striped">
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
            <th scope="row">1</th>
            <td>Michael</td>
            <td>Scott</td>
            <td>Prison Mike</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Angela</td>
            <td>Martin</td>
            <td>Booster Seat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Pam</td>
            <td>Beesly</td>
            <td>Pam burger</td>
          </tr>
        </tbody>
      </table>

      <h2>Striped rows with colour</h2>

      <table className="table table-striped table-secondary">
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
            <th scope="row">1</th>
            <td>Michael</td>
            <td>Scott</td>
            <td>Prison Mike</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Angela</td>
            <td>Martin</td>
            <td>Booster Seat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Pam</td>
            <td>Beesly</td>
            <td>Pam burger</td>
          </tr>
        </tbody>
      </table>

      <h2>Simple border</h2>

      <table className="table table-bordered">
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
            <th scope="row">1</th>
            <td>Michael</td>
            <td>Scott</td>
            <td>Prison Mike</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Angela</td>
            <td>Martin</td>
            <td>Booster Seat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Pam</td>
            <td>Beesly</td>
            <td>Pam burger</td>
          </tr>
        </tbody>
      </table>

      <h2>Simple border with colour</h2>

      <table className="table table-bordered table-info">
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
            <th scope="row">1</th>
            <td>Michael</td>
            <td>Scott</td>
            <td>Prison Mike</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Angela</td>
            <td>Martin</td>
            <td>Booster Seat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Pam</td>
            <td>Beesly</td>
            <td>Pam burger</td>
          </tr>
        </tbody>
      </table>

      <h2>Borderless</h2>

      <table className="table table-borderless">
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
            <th scope="row">1</th>
            <td>Michael</td>
            <td>Scott</td>
            <td>Prison Mike</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Angela</td>
            <td>Martin</td>
            <td>Booster Seat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Pam</td>
            <td>Beesly</td>
            <td>Pam burger</td>
          </tr>
        </tbody>
      </table>

      <h2>Borderless with colour</h2>

      <table className="table table-borderless table-success">
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
            <th scope="row">1</th>
            <td>Michael</td>
            <td>Scott</td>
            <td>Prison Mike</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Angela</td>
            <td>Martin</td>
            <td>Booster Seat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Pam</td>
            <td>Beesly</td>
            <td>Pam burger</td>
          </tr>
        </tbody>
      </table>

      <h2>Hover for rows</h2>

      <table className="table table-hover">
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
            <th scope="row">1</th>
            <td>Michael</td>
            <td>Scott</td>
            <td>Prison Mike</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Angela</td>
            <td>Martin</td>
            <td>Booster Seat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Pam</td>
            <td>Beesly</td>
            <td>Pam burger</td>
          </tr>
        </tbody>
      </table>

      <h2>Hover for rows with colour</h2>

      <table className="table table-hover table-danger">
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
            <th scope="row">1</th>
            <td>Michael</td>
            <td>Scott</td>
            <td>Prison Mike</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Angela</td>
            <td>Martin</td>
            <td>Booster Seat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Pam</td>
            <td>Beesly</td>
            <td>Pam burger</td>
          </tr>
        </tbody>
      </table>

      <h2>Small format table</h2>

      <table className="table table-sm">
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
            <th scope="row">1</th>
            <td>Michael</td>
            <td>Scott</td>
            <td>Prison Mike</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Angela</td>
            <td>Martin</td>
            <td>Booster Seat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Pam</td>
            <td>Beesly</td>
            <td>Pam burger</td>
          </tr>
        </tbody>
      </table>

      <h2>Small format table with colour</h2>

      <table className="table table-sm table-warning">
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
            <th scope="row">1</th>
            <td>Michael</td>
            <td>Scott</td>
            <td>Prison Mike</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Angela</td>
            <td>Martin</td>
            <td>Booster Seat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Pam</td>
            <td>Beesly</td>
            <td>Pam burger</td>
          </tr>
        </tbody>
      </table>

      <br />
      <br />
    </div>
  );
}
