

import React, { Component, Fragment } from 'react'
import { Comment, Header, Image, Accordion } from 'semantic-ui-react'
import {
    ade,
    matt,
    elliot,
    jenny,
    joe,
    stevie,
    chris,
    christian,
    justen,
    steve,
} from "resource/img/avatar";
import moment from "moment";
import 'moment/locale/ko';


import TextAreaFormView from "./view/TextAreaFormView";
import CommentView from "./view/CommentView";

export default class Container extends Component {
    selectLov=[
        { img:stevie, value: 'stevie', text: this.lovStyle(stevie,'stevie') },
        { img:ade, value: 'ade', text: this.lovStyle(ade,'ade')},
        { img:matt, value: 'matt', text: this.lovStyle(matt,'matt')},
        { img:elliot, value: 'elliot', text: this.lovStyle(elliot,'elliot')},
        { img:jenny, value: 'jenny', text: this.lovStyle(jenny,'jenny')},
        { img:joe, value: 'joe', text: this.lovStyle(joe,'joe')},
        { img:chris, value: 'chris', text: this.lovStyle(chris,'chris')},
        { img:christian, value: 'christian', text: this.lovStyle(christian,'christian')},
        { img:justen, value: 'justen', text: this.lovStyle(justen,'justen')},
        { img:steve, value: 'steve', text: this.lovStyle(steve,'steve')},
    ]
    lovStyle(src, id){
        return( 
        <Fragment>
            <Image 
            src={src}  
            spaced='right' 
            size='mini'
            style={{
                borderRadius: '.25rem',
                // maxHeight: '2em',
                width: 'auto'
            }}
             />
            <b>@{id}</b> 
        </Fragment>)

    }
    state = {
        reply: { 
            i:0,
            img: matt,
            id: 'Matt',
            time:moment().subtract(1, 'days'),
            text: 'How artistic!',
            reply:[]
        },
        comments : [
            { 
                img: matt,
                id: 'Matt',
                time:moment().subtract(1, 'days'),
                text: 'How artistic!',
                reply:[]
            },
            {
                img: elliot,
                id: 'Elliot Fu',
                time:moment().subtract(5, 'hours'),
                text: 'This has been very useful for my research. Thanks as well!',
                reply:[
                    {
                        img: jenny,
                        id: 'Jenny Hess',
                        time: moment(),
                        text: 'Elliot you are always so right :)',
                        // Reply:[]  
                    }
                ]  
            },
            {
                img: joe,
                id: 'Joe Henderson',
                time: moment().subtract(1, 'hours'),
                text: 'Dude, this is awesome. Thanks so much',
                reply:[]
            },
        ]
    }

  onCommentSet(vList){
    const {reply, comments} = this.state
    const img = this.selectLov.find((v)=> v.value === vList.selectvalue).img
    if(reply){
        this.state.comments[reply.i].reply.push(
            {
                img: img,
                id: vList.selectvalue,
                time: moment(),
                text: vList.textAreaValue,
            }
        )
        this.setState({ 
            reply: null,
            comments : this.state.comments,
         })
    }else {
        this.state.comments.push(
            {
                img: img,
                id: vList.selectvalue,
                time: moment(),
                text: vList.textAreaValue,
                reply:[]
            }
        )
        this.setState({ 
            reply: null,
            comments : this.state.comments,
         })
    }
     
  }

  onReply(reply){
    this.setState({reply})
  }

  onAccordion(){

  }

    render(){
        const {comments, reply} = this.state
        return (
            <Fragment>
                <Comment.Group threaded>
                    <Header as='h3' dividing>Comments</Header>
                    <div style={{
                        maxHeight: '30em',
                        maxWidth: '35em',
                        minWidth: '32em',
                        overflow: 'hidden visible'
                    }}>
                        
                        {comments.map((v, i)=>
                                <CommentView 
                                    v={v} 
                                    i={i}
                                    onReply={this.onReply.bind(this, {i, ...v })}
                                />
                        )}
                      
                    </div>
                   
                    <br />
                    <TextAreaFormView 
                        reply={reply}
                        selectLov={this.selectLov}
                        onCommentSet={this.onCommentSet.bind(this)}
                        onReply={this.onReply.bind(this)}
                    />
                </Comment.Group>
                
            </Fragment>

        )
    }

}

