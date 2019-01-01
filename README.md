# web-extension-pack

> Web 扩展包 - Web Extension Pack

## 扩展包内容

- 操作主题
  - [Chinese (Simplified) Language Pack](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-zh-hans) - 中文（简体）语言包
  - [Sublime Text Keymap and Settings Importer](https://marketplace.visualstudio.com/items?itemName=ms-vscode.sublime-keybindings) - Sublime Text 快捷键映射
  - [vscode-icons](https://marketplace.visualstudio.com/items?itemName=robertohuertasm.vscode-icons) - 图标主题
- 增强工具
  - [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense) - 路径自动提示
  - [Code Runner](https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner) - 代码运行工具
  - [GitLens — Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) - Git 增强工具
  - [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker) - 代码拼写检查器
  - [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) - EditorConfig
- 检测工具
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - ESLint 代码检测
  - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - prettier 格式化
- HTML
  - [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag) - 自动重命名标签
- JS
  - [JavaScript (ES6) code snippets](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets) - ES6 代码段
- Vue
  - [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) - Vue 代码工具
  - [Vue Peek](https://marketplace.visualstudio.com/items?itemName=dariofuzinato.vue-peek) - Vue 引用查看
  - [VueHelper](https://marketplace.visualstudio.com/items?itemName=oysun.vuehelper) Vue 代码段
- 小程序
  - [minapp](https://marketplace.visualstudio.com/items?itemName=qiu8310.minapp-vscode) - 微信小程序代码工具
- Nodejs
  - [npm](https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script) - npm
- PHP
  - [PHP IntelliSense](https://marketplace.visualstudio.com/items?itemName=felixfbecker.php-intellisense#overview) - PHP 智能提示
  - [PHP Debug](https://marketplace.visualstudio.com/items?itemName=felixfbecker.php-debug) - PHP 调试

## 设置默认配置

> 按 F1 输入 `设置：默认配置(WebExtensionPack)` 自动增加默认配置

```json
{
  "editor.fontSize": 14,
  "editor.tabSize": 2,
  "editor.formatOnSave": true,
  "editor.minimap.renderCharacters": false,
  "editor.snippetSuggestions": "top",
  "files.autoSave": "onFocusChange",
  "breadcrumbs.enabled": true,
  "emmet.triggerExpansionOnTab": true,

  "eslint.alwaysShowStatus": true,
  "prettier.printWidth": 120,
  "prettier.singleQuote": true,
  "prettier.arrowParens": "always",
  "prettier.trailingComma": "es5",

  "workbench.iconTheme": "vscode-icons",
  "code-runner.defaultLanguage": "javascript",
  "cSpell.userWords": ["editorconfig"]
}
```
