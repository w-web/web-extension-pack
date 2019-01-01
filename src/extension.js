const fs = require('fs');
const vscode = require('vscode');
const json = require('jsonc-parser');
const defaultSettings = require('./setting');
const userDataPath = require('./UserDataPath');

exports.activate = (context) => {
  context.subscriptions.push(
    vscode.commands.registerCommand('web.extension.pack.setting', () => {
      const settingsPath = userDataPath.getPathCodeSettings();
      if (settingsPath === '') return vscode.window.showWarningMessage('未找到配置文件路径');
      fs.readFile(settingsPath, 'utf8', function(err, settings) {
        if (err) return vscode.window.showErrorMessage('读取配置文件错误');
        settings = json.parse(settings);
        if (!settings || typeof settings !== 'object') return vscode.window.showErrorMessage('读取配置错误');
        settings = Object.assign(settings, defaultSettings);
        fs.writeFile(settingsPath, JSON.stringify(settings, null, '  '), function(err) {
          if (err) return vscode.window.showErrorMessage('写入配置文件错误');
          vscode.window.showInformationMessage('默认配置设置成功');
        });
      });
    })
  );
};

exports.deactivate = () => {};
