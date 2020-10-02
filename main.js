const container = document.getElementById("container");
const saveButton = document.getElementById("save-button");
const memoInput = document.getElementById("memo-input");

let list = [];

saveButton.onclick = function () {
  // inputの書いて有る内容をconsole.logで表示したい
  const memoText = memoInput.value;

      /**
   * <div></div>←cardDiv
   */
  const cardDiv = document.createElement("div")

    /**
   *  <div></div>←memoDiv
   */
  const memoDiv = document.createElement("div")


    /**
   *  <div>メモの内容</div>←memoDiv
   */
  memoDiv.textContent = memoInput.value;

  list.push(memoInput.value);

    /**
   * <div>←cardDiv
   *  <div>←memoDiv
   *    メモの内容
   *  </div>
   * </div>
   */
  cardDiv.append(memoDiv)

  // // // 日時も表示したい。
  // const date = new Date().toString();

  //     /**
  //  *  <div></div>←dateDiv
  //  */
  // const dateDiv = document.createElement("div")
  //       /**
  //  *  <div>日付</div>←dateDiv
  //  */
  // dateDiv.textContent = date;

    /**
 * <div>←cardDiv
 *  <div>←memoDiv
 *    メモの内容
 *  </div>
 *  <div>←dateDivDiv
 *    日付
 *  </div>
 * </div>
 */
  // cardDiv.append(dateDiv)

/**
 * <div>←container
    * <div>←cardDiv
    *  <div>←memoDiv
    *    メモの内容
    *  </div>
    *  <div>←dateDivDiv
    *    日付
    *  </div>
    * </div>
 * </div>
 */
  container.append(cardDiv);
  // inputの中身を消す。
  memoInput.value = ""

  // LocalStorageにメモを保存しとけば良さそう
  localStorage.list = JSON.stringify(list);
}

// リロードしたとき
// const cardDiv = document.createElement("div")
// const memoDiv = document.createElement("div")
// memoDiv.textContent = localStorage.memo;
// cardDiv.append(memoDiv);
// container.append(cardDiv);

// JSON.stringify // JSの配列とかObjectを文字列(JSON)に変換する
// JSON.parse // JSONを JSの配列とかオブジェクトとかに戻してくれる


// listにlocalStorage.listを読み込む
list = JSON.parse(localStorage.list)

// 読み込む時にlistからHTMLタグを生成して追加する.
for (let i=0; i < list.length; i++) {
  const cardDiv = document.createElement("div")
  const memoDiv = document.createElement("div")
  memoDiv.textContent = list[i];
  cardDiv.append(memoDiv);
  container.append(cardDiv);
}