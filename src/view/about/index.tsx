import React from "react";

const AboutPage: React.FC = () => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold mb-4">关于我们</h2>
      <p className="text-lg mb-6">
        这是一个使用 React、TypeScript 和 Vite 构建的示例项目。
      </p>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md inline-block">
        <p className="text-gray-700">
          项目使用了最新的 React 19.1 和 React Router 7 版本，以及 Ant Design 组件库。
        </p>
      </div>
    </div>
  );
};

export default AboutPage;