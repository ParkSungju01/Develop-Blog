import { Tabs } from "antd";
import styled from "styled-components";
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