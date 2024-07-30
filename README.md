# Todo-List

Todo-List is a React JS based project that stores your todo-tasks with use of local storage on your computer you can check uncheck your day to day tasks since we have used the loacal storage it always restores our data unless the browser cache is cleared

##Skills Used
<li>React JS</li>
<li>Tailwind CSS</li>
<li>HTML</li>
<li>CSS</li>
<li>JavaScript</li>

##Features
<li>This project utilises local storage on browser so after refresh or closing our tasks still exsist the same</li>
<li>uuid package is used to create unique id for each list item</li>
<li>The useEffect hook is used to load the data for every re-render</li>
<li>The useState hook helps to re-render when tasks are added/deleted/checked/unchecked</li>
<li>The react-icons are used without any external svg files</li>
<li>The save button gets dissabled untill todo list <= 3</li>
<li>onChange, rendering Lists using maps make it easier and avoids repetability of code</li>



This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
