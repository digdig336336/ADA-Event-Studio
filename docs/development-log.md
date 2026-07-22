Version 0.1
完了
Vue導入
Vuetify導入
Router導入
Home画面
Auction画面
入札ボタン
SOLD処理
Version 0.2

設計見直し

価格を

price

から

Item.currentPrice

へ変更。

Version 0.3

データ設計変更

商品へ状態を追加

waiting
active
sold
Version 1.0

システム全体設計開始

決定事項

Eventを最上位とする
Event配下にAuctionを持つ
Auction配下にItemを持つ
currentItemをcomputedで管理する
商品データが自身の状態（価格・落札・状態）を保持する
状態（State）を中心とした設計を採用する