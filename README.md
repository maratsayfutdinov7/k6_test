### Как запустить?
1. Открыть git bash
2. Создать папку `mkdir .test_project`
3. Перейти в папку `cd test_project`
4. Выполнить команду npm init -y
5. Установить необходимые пакеты:

   `npm install --save-dev \
      webpack \
      webpack-cli \
      k6 \
      babel-loader \
      @babel/core \
      @babel/preset-env \
      core-js`
6. Скачать папку src, package.json, webpack.config.js
7. Поместить скаченные файлы в созданную папку test_project
8. В консоли перейти в папку `cd src`
9. Для сборки теста выполнить команду `npm run build` (предварительно находясь в папке /src)
10. Для запуска теста необходимо выполнить команду `$ k6 run "Путь до папки - \test_project\src\scriptLoadTest.js"` (обязательно в ковычках)
