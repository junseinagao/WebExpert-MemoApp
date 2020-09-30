// 必要な HTML ELEMENT を取得
// 一回目 input button div
const inputMemoText = document.getElementById("input-memo-text");
const buttonMemoReserve = document.getElementById("button-memo-reserve");
const divMemoDisplay = document.getElementById("div-memo-display");

// button が押された時のイベントを記述.
// イベント内容
//    1.inputタグの中身を保存する.
//    2.inputタグの中身をpタグのtextContentに入れる.
//    3.pタグをdivタグに追加する。
buttonMemoReserve.onclick = function () {
  // 1.inputタグの中身を保存する.
  //    (inputElemnt.valueの存在をconsole.dirで探す.)
  const memoContent = inputMemoText.value;

  // 2.inputタグの中身をpタグのtextContentに入れる.

  //    2-1.pタグを作る
  const pTag = document.createElement("p");
  //    2-2.pタグのtextContentにmemoContentを入れる.
  pTag.textContent = memoContent;

  //    2-3.pタグをdivタグに入れる
  divMemoDisplay.appendChild(pTag);

  // デバッグ用のconsole.log
  console.dir(memoContent);
  console.dir(pTag);
  console.log(pTag.textContent);
};
