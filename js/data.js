/*

*/

const qnaList = [
  {
    q: '1. 랩실에 갔더니 동기가 울고 있다. "4시간째 코드짰는데, 갑자기 컴퓨터 전원이 꺼졌어,,"',
    a: [
      { answer: 'a. 헉 괜찮아? 어떡해,, 저장은 했어? 급한거야? 도와줄까? 마이쮸(or 술) 먹을래?', type: ['ssgam','unigam','shygam','gamja'] },
      { answer: 'b. 엥 컴퓨터가 갑자기 꺼졌다고? 낡아서 그런가,, 저장은 했어? ', type: ['burngam','shadowgam'] },
    ]
  },
    {
    q: '2. 팀플 회의 때 (그나마) 더 같이 일하고 싶은 유형은?',
    a: [
      { answer: 'a. 그거 데이터 없을걸요? 이건 구현 불가능할 거 같은데,, 실현 가능성 따지느라 진전이 없는 팀원 ', type: ['ssgam','unigam','shygam'] },
      { answer: 'b. 오 좋아요. 헐 대박 좋은데요? 무슨 아이디어를 내도 좋다고 하는 팀원', type: ['burngam','shadowgam','gamja'] },
    ]
  },
      {
    q: '3. 프로젝트 진행 시, 당신이 주로 사용하는 것은?',
    a: [
      { answer: 'a. 선례연구에서 많이 활용한 모델', type: ['unigam','gamja'] },
      { answer: 'b. 발표된 지 얼마 안된 핫한 트렌드 모델', type: ['ssgam','burngam','shadowgam','shygam'] },
    ]
  },
        {
    q: '4. 더 선호하는 전공 강의는? (둘 다 학점은 후하다는 전제!)',
    a: [
      { answer: 'a. "일단 들어두면 나중에 찾아서라도 쓸 수 있어요~" 배우는 건 많고 도움이 될 거 같지만 어려운 강의', type: ['burngam','shadowgam','gamja'] },
      { answer: 'b. "하나를 알아도 정확하게 알아야지, 차근차근합시다" 하나하나 이해시켜줘서 좋지만 이 정도만 배워도 될지 의심스러운 강의', type: ['ssgam','unigam','shygam'] },
    ]
  },
          {
    q: '6. 팀플 진행 시에 더 짜증나는 상황은?',
    a: [
      { answer: 'a. 8시에 시작은 회의, 7시 30분에 갑자기 회의 참석이 불가능하다고 하는 팀원', type: ['burngam','unigam','shygam'] },
      { answer: 'b. 8시에 시작인 회의, 3분 늦었는데 왜 늦었냐고 뭐라 하는 팀원', type: ['ssgam','shadowgam','gamja'] },
    ]
  },
            {
    q: '7. 이 테스트를 하면서 드는 생각은?',
    a: [
      { answer: 'a. 답안에 없는 답이 생각나면서 뭘 고를지 고민된다.', type: ['burngam','shadowgam','gamja'] },
      { answer: 'b. 이걸로 무슨 결과를 도출할 수 있을지 의심된다.', type: ['ssgam','unigam','shygam'] },
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
