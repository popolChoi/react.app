import React, { useState, useEffect, useRef, useCallback } from 'react';
// hook 왜쓰는거냐?
export default function Example(props) {
  const [_text, set_text] = useState('');
  const [i,setI] = useState(0);

  const {text, line} = props;
  const refText = useRef();

  useEffect(() => {
    const time = () =>{ 
      return setTimeout(() => {
        if(text[i]){
          set_text(_text+text[i])
          setI(i+1)
        }
      }, 30)
    }
    return _text === text ? ()=>{ clearInterval(time);}: ()=> time()
  }, [_text, i, text]);

  return (
    <>
      {_text}
      {line !== false ? (
          <font
            className="typing-line"
            ref={refText}
          />
        ) : <font ref={refText} />}
    </>
  );
}