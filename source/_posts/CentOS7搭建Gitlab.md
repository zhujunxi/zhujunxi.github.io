---
title: CentOS7搭建Gitlab
date: 2019-03-26 14:14:58
tags:
---

## 准备环境

### 更新软件包

```bash
yum update -y
```
> 耗时较长,大约5-10分钟

yum相关命令：

```bash
-q 静默执行 
-t 忽略错误
-R[分钟] 设置等待时间
-y 自动应答yes
--skip-broken 忽略依赖问题
--nogpgcheck 忽略GPG验证
```
> Yum（全称为 Yellow dog Updater, Modified）是一个在Fedora和RedHat以及CentOS中的Shell前端软件包管理器。

### 安装sshd

安装sshd
```bash
yum install -y curl policycoreutils-python openssh-server
```
启用并启动sshd
```bash
systemctl enable sshd
systemctl start sshd
```

### 配置防火墙

打开 `/etc/sysctl.conf`文件，在文件最后添加新的一行
```bash
net.ipv4.ip_forward = 1
```

启用防火墙
```bash
systemctl enable firewalld
systemctl start firewalld
```

放通http
```bash
firewall-cmd --permanent --add-service=http
```

重启防火墙
```bash
systemctl reload firewalld
```

> 查看防火墙状态命令 `systemctl status firewalld`

### 安装postfix

> GitLab 需要使用 postfix 来发送邮件。当然，也可以使用 SMTP 服务器，具体步骤请参考 [官方教程](https://docs.gitlab.com/omnibus/settings/smtp.html)。

安装
```bash
yum install -y postfix
```

打开 `/etc/postfix/main.cf` 文件，在第119行附近找到 `inet_protocols = all`, 将`all`改为`ipv4`
```bash
inet_protocols = ipv4
```
启用postfix
```bash
systemctl enable postfix
systemctl start postfix
```


### 配置swap交换分区

> 由于 GitLab 较为消耗资源，我们需要先创建交换分区，以降低物理内存的压力。在实际生产环境中，如果服务器配置够高，则不必配置交换分区。

新建2GB大小的交换分区
```bash
dd if=/dev/zero of=/root/swapfile bs=1M count=2048
```

格式化为交换分区并启用
```bash
mkswap /root/swapfile
swapon /root/swapfile
```

添加自启动
打开`/etc/fstab`文件，在最后添加新的一行
```bash
/root/swapfile swap swap defaults 0 0
```

## 安装Gitlab

### 将软件源修改为国内源

由于网络环境的原因，将 repo 源修改为清华大学
。
在 `/etc/yum.repos.d` 目录下新建 `gitlab-ce.repo` 文件并保存。内容如下：
```bash
[gitlab-ce]
name=Gitlab CE Repository
baseurl=https://mirrors.tuna.tsinghua.edu.cn/gitlab-ce/yum/el$releasever/
gpgcheck=0
enabled=1
```

### 安装Gitlab

> 刚才修改过了 yum 源，因此先重新生成缓存：（此步骤执行时间较长，一般需要 3~5 分钟左右，请耐心等待）
```bash
yum makecache
```

安装 Gitlab

> 安装 GitLab：（此步骤执行时间较长，一般需要 3~5 分钟左右，请耐心等待）

```bash
yum install -y gitlab-ce
```


## 初始化Gitlab

### 配置 GitLab 的域名（非必需）
打开 `/etc/gitlab/gitlab.rb` 文件，在第 13 行附近找到 `external_url 'http://gitlab.example.com'`，将单引号中的内容改为自己的域名（带上协议头，末尾无斜杠），并按 Ctrl + S 保存。
例如：

```bash
external_url 'http://work.myteam.com'
```
> 记得将域名通过 A 记录解析到 119.29.102.85 哦。

### 初始化 GitLab
特别重要！
使用如下命令初始化 GitLab：
（此步骤执行时间较长，一般需要 5~10 分钟左右，请耐心等待）

```bash
sudo gitlab-ctl reconfigure
```


## 完成

至此，我们已经成功地在 CentOS 7 上搭建了 GitLab。 现在可以在这里（http://119.29.102.85/）访问 GitLab 了。
在实际生产中，建议您使用 2 核 4 GB 或更高配置的 CVM。点击这里 可以查看 GitLab 官方推荐的配置和可承载人数对应表。
再次提醒您，定期执行 `yum update -y`以保持各软件包的最新状态。
谢谢！