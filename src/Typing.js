import React, { Component } from "react";

// //유니코드 분리
// function getConstantVowel(kor) {
//     const f = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ',
//                'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ',
//                'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
//     const s = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ',
//                'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ',
//                'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'];
//     const t = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ',
//                'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ',
//                'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ',
//                'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

//     const ga = 44032;
//     let uni = kor.charCodeAt(0);

//     uni = uni - ga;

//     let fn = parseInt(uni / 588);
//     let sn = parseInt((uni - (fn * 588)) / 28);
//     let tn = parseInt(uni % 28);


//     if(!f[fn] && !s[sn] && !t[tn]){
//         return [kor]
//     }else {
//         let set = [f[fn], kor]
//         if(t[tn]){
//             set = [
//                 f[fn],
//                 cjj2han(fn,sn),
//                 kor,
//             ]
//         }
//         return set;

//     }
// }

// //유니코드 합성
// function cjj2han( cho = 0, jung = 0, jong = 0 ) {
// 	return String.fromCharCode( 0xAC00 + 21*28*cho + 28*jung + jong );
// }

class Typing extends Component {
    text = '안녕하세요.'
    state = {
        text:'',
        style: {
            height: '100%'
        }
    }
    componentDidMount(){
        
        // const arr = this.text.split('').map((v)=>getConstantVowel(v))
        // this.textArr = arr;

        setTimeout(()=>{
            this.timeout = setInterval(()=>{
                this.onTyping()
            }, 150);
        }, 2000);
    }

    onTyping(){
        const a = this.text
        const b = this.state.text
        const set = a[b.length]

        this.setState({
            text: b + set
        },()=>{
            if(this.text === this.state.text) {
                clearInterval(this.timeout);
                setTimeout(()=>{
                    this.setState({style:{
                        height: '0%',
                        margin: '0%'
                    }},()=>{
                        setTimeout(()=>{
                            this.props.history.push('/react.app/Home')
                        }, 700);
                    })
                }, 3000);
            }
        })
    }

    render() {
        return (
            <React.Fragment>
                
                <div className='typing' style={this.state.style}>
                    {this.state.style.height !== '0%'?
                        <div>
                            {this.state.text}<font className='typing-line' />
                        </div>
                    :[]}
                </div>
            </React.Fragment>
        );
    }
}

export default Typing;
