import { Tabs } from "antd";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
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

export const Banner = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.span`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 40px;
  font-weight: bold;
  margin-left: 20px;
  padding-top: 10px;
  letter-spacing: -1px;
  cursor:pointer;
`;

export const MainBox = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 20px;
  display: flex;
`;

export const SideNav = styled.div`
  width: 20%;
  height: 100%;
  background-color: #ffffff11;
  border-radius: 0% 10px;
  padding-top: 30px;
`;

export const Index = styled.h1`
  font-size: 40px;
  padding-left: 10px;
  font-weight: bold;
  margin-bottom: 20px;
`
export const Menu = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #ffffff54;
  display:flex;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  justify-content: space-between;
`

export const PostList = styled.div`
  width: 80%;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const PostItem = styled.div`
  padding: 20px;
  border: 1px solid #ffffff22;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: #ffffff11;
  }
`

export const PostTitle = styled.h2`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 6px;
`

export const PostDate = styled.span`
  font-size: 14px;
  color: #ffffff8f;
`

