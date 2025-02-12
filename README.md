# dropdown-rl

> Dropdown SelectBox component, only for Makyo Co technical test purpose. Available in npm registry https://www.npmjs.com/package/dropdown-rl

[![NPM](https://img.shields.io/npm/v/atic-react-web.svg)](https://www.npmjs.com/package/dropdown-rl) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## ✨ Features

![Preview](https://rizkylazuardi.github.io/dropdown-rl/src/assets/selectbox.gif)

- A flexible and beautiful Select Input control for ReactJS 
- with multiselect, autocomplete, async and creatable support
- also support for Portal configuration and customize render option.

## 🖥 Environment Support

* Modern browsers and Internet Explorer 10+
* Server-side Rendering
* [Electron](http://electron.atom.io/)

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Electron |
| --------- | --------- | --------- | --------- | --------- | --------- |
| IE10, IE11, Edge| last 5 versions| last 5 versions| last 5 versions| last 5 versions| last 5 versions

## 📦 Install
Install as a component in your own project :
```bash
npm install dropdown-rl
```
or
```bash
yarn add dropdown-rl
```

## 📦 Run

for dropdown-rl develiper, You can run the storybook locally using this command :
```bash
npm run storybook
```

## 📦 Build for dropdown-rl developer
This component will expose only the JavaScript file after you run this command. Then, you can push the component to your registry
Check the result in root folder / dist
```bash
npm run build
```
Check the result in root folder / dist. the package ready to be published into npm registry.


Also you can build the storybook by running this command:
```bash
npm run build-storybook
```
check the result file in root folder / storybook-static

## 🔨 Usage

```jsx
import React from 'react'
import { SelectBox } from 'dropdown-rl';

const data = [
    { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
    { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
    { value: 'orange', label: 'Orange', color: '#FF8B00' },
];

const MyyPage = () => {
    return (
        <SelectBox options={data} isSearchable={true} name="searchable_feature" />
    );
}
```

## License

RL © [GitHub](https://github.com/rizkylazuardi)
