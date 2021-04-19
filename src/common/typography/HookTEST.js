import React, { useState, useEffect, useRef, useCallback } from 'react';
// hook 왜쓰는거냐?
const Example = (props)=> {
  const [_text, set_text] = useState('');
  const [i,setI] = useState(0);

  const {text, line} = props;
  const refText = useRef();
  const t = ()=> setInterval(()=>{set_text(Math.random().toString(36).substr(2, 11))},20)

  useEffect(() => {
    const time = () =>{ 
      if(text.length !== i){
        return setTimeout(() => {
          if(text[i]){
            set_text(_text+text[i])
            setI(i+1)
          }
        }, 30)
      }else {
      }
    
    }


    return _text === text ? ()=>{
       clearInterval(time);
       const node = refText.current.parentNode;
       console.log('useEffect');
       node.addEventListener('mouseover', (e) => {t(); } );

       node.addEventListener('mouseout', (e) => { 
        setTimeout(() => {set_text(text); clearInterval(t);}, 300)

        });

      }:time()
        
      
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


export default Example;