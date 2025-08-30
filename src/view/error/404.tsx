import React from "react";
import { Link } from "react-router";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-white rounded-lg shadow-lg p-8 text-center">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">页面未找到</h2>
      <p className="text-lg text-gray-600 mb-8 max-w-md">
        抱歉，您访问的页面不存在或已被删除。请检查URL是否正确，或返回首页继续浏览。
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-200"
      >
        返回首页
      </Link>
    </div>
  );
};

export default NotFound;
