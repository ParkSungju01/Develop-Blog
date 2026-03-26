"use client"
import { useRouter } from "next/navigation"
import ReactMarkdown from "react-markdown"
import * as S from "./post.style"

type Props = {
  title: string
  date: string
  content: string
}

export default function Post({ title, date, content }: Props) {
  const router = useRouter()
  return (
    <S.Container>
      <S.BackButton onClick={() => router.push("/blog")}>← 목록으로</S.BackButton>
      <S.Title>{title}</S.Title>
      <S.Date>{date.slice(0,10)}</S.Date>
      <S.Divider />
      <S.Body>
        <ReactMarkdown>{content}</ReactMarkdown>
      </S.Body>
    </S.Container>
  )
}
