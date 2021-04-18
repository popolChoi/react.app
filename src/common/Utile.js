import { Component } from 'react';

export default class Utile extends Component {
  // 텍스트 분해
  static textDissect(text) {
    return text.split('\n').map(
      (v) => v.split('').map(
        (v2) => this.getConstantVowel(v2),
      ),
    );
  }

  // 유니코드 분리
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

    uni -= ga;

    const fn = parseInt(uni / 588);
    const sn = parseInt((uni - (fn * 588)) / 28);
    const tn = parseInt(uni % 28);

    let set = [kor];
    if (!(!f[fn] && !s[sn] && !t[tn])) {
      set = [f[fn], kor];
      if (t[tn]) {
        set = [f[fn], this.cjj2han(fn, sn), kor];
      }
    }

    return set;
  }

  // 유니코드 합성
  static cjj2han(cho = 0, jung = 0, jong = 0) {
    return String.fromCharCode(0xAC00 + 21 * 28 * cho + 28 * jung + jong);
  }

  static makeid(no) {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < no; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }
}
