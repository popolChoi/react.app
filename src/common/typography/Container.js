import React, { PureComponent, Fragment } from 'react';

export default class Container extends PureComponent {
  // refText = React.createRef();
  _text2 = ''

  constructor(props) {
    super(props);
    const { text } = this.props;
    this._text = text;
    this.state = {
      text: '',
      typingSpeed: 50,
      _mouseEnter: false,
    };
  }

  componentDidMount() {
    //
    setTimeout(() => {
      this.onTimeout();
    }, 300);
  }

  componentWillUnmount() {
    clearInterval(this.timeout);
    this.timeout = undefined;
  }

  onTimeout() {
    const { typingSpeed } = this.state;

    this.timeout = setInterval(() => {
      this.onTyping();
    }, typingSpeed);
  }

  onTyping() {
    const a = this._text;
    const b = this._text2;
    const set = a[b.length];

    this.setState((prevState) => {
      this._text2 += set;
      const string = 'LOVE♥★';
      return {
        text: (

          this._text2.split('').map((e, i) => {
            if (i < this._text2.length - 4) {
              return e;
            }

            return (
              <span key={i}>
                {
                  // Math.random().toString(36).substr(2, 1)
                  string.split('')[Math.floor(Math.random() * string.length)]
                }
              </span>
            );
          })

        ),
      };
    });
    if (this._text === this._text2) {
      clearInterval(this.timeout);
      this.timeout = undefined;
      this.setState({ _mouseEnter: true, text: this._text });
    }
  }

  onMouseover() {
    // const { typingSpeed } = this.state;
    // const text = this.props.text.split('');
    // this.timeout = setInterval(
    //   () => this.setState((prevState) => ({
    //     text: (<span>{text.map((e, i) => <span key={i}>{this.props.text[Math.floor(Math.random() * this.props.text.length)]}</span>)} </span>),
    //   })),
    //   typingSpeed ?? 50,
    // );

    // setTimeout(() => {
    //   this.setState({ text: this.props.text }, () => clearInterval(this.timeout));
    // }, 400);

    this._text2 = '';
    this.setState({ _mouseEnter: false }, () => this.onTimeout());
  }

  render() {
    const { text = '', _mouseEnter, text2 } = this.state;
    const { line } = this.props;

    return (
      <Fragment>
        <span
          onMouseEnter={_mouseEnter ? (e) => { this.onMouseover(e); } : null}
          // onMouseLeave={_mouseEnter ? (e) => {
          //   console.log('onMouseLeave');
          //   this.setState(
          //     { text: this.props.text },
          //     () => {
          //       clearInterval(this.timeout);
          //       this.timeout = undefined;
          //     },
          //   );
          // } : null}
          className="typography"
          // ref={this.refText}
        >
          {text}

          {line !== false ? (
            <font className="typing-line" />
          ) : <font />}
        </span>

      </Fragment>
    );
  }
}
