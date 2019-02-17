import React, { Component } from "react";
import ReactDOM from "react-dom";
import { IntlProvider, addLocaleData } from "react-intl";
import en from "react-intl/locale-data/en";
import es from "react-intl/locale-data/es";
import fr from "react-intl/locale-data/fr";
import messages from "./messages";
import NameTags from "./namesTags";
import "./styles.css";
addLocaleData([...en, ...es, ...fr]);
class App extends Component {
  constructor() {
    super();
    this.state = {
      textInput: [],
      locale: "en-US",
      langs: [
        { label: "English", value: "en-US" },
        { label: "French", value: "fr-FR" },
        { label: "Spanish", value: "es-ES" }
      ]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
  }

  handleLanguageChange(e) {
    this.setState({ locale: e.target.value });
  }
  handleChange(e) {
    let totaltext = [];
    e.target.value.split("\n").map(function(item) {
      totaltext.push(item);
    });
    var filtered = totaltext.filter(function(el) {
      return el != null && el !== "";
    });
    this.setState({ textInput: filtered });
  }
  render() {
    return (
      <IntlProvider
        locale={this.state.locale}
        messages={messages[this.state.locale]}
      >
        <div className="App">
          <div style={{ display: "flex" }}>
            <div className="switchLang">
              Change Language:
              <select
                value={this.state.locale}
                onChange={this.handleLanguageChange}
              >
                {this.state.langs.map((lang, index) => (
                  <option value={lang.value}>{lang.label}</option>
                ))}
              </select>
            </div>
            <div className="textAreafield">
              <label htmlFor="textarea">Enter list of names:</label>
              <textarea
                id="textarea"
                cols="80"
                rows="10"
                onChange={this.handleChange}
              />
            </div>
          </div>
          {this.state.textInput && this.state.textInput.length ? (
            <NameTags tags={this.state.textInput} />
          ) : (
            ""
          )}
        </div>
      </IntlProvider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
