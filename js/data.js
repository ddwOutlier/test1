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
    q: '2. 과제는 다 했으나 실행 시간에 의해서 1분이 지나 결국 제출하지 못했다. 이때 당신의 행동은?',
    a: [
      { answer: 'a. 이번 학기는 망했다. 한강 물 온도를 체크한다.', type: ['ssgam','firegam'] },
      { answer: 'b. 빠르고 신속하게 교수님께 쪽지 또는 메일을 보낸다. ', type: ['shygam','standgam','firegam','shadowgam'] },
      { answer: 'c. 귀찮다. 일단 자고 일어나서 생각한다.', type: ['standgam','gamja'] },
      { answer: 'd. A->B->C를 차례대로 한다.', type: ['firegam','standgam','burngam'] },
      { answer: 'e. 지각 제출할 일이 없다.', type: ['unigam'] }
    ]
  },
  {
    q: '3. 프로젝트 발표 중 김현희 교수님이 “A부분 다시 봐봐, 저거는 왜 저렇게 했어요?” 등의 질문을 마구 퍼부었다. 이때 나의 속마음은?',
    a: [
      { answer: 'a. 교수님이 원망스럽다.내가 뭔가 잘못한건가 걱정이 된다.', type: ['ssgam','shygam','shadowgam','gamja'] },
      { answer: 'b. 별 생각 없다.', type: ['firegam','standgam','burngam','unigam'] },
      { answer: 'c. 김현희 교수님께 관심을 받다니, 그저 기쁘다. .', type: ['firegam','shygam','standgam','firegam','burngam'] }
    ]
  },
  {
    q: '4. 별로 친하지 않은 동기에게 과제 질문 연락이 왔다. 이때 당신의 반응은?',
    a: [
      { answer: 'a. 난 아는 게 없어,,, 구글링을 추천해준다.', type: ['shadowgam','gamja','shygam','standgam'] },
      { answer: 'c. 설명하기 귀찮아서 과제를 그냥 보내준다.', type: ['ssgam','standgam','unigam'] },
      { answer: 'd. 과제가 있다는 사실에 놀라워한다.', type: ['firegam','gamja','standgam','burngam'] },
      { answer: 'e. 연락 온 동기가 없었다,,,', type: ['ssgam','shadowgam','shygam'] },
      { answer: 'd. 인생은 갠플, 알아서 하라고 한다. ', type: ['standgam','unigam'] },
      
    ]
  },
  {
    q: '5. 아이디어를 나누는 회의 시간 나의 모습은?',
    a: [
      { answer: 'a. 아이디어 뱅크! 이것저것 이야기하면서 아이디어를 공유한다.', type: ['firegam','standgam','burngam','unigam'] },
      { answer: 'b. 아이디어를 내진 않으나 이야기 나온 아이디어에 대하여 의견을 적극적으로 제시한다.', type: ['firegam','standgam','shadowgam'] },
      { answer: 'c. 다 좋아요~ 뭘 하든 상관 없다.', type: ['ssgam','shygam','shadowgam','gamja'] },
      { answer: 'd. 생각은 많으나 말할 타이밍을 잡지 못하는 중,,,', type: ['ssgam','shygam'] },
    ]
  },
  {
    q: '6. 회의 중 결론이 나지 않는다. 이때 당신의 대처는?',
    a: [
      { answer: 'a. 누군가는 결론 짓겠지,,, 그냥 가만히 있는다.', type: ['ssgam','shygam','standgam','shadowgam','gamja'] },
      { answer: 'b. 이때까지 나온 의견을 정리해서 결론을 짓는다.', type: ['firegam','standgam','burngam','unigam'] },
    ]
  },
  {
    q: '7. 몇시간째 에러가 해결되지 않는다. 이때 당신은?',
    a: [
      { answer: 'a. 야!! 이 자식아!! 컴퓨터에게 화를 내기 시작한다.', type: ['standgam','shadowgam'] },
      { answer: 'b. 난,, 글렀어,, 우울해지기 시작한다. ', type: ['ssgam','shygam','shadowgam','gamja'] },
      { answer: 'c. ㅎㅎ 안해 식빵, 덮는다. ', type: ['standgam','gamja'] },
      { answer: 'd. a->b->c를 차례대로 한다.', type: ['firegam','burngam'] },
      { answer: 'e. 에러? 나에게 해결 못할 에러는 없었다.', type: ['unigam','standgam'] }
    ]
  },
]

const infoList = [
  {
    name: '풀 죽은 새싹 감자',
    desc: ' 학생, 기죽지 마십쇼. 왜 이렇게 풀이 죽어 있어요. 나만 과제와 강의가 버거운 거 같나요? 사실 모든 감자들이 다 그렇게 느끼고 있다는 사실! '
  },
  {
    name: '낯가리는 관종 감자',
    desc: '낯가려서 잘 말하지 못하지만 사실 관심 받는게 즐거운 감자 '
  },
  {
    name: '열정열정열정! <열정 감자>',
    desc: '일 벌리면 주변 사람들이 수습하고 있나요? 크게 성공할 확률이 높고 리더십이 매우 뛰어나답니다.'
  },
  {
    name: '고일 대로 고인 <싹 튼 감자>',
    desc: ' 혹시 졸업생..? 세상 해탈한 당신'
  },
  {
    name: '있는듯 없는듯 그림자 감자',
    desc: ' 여러분 말을 하십쇼~ 세상 사람들이 '
  },
  {
    name: '말도 못하는 감자 (=대충 그냥 감자라는 뜻)',
    desc: '감자들이 인정한 찐 감자 '
  },
  {
    name: '그냥 <인간>',
    desc: '감자..? 아니,, 당신은 인간이잖아요. '
  },
]
