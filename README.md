# 日盛證卷 - Angular 入門實作班 - 原始檔及補充資訊

## 熱鍵表

- [Windows](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf)
- [Mac](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)

## 常用熱鍵

1. 全部儲存： 
- [Win] `ctrl + k, s`
- [Max] `cmd + option + s`
2. 切換關聯檔案
- [Win] `alt + o`
- [Max] `option + shift + o`
3. 快速開啟檔案
- [Win] `ctrl + p`
- [Max] `cmd + p`
4. 開啟/關閉左邊的 siderbar
- [Win] `ctrl + b`
- [Max] `cmd + b`
5. 開啟/關閉檔案總管
- [Win] `ctrl + shift + e`
- [Max] `cmd + shift + e`
6. 開啟/關閉搜尋視窗
- [Win] `ctrl + shift + f`
- [Max] `cmd + shift + f`
7. 開啟/關閉原始檔控制(git)
- `ctrl + shift + g`

## 在 Google Chrome 中除錯

1. 按下 `F12`
2. 切換到 Source 頁籤
3. 使用 ctrl + p 搜尋要除錯的 `*.ts` 檔案
4. 插入中斷點
5. 右邊的 watch 可以加入要監看的變數

## 練習使用 *ngFor 的物件資料

```
articles = [
    {
      "slug": "how-to-train-your-dragon",
      "title": "How to train your dragon",
      "description": "Ever wonder how?",
      "body": "It takes a Jacobian",
      "tagList": ["dragons", "training"],
      "createdAt": "2016-02-18T03:22:56.637Z",
      "updatedAt": "2016-02-18T03:48:35.824Z",
      "favorited": false,
      "favoritesCount": 0,
      "author": {
        "username": "jake",
        "bio": "I work at statefarm",
        "image": "https://i.stack.imgur.com/xHWG8.jpg",
        "following": false
      }
    },
    {
      "slug": "how-to-train-your-dragon-2",
      "title": "How to train your dragon 2",
      "description": "So toothless",
      "body": "It a dragon",
      "tagList": ["dragons", "training"],
      "createdAt": "2016-02-18T03:22:56.637Z",
      "updatedAt": "2016-02-18T03:48:35.824Z",
      "favorited": false,
      "favoritesCount": 0,
      "author": {
        "username": "jake",
        "bio": "I work at statefarm",
        "image": "https://i.stack.imgur.com/xHWG8.jpg",
        "following": false
      }
    },
    {
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "slug": "zp7yqc",
      "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
      "createdAt": "2018-05-11T21:58:27.358Z",
      "updatedAt": "2018-05-11T21:58:27.358Z",
      "tagList": ["react"],
      "description": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
      "author": {
        "username": "Eliseo@gardner.biz",
        "bio": "Eliseo",
        "image": "http://placekitten.com/200/300",
        "following": false
      },
      "favorited": false,
      "favoritesCount": 1
    },
    {
      "title": "quo vero reiciendis velit similique earum",
      "slug": "p3vcsw",
      "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
      "createdAt": "2018-05-11T21:55:00.722Z",
      "updatedAt": "2018-05-11T21:55:00.722Z",
      "tagList": ["angular"],
      "description": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
      "author": {
        "username": "Jayne_Kuhic@sydney.com",
        "bio": "Jayne_Kuhic",
        "image": "http://placekitten.com/200/300",
        "following": false
      },
      "favorited": false,
      "favoritesCount": 3
    },
    {
      "title": "odio adipisci rerum aut animi",
      "slug": "3c69lg",
      "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione",
      "createdAt": "2018-05-11T19:49:35.917Z",
      "updatedAt": "2018-05-11T19:49:35.917Z",
      "tagList": ["react", "angular"],
      "description": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione",
      "author": {
        "username": "Lew@alysha.tv",
        "bio": "Lew",
        "image": "http://placekitten.com/200/300",
        "following": false
      },
      "favorited": false,
      "favoritesCount": 5
    }
  ];
```
