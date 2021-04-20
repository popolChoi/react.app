import React, { Component, Fragment, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Input } from 'semantic-ui-react';
import Typography from 'common/typography';

const BarView = (props) => {
  const ref = useRef();
  const onClick = (e) => {
    const aa = [...ref.current.children];
    aa.forEach((e2) => {
      console.log();
      e2.firstChild.classList.remove('click');
    });
    e.target.classList.add('click');
  };
  const { contentLists, layBar } = props;
  return (
    <Fragment>
      <div className="lay-bar" style={layBar}>
        <div>
         
          {/* <Input
                    icon="search"
                    placeholder="Search..."
                    style={{width: '98%', float: 'left'}}
                    // value={this.state.value}
                    onChange={this.onChange.bind(this)}

                />
                <br />
                <br />

                <br /> */}
          <ul ref={ref}>
            { contentLists.map((v, i) => (
              <Link key={i} to={`${v.path}`}>
                <li onClick={(e) => onClick(e, ref)}>
                  <Typography
                    random
                    text={v.label}
                    line={false}
                  />
                </li>
              </Link>

            ))}
          </ul>
        </div>
      </div>
    </Fragment>
  );
};
export default BarView;
