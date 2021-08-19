/*

*/

const qnaList = [
  {
    q: '1. 키쵸가 누군지 알고 있다.',
    a: [
      { answer: 'a. 당연 ', type: ['shygam', 'standgam', 'burngam', 'shadowgam','gamja','unigam'] },
      { answer: 'b. 그게 누구죠', type: ['ssgam', 'firegam'] },
    ]
  },
   {
    q: '2. 팀플 회의 중 몇시간 째 결론이 나지 않는다. 이때 나는?',
    a: [
      { answer: 'a. 누군가는 결론을 내주지 않을까,, 가만히 지켜본다.', type: ['ssgam','shygam','shadowgam','standgam'] },
      { answer: 'b. 이건 이렇게 합시다. 지금까지 나온 의견을 토대로 결론 의견을 제시한다.', type: ['burngam','unigam'] },
    ]
  },
  {
    q: '3. 프로젝트 발표 중 교수님이 “A부분 다시 봐봐, 저거는 왜 저렇게 했어요?” 등의 질문을 마구 퍼부었다. 이때 나의 속마음은?',
    a: [
      { answer: 'a. 교수님이 원망스럽다. or 내가 뭘 잘못한 거 같다는 생각에 주늑든다.', type: ['ssgam', 'shadowgam', 'standgam'] },
      { answer: 'd. 교수님께 관심을 받다니, 기쁘다.', type: ['shygam','burngam','unigam'] }
    ]
  },
  {
    q: '4. 복도에서 지나가던 모르는 사람이 나에게 인사한다. 이때 나는?',
    a: [
        {answer : 'a. 못 본 척 한다. ', type : ['unigam','ssgam','shadowgam','standgam']},
        {answer : 'b. 당황하지만 인사해준다.', type : ['shygam','burngam']},
    ]
  },
    {
    q: '5. 2시간째 코딩 중 저장도 안했는데, 갑자기 노트북 전원이 꺼졌다.',
    a: [
        {answer : 'a. 아 ** ** ***** 나도 모르게 육성으로 욕한다.', type : ['burngam','shygam']},
        {answer : 'b. 멘탈이 나갔지만 침착하게 노트북을 다시 켜서 복구할 방법을 찾는다.', type : ['unigam','shadowgam']},
        {answer : 'c. 2시간 째 쓴 코드래봐야 몇 줄 안된다,,, 다시 쓰지 뭐,,, 하지만 눈물이 난다.', type : ['standgam','ssgam']},
    ]
  },
]

const infoList = [
  {
    name: '새싹 감자',
    desc: ' 파릇파릇 '
  },
  {
    name: '낯가리는 관종 감자',
    desc: '낯가려서 잘 말하지 못하지만 사실 관심 받는게 즐거운 감자 '
  },
  {
    name: '열정열정열정! <열정 감자>',
    desc: '일 벌리면 주변 사람들이 수습하고 있나요? 인생은 도박이죠'
  },
  {
    name: '있는듯 없는듯 그림자 감자',
    desc: ' 그냥 인생 조용히 살고 싶어요.'
  },
  {
    name: '말도 못하는 찐감자',
    desc: '감자들이 인정한 찐 감자 '
  },
  {
    name: '그냥 <인간>',
    desc: ' '
  },
]
