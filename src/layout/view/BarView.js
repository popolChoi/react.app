import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Input } from "semantic-ui-react";

class BarView extends Component {

    onClick(e){
        // console.log(this.ref.children)

        const aa = [...this.ref.children]
        aa.forEach((e2) => {
            console.log()
            e2.firstChild.classList.remove('click')
        })
        e.target.classList.add('click')
    }  

    onChange(e, v){
        console.log(e, v.value)
    }
    
    render() {
        const { contentLists, layBar } = this.props;
        return (
        <Fragment>
            <div className="lay-bar" style={layBar}>
                 <div>
                {/*<Input
                    icon="search"
                    placeholder="Search..."
                    style={{width: '98%', float: 'left'}}
                    // value={this.state.value}
                    onChange={this.onChange.bind(this)}

                />
                <br />
                <br />
                <br /> */}
                    <ul ref={(e)=>this.ref = e}>
                    { contentLists.map((v, i)=> <Link key={i} to={`/react.app${v.path}`}><li onClick={this.onClick.bind(this)}>{v.label}</li></Link>)}
                    </ul>
                </div>
            </div>
        </Fragment>
        );
    }
}
export default BarView;
