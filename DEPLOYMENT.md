# GitHub Pages 部署指南

## 快速开始

### 1. 准备工作

确保你的代码已经推送到 GitHub 仓库。

### 2. 启用 GitHub Pages

1. 进入你的 GitHub 仓库
2. 点击 **Settings** → **Pages**
3. 在 **Source** 部分，选择 **GitHub Actions**

### 3. 配置主分支

如果你的主分支是 `master` 而不是 `main`，需要修改 `.github/workflows/deploy.yml`：

```yaml
on:
  push:
    branches:
      - master  # 改为你的主分支名
```

### 4. 推送代码

将代码推送到主分支：

```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push origin main  # 或 master
```

### 5. 查看部署状态

1. 进入仓库的 **Actions** 标签页
2. 查看部署工作流的运行状态
3. 等待部署完成（通常需要 2-5 分钟）

### 6. 访问网站

部署完成后，你的网站地址为：
```
https://你的用户名.github.io/仓库名/
```

例如：`https://username.github.io/GlobalBusinessWeb/`

## 自定义域名（可选）

如果你想使用自定义域名：

1. 在仓库 Settings → Pages 中添加你的域名
2. 在你的域名 DNS 设置中添加 CNAME 记录
3. 在 `public` 目录下创建 `CNAME` 文件，内容为你的域名

## 故障排除

### 部署失败

- 检查 GitHub Actions 日志中的错误信息
- 确保 `package.json` 中的脚本正确
- 确保所有依赖都已正确安装

### 页面显示 404

- 检查路由配置是否正确
- 确保 `vite.config.js` 中的 `base` 配置正确
- 检查 `public/.nojekyll` 文件是否存在

### 资源加载失败

- 确保所有资源路径使用相对路径
- 检查 `public` 目录下的文件是否正确

## 本地测试部署

在部署前，可以在本地测试构建：

```bash
# 构建项目
npm run build

# 预览构建结果
npm run preview
```

## 更新网站

每次推送到主分支时，GitHub Actions 会自动重新构建和部署网站。

## 注意事项

- 首次部署可能需要几分钟时间
- 如果仓库是私有仓库，需要 GitHub Pro 或更高版本
- 确保主分支名称与工作流配置一致


