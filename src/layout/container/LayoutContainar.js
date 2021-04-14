import React, { Component, Fragment } from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
import { Divider, Loader, Segment, Dimmer } from "semantic-ui-react";

import BarView from "../view/BarView";



class LayoutContainar extends Component {
  width = '0%' //300px
  state = {
    layBarBut: {},
    layBar: { width: this.width },
    layContainer: { width: `calc(100% - ${this.width})` },
  };

  onClick = () => {
    const { layBar } = this.state;
    if (layBar.width === "0%") {
      this.setState({
        layBarBut: { transform: "rotate(180deg)" },
        layBar: { width: "300px" },
        layContainer: { width: "calc(100% - 300px)" },
      });
    } else {
      this.setState({
        layBarBut: {},
        layBar: { width: "0%" },
        layContainer: { width: "100%" },
      });
    }
  };

  render() {
    const { cayoutContent, contentLists } = this.props;
    const { layContainer, layBar, layBarBut } = this.state;
    return (
      <Fragment>
        {/* <Dimmer inverted><Loader active/></Dimmer> */}


        <div className="lay-main">
          <BarView 
            layBar = {layBar}
            contentLists = {contentLists}
          />
          
          <div className="lay-container" style={layContainer} >
            <div className="lay-header">
              <button
                className="ui icon right button huge lay-bar-but"
                onClick={this.onClick}
                style={{ background: "white" }}
              >
                <RiArrowLeftSLine style={layBarBut} />
              </button>
            </div>

            <div style={{
               height: '100%',
               width: '100%',
               padding: '10px 10% 10px 10%'
            }}>
              <Divider horizontal >🔨<a href={window.origin+"/react.app?index=y"}>react.app</a></Divider>
              {cayoutContent}
              <Divider horizontal >🔨</Divider>
            </div>

              {/* <div className="lay-content-test">text</div> */}
          </div>

        </div>
      </Fragment>
    );
  }
}
export default LayoutContainar;


