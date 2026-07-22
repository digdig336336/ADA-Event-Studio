2. システム設計書（architecture.md）
システム構成
                 ADA Event Studio

                     Home

      ┌────────────┼────────────┐
      │            │            │
  Auction      Lottery      Award

将来構成
                Firestore

          ▲                 ▲

       iPad             大型スクリーン

          ▲                 ▲

        Vue Application
状態管理
Event
Preparing
    ↓
Running
    ↓
Finished
Auction
Preparing
    ↓
Running
    ↓
Finished
Item
Waiting
    ↓
Active
    ↓
Sold