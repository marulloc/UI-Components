import React, { useCallback } from "react";
import { Switch, Layout } from "antd";

import Rater from "./Components/Rating";

const { Header, Footer, Sider, Content } = Layout;

const App = () => {
  const onChange = useCallback((checked) => {
    console.log(`switch to ${checked}`);
  }, []);

  return (
    <>
      <Layout>
        <Header>Header</Header>
        <Content>
          <span> asdasdasdd</span>
          <Switch defaultChecked onChange={onChange} />
          <Rater />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
};

export default App;
