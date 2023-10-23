// Reactコンポーネントを継承して新たなコンポーネントを作成
  class OkButton extends React.Component {
    // コンストラクター
    constructor(props) {
      super(props);
      // 状態を保持するプロパティstate
      this.state = { ok : false };
    }

    //　出力処理
    render() {
      if (this.state.ok) {
        return "OKが押されました（" + this.state.ok + ")";
      }
      return React.createElement(
        "button",
        { onClick:() => this.setState({ ok : true })},
        "押してください"
      );
    }
  }

  // 表示される場所の要素とコンポーネントを結び付けて表示させる
  const domContainer = document.querySelector("#app");

  // ReactDOMに出力処理を行う
  ReactDOM.render(
    // ReactオブジェクトでOkButtonから新たな要素を作成
    React.createElement(OkButton),
    // 出力させたい場所のコンテナ（HTML側の要素）
    domContainer
  );