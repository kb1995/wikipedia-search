import React, { Component } from "react";
import "./App.css";
import $ from "jquery";
import PageList from "./components/pageList";

const searchURL =
  "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=";

class App extends Component {
  state = {
    isLoaded: false,
    showInput: false,
    text: "",
    results: []
  };

  handleInput = e => {
    this.setState({
      text: e.target.value
    });
  };

  // using jquery ajax, in order to get access to jsonp
  handleEnter = e => {
    let URL = searchURL + this.state.text;
    if (e.which === 13 && this.state.text !== "") {
      $.when(
        $.ajax({
          url: URL,
          dataType: "jsonp"
        })
      ).then(result => {
        this.setState({
          isLoaded: true,
          text: "",
          results: result
        });
      });
    }
  };

  InitialButton = () => {
    this.setState({
      showInput: true
    });
  };

  render() {
    // before first search is done
    if (this.state.showInput && this.state.isLoaded === false) {
      return (
        <div className="AppBefore">
          <input
            className="input animated bounceInDown"
            onKeyPress={this.handleEnter}
            type="text"
            onChange={this.handleInput}
            value={this.state.text}
            placeholder="Wikipedia..."
          />
          <a
            className="animated bounceInDown"
            href="https://en.wikipedia.org/wiki/Special:Random"
            target="_blank"
          >
            <button className="random">Random page</button>
          </a>
        </div>
      );
    }

    // after the first search is completed
    if (this.state.isLoaded && this.state.results !== []) {
      return (
        <div className="AppAfter ">
          <input
            className="input animated fadeIn"
            onKeyPress={this.handleEnter}
            type="text"
            onChange={this.handleInput}
            value={this.state.text}
            placeholder="Wikipedia..."
          />{" "}
          <br />
          <a
            className="animated fadeIn"
            href="https://en.wikipedia.org/wiki/Special:Random"
            target="_blank"
          >
            <button className="random">Random page</button>
          </a>
          <PageList
            items={this.state.results}
            heading={this.state.results[1]}
          />
        </div>
      );
    }

    return (
      <div className="AppBefore">
        <button className="button" onClick={this.InitialButton}>
          Start Learning!
        </button>
      </div>
    );
  }
}

export default App;
