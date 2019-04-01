---
title: GIT统计
date: 2019-04-01 11:46:00
tags:
---

查看 git 上个人代码量

```bash
git log --author="username" --pretty=tformat: --numstat | awk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s, removed lines: %s, total lines: %s ", add, subs, loc }
```

统计每个人的增删行数

```bash
git log --format='%aN' | sort -u | while read name; do echo -en "$name\t"; git log --author="$name" --pretty=tformat: --numstat | awk '{ add += $1; subs += $2; loc += $1 - $2 } END { printf "added lines: %s, removed lines: %s, total lines: %s ", add, subs, loc }' -; done
```

查看仓库提交者排名前 5

```bash
git log --pretty='%aN' | sort | uniq -c | sort -k1 -n -r | head -n 5
```

贡献者统计

```bash
git log --pretty='%aN' | sort -u | wc -l
```

提交数统计

```bash
git log --oneline | wc -l
```
