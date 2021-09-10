# npm切换源

为了方便的切换 npm源 和 淘宝的源 ，我们使用 nrm 工具。

```yaml
# 安装全局 nrm 工具
npm install -g nrm

# 设置环境及其对应的源
# nrm add 环境名称 源地址
# 设置一个环境，来代表标准的 npm 源
nrm add npm http://registry.npmjs.org
# 设置一个环境，代表淘宝镜像源
nrm add taobao https://registry.npm.taobao.org

# 切换当前源环境
nrm use 环境名
```

