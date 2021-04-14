import React, { Component } from "react";
import { TextArea, Button, Select, Icon, Divider } from 'semantic-ui-react'

import Utile from 'common/Utile'

class Typing extends Component {

    constructor(props) {
        super(props);
        const {hint} = this.props;

     
        this.text = hint?'안녕하세요.' :  `한글타이핑 효과 테스트입니다.`

        this.state = {
            text:'',
            text2:'',
            textAreaValue: this.text,
            disabled: true,
            typingSpeed: hint?50 : 100,
            style: {
                height: '100%'
            }
        }
    }
    

    componentDidMount(){

        // const {location} = this.props;
        // const {pathname = '', search = ''} = location
        // if(pathname === '/react.app' && search === '?index=y'){
        //     this.props.history.push('/Home')
        // }else{
            

        // }
        this.onTimeout();
    }

    set(key, v){ this.setState({[key]: v}) }

    onTimeout(){
        const {hint} = this.props;
        const {typingSpeed} = this.state;

        setTimeout(()=>{
            if(!hint){ 
                this.timeout = setInterval(()=>{
                    this.onTyping()
                }, typingSpeed);
            }
            this.onTyping2() 

        }, hint?1000: 0);
    }

    onTyping2(){
        /* 유니코드 분리, 합성 효과적용 */
        const {hint} = this.props;
        const {typingSpeed} = this.state;
        const arr = Utile.textDissect(this.text)

        const set = (v, time)=> {
            setTimeout(()=>{
                this.set('text2',v)
                if( this.text === this.state.text2) {
                    this.set('disabled', false )
                    if(hint){
                        setTimeout(()=>{
                            this.setState({
                                style:{
                                    height: '0%',
                                    margin: '0%'
                                }
                            },()=>{setTimeout(()=>{this.props.history.push('/Home')} , 700)})
                        }, 2000)
                    }
                   
                }
            }, typingSpeed * time)
        }
        let txt = '';
        let time = 1;

        //줄바꿈
        arr.forEach((txtList, ind)=>{
            txtList.forEach((v, i)=>{
                let ix = 0
                v.forEach((v2, j)=>{
                    set(txt+v[j],time)
                    time += 1 
                    ix = j
                })
                txt += v[ix]
                time += 1 
            })
            if(ind !== arr.length-1 ){
                txt+='\n'
            }
            time += 1 
        });
        // arr2.forEach((v, i)=>{
        //     let ix = 0
        //     v.forEach((v2, j)=>{
        //         if(v[j] !== this.text[i]){
        //             set(txt+v[j],time)
        //             time += 1 
        //         }else{
        //             ix = j
        //         }
        //     })
        //     txt += v[ix]
        //     set(txt, time)
        //     time += 1 
        // })
    }

    onTyping(){
        const a = this.text
        const b = this.state.text
        const set = a[b.length]
        this.set('text',b + set)
        if(this.text === this.state.text) {
            clearInterval(this.timeout);
        }
    }

    onChange(e,v){
        // this.text = v.value
        this.set('textAreaValue',v.value)
    }

    onClick(e, v){
        this.text = this.state.textAreaValue
        this.setState({
            text:'',
            text2:'',
            disabled: true
        },()=>{

            this.onTimeout();
        })
    }

    onSelectChange(e, v){
        this.set('typingSpeed',v.value)
    }

    render() {
        const {hint} = this.props;
        const {style, text, text2, textAreaValue, typingSpeed, disabled} = this.state;
        return (
            <React.Fragment>
                <div 
                    className='typing' 
                    style={style}
                >
                    {style.height !== '0%'?
                    <React.Fragment>
                        <div className='typing-tx'>{text2}<font className='typing-line' /></div>
                    {!hint?
                        <React.Fragment>
                            <div className='typing-tx'>{text}<font className='typing-line' /></div>
                            <br />
                            <div>
                                <TextArea 
                                    value={textAreaValue} 
                                    onChange={this.onChange.bind(this)}
                                    disabled={disabled} 
                            
                                />
                                <br />
                                <br />
                                <div style={{ fontSize: 'medium' }} >
                                속도 
                                <Select
                                    value={typingSpeed}
                                    disabled={disabled} 
                                    onChange={this.onSelectChange.bind(this)}
                                    options={ [...[...new Array(10)].map((v, i)=>({key: i, value: 25*(i+1), text: `${25*(i+1)}`}))]} 
                                    style={{ marginRight: '10px' }}
                                />
                                <Button 
                                    primary 
                                    onClick={this.onClick.bind(this)} 
                                    disabled={disabled} 
                                    loading={disabled} 
                                >GO</Button> 

                                </div>
                    
                            </div>
                            <br />
                            <Icon disabled name='github' />



                        </React.Fragment>
                    :[]}
                    </React.Fragment>
                    :[]}
                </div>
                
            </React.Fragment>
        );
    }
}

export default Typing;
