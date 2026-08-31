- 2026-08-31 | 模拟新手打包实测：通过；DEPLOY.md 打包提示词补充排除 .gitkeep | docs/DEPLOY.md
# 开发日志

> 约定：AI 每完成一个任务，就在本文件最上方追加一行，格式：
> `- YYYY-MM-DD | 做了什么 | 动了哪些文件`
>
> 作用：换了新对话时，AI 读这个文件就能快速接上项目历史；你自己也能随时回顾项目是怎么一步步变成现在这样的。

- 2026-08-31 | 按新手反馈重构：README 改为提示词驱动（人只粘贴，AI 执行），部署拆分「打包/上线」，打包产物支持双击打开 | README.md, docs/DEPLOY.md, index.html, vite.config.js, .env.example
- 2026-08-31 | 初始化模板：内置 Vite + React + Tailwind 最小骨架，项目可直接运行 | 全部文件