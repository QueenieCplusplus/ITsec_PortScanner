# ITsec_PortScanner
通訊埠的攻擊

# Ports Banned

除了 SOP 以外，『連接埠禁止』也不失為其中一個預防措施，此機制能拒絕所有非 TCP 的連接埠連接。此預防機制的實施步驟，不像是瀏覽器禁止連接埠那樣 (例如 crome 利用 --explicitly-allowed-ports=PORTS)，也不像是安全控制那樣(安全控制利用 HTTP 標頭)或其它 SOP 屬性進行設定。

網路的連接埠禁止，可設定在 port no. 如：22、25、110、143 等。如需要檢視禁止的清單， Crome 可參考 net_util.cc，可查看哪些連接埠被使用者禁止。然而，此方法不適合用在閉源的瀏覽器，如 IE。

# C/S 

網路軟體分成客戶端與伺服器端此兩大元件：


                                       IP Tables forwards Requests to Bundling Listening Port

     Client App  Ports Range {...}  <---->  Port    Server App
         
                  XMLHttpRequests              Listeners in Multi-Threads
         
         
         
               


