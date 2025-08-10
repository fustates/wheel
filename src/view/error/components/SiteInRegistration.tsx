import type { FC } from "react";

interface SiteInRegistrationProps {
  /** 预计恢复时间 */
  expectedDate?: string;
  /** 联系邮箱 */
  contactEmail?: string;
}

const SiteInRegistration: FC<SiteInRegistrationProps> = ({
  expectedDate = "2025年8月30日",
  contactEmail = "your-email@example.com",
}) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-5 font-sans">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">
          网站备案升级中
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          根据国家规定，本站正在进行ICP备案审核
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-md my-8">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <span className="font-medium text-gray-700">预计恢复时间：</span>
            <span className="text-gray-600">{expectedDate}</span>
          </div>
          <div className="flex justify-center items-center space-x-2">
            <span className="font-medium text-gray-700">联系邮箱：</span>
            <a
              href={`mailto:${contactEmail}`}
              className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
              aria-label="联系网站管理员"
            >
              {contactEmail}
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-gray-600">
            感谢您的理解与支持，备案完成后我们将提供更优质的服务
          </p>
        </div>
      </div>
    </div>
  );
};

export default SiteInRegistration;
