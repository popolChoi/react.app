import React, { Component, Fragment } from 'react'
import { Button, Comment, Form, Header, Select, Image, Icon } from 'semantic-ui-react'


//https://emoji-api.com/emojis?access_key=35d45f7ca397da901224bc22167568b166a27f85

export default class TextAreaFormView extends Component {

    state ={
        collapsed: false
    }

    onClick(n,e,v){
    this.setState({collapsed: !this.state.collapsed})
    }


    setComment(v, i,level ){
        return (
            <Fragment>
                <Comment.Avatar src={v.img} key={i}  />
                    <Comment.Content >
                        <Comment.Author as='a'>{v.id}</Comment.Author>
                        <Comment.Metadata>
                        <div>{v.time.fromNow()}</div>
                        </Comment.Metadata>
                        <Comment.Text 
                            style={{
                                whiteSpace:'pre-wrap'
                            }}
                        >{v.text}</Comment.Text>
                        <Comment.Actions>
    
                        {v.reply&& v.reply.length>0?
                            <Comment.Action onClick={this.onClick.bind(this, i)}>댓글({v.reply.length})</Comment.Action>
                        :[]}
                        </Comment.Actions>
                </Comment.Content>
            </Fragment>
        )
      }
    
   
    render(){
        const {
            collapsed
        } = this.state

        const {
            i,v
        } = this.props

        return( 
            
        <Fragment>
            <Comment key={i} onClick={this.props.onReply.bind(this, {i, ...v })} >
                {this.setComment(v, i+'lb')}
                {v.reply && v.reply.length > 0?
                    <Comment.Group collapsed={collapsed}>
                        {v.reply.map((v2, j)=>
                            <Comment key={i+j}>
                                {this.setComment(v2, i, true)}
                            </Comment>
                        )}
                    </Comment.Group>
                :[]}  
            </Comment>
        </Fragment>
        )
    }
}

