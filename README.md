# ITsec_PortScanner
通訊埠的攻擊

# Ports Banned

除了 SOP 以外，『連接埠禁止』也不失為其中一個預防措施，此機制能拒絕所有非 TCP 的連接埠連接。此預防機制的實施步驟，不像是瀏覽器禁止連接埠那樣 (例如 crome 利用 --explicitly-allowed-ports=PORTS)，也不像是安全控制那樣(安全控制利用 HTTP 標頭)或其它 SOP 屬性進行設定。

網路的連接埠禁止，可設定在 port no. 如：22、25、110、143 等。
