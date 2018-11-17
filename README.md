# 云开发 quickstart

这是云开发的快速启动指引，其中演示了如何上手使用云开发的三大基础能力：

- 数据库：一个既可在小程序前端操作，也能在云函数中读写的 JSON 文档型数据库
- 文件存储：在小程序前端直接上传/下载云端文件，在云开发控制台可视化管理
- 云函数：在云端运行的代码，微信私有协议天然鉴权，开发者只需编写业务逻辑代码

## 参考文档

- [云开发文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)

## git
### Git全局设置
```shell
git config --global user.name  "dhjz"
git config --global user.email "21f_909514844_dhjz@git.cloud.tencent.com"
```

### 创建一个新的版本库
```shell
git clone https://git.qcloud.com/21f_909514844/dhjz.git
cd dhjz
touch README.md
git add README.md
git commit -m "add README"
git push -u origin master
```

### 现有的文件夹或Git版本库
```shell
cd existing_folder
git init
git remote add origin https://git.qcloud.com/21f_909514844/dhjz.git
git add .
git commit
git push -u origin master
```
