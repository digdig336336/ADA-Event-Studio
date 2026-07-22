3. データ設計書（data-model.md）
Event
Event
│
├ id
├ title
├ date
├ location
├ status
└ auction
Auction
Auction
│
├ id
├ status
├ items[]
└ currentItemIndex
Item
Item
│
├ id
├ number
├ name
├ description
├ image
├ donor
├ startPrice
├ currentPrice
├ soldPrice
├ bidder
├ status
└ memo
状態
status
waiting
active
sold