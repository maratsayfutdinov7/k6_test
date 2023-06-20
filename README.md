### Как запустить?
1. Открыть git bash
2. Создать папку `mkdir .test_project`
3. Перейти в папку `cd test_project`
4. Выполнить команду `npm init -y`
5. Установить необходимые пакеты:

   `npm install --save-dev \
      webpack \
      webpack-cli \
      k6 \
      babel-loader \
      @babel/core \
      @babel/preset-env \
      core-js`
6. Скачать с git файл webpack.config.js
8. Поместить скаченный файл в созданную папку test_project
9. В консоли перейти в папку `cd src`
10. В скрипт package.json добавить команду "build: "webpack"
     "scripts" : {
        "build: "webpack",   <---------- добавить данную строку с командой
        "test": "echo \ "Error: no test specifield\ "&& exit 1"
    }
11. В папке test_project создать папку c наименованием src    
12. Скачать с git файл scriptLoadTest.js
13. Поместить скаченный файл в созданную папку src
14. Перейти в папку src cd src
15. Для сборки теста выполнить команду `npm run build`

    Если все выполнено верно в ответе придет:
    > tests@1.0.0 build
    > webpack
    asset scriptLoadTest.bundle.js 2.89 KiB [emitted] [minimized] (name: loadTest)
    runtime modules 937 bytes 4 modules
    orphan modules 84 bytes [orphan] 2 modules
    ./src/scriptLoadTest.js + 2 modules 3.18 KiB [not cacheable] [built] [code generated]
    webpack 5.87.0 compiled successfully in 680 ms

16. Для запуска теста необходимо выполнить команду `$ k6 run "Путь до папки - \test_project\src\scriptLoadTest.js"` (обязательно в ковычках)

Ожидание 5 минут.. далее появится результат тестирования.
