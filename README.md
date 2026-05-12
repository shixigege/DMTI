# DMTI — 大明王朝人格测试

> 测测你最像《大明王朝1566》里的哪个人物

三十道职场情景题，从 **支配、道义、谋略、忠诚** 四个维度评估你的人格特质，通过欧几里得距离匹配与你最相似的大明角色。

## 在线体验

[https://shixigege.github.io/DMTI](https://shixigege.github.io/DMTI)

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 生产构建
npm run build

# 预览构建结果
npm run preview

# ESLint 检查
npm run lint
```

## 技术栈

- **框架**: React 18
- **构建工具**: Vite 5
- **样式**: Tailwind CSS 3 + 自定义 Ming 主题
- **动画**: Framer Motion
- **字体**: Google Noto Serif SC（思源宋体）
- **部署**: GitHub Pages

## 项目结构

```
DMTI/
├── index.html                  # 入口 HTML
├── vite.config.js              # Vite 配置
├── tailwind.config.js          # Tailwind + Ming 主题色
├── public/
│   ├── ming.svg                # Favicon
│   └── characters/             # 角色头像
├── src/
│   ├── main.jsx                # React 入口
│   ├── App.jsx                 # 状态机 + 路由
│   ├── index.css               # 大明主题样式
│   ├── data/
│   │   └── questions.js        # 30 道题 + 18 个角色定义
│   ├── utils/
│   │   └── calculateResult.js  # 欧几里得距离匹配算法
│   └── components/
│       ├── WelcomePage.jsx     # 欢迎页
│       ├── QuestionCard.jsx    # 题目卡片
│       ├── ResultPage.jsx      # 结果展示页
│       ├── HexagonRadar.jsx    # 四维蛛网图
│       ├── ProgressBar.jsx     # 答题进度环
│       └── Loading.jsx         # 加载动画
```

## 角色列表

| # | 角色 | 称号 |
|---|------|------|
| 1 | 海瑞 | 职场孤勇者 |
| 2 | 嘉靖 | 权力操盘手 |
| 3 | 严嵩 | 职场老狐狸 |
| 4 | 吕芳 | 大内总管 |
| 5 | 胡宗宪 | 负重前行者 |
| 6 | 沈一石 | 文艺青年 |
| 7 | 杨金水 | 影帝级选手 |
| 8 | 赵贞吉 | 精致利己者 |
| 9 | 徐阶 | 终极潜伏者 |
| 10 | 冯保 | 长线投资人 |
| 11 | 高拱 | 热血改革派 |
| 12 | 张居正 | 战略建筑师 |
| 13 | 齐大柱 | 忠义铁汉 |
| 14 | 陈洪 | 野心刀刃 |
| 15 | 裕王 | 焦虑继承人 |
| 16 | 郑泌昌 | 官场投机者 |
| 17 | 何茂才 | 愚蠢执行者 |
| 18 | 严世蕃 | 嚣张官二代 |

## 算法说明

1. 用户选择 30 道题的选项，每道题积累 4 维分数（0-5）
2. 计算每个维度的平均分
3. 与 18 个角色在 4 维空间中的坐标计算**欧几里得距离**
4. 距离最近的即为匹配结果

## 主题设计

### 大明王朝美学

- **配色**: `ming-blue` `ming-red` `ming-gold` `ming-ink` 等自定义颜色
- **卡片**: scroll-card 仿古卷轴效果
- **印章**: 结果页名号以红色印章形式呈现
- **背景**: 宣纸纹理 + 墨渍渐变效果
- **字体**: Noto Serif SC 思源宋体，古风排版

### 响应式

移动端和桌面端均适配，使用 Tailwind 断点。

## 分享功能

支持 Web Share API（移动端原生分享）和剪贴板兜底，一键分享测试结果。
