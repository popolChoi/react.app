import React, { Component, Fragment } from 'react'
import { Button, Comment, Form, Header, Select, Image, Icon } from 'semantic-ui-react'


//https://emoji-api.com/emojis?access_key=35d45f7ca397da901224bc22167568b166a27f85

export default class TextAreaFormView extends Component {


    state ={
        selectvalue: 'stevie',
        textAreaValue: '',
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

