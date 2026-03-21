import * as S from "../Banner/Banner.style"
export default function Banner(){
  return(
    <S.Container>
      <S.Group>
        <S.Button>
          메인
        </S.Button>
        <S.Button>
          블로그
        </S.Button>
      </S.Group>
    </S.Container>
  )
}