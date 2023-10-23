// Vueオブジェクトの生成
let app = new Vue({
  el: '#app',             // 関連付けるDOM要素
  data: {                 // 複数のデータ
    msg1: 'おはよう',
    msg2: 'いい天気ですね？'
  },
  methods: {                  // methodオブジェクト以下にメソッドを定義する
    msgChange: function () {  // 「onclick」が発生したとき
      // データを変更する
      this.msg1 = 'こんばんわ';
      this.msg2 = 'お元気ですか？';
    }
  }
});