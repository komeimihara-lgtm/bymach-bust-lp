# BYMACH PRO バストケア特化 Swipe LP

## ファイル構成

```
bymach-bust-lp/
├── index.html           メインLP
├── style.css            スタイル(ピンク×ゴールド系)
├── script.js            フェードイン・モーダル・スライダー
├── thanks.html          送信完了ページ
├── vercel.json          Vercel設定
└── images/
    ├── 01_fv_bustcare_bymachpro.png
    ├── 02_market_bustcare_need.png
    ├── 03_owner_concerns_bustmenu.png
    ├── 04_result_bust_before_after_main.png
    ├── 06_mechanism_bust_foundation.png
    ├── 07_mechanism_3points_blood_firm_support.png
    ├── 08_why_bymachpro_bust_effective.png
    ├── 09_revenue_bust_menu_profit.png
    ├── 10_treatment_flow_bustcare.png
    ├── 11_support_after_installation.png
    ├── 12_functions_5menus_bymachpro.png
    ├── 13_madeinjapan_patent_technology.png
    ├── 14_voice_salon_testimonials.png
    ├── 15_offer_monthly_68000_bustmenu.png
    ├── 16_contact_cta_free_demo.png
    └── cases/
        ├── case_01_bust_before_after.png
        ├── case_02_bust_before_after.png
        ├── case_03_bust_before_after.png
        ├── case_04_bust_before_after.png
        ├── case_05_bust_before_after.png
        └── case_06_bust_before_after.png
```

05は画像ではなくHTMLセクション(症例ギャラリー誘導ページ)として実装。

---

## 機能

- **縦スクロールLP**(Swiperではなくネイティブスクロール)
- **スライドごとにフェードイン**(IntersectionObserver)
- **05はHTML実装**(症例ギャラリー誘導)
  - 6サムネイル表示
  - 「症例をスワイプで見る」ボタン
- **症例モーダル**(6症例・横スワイプ・ドットナビ・左右矢印)
- **追従CTAバー**(画面下部・最終ページで自動非表示)
- **9項目フォーム**
  - 名前/サロン名/電話/メール/都道府県/運営状況/導入時期/興味/問い合わせ内容
  - ハニーポット(スパム対策)付き
- **最終ページの3ボタン**(デモ予約/LINE/資料請求)にクリックエリア

---

## デプロイ手順

### 1. GitHub新規リポジトリ作成
- https://github.com/new
- Repository name: `bymach-bust-lp`
- Public/Private: お好みで
- READMEにチェック入れない → 「Create repository」

### 2. ファイルアップロード
- リポジトリ画面の「uploading an existing file」をクリック
- `bymach-bust-lp` フォルダの**中身全部**をドラッグ&ドロップ
- 「Commit changes」

### 3. Vercelデプロイ
- https://vercel.com/new
- `bymach-bust-lp` を Import
- 設定はデフォルトのまま「Deploy」

### 4. FormSubmit認証(初回のみ)
- デプロイ後、フォームを1回テスト送信
- info@lenard.jp に認証メールが届く
- メール内のリンクをクリックして承認

### 5. カスタムドメイン設定(任意)
- Vercel Settings → Domains で設定

---

## 重要ポイント

### SL16のクリックエリア
画像内の3ボタンのクリック位置は `style.css` の以下で調整可能:

```css
.cta-area-demo { top: 47%; height: 7.5%; }
.cta-area-line { top: 55.5%; height: 7.5%; }
.cta-area-doc  { top: 64%; height: 7.5%; }
```

### 基本LPとの違い
- カラー: 紺色を使わず、パールホワイト/クリーム/ゴールド/くすみピンク
- UI: Swiperではなく、ネイティブスクロール
- フォーム: 9項目(基本LPは5項目)
- 症例モーダル: あり

---

動作確認の結果、不具合があれば教えてください。
