import React from "react";
import { VscInfo } from "react-icons/vsc";
import AlertMsg from "./alertMsg";

const row = {
  fontSize: "12px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  backgroundColor: "#282c34",
  marginTop: "15px",
};
const column = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
};

const input = {
  marginLeft: "10px",
  border: "solid black 1.5px",
  width: "250px",
};
const DEFINATIONS = {
  MAIN_QUERY: `This is the main query which is similar to just doing a normal google\nsearch with out any special details`,
  EXACT:
    "If you want an exact match\nFor Eg you are looking to search some result with exact same error\n" +
    "\nYou can achieve the same by using quotes in your goolge result",
  SITE:
    "If you want results from only one particular site\nFor eg:- Stack Overflow or youtube.com\n" +
    "\nYou can achieve the same by doing site:site.com in your google query",
  EXCLUDE:
    "You are trying to search something but some irrelavent result keywords keep on filling your screen\nUse this to exclude irrelevant keywords\n" +
    "\nYou can achieve the same by using a '-' in front of the keyword you want to avoid in your results",
  YEAR:
    "Maybe you are working on a legacy project or something very recent\nGet the results that fit your timeline\n" +
    "\nYou can achieve the same by using before: and after: and than the timeline you desire",
};

export default class BetterSearch extends React.Component {
  defaultState = {
    query: "",
    exact: false,
    site: "",
    exclude: "",
    before: "",
    after: "",

    showPopUp: {
      query: false,
      exact: false,
      site: false,
      exclude: false,
      year: false,
    },
  };

  state = this.defaultState;

  validateInput() {
    const { query, before, after } = this.state;
    const errors = [];
    if (!query) errors.push("Main Query string cannot be empty");
    if (before && parseInt(before) < 1000)
      errors.push("Before year cannot be less than 1000");
    if (before && parseInt(after) > 2021)
      errors.push("After cannot be beyond 2021");
    return errors.join("\n");
  }

  handleInputChange(e, type) {
    this.setState({
      [type]: e,
    });
  }

  handleSearch() {
    const { query, before, after, exact, exclude, site } = this.state;
    const url = "https://www.google.com/search?q=";
    const issues = this.validateInput();

    if (issues) return alert(issues);

    const textQ = exact
      ? `"${query.split(" ").join("+")}"`
      : query.split(" ").join("+");
    const beforeQ = before ? "before%3A" + before : null;
    const afterQ = after ? "after%3A" + after : null;
    const siteQ = site ? "site%3A" + site : null;
    const excludeQ = exclude
      ? exclude
          .split(" ")
          .map((e) => `-${e}`)
          .join("+")
      : null;
    const search =
      url +
      [beforeQ, afterQ, textQ, excludeQ, siteQ].filter((e) => e).join("+");
    window.open(search);
  }

  handleClear() {
    this.setState(this.defaultState);
  }

  closeModal(type) {
    this.setState({ showPopUp: { ...this.state.showPopUp, [type]: false } });
  }

  showModal(type) {
    this.setState({ showPopUp: { ...this.state.showPopUp, [type]: true } });
  }

  render() {
    const { showPopUp } = this.state;
    return (
      <div style={column}>
        <div style={row}>
          <div> Main Query String :- </div>
          <input
            style={input}
            type="text"
            onChange={(e) => this.handleInputChange(e.target.value, "query")}
            value={this.state.query}
          ></input>
          <abbr style={{ marginLeft: "5px" }} title={DEFINATIONS.MAIN_QUERY}>
            <VscInfo fontSize="20px" onClick={() => this.showModal("query")} />
            <AlertMsg
              show={showPopUp.query}
              msg={DEFINATIONS.MAIN_QUERY}
              onClose={() => this.closeModal("query")}
            />
          </abbr>
        </div>
        <div style={row}>
          <div> Exclude Keywords :- </div>
          <input
            style={input}
            type="text"
            onChange={(e) => this.handleInputChange(e.target.value, "exclude")}
            value={this.state.exclude}
          ></input>
          <abbr style={{ marginLeft: "5px" }} title={DEFINATIONS.EXCLUDE}>
            <VscInfo
              fontSize="20px"
              onClick={() => this.showModal("exclude")}
            />
            <AlertMsg
              modalName="excludeModal"
              show={showPopUp.exclude}
              msg={DEFINATIONS.EXCLUDE}
              onClose={() => this.closeModal("exclude")}
            />
          </abbr>
        </div>
        <div style={row}>
          <div> Particular Site URL :- </div>
          <input
            style={input}
            type="text"
            onChange={(e) => this.handleInputChange(e.target.value, "site")}
            value={this.state.site}
          ></input>
          <abbr style={{ marginLeft: "5px" }} title={DEFINATIONS.SITE}>
            <VscInfo fontSize="20px" onClick={() => this.showModal("site")} />
            <AlertMsg
              modalName="siteModal"
              show={showPopUp.site}
              msg={DEFINATIONS.SITE}
              onClose={() => this.closeModal("site")}
            />
          </abbr>
        </div>
        <div style={row}>
          <div>{"Year , Before :-"} </div>
          <input
            style={{ ...input, width: "100px" }}
            type="number"
            onChange={(e) =>
              this.handleInputChange(parseInt(e.target.value), "before")
            }
            value={this.state.before}
          ></input>
          <div>After :-</div>
          <input
            style={{ ...input, width: "100px" }}
            type="number"
            onChange={(e) =>
              this.handleInputChange(parseInt(e.target.value), "after")
            }
            value={this.state.after}
          ></input>
          <abbr style={{ marginLeft: "5px" }} title={DEFINATIONS.YEAR}>
            <VscInfo fontSize="20px" onClick={() => this.showModal("year")} />
            <AlertMsg
              modalName="yearModal"
              show={showPopUp.year}
              msg={DEFINATIONS.YEAR}
              onClose={() => this.closeModal("year")}
            />
          </abbr>
        </div>
        <div style={row}>
          <div>Search Exact Match :- </div>
          <input
            style={{ margin: "10px", border: "solid black 1.5px" }}
            type="checkBox"
            onChange={(e) => this.handleInputChange(!this.state.exact, "exact")}
            value={this.state.exact}
          ></input>
          <abbr style={{ marginLeft: "5px" }} title={DEFINATIONS.EXACT}>
            <VscInfo fontSize="20px" onClick={() => this.showModal("exact")} />
            <AlertMsg
              modalName="exactModal"
              show={showPopUp.exact}
              msg={DEFINATIONS.EXACT}
              onClose={() => this.closeModal("exact")}
            />
          </abbr>
        </div>
        <div style={{ ...row, justifyContent: "center" }}>
          <button className="searchBtn" onClick={() => this.handleSearch()}>
            Search
          </button>
          <button className="clearBtn" onClick={() => this.handleClear()}>
            Clear All
          </button>
        </div>
      </div>
    );
  }
}
