---
title: VScode的vue代码片段设置
date: 2017-12-30 23:56:55
categories: [前端开发]
tags: [VScode, vue]
---

- 设置步骤 `文件` - `首选项` - `用户代码片段` - `vue` -然后在打开的文件加入以下配置就好

- 用法： 新建*.vue文件 输入vue  再回车 就可以得到初始代码片段了

```json
{
/*
	// Place your snippets for Vue here. Each snippet is defined under a snippet name and has a prefix, body and 
	// description. The prefix is what is used to trigger the snippet and the body will be expanded and inserted. Possible variables are:
	// $1, $2 for tab stops, $0 for the final cursor position, and ${1:label}, ${2:another} for placeholders. Placeholders with the 
	// same ids are connected.
	// Example:
	"Print to console": {
		"prefix": "log",
		"body": [
			"console.log('$1');",
			"$2"
		],
		"description": "Log output to console"
	}
*/
	"Print to console": {
    "prefix": "vue",
    "body": [
      "<template>",
      "  <div class=\"$0\">\n",
      "  </div>",
      "</template>",
      "",
      "<script>",
      "export default {",
      "  data () {",
      "    return {\n",
      "    };",
      "  },",
      "  methods: {\n",
      "  }",
      "}",
      "</script>\n",
      "<style lang='stylus' scoped>\n",
      "</style>"
  	],
    "description": "Log output to console"
  }
}
```


