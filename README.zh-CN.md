# Clothes Show

[English](README.en.md) | 中文

Clothes Show 是一个 iOS 优先的数字衣橱与 AI 穿搭参考图原型。

当前版本是一个静态前端原型，重点验证衣橱管理与导入流程。

## 当前功能

- iPhone Pro 风格移动端模拟框。
- Memphis 80 年代几何视觉风格。
- 衣服导入流程。
- 图片裁剪与换白底模拟。
- 衣橱主分类筛选。
- 衣橱搜索。
- 衣物详情页。
- 多标签展示与自定义标签编辑。
- 写实衣物参考图资产。

## 本地运行

在项目根目录运行：

```bash
python3 -m http.server 5188
```

然后打开：

```text
http://localhost:5188
```

## 项目结构

```text
.
├── index.html
├── styles.css
├── app.js
├── assets/
│   └── clothes/
├── PLAN.md
├── DESIGN_DIRECTION.md
├── IOS_APP_SCOPE.md
└── WIREFRAMES.md
```

## 状态说明

这还不是生产级 iOS App。它是一个用于验证产品流程、视觉方向和衣橱交互的静态原型。后续可以在确认产品体验后，再选择 SwiftUI、React Native 或其他 iOS 兼容技术栈继续实现。

## 后续方向

- 接入真实后端与图片存储。
- 实现真实去背景能力。
- 将生成器接入衣橱中的真实衣物。
- 增加人像档案与 AI 穿搭参考图生成。
- 持久化搜索、筛选、标签和导入记录。

