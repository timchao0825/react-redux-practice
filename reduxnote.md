### Flux 思維

*在互動高的前端應用中，應用程式的資料狀態和使用者的操作事件是我們最傷腦筋的地方*

Flux 是一個單向資料流的**設計概念**

Flux 中有四位主要角色：

1. Action：規範所有改變資料的動作，讓你可以快速掌握整個 App 的行為。
2. Dispatcher：將目前發生的行為，告知給所有已註冊的 Store。
3. Store：存放資料和業務邏輯，並且只提供 getter API 讓人取得資料。
4. View：根據資料渲染 UI 和傾聽使用者的操作事件。

***Flux 與 Redux 的差別***

1. Redux 只有一個 Store；
2. Flux 有多個 Stores
3. Redux 應用的業務資料都存於一個狀態物件中，並由 Store 去管理； 
4. Flux 應用的業務資料，分別存在每個 Store 中
5. Redux 將改變業務資料的邏輯，對應成多個 Reducers 函數； 
   Flux 將改變業務資料的邏輯，分別存在每個 Store 中
6. Redux 的 Store 提供 dispatch API 傳遞 action 物件； 
   Flux 提供 Dispatcher 將 action 物件傳遞給每個 Store

***Redux 的核心概念***

1. 單一的狀態樹
2. Action 描述改變
3. Reducer 實作改變
