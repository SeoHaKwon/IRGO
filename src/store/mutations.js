export default {
  SET_IMGTOTXT (state, Txt) {
    if (Txt.indexOf('010-') !== -1) {
      const TxtNumber = Txt.substr(Txt.indexOf('010-'), 13)
      state.result = '당신의 휴대폰 번호는 : ' + TxtNumber + ' 입니다.'
    } else {
      if (Txt.indexOf('010.') !== -1) {
        const TxtNumber = Txt.substr(Txt.indexOf('010.'), 13)
        state.result = '당신의 휴대폰 번호는 : ' + TxtNumber + ' 입니다.'
      } else {
        state.result = '빛이 반사되지 않도록 주의해서 다시 찍어주세요'
        state.captureImg = ''
        // state.logs = result.text
      }
    }
    const emailTxt = Txt.substr(Txt.indexOf('@'))
    const emailAddress = emailTxt.substring(1, emailTxt.indexOf('.'))
    state.result = `${state.result} , 이메일 도메인주소는 ${emailAddress} 입니다.`
  }
}
