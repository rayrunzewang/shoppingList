# Codes

## Descripton

A comprehensive full-stack shopping list project, utilizing JavaScript modular design and employing Webpack for bundling. Adhering to the SOLID principles, the aim is to write code following best practices and continuously refine it.

The project is crafted to deliver an efficient user experience on desktops, allowing users to effortlessly input desired items for purchase and manage them during shopping. This full-stack shopping list project is intended for learning and practicing various technologies, spanning from the frontend to the backend, covering the entire technology stack. It serves not only as an inclusive learning endeavor but also provides practical application and feedback to users through real-world shopping list scenarios.

## Table of Content

## Roadmap

- [ ] **Set up a template with a mature webpack configuration for reusability, including technologies like Babel:**

- [ ] **Write elegant code using modularization and SOLID principles:**

- [ ] **Implement desktop data input and mobile web page shopping list functionality, including the ability to delete items after purchase:**
   
- [ ] **Deployment on aws amplify**

- [ ] **Implement data input on desktop and mobile, and use the shopping list feature on mobile web pages:**

- [ ] **Gradually optimize UI based on usage, and release updates:**

## clientside rendering SPA Structure with no frame

使用Webpack、ESLint、TypeScript、HTML、SCSS、Babel等工具和技术，构建一个组件化的前端应用，而不依赖于任何特定的前端框架，如React、Angular或Vue。

采用自己组织代码的方式，使用模块化的思想来设计和实现你的前端应用。以下是一些步骤和注意事项，帮助你构建一个基于组件化的前端应用：

- 项目初始化： 使用Webpack初始化你的项目。配置Webpack以处理 TypeScript、HTML、SCSS 等文件。设置 Babel 来处理 ES6+ 语法。

- 模块化组织代码： 将你的前端代码划分为独立的模块或组件。每个组件应该有自己的文件夹，包含其相关的 HTML、CSS（或 SCSS）、TypeScript 文件。

- TypeScript： 使用 TypeScript 来提供静态类型检查，并提高代码的可维护性。在组件中定义接口、类型，以增强代码的清晰度。

- HTML 和 SCSS： 使用HTML来定义你的页面结构，使用 SCSS（或者纯 CSS）来处理样式。将样式和结构分离，以便更好地组织和维护代码。

- ESLint： 配置 ESLint 以确保代码质量和一致性。ESLint 可以帮助你捕捉潜在的错误，并确保代码符合一致的编码规范。

- 组件通信(optional)： 如果你的组件之间需要通信，可以考虑使用自定义事件、全局状态管理（如 Redux、MobX）或其他适合你需求的方式。

- 测试： 考虑使用适当的测试框架（如 **Jest**、Mocha）编写单元测试和集成测试，以确保你的组件在不同情况下都能正常工作。

组件化的思想有助于代码的重用性、可维护性和可测试性。

code(may need fix):
```html
// 后端只向前端发用一个html文件， 然后剩下的就靠前端渲染
// 这段代码实现了在html template中使用js渲染app 这个 组件 的过程
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Simple SPA</title>
</head>
<body>
  <div id="app"></div>

  <script>
    // 虚拟DOM的简单实现
    function createElement(type, props, ...children) {
      return { type, props, children };
    }

    // 渲染函数
    function render(vnode, container) {
      if (typeof vnode === 'string' || typeof vnode === 'number') {
        const textNode = document.createTextNode(String(vnode));
        container.appendChild(textNode);
        return;
      }

      const element = document.createElement(vnode.type);

      if (vnode.props) {
        Object.keys(vnode.props).forEach(key => {
          element[key] = vnode.props[key];
        });
      }

      vnode.children.forEach(child => {
        render(child, element);
      });

      container.appendChild(element);
    }

    // 示例组件
    const App = () => {
      return createElement('div', { class: 'app-container' },
        createElement('h1', null, 'Hello, SPA!'),
        createElement('p', null, 'This is a simple SPA without a framework.')
      );
    };

    // 渲染应用
    const appContainer = document.getElementById('app');
    render(App(), appContainer);
  </script>
</body>
</html>

```
```js
// 而这段代码实现了渲染除了app之外的另一个组件

// 新的示例组件
const AnotherComponent = () => {
  return createElement('div', { class: 'another-component' },
    createElement('p', null, 'This is another component.')
  );
};

// 修改 App 组件，添加 AnotherComponent
const App = () => {
  return createElement('div', { class: 'app-container' },
    createElement('h1', null, 'Hello, SPA!'),
    createElement('p', null, 'This is a simple SPA without a framework.'),
    AnotherComponent()  // 添加 AnotherComponent
  );
};

// 渲染应用
const appContainer = document.getElementById('app');
render(App(), appContainer);

```
## SPA 的实现逻辑
SPA（单页面应用）在前端确实涉及到了渲染，但与传统的多页面应用（MPA）不同，SPA通常只在加载时请求一次HTML文件，之后的页面切换和内容更新是通过JavaScript来实现的，不再需要重新请求整个HTML。

