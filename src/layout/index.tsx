import React from "react";
import { Layout, theme } from "antd";
import { Outlet, Link } from "react-router";

const { Header, Content, Footer } = Layout;

const layoutStyle = {
  minHeight: "100vh",
};

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={layoutStyle}>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <h1 className="text-2xl font-bold text-white">编程实验室</h1>
          <nav>
            <ul className="flex space-x-8">
              <li>
                <Link
                  to="/"
                  className="text-white hover:text-gray-200 font-medium transition-colors duration-200"
                >
                  首页
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white hover:text-gray-200 font-medium transition-colors duration-200"
                >
                  关于
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Header>
      <Content className="max-w-7xl mx-auto w-full px-8 py-6">
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        编程实验室 ©{new Date().getFullYear()} Created by 学习者
      </Footer>
    </Layout>
  );
};

export default App;