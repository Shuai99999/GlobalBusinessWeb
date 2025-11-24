# 快速启动指南

## 第一步：安装依赖

```bash
npm install
```

## 第二步：启动开发服务器

```bash
npm run dev
```

然后在浏览器中打开 `http://localhost:5173`

## 主要功能

- **首页** (`/`) - 包含 Hero Section、产品展示、公司优势等
- **产品页** (`/products`) - 产品列表和分类筛选
- **关于我们** (`/about`) - 公司介绍和统计数据
- **新闻** (`/news`) - 最新新闻和动态
- **联系我们** (`/contact`) - 联系表单和公司信息

## 自定义内容

### 替换 Hero Section 图片

编辑 `src/components/HeroSection.jsx` 第 10 行，将图片 URL 替换为你的图片：

```jsx
backgroundImage: `url('你的图片URL')`
```

### 修改公司信息

- 导航栏 Logo：`src/components/Navbar.jsx`
- 联系方式：`src/components/Footer.jsx` 和 `src/pages/Contact.jsx`
- 公司介绍：`src/components/CompanyIntro.jsx` 和 `src/pages/About.jsx`

### 修改产品信息

- 产品列表：`src/components/ProductShowcase.jsx` 和 `src/pages/Products.jsx`
- 最近产品：`src/components/RecentProducts.jsx`

## 构建生产版本

```bash
npm run build
```

构建文件将输出到 `dist` 目录。