SPA的渲染过程主要包括以下几个步骤：

- 加载初始HTML： 在SPA应用首次加载时，浏览器会请求并加载一个初始的HTML文件。这个HTML文件包含应用的整体结构，以及一些必要的JavaScript和CSS资源。

- JavaScript的执行： 一旦初始HTML加载完成，其中的JavaScript代码开始执行。这通常包括框架或库的初始化、路由的设置等。SPA通常使用前端路由来管理不同页面之间的切换。

- 动态数据获取： SPA通过JavaScript代码向服务器请求数据，通常使用AJAX、Fetch API或其他异步请求方法。这些数据可以是JSON格式，包含了页面所需的内容。

- 虚拟DOM和页面更新： SPA中很多框架（例如React、Vue）采用了虚拟DOM的概念。当数据变化时，框架会创建一个虚拟表示的DOM树，与实际DOM进行比较，并计算最小的更新。然后，只有真正需要更新的部分才会被重新渲染，而不是整个页面。

- 局部更新： 基于虚拟DOM的比较结果，框架只会更新发生变化的部分，而不是整个页面。这使得页面切换和内容更新变得非常快速和高效。

SPA的渲染过程因使用的前端框架而有所不同，但基本上都遵循上述的一般原则。这种方式通过异步加载数据和局部更新的机制，提供了更流畅的用户体验，避免了每次页面切换都重新加载整个HTML文件的开销。

## 前端发展历史
有助于学习前端js和框架：   
过渡从后端渲染（Server-Side Rendering，SSR）到前端渲染（Client-Side Rendering，CSR）是一个渐进的过程，没有一个确切的时间点。这个演变是由多个因素和技术的逐步发展共同推动的。
- AJAX的出现（2000年之后）
  - AJAX技术(基于1999年的XMLHttpRequest)的引入是这一转变的关键因素之一。它使得在不刷新整个页面的情况下，通过异步请求从服务器获取数据并更新页面的一部分成为可能。这为实现动态加载内容和提升用户体验打开了新的可能性。
  - 而在此之前，网页是以后端向前端发送一整个页面的方式更新的。在XMLHttpRequest引入之前，人们的确采用了一些不同的方式来进行页面间的通信。最典型的方式是通过超链接（a标签）或表单提交（form标签）。用户点击链接或提交表单会导致整个页面重新加载，服务器会根据请求返回新的完整页面。这种方式被称为同步请求，因为它们阻塞了用户界面的响应，直到服务器响应返回并整个页面刷新完成。
- JavaScript框架的兴起（2005年之后）
  - 随着JavaScript框架的兴起，如jQuery、Prototype等，前端开发变得更加便捷。这些框架简化了跨浏览器兼容性和DOM操作，使得开发者能够更容易地在客户端实现一些交互效果。
- 单页面应用（SPA）的兴起（2010年之后）
  - SPA是一种特殊的前端渲染方式，它在应用加载时只请求一次HTML，而后续的页面更新都通过JavaScript在客户端进行。框架如AngularJS、React、Vue等的出现使得SPA的开发变得更加容易，为前端渲染提供了更强大的工具。
- 现代前端框架的发展（2010年之后）
  - 随着React、Vue、Angular等现代前端框架的崛起，前端渲染的能力和复杂性得到了极大的提升。这些框架引入了虚拟DOM、组件化开发、状态管理等概念，使得前端应用更容易维护、扩展和优化。

总体而言，这一过渡是一个渐进的过程，涉及了多个技术和工具的演进。虽然没有一个确切的时间点，但2000年之后至2010年之后的这个时间段是前后端渲染模式发生重大变化的关键时期。

## Note：

- Taking into account the collection feature:

- Customization and Extensibility: Allow users to customize the appearance and functionality of the shopping list, as well as add extra features such as coupon applications and shopping history records.

- Data Synchronization and Cloud Deployment: Consider synchronizing shopping list data to the cloud, enabling users to access and update their lists across different devices. This enhances flexibility and accessibility.