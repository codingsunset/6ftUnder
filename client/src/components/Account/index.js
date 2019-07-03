import React from "react";
import "./style.css";
import axios from "axios";
import CompostEntryList from "../CompostEntryList"

class Account extends React.Component {
  // viewEntries = () => {
  //   //dummy test for line 8
  //   console.log("click received")
  //   axios.get("/api/records")
  //     .then(function (entries) {
  //       console.log(entries);
  //     })
  // }
  state={entries:[],
    showEntriesDiv:false};

  viewEntries = () => {
      console.log("click received")
      axios.get("/api/records")
        .then( entries => {
          console.log(entries);
          // this.setState({entries,showEntriesDiv:true})
          this.setState({entries: entries.data, showEntriesDiv:true})
        })
    }


  render() {
    return (
      <div>
        <h2>6ft Under</h2>
        <div className="container">
          {/* Button trigger modal */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img
                  src="https://i.ya-webdesign.com/images/profile-buttons-png-4.png"
                  alt="Profile"
                  style={{ width: "200px", height: "200px" }}
                />
              </div>
              <div className="flip-card-back">
                <h1>John Doe</h1>
                <p>Architect &amp; Engineer</p>
                <p>
                  I am a compost maniac.I love to compost more and less waste.
                </p>
              </div>
            </div>
          </div>
          <br />
          <form action="profile form">
            Year to date Compost:
            <input type="text" name="YTD compost" />
            <br />
            <br />
            AVG Compost/house:
            <input type="text" name="AVG compost" />
            <br />
            <br />
            Percent of compost:
            <input type="text" name="% compost" />
            <br />
            <br />
            <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModalScrollable"
            >
              Add
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModalScrollable"
            >
              New Entry
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#exampleModalScrollable"
              //binds getting data from database with button click
              onClick={this.viewEntries.bind(this)}
            >
              View Entry
            </button>
            <div className = {this.state.showEntriesDiv ? "showDiv" : "hidden"}>
              <CompostEntryList entries={this.state.entries}/>
            </div>
            


            {/* Modal */}
            <div
              className="modal fade"
              id="exampleModalScrollable"
              tabIndex={-1}
              role="dialog"
              aria-labelledby="exampleModalScrollableTitle"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-dialog-scrollable"
                role="document"
              >
                <div className="modal-content">
                  <div className="modal-header">
                    <h5
                      className="modal-title"
                      id="exampleModalScrollableTitle"
                    >
                      Add Compostables
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="form group">
                      <label htmlFor="exampleFormControlInput1">Date</label>
                      <input type="Date" name="Date" /> <br />
                      <label className="dropdownControl">
                        {" "}
                        Select Type of Compost:
                      </label>{" "}
                      <br />
                      {/* Example single danger button */}
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-success dropdown-toggle"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Vegetables
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">
                            Brocolli
                          </a>
                          <a className="dropdown-item" href="#">
                            Carrots
                          </a>
                          <a className="dropdown-item" href="#">
                            Spinach
                          </a>
                        </div>
                      </div>
                      <br /> <br />
                      {/* Example single danger button */}
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-danger dropdown-toggle"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Fruits
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">
                            Apples
                          </a>
                          <a className="dropdown-item" href="#">
                            Bananas
                          </a>
                          <a className="dropdown-item" href="#">
                            Berries
                          </a>
                        </div>
                      </div>
                      <br />
                      <br />
                      {/* Example single danger button */}
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-info dropdown-toggle"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Other
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="#">
                            Egg shells
                          </a>
                          <a className="dropdown-item" href="#">
                            Coffee Grounds
                          </a>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" className="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
};

export default Account;
