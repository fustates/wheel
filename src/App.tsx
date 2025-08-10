import { Outlet, Link } from "react-router";
import "./App.css";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-6">
      <h1 className="text-3xl font-bold text-center mb-8">编程实验室</h1>
      {/* 路由导航 */}
      <nav className="mb-8">
        <ul className="flex justify-center items-center space-x-8">
          <li>
            <Link
              to="/"
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
            >
              首页
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
            >
              关于
            </Link>
          </li>
        </ul>
      </nav>
      <main className="mt-4">
        <Outlet /> {/* 子路由组件在这里渲染 */}
      </main>
    </div>
  );
}

export default App;
