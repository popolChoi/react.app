import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { RiArrowLeftSLine } from "react-icons/ri";
import { Input } from "semantic-ui-react";

class LayoutContainar extends Component {
  state = {
    layBarBut: {},
    layBar: { width: "300px" },
    layContainer: { width: "calc(100% - 300px)" },
  };

  onClick = () => {
    const { layBar } = this.state;
    if (layBar.width === "0%") {
      this.setState({
        layBarBut: {},
        layBar: { width: "300px" },
        layContainer: { width: "calc(100% - 300px)" },
      });
    } else {
      this.setState({
        layBarBut: { transform: "rotate(180deg)" },
        layBar: { width: "0%" },
        layContainer: { width: "100%" },
      });
    }
  };

  render() {
    const { cayoutContent } = this.props;
    const { layContainer, layBar, layBarBut } = this.state;
    return (
      <Fragment>
        <div className="lay-main">
          <div className="lay-bar" style={layBar}>
            <Input
              icon="search"
              placeholder="Search..."
              // value={this.state.value}
              onChange={(e, v) => console.log(e, v.value)}
            />
            <ul>
              <li></li>
              <li></li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/test1">test1</Link>
              </li>
            </ul>
          </div>
          <div className="lay-container" style={layContainer}>
            <div className="lay-header">
              <button
                className="ui icon right button huge lay-bar-but"
                onClick={this.onClick}
                style={{ background: "white" }}
              >
                <RiArrowLeftSLine style={layBarBut} />
              </button>
            </div>
            <div className="lay-content">
              {cayoutContent}
              {/* <div className="lay-content-test">text</div> */}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default LayoutContainar;
