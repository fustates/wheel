import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-semibold mb-4">欢迎来到首页</h2>
      <p className="text-lg mb-6">这是一个基于 React、TypeScript 和 Vite 的项目。</p>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md inline-block">
        <p className="text-gray-700">
          你可以在这里添加首页的内容和功能组件。
        </p>
      </div>
    </div>
  );
};

export default HomePage;
