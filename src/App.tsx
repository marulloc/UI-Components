import React, { useCallback } from "react";
import { Switch, Layout } from "antd";

import Rater from "./Components/Rating";
import DynamicCheckBox from "./Components/DynamicCheckBox";
const { Header, Footer, Sider, Content } = Layout;

const item = [
  { id: 1, content: "첫 째" },
  { id: 2, content: "둘 째" },
  { id: 3, content: "셋 째" },
];

const App = () => {
  const onChange = useCallback((checked) => {
    console.log(`switch to ${checked}`);
  }, []);

  return (
    <>
      <Layout>
        <Header>Header</Header>
        <Content>
          <DynamicCheckBox list={item} />
          {/* <span> asdasdasdd</span> */}
          {/* <Switch defaultChecked onChange={onChange} /> */}
          {/* <Rater /> */}
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
};

export default App;
