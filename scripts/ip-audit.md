# IP / Asset Audit Checklist

在商业上线前完成一次人工 + AI 辅助检查。

## 1. Images

- [ ] 每张图片都有明确来源
- [ ] 没有直接使用搜索引擎找到的未知来源图片
- [ ] AI 生成图片符合所使用服务的相关条款
- [ ] 第三方图片允许当前商业用途

## 2. Logos / Trademarks

- [ ] 产品 Logo 没有明显复制现有品牌
- [ ] 产品名称没有明显冲突
- [ ] 商业化前考虑商标检索

## 3. Icons

- [ ] Icon 来源明确
- [ ] License 明确
- [ ] 商业使用符合 License
- [ ] 需要署名时已处理

## 4. Fonts

- [ ] 字体来源明确
- [ ] License 明确
- [ ] 商业使用方式符合 License

## 5. Third-party Code

- [ ] 检查 package.json
- [ ] 重要依赖 License 已确认
- [ ] 特殊 License 已人工评估
- [ ] 没有安装明显不必要的依赖

## 6. External URLs

搜索项目中的：

```text
http://
https://
url(
<img
```

确认：

- [ ] 没有未知来源的外部图片
- [ ] 没有未经授权的嵌入内容
- [ ] 没有不必要的 hotlink

## 7. Text / Media

- [ ] 没有直接复制第三方文章
- [ ] 没有未经授权的商业媒体
- [ ] AI 生成内容没有明显复刻特定作品

## 8. Security

- [ ] 没有 API Key
- [ ] 没有密码
- [ ] 没有 Token
- [ ] `.env` / `.env.local` 已被 `.gitignore` 忽略
- [ ] 服务端密钥没有暴露给浏览器

## Final

如果任何资源：

> 来源不明 / License 不明 / 商业使用权限不明

默认：

**不要使用，换成原创或授权明确的资源。**
