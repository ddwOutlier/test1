/*

*/

const qnaList = [
  {
    q: '1. 만석인 인문관 엘베 속 어렴풋이 아는 동기와 눈이 마주쳤다. 이때 나는?',
    a: [
      { answer: 'a. 뻘줌하군,,, 간단하게 눈인사 정도 건넨다.', type: ['ISTJ','ISFJ','INFJ','INTJ','ISTP','ISFP','INFP','INTP'] },
      { answer: 'b. ㅎㅇㅎㅇ 너도 (전공) 들으러가?', type: ['ESTJ','ESFJ','ENFJ','ENTJ','ESTP','ESFP','ENFP','ENTP'] },
    ]
  },
  {
    q: '2. 랩실에 갔더니 동기가 울고 있다. "4시간째 코드짰는데, 갑자기 컴퓨터 전원이 꺼졌어,,"',
    a: [
      { answer: 'a. 헉 괜찮아? 어떡해,, 급한거야? 마이쮸(or 술) 먹을래?', type: ['ISFJ','INFJ','ISFP','INFP','ESFJ','ENFJ','ESFP','ENFP'] },
      { answer: 'b. 엥 컴퓨터가 갑자기 꺼졌다고? 낡아서 그런가,, 뭐하고 있었는데? ', type: ['ISTJ','INTJ','ISTP','INTP','ESTJ','ENTJ','ESTP','ENTP'] },
    ]
  },
    {
    q: '3. 프로젝트 아이디어를 나누는 시간, 둘 중 나와 더 가까운 모습은?',
    a: [
      { answer: 'a. 이미 나온 의견에 대하여 분석하고 질문하는 스타일', type: ['ISTJ','ISFJ','ISTP','ISFP','ESTJ','ESFJ','ESTP','ESFP'] },
      { answer: 'b. 생각나는 아이디어를 적극적으로 던지고 보는 스타일', type: ['INFJ','INTJ','INFP','INTP','ENFJ','ENTJ','ENFP','ENTP'] },
    ]
  },
    {
    q: '4. 프로젝트 진행 시, 당신이 주로 사용하는 것은?',
    a: [
      { answer: 'a. 선례연구에서 많이 활용한 모델', type: ['ISTJ','ISFJ','ISTP','ISFP','ESTJ','ESFJ','ESTP','ESFP'] },
      { answer: 'b. 발표된 지 얼마 안된 핫한 트렌드 모델', type: ['INFJ','INTJ','INFP','INTP','ENFJ','ENTJ','ENFP','ENTP'] },
    ]
  },
  {
    q: '5. 동기들과 같이 걸어가던 중, 저 멀리 교수님이 보인다. 이때 나는?',
    a: [
      { answer: 'a. 다른 동기들이 인사하면 따라서 인사한다.', type: ['ISTJ','ISFJ','INFJ','INTJ','ISTP','ISFP','INFP','INTP'] },
      { answer: 'b. 누구보다 빠르게 남들과는 다르게 먼저 인사한다.', type: ['ESTJ','ESFJ','ENFJ','ENTJ','ESTP','ESFP','ENFP','ENTP']},
    ]
  },
   {
    q: '6. 팀플 시에 더 선호하는 방식은? ',
    a: [
      { answer: 'a. 큰 틀만 잡아두고 즉흥적으로 진행하는 방식', type: ['ISTP','ISFP','ESTP','ESFP','INFP','INTP','ENFP','ENTP'] },
      { answer: 'b. 세부적인 규칙을 정해 진행하는 방식', type: ['ISTJ','ISFJ','ESTJ','ESFJ','INFJ','INTJ','ENFJ','ENTJ'] },
    ]
  },
  {
    q: '7. 이 테스트를 하면서 드는 생각은?',
    a: [
      { answer: 'a. 아무 생각 없다.', type: ['ISTJ','ISFJ','ISTP','ISFP','ESTJ','ESFJ','ESTP','ESFP'] },
      { answer: 'b. 이걸로 무슨 결과를 도출할 수 있을지 의심된다.', type:['INFJ','INTJ','INFP','INTP','ENFJ','ENTJ','ENFP','ENTP'] },
    ]
  },
  {
    q: '8. 많은 사람들 앞에서 진행하는 프로젝트 중간 발표회, 더 받고 싶은 피드백은?',
    a: [
      { answer: 'a. 학생! 열심히 했네요. 근데 이건 왜 이렇게 했습니까? 그냥 궁금해서~', type:['ISFJ','INFJ','ISFP','INFP','ESFJ','ENFJ','ESFP','ENFP'] },
      { answer: 'b. A부분 다시 봐봐, 이거는 왜 이렇게 했어요? 이 부분 좀 잘못된 거 같은데, 다시 해봐요', type:['ISTJ','INTJ','ISTP','INTP','ESTJ','ENTJ','ESTP','ENTP']},
    ]
  },
  {
    q: '9. 교수님이 추천해주신 한 모델(방법)의 성능이 생각보다 좋지 않게 나왔다. 이때 나는?',
    a: [
      { answer: 'a. 여러 전처리, 하이퍼파라미터 튜닝 기법을 적용해본다.(같은 방법에서 여러가지 시도해본다.)', type: ['ISTJ','ISFJ','ESTJ','ESFJ','INFJ','INTJ','ENFJ','ENTJ']},
      { answer: 'b. 빠르게 버리고 다른 여러 모델들을 적용해본다.(다른 방법을 적용해본다.)', type: ['ISTP','ISFP','ESTP','ESFP','INFP','INTP','ENFP','ENTP'] },
    ]
  },
  {
    q: '10. 둘 중 더 화나는 사람은?',
    a: [
      { answer: 'a. 랩실 자리를 비운 사이 말도 없이 과제를 베껴 간 동기 ', type:['ISFJ','INFJ','ISFP','INFP','ESFJ','ENFJ','ESFP','ENFP'] },
      { answer: 'b. 과제 도와준다고 깝치다가 내 과제 다 날린 동기', type:['ISTJ','INTJ','ISTP','INTP','ESTJ','ENTJ','ESTP','ENTP']},
    ]
  },
  {
    q: '11. 약속 시간에 늦어버린 나, 이때 내가 주로 하는 말은?',
    a: [
      { answer: 'a. 더운데 기다리게 해서 미안해,,, 아이스크림 사줄까? 많이 더웠지,,', type:['ISFJ','INFJ','ISFP','INFP','ESFJ','ENFJ','ESFP','ENFP'] },
      { answer: 'b. 아니 내가 20분 전에 나왔는데, 반대로 가는 버스를 탔어 진짜 미안하다', type:['ISTJ','INTJ','ISTP','INTP','ESTJ','ENTJ','ESTP','ENTP']},
    ]
  },
  {
    q: '12. 교양 시간, 시험대체로 토론을 진행하게 되었다. 이때 더 편한 것은?',
    a:[
      { answer: 'a. 미리 주제를 공유하고 주어진 기간동안 토론게시판에 업로드', type: ['ISTJ','ISFJ','INFJ','INTJ','ISTP','ISFP','INFP','INTP'] },
      { answer: 'b. 당일에 주제를 알려주고 줌으로 토론 진행', type: ['ESTJ','ESFJ','ENFJ','ENTJ','ESTP','ESFP','ENFP','ENTP'] },
  ]
  },
  {
    q: '13. 알고 지내던 동기가 내 뒷담을 했다는 소식을 들었다. 이때 나는?',
    a: [
      { answer: 'a. 어떻게 그럴 수가 있지,, 충격이다.', type: ['ENFP','INFP','ENFJ','INFJ'] },
      { answer: 'b. 나한테 자격지심 느끼나? 역시 나는 잘났군', type: ['ENTJ','INTJ','ENTP','INTP'] },
      { answer: 'c. 원래 모든 사람들이 날 좋아할 수는 없는 법! (하지만 신경쓰인다,,)', type: ['ESTP','ISTP','ESFP','ISFP','ESFJ'] },
      { answer: 'd. 나랑 친하지 않았던 동기라 상관 없음 OR 걔가 누군데', type: ['ESTJ','ISTJ','ISFJ'] },
    ]
  },
  {
    q: '14. 뭔가 구매할 때 나는?',
    a: [
      { answer: 'a. 0점 짜리 리뷰를 모두 읽은 뒤 신중하게 구매한다.', type: ['INTJ','ENTJ','ISTJ','ESTJ'] },
      { answer: 'b. 친구나 지인이 사면 후기를 듣고 산다.', type: ['INFJ','ENFJ','ISFJ','ESFJ'] },
      { answer: 'c. 귀엽거나 흥미로우면 구매한다. (충동구매)', type: ['ISFP','ISTP','ESFP','ESTP'] },
      { answer: 'd. 과도한 생각 뒤 결국 아무것도 안 사고 산책나간다.', type: ['INFP','ENFP','INTP','ENTP'] },
    ]
  },
]

const infoList = [
  {
    name: '파릇파릇 <새싹 감자> (ENFP)',
    desc: '잘한다 잘한다하면 더 잘하는 타입! 즉흥적이고 정신없지만 미워할 수 없는 새싹 같은 파릇파릇한 매력을 지니고 있네요. 기획할 때는 신나지만 결국 싫증나서 마무리 짓지 못한 일이 오조억개입니다. 신기한 점은 그때그때 되는대로 처치 하는 것 같지만 어떻게든 성과를 내고 있다는 점! 전통적이고 수직적인 조직보다는 수평적이고 자유로운 환경에서 더 자신의 능력을 펼칠 수 있어요. '
  },
  {
    name: '파릇파릇 <새싹 감자> (ESFP)',
    desc: ' 파릇파릇 '
  },
  {
    name: '파릇파릇 <새싹 감자> (ESTP)',
    desc: ' 파릇파릇 '
  },
  {
    name: '열정열정열정! <열정 감자> (ENTP)',
    desc: '일 벌리면 주변 사람들이 수습하고 있나요? 인생은 도박이죠'
  },
  {
    name: '열정열정열정! <열정 감자> (ENTJ)',
    desc: '일 벌리면 주변 사람들이 수습하고 있나요? 인생은 도박이죠'
  },
  {
    name: '그냥 <인간> (ENFJ)',
    desc: 'ㅇㄹㄴ '
  },
  {
    name: '그냥 <인간> (INTJ)',
    desc: 'ㅇㄹㄴ '
  },
  {
    name: '그냥 <인간> (ISTJ)',
    desc: 'ㅇㄹㄴ '
  },
  {
    name: '그냥 <인간> (ESTJ)',
    desc: 'ㅇㄹㄴ '
  },
  {
    name: '있는듯 없는듯 그림자 감자 (INTP)',
    desc: ' 그냥 인생 조용히 살고 싶어요.'
  },
  {
    name: '있는듯 없는듯 그림자 감자 (ISTP)',
    desc: ' 그냥 인생 조용히 살고 싶어요.'
  },
  {
    name: '낯가리는 관종 감자 (ISFJ)',
    desc: '낯가려서 잘 말하지 못하지만 사실 관심 받는게 즐거운 감자 '
  },
  {
    name: '낯가리는 관종 감자 (INFJ)',
    desc: '낯가려서 잘 말하지 못하지만 사실 관심 받는게 즐거운 감자 '
  },
  {
    name: '찐 감자 (ISFP)',
    desc: '감자들이 인정한 찐 감자 '
  },
  {
    name: '찐 감자 (INFP)',
    desc: '감자들이 인정한 찐 감자 '
  },
  {
    name: '찐 감자 (ESFJ)',
    desc: '감자들이 인정한 찐 감자 '
  },
]

