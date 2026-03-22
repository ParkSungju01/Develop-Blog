import { Tabs } from "antd";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Banner = styled.div`
  width: 100%;
  height: 80px;
`;

export const StyledTabs = styled(Tabs)`
  float: right;
  margin-right: 40px;
  margin-top: 10px;

  .ant-tabs-tab {
    color: #ffffff8f;
    font-size: 18px;
  }
  .ant-tabs-tab:hover .ant-tabs-tab-btn {
    color: #ffffff !important;
  }
  .ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #ffffff !important;
  }
  .ant-tabs-ink-bar {
    background: #ffffff;
  }
  .ant-tabs-nav::before {
  border-bottom: none !important;
}
`;

export const MainBox = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 20px;
  display: flex;
`;

export const LeftBox = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RightBox = styled.div`
  width: 25%;
`;

export const Title = styled.h1`
  width: 80%;
  font-size: 60px;
  font-weight: bold;
  padding-bottom: 5px;
`;

export const SubTitle = styled.h1`
  font-size: 30px;
  color: #ffffff38;
  margin-left: 5px;
`;

export const MiddleTitle = styled.h1`
  width:80%;
  font-size: 40px;
  font-weight: bold;
  margin-top: 30px;
`

export const SmallTitle = styled.h1`
  font-size: 20px;
  color: #ffffff8f
`
export const Div = styled.div`
  width:40px;
  height:40px;
  background-color: #ffffff;
  border-radius: 100%;
  cursor:pointer;
`
