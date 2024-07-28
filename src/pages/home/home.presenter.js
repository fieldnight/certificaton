import * as S from "./home.styles";

export default function HomeUI() {
  return (
    <S.RectangleParentRoot>
      <S.Header>
        <S.HeaderText>오늘도 힘내세요!</S.HeaderText>
        <S.HeaderButton>view profile</S.HeaderButton>
      </S.Header>
      <S.MainContainer>
        <S.TopTitle>ID님의 시험합격을 도와드릴게요!</S.TopTitle>
        <S.TopBoxContainer>
          <S.TopBoxWrapper>
            <S.TopBox>
              <S.TopBoxBtnContainer>
                <S.TopBoxButton>퀴즈</S.TopBoxButton>
                <S.TopBoxButton>시험보기</S.TopBoxButton>
                <S.TopBoxButton>오답노트</S.TopBoxButton>
                <S.TopBoxButton2>단어장</S.TopBoxButton2>
              </S.TopBoxBtnContainer>
            </S.TopBox>
            <S.TopBoxText>{`정보처리기사 `}</S.TopBoxText>
          </S.TopBoxWrapper>
          <S.TopBoxWrapper>
            {" "}
            <S.TopBox>
              {" "}
              <S.TopBoxBtnContainer>
                <S.TopBoxButton>퀴즈</S.TopBoxButton>
                <S.TopBoxButton>시험보기</S.TopBoxButton>
                <S.TopBoxButton>오답노트</S.TopBoxButton>
                <S.TopBoxButton2>단어장</S.TopBoxButton2>
              </S.TopBoxBtnContainer>
            </S.TopBox>
            <S.TopBoxText>{`정보처리기사 `}</S.TopBoxText>
          </S.TopBoxWrapper>
          <S.TopBoxWrapper>
            {" "}
            <S.TopBox>
              {" "}
              <S.TopBoxBtnContainer>
                <S.TopBoxButton>퀴즈</S.TopBoxButton>
                <S.TopBoxButton>시험보기</S.TopBoxButton>
                <S.TopBoxButton>오답노트</S.TopBoxButton>
                <S.TopBoxButton2>단어장</S.TopBoxButton2>
              </S.TopBoxBtnContainer>
            </S.TopBox>
            <S.TopBoxText>{`정보처리기사 `}</S.TopBoxText>
          </S.TopBoxWrapper>
        </S.TopBoxContainer>
        <S.Row />
        <S.UnderTitle>시험 접수 날짜, 가격, 팁을 확인하세요! </S.UnderTitle>
        <S.Post>
          <S.PostContainer>
            <S.LabelWrapper>
              <S.LabelText>시험 점수</S.LabelText>
              <S.LabelText>접수 날짜</S.LabelText>
              <S.LabelText>접수 가격</S.LabelText>
            </S.LabelWrapper>
            <S.Name>{`정보처리기사 `}</S.Name>
            <S.SubName>시험 일정</S.SubName>
          </S.PostContainer>
        </S.Post>
      </S.MainContainer>
    </S.RectangleParentRoot>
  );
}
