import React, { Component, Fragment } from 'react'
import { Button, Comment, Form, Header, Select, Image, Icon, Loader, Dimmer } from 'semantic-ui-react'


import Utile from 'common/Utile'


//https://emoji-api.com/emojis?access_key=35d45f7ca397da901224bc22167568b166a27f85

export default class TextAreaFormView extends Component {

  

    state ={
        selectvalue: 'stevie',
        textAreaValue: '',
    }


    componentDidMount(){
        const str = 'Hello, world!'

        let txt = '';
        let time = 1;
        const arr = Utile.textDissect(str)
        const set = (v, t)=> {
          setTimeout(()=>{ this.setState({textAreaValue: v })}, 70*t)
          if( v === str){

            // Utile.loader()

          }
        }

        
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




     
    
    }


    onChange(n,e,v){
        this.setState({[n]: v.value})
    }
    onClick(){
        this.props.onReply(null)

    }
    onCommentSet(e,v){
        const {onCommentSet} = this.props
        if(onCommentSet){
            onCommentSet(this.state)
            this.setState({textAreaValue:''})
        }
    }        

    render(){
        const {
            selectvalue,
            textAreaValue
        } = this.state

        const {
            selectLov,
            reply,
        } = this.props

        return(   
            <Form reply>
                <div style={{marginBottom: '5px', float: 'left'}}>
                    <Select
                        value={selectvalue}
                        // disabled={disabled} 
                        onChange={this.onChange.bind(this, 'selectvalue')}
                        options={selectLov} 
                        size='small'
                        style={{ marginRight: '7px', minWidth:'11em' }}
                    /> 

                    {reply?(
                        <Fragment>
                            <Icon disabled name='angle double right' />
                            <div 
                            onClick={this.onClick.bind(this)}
                            className="ui selection dropdown"
                            style={{ 
                                marginLeft: '5px', 
                                minWidth:'11em',
                            }}>
                            <div className="divider text">
                            <Image 
                                src={reply.img}  
                                spaced='right' 
                                size='mini'
                                style={{
                                    borderRadius: '.25rem',
                                    maxHeight: '2em',
                                    width: 'auto'
                                }}
                            />
                            </div>
                               <b>@{reply.id}</b> 
                            </div>
                        </Fragment>
                    ) :[]}
                </div>
              

                <Form.TextArea 
                    value={textAreaValue}
                    onChange={this.onChange.bind(this, 'textAreaValue')}
                />
                <Button 
                    content='Add Reply' 
                    labelPosition='left' 
                    icon='edit' 
                    primary 
                    onClick={this.onCommentSet.bind(this)}
                    disabled={!textAreaValue}
                />
            </Form>
        )
    }
}

