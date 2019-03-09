---
title: 在TortoiseGit(pageant)中自动导入ppk文件
date: 2017-12-04 14:59:08
categories: [前端开发]
tags: [ssh,git]
---

>在安装完TortoiseGit，通过PuTTYgen生成完rsa, ppk等文件后，要想pull文件，还得每次在TortoiseGit启动时，在pageant中手动导入ppk文件，很是烦人。下面就是解决TortoiseGit每次启动时需要手动导入ppk文件的问题。

### 方法一

1. 进入Git项目的目录，右键空白处，打开“TortoiseGit > Settings”
2. 选中“Git > Remote”
3. 选中正确的origin
4. 在Putty一栏选择正确的ppk文件
5. 点确定

### 方法二

1. 在“启动”菜单中打开“启动”目录，Windows7一般在C:\Users\hairong\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup
2. 右键空白处，选择新建快捷方式
3. 选择pageant的位置，并按填入ppk的位置，例如"C:\Program Files\TortoiseGit\bin\pageant.exe" C:\Users\hairong\.ssh\id_rsa.ppk
4. 修改快捷方式的名字为“pageant with ppk”，并保存
5. 系统每次启动后就会自动加载ppk了

*系转载自：http://sulaohuai.blog.51cto.com/10674946/1712115*