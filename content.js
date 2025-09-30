(function() {
  // ページロード後に実行
  function addLegacyButtons() {
    // 領収書リンクを全部探す
    const receiptLinks = document.querySelectorAll("a[href*='/gp/css/summary/']");

    receiptLinks.forEach(link => {
      // すでにlegacyボタンを追加済みならスキップ
      if (link.parentElement.querySelector(".legacy-receipt-btn")) return;

      // legacy URLを生成
      const legacyUrl = link.href.replace("/gp/", "/gp/legacy/");

      // 新しいボタン作成
      const btn = document.createElement("a");
      btn.href = legacyUrl;
      btn.textContent = "📄 Legacy領収書";
      btn.target = "_blank";
      btn.className = "legacy-receipt-btn";

      // スタイル（Amazonっぽく）
      btn.style.display = "inline-block";
      btn.style.marginLeft = "8px";
      btn.style.padding = "4px 8px";
      btn.style.backgroundColor = "#ffd814";
      btn.style.border = "1px solid #fcd200";
      btn.style.borderRadius = "6px";
      btn.style.fontWeight = "bold";
      btn.style.textDecoration = "none";
      btn.style.color = "#111";
      btn.style.fontSize = "12px";

      // 領収書リンクの右横に挿入
      link.insertAdjacentElement("afterend", btn);
    });
  }

  // 初期実行
  addLegacyButtons();

  // 動的ロード対応（スクロールで追加注文が出る場合）
  const observer = new MutationObserver(addLegacyButtons);
  observer.observe(document.body, { childList: true, subtree: true });
})();
