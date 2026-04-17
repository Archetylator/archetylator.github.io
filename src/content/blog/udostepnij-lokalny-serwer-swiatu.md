---
title: Udostępnij twój lokalny serwer światu
date: 2025-09-20
lang: pl
---

Ogarniemy narzędzie, które tworzy bezpieczne tunele z publicznego internetu do lokalnej maszyny znajdującej się za zaporą sieciową lub NAT-em.

Potrzebujemy własny serwer i zarejestrowaną domenę.

Do DNS dodajemy następujące wpisy.

```
A | localdev | IP twojego serwera
A | *.localdev | IP twojego serwera
```

Zainstaluj nginx i certbot.

```bash
# konfiguracja domeny
sudo certbot certonly --standalone

# sprawdzenie auto-odnawiania certyfikatu
sudo certbot renew --dry-run
```

Konfigurujemy nginx.

```nginx
server {
    listen 443 ssl;
    server_name localdev.example.com *.localdev.example.com;

    ssl_certificate /etc/letsencrypt/live/localdev.example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/localdev.example.com/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

    location / {
        proxy_pass http://127.0.0.1:8080;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto https;

        # WebSocket support
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "Upgrade";
    }
}

server {
    listen 80;
    server_name localdev.example.com *.localdev.example.com;

    # Redirect all traffic to HTTPS
    # return 301 https://$host$request_uri;
}
```

Instalujemy [frp](https://github.com/fatedier/frp). Jeśli musimy, kopiujemy frps do `/usr/local/bin/frps`.

Dodajemy `/etc/frp/frps.toml`.

```toml
bindPort = 7000
vhostHTTPPort = 8080

auth.method = "token"
auth.token = "twojtajnytoken"
```

Tworzymy `/etc/systemd/system/frps.service`.

```ini
[Unit]
Description=FRP Server Service
After=network.target

[Service]
Type=simple
ExecStart=/usr/local/bin/frps -c /etc/frp/frps.toml
Restart=on-failure
RestartSec=5s
User=nobody
NoNewPrivileges=true

[Install]
WantedBy=multi-user.target
```

Dodajemy do systemd.

```bash
sudo systemctl enable frps
sudo systemctl start frps
```

Tworzymy prosty skrypt `touch ~/.local/bin/localdev && chmod +x ~/.local/bin/localdev`

```bash
#!/bin/bash

frpc -c ~/.config/localdev/frpc.toml
```

Instalujemy frpc lokalnie na naszym kompie.

```bash
sudo mv frpc /usr/local/bin/
```

Dodajemy konfigurację dla frpc `touch ~/.config/localdev/frpc.toml`

```toml
serverAddr = "xx.xx.xx.xx"
serverPort = 7000

auth.method = "token"
auth.token = "twojtajnytoken"

transport.tls.enable = true

[[proxies]]
name = "web"
type = "http"
localPort = 3000
customDomains = ["localdev.example.com"]

[[proxies]]
name = "api"
type = "http"
localPort = 3001
customDomains = ["api.localdev.example.com"]
```

Możemy uruchomić nasze narzędzie `localdev`.
