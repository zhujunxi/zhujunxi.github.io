---
title: CentOS7安装Nginx及配置
date: 2019-03-20 20:15:29
categories: [linux]
tags: 
---

## 安装必要的运行库

- 在Centos下，yum源不提供nginx的安装，可以通过切换yum源的方法获取安装。也可以通过直接下载安装包的方法，**以下命令均需root权限执行**

- 首先安装必要的库（nginx 中gzip模块需要 zlib 库，rewrite模块需要 pcre 库，ssl 功能需要openssl库）。选定**/usr/local**为安装目录，以下具体版本号根据实际改变。

### 安装gcc gcc-c++(如新环境,未安装请先安装)

```bash
yum install -y gcc gcc-c++
```

### 安装PCRE库

```bash
cd /usr/local/

// 下载pcre
wget http://jaist.dl.sourceforge.net/project/pcre/pcre/8.33/pcre-8.33.tar.gz
 
// 解压
tar -zxvf pcre-8.36.tar.gz

cd pcre-8.36
./configure
make && make install
```

### 安装SSL库
```bash
cd /usr/local/
// 下载ssl
wget http://www.openssl.org/source/openssl-1.0.1j.tar.gz
// 解压
tar -zxvf openssl-1.0.1j.tar.gz

cd openssl-1.0.1j
./config
make && make install

// 安装OpenSSL library.
yum -y install openssl openssl-devel
```

### 安装zlib库存
```bash
cd /usr/local/
wget http://zlib.net/zlib-1.2.11.tar.gz
tar -zxvf zlib-1.2.11.tar.gz

./configure
make && make install
```

## 安装Nginx
```bash
cd /usr/local/
wget http://nginx.org/download/nginx-1.8.0.tar.gz
tar -zxvf nginx-1.8.0.tar.gz
cd nginx-1.8.0
./configure --user=nobody --group=nobody --prefix=/usr/local/nginx --with-http_stub_status_module --with-http_gzip_static_module --with-http_realip_module --with-http_sub_module --with-http_ssl_module

make && make install
```
> (注: --with-http_ssl_module:这个不加后面在nginx.conf配置ssl:on后,启动会报nginx: [emerg] unknown directive "ssl" in /opt/nginx/conf/nginx.conf 异常)

## 配置Nginx

### 指定默认目录

#### vim打开配置文件
```bash
vi /usr/local/nginx/conf/nginx.conf
```
#### 修改配置
`Insert` 编辑location/root路径为新的默认指定路径
![修改nginx默认路径](https://blog-1253306634.cos.ap-guangzhou.myqcloud.com/%E9%85%8D%E7%BD%AEnginx%E9%BB%98%E8%AE%A4%E8%B7%AF%E5%BE%84.png)

#### 保存退出
`Esc` => :wq

## 测试nginx配置
```bash
/usr/local/nginx/sbin/nginx -t
```

## 启动nginx

```bash
/usr/local/nginx/sbin/nginx
```

## 重启nginx

```bash
/usr/local/nginx/sbin/nginx -s reload
```

## 参考

[CentOS7安装Nginx及配置](https://www.cnblogs.com/jackyzm/p/9600738.html)

