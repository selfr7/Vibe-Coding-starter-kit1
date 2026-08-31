import { useState } from 'react'

// 这是首页。让 AI 替换这个文件的内容，就是替换你的产品首页。
export default function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900">🎉 跑起来了！</h1>
        <p className="mt-3 text-sm text-gray-600 leading-relaxed">
          这个页面说明项目环境一切正常。
          <br />
          下一步：把你的想法告诉 AI，让它把这个占位页换成你自己的产品。
        </p>

        <button
          onClick={() => setCount(count + 1)}
          className="mt-6 w-full py-2.5 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-700 transition-colors"
        >
          点我试试（React 正常工作）：{count}
        </button>

        <div className="mt-6 space-y-1 text-left text-xs text-gray-400">
          <p>· 首页代码在 src/App.jsx，改它就是改首页</p>
          <p>· 样式用 Tailwind 写在 className 里</p>
          <p>· 保存文件后浏览器会自动刷新</p>
        </div>
      </div>
    </main>
  )
}