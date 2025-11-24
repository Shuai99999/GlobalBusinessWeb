# Global Business Web - 国际贸易公司门户网站

这是一个基于 React 的现代化国际贸易公司门户网站，参考了专业的设计风格，提供完整的产品展示、公司介绍、新闻和联系功能。

## 技术栈

- **React 18** - 前端框架
- **Vite** - 构建工具
- **React Router** - 路由管理
- **Tailwind CSS** - 样式框架
- **响应式设计** - 支持移动端和桌面端

## 功能特性

- ✅ 响应式导航栏（包含多语言切换）
- ✅ 精美的 Hero Section
- ✅ 产品展示和分类筛选
- ✅ 公司优势介绍
- ✅ 企业介绍和统计数据
- ✅ 新闻展示
- ✅ 联系表单
- ✅ 现代化 UI 设计

## 安装和运行

### 1. 安装依赖

```bash
npm install
```

### 2. 启动开发服务器

```bash
npm run dev
```

开发服务器将在 `http://localhost:5173` 启动

### 3. 构建生产版本

```bash
npm run build
```

### 4. 预览生产构建

```bash
npm run preview
```

## 项目结构

```
GlobalBusinessWeb/
├── src/
│   ├── components/          # 可复用组件
│   │   ├── Navbar.jsx       # 导航栏
│   │   ├── HeroSection.jsx  # 首页大图
│   │   ├── ProductShowcase.jsx
│   │   ├── Advantages.jsx
│   │   ├── RecentProducts.jsx
│   │   ├── CompanyIntro.jsx
│   │   ├── ContactSection.jsx
│   │   └── Footer.jsx
│   ├── pages/               # 页面组件
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── About.jsx
│   │   ├── News.jsx
│   │   └── Contact.jsx
│   ├── App.jsx              # 主应用组件
│   ├── main.jsx             # 入口文件
│   └── index.css            # 全局样式
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 自定义配置

### 替换 Hero Section 图片

编辑 `src/components/HeroSection.jsx`，修改 `backgroundImage` URL：

```jsx
backgroundImage: `url('你的图片URL')`
```

### 修改公司信息

在各个组件中更新公司名称、联系方式等信息。

### 修改颜色主题

编辑 `tailwind.config.js` 中的 `primary` 和 `secondary` 颜色。

## 后续维护建议

1. **图片资源**：建议将图片资源放在 `public` 目录下，或使用 CDN
2. **内容管理**：可以考虑将内容数据提取到单独的 JSON 文件或 API
3. **国际化**：可以集成 i18n 库实现真正的多语言支持
4. **表单处理**：联系表单可以连接到后端 API 或邮件服务
5. **SEO 优化**：可以添加 React Helmet 来管理页面元数据

## 浏览器支持

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

## GitHub Pages 部署

### 自动部署

项目已配置 GitHub Actions 自动部署到 GitHub Pages。

#### 部署步骤：

1. **启用 GitHub Pages**
   - 进入仓库的 Settings → Pages
   - Source 选择 "GitHub Actions"

2. **推送代码**
   - 将代码推送到 `main` 分支（或 `master` 分支，需要修改 `.github/workflows/deploy.yml`）
   - GitHub Actions 会自动构建并部署

3. **访问网站**
   - 部署完成后，网站地址为：`https://你的用户名.github.io/GlobalBusinessWeb/`
   - 如果使用自定义域名，可以在 Settings → Pages 中配置

#### 注意事项：

- 确保主分支名称正确（默认是 `main`，如果是 `master` 需要修改工作流文件）
- 首次部署可能需要几分钟时间
- 如果仓库是私有仓库，需要 GitHub Pro 或更高版本才能使用 GitHub Pages

### 手动部署

如果需要手动部署：

```bash
# 构建项目
npm run build

# 将 dist 目录的内容部署到 gh-pages 分支
```

## 许可证

MIT License

