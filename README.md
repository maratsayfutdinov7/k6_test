### Как запустить?
1. Скачать проект из github
2. Открыть git bash
3. Перейти в папку `$ cd example_project`
4. Выполнить команду `$ npm init -y`
5. Установить необходимые пакеты:

   `npm install --save-dev \
      webpack \
      webpack-cli \
      k6 \
      babel-loader \
      @babel/core \
      @babel/preset-env \
      core-js`

7. Для сборки теста выполнить команду `npm run build` (предварительно находясь в папке /src)
8. Для запуска теста необходимо выполнить команду `$ k6 run "Путь до папки - \test_project\src\scriptLoadTest.js"` (обязательно в ковычках)
