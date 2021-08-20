const qnaList = [
  {
    q: '1. 대학원으로 올라가던 중 솜냥이와 마주쳤다. 이미 학우님들께 둘러 쌓여있는 솜냥이, 갑자기 엄청 귀여운 자세를 취한다. 이때 나는?',
    a: [
      { answer: 'a. 아련한 눈빛을 보내며 다음을 기약한다.', type: ['shadowgam','shygam','gamja','unigam'] },
      { answer: 'b. 미쳤나봐, 카메라를 켜고 인파 속으로 뛰어들어간다.', type: ['ssgam','burngam','unigam'] },
    ]
  },
  {
    q: '2. 랩실에 갔더니 동기가 울고 있다. "4시간째 코드짰는데, 갑자기 컴퓨터 전원이 꺼졌어,,"',
    a: [
      { answer: 'a. 헉 괜찮아? 어떡해,, 저장은 했어? 급한거야? 도와줄까? 마이쮸(or 술) 먹을래?', type: ['ssgam','unigam','shygam','gamja'] },
      { answer: 'b. 엥 컴퓨터가 갑자기 꺼졌다고? 낡아서 그런가,, 저장은 했어? ', type: ['burngam','shadowgam'] },
    ]
  },
    {
    q: '3. 팀플 회의 때 (그나마) 더 같이 일하고 싶은 유형은?',
    a: [
      { answer: 'a. 그거 데이터 없을걸요? 이건 구현 힘들거 같은데,, 하나하나 실현 가능성 따지는 팀원 ', type: ['ssgam','unigam','shygam'] },
      { answer: 'b. 오 좋아요. 헐 대박 좋은데요? 전 다 좋아요! 무슨 말을 해도 좋다고 하는 팀원', type: ['burngam','shadowgam','gamja'] },
    ]
  },
    {
    q: '4. 프로젝트 진행 시, 당신이 주로 사용하는 것은?',
    a: [
      { answer: 'a. 선례연구에서 많이 활용한 모델', type: ['unigam','gamja'] },
      { answer: 'b. 발표된 지 얼마 안된 핫한 트렌드 모델', type: ['ssgam','burngam','shadowgam','shygam'] },
    ]
  },
  {
    q: '5. 인문관 복도에서 모르는 사람이 나한테 인사한다. 이때 나는?',
    a: [
      { answer: 'a. 나,,? 아니겠지? 못본 척 한다.', type: ['shadowgam','shygam','gamja','unigam']},
      { answer: 'b. 아는 사람인가? 당황스럽지만 인사해준다.', type: ['ssgam','burngam','unigam']},
    ]
  },
   {
    q: '6. 더 선호하는 전공 강의는? (둘 다 학점은 후하다는 전제!)',
    a: [
      { answer: 'a. "일단 들어두면 나중에 찾아서라도 쓸 수 있어요~" 배우는 건 많고 도움이 될 거 같지만 어려운 강의', type: ['burngam','shadowgam','gamja'] },
      { answer: 'b. "하나를 알아도 정확하게 알아야지, 차근차근합시다" 하나하나 이해시켜줘서 좋지만 이 정도만 배워도 될지 의심스러운 강의', type: ['ssgam','unigam','shygam'] },
    ]
  },
  {
    q: '7. 팀플 진행 시에 더 짜증나는 상황은?',
    a: [
      { answer: 'a. 8시에 시작은 회의, 7시 30분에 갑자기 회의 참석이 불가능하다고 하는 팀원', type: ['burngam','unigam','shygam','shadowgam'] },
      { answer: 'b. 8시에 시작인 회의, 3분 늦었는데 왜 늦었냐고 뭐라 하는 팀원', type: ['ssgam','shadowgam','gamja'] },
    ]
  },
  {
    q: '8. 이 테스트를 하면서 드는 생각은?',
    a: [
      { answer: 'a. 답안에 없는 답이 생각나면서 뭘 고를지 고민된다.', type: ['burngam','shadowgam','gamja'] },
      { answer: 'b. 이걸로 무슨 결과를 도출할 수 있을지 의심된다.', type: ['ssgam','unigam','shygam'] },
    ]
  },
  {
    q: '9. 많은 사람들 앞에서 진행하는 프로젝트 중간 발표회, 더 받고 싶은 피드백은?',
    a: [
      { answer: 'a. 학생! 열심히 했네요. 근데 이건 왜 이렇게 했습니까? 그냥 궁금해서~', type: ['ssgam','unigam','gamja','shygam'] },
      { answer: 'b. A부분 다시 봐봐, 이거는 왜 이렇게 했어요? 이 부분 좀 잘못된 거 같은데, 다시 해봐요', type: ['burngam','shadowgam'] },
    ]
  },
  {
    q: '10. 강의실에서 나가던 중 잘 모르는 선&후배가 갑자기 나타나 인사했다. 이때 나는?',
    a: [
      { answer: 'a. 당황하다가 타이밍을 놓쳐서 인사를 못한다.', type: ['ssgam','gamja','shygam','shadowgam'] },
      { answer: 'b. 안녕하세요~! ^0^ ', type: ['ssgam','unigam','burngam'] },
      { answer: 'c. aksdf하세요. 당황해서 이상한 인사를 건넨다.', type: ['unigam','shygam','shadowgam'] },
    ]
  },
  {
    q: '11. 오늘 만나기로 한 동기가 시간표 짜느라 잠을 설쳤다고 연락이 왔다. 이때 나의 답장은? ',
    a: [
      { answer: 'a. 시간표 때문에 잠을 설쳤다고..? 왜?? 그거 내일까지 수정할 수 있는데', type: ['burngam','unigam','shadowgam'] },
      { answer: 'b. 그래서 시간표 다 짬? 너 A과목 듣냐?', type: ['ssgam','burngam','shadowgam'] },
      { answer: 'c. 피곤하겠다,, 너 피곤하면 그냥 다음에 볼까?', type: ['ssgam','unigam','shygam','gamja']},
    ]
  },
  {
    q: '12. 프로젝트 팀장을 정하는 자리 이때 나는?',
    a: [
      { answer: 'a. 팀장 하고 싶으신 분? 없으면 제가 해도 상관 없어요~ (진짜 상관 없음)', type: ['ssgam','burngam','unigam'] },
      { answer: 'b. 가만히 있다가 아무도 나서지 않으면 그때 "그냥 제가 할게요~.."', type: ['shygam'] },
      { answer: 'c. "전 열심히 돕겠습니다!!" 누가하든 나만 아니면 됨.', type: ['shadowgam','gamja'] },
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
    desc: 'ㅇㄹㄴ '
  },
]
