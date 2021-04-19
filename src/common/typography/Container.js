import React, { PureComponent, Fragment } from 'react';

export default class Container extends PureComponent {
  refText = React.createRef();

  constructor(props) {
    super(props);
    const { text } = this.props;
    this._text = text;
    this.state = {
      text: '',
      typingSpeed: 50,
    };
  }

  componentDidMount() {
    this.onTimeout();
  }

  componentWillUnmount() {
    clearInterval(this.timeout);
    // const { random } = this.props;
    // if (random) {
    //   const node = this.refText.current.parentNode;
    //   node.removeEventListener('mouseover');
    //   node.removeEventListener('mouseout');
    // }
  }

  onTimeout() {
    const { typingSpeed } = this.state;
    setTimeout(() => {
      this.timeout = setInterval(() => {
        this.onTyping();
      }, typingSpeed);
    }, 500);
  }

  onTyping() {
    const a = this._text;
    const b = this.state.text;
    const set = a[b.length];
    // console.log(this._text.length - b.length, a[this._text.length - b.length]);

    this.setState((prevState) => ({ text: prevState.text + set }));
    if (this._text === this.state.text) {
      clearInterval(this.timeout);

      const { random } = this.props;
      if (random) {
        const node = this.refText.current.parentNode;
        node.addEventListener('mouseover', (e) => this.onMouseover(e));
        node.addEventListener('mouseout', (e) => {  this.setState({ text: this.props.text }, () => clearInterval(this.timeout));});
      }
  
    }
  }

  onMouseover() {
    const { typingSpeed } = this.state;
    setTimeout(() => {
      this.setState({ text: this.props.text }, () => clearInterval(this.timeout));
    }, 200);

    this.timeout = setInterval(
      () => this.setState((prevState) => ({ text: Math.random().toString(36).substr(2, 11) })),
      20,
    );
  }

  render() {
    const { text } = this.state;
    const { line } = this.props;

    return (
      <Fragment>
        {text}
        {line !== false ? (
          <font
            className="typing-line"
            ref={this.refText}
          />
        ) : <font ref={this.refText} />}

      </Fragment>
    );
  }
}
