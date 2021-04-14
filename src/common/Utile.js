import { Component } from 'react'
import { Segment, Loader } from 'semantic-ui-react'

export default class Utile extends Component  {

  static loader = () => (
    <Segment>
      <Loader active />
    </Segment>
  )

    //텍스트 분해
    static textDissect(text){
        return text.split('\n').map(
          v=>v.split('').map(
              v2=>this.getConstantVowel(v2)
          )
        );
    }

    //유니코드 분리
    static getConstantVowel(kor) {
        const f = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ',
                   'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ',
                   'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
        const s = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ',
                   'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ',
                   'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'];
        const t = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ',
                   'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ',
                   'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ',
                   'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
    
        const ga = 44032;
        let uni = kor.charCodeAt(0);
    
        uni = uni - ga;
    
        let fn = parseInt(uni / 588);
        let sn = parseInt((uni - (fn * 588)) / 28);
        let tn = parseInt(uni % 28);

    
        let set = [kor];
        if(!(!f[fn] && !s[sn] && !t[tn])){
            set = [f[fn], kor]
            if(t[tn]){
                set = [f[fn],this.cjj2han(fn,sn), kor, ]
            }
            
        }

        return set;
    }

    //유니코드 합성
    static cjj2han( cho = 0, jung = 0, jong = 0 ) {
        return String.fromCharCode( 0xAC00 + 21*28*cho + 28*jung + jong );
    }


}