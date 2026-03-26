import styled from "styled-components"

export const Container = styled.div`
  max-width: 800px;
  margin: 60px auto;
  padding: 0 24px;
`

export const BackButton = styled.button`
  background: none;
  border: none;
  color: #ffffff8f;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 24px;
  padding: 0;
  &:hover {
    color: #ffffff;
  }
`

export const Title = styled.h1`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 8px;
`

export const Date = styled.span`
  font-size: 14px;
  color: #ffffff8f;
`

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid #ffffff22;
  margin: 24px 0;
`

export const Body = styled.div`
  font-size: 18px;
  line-height: 1.8;
  h1, h2, h3 {
    font-weight: bold;
    margin: 24px 0 12px;
  }
  p {
    margin-bottom: 16px;
  }
  code {
    background: #ffffff1a;
    padding: 2px 6px;
    border-radius: 4px;
  }
  pre {
    background: #ffffff1a;
    padding: 16px;
    border-radius: 8px;
    overflow-x: auto;
  }
`
