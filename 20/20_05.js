// Vueコンポーネントの定義
Vue.component(
  'msg-comp',                   // タグ名
  {
    template: 'おはよう' // タグの内容
  }
)

let app = new Vue({
  el: '#app',                   // 関連付けるDOM要素
});