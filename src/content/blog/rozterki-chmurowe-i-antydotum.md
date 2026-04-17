---
title: Rozterki chmurowe i antydotum
date: 2024-12-10
lang: pl
---

Z natury ostrożny, lubię mieć pod kontrolą sprawy. Zawsze bez kasy, więc to jeszcze ważniejsze by nie przepalić na darmo diengi. Dlatego między innymi nigdy nie polubiłem się z AWS.

## Czego nie lubię w Amazonie?

Nie podoba mi się możliwość ponoszenia nielimitowanych wydatków. Dlaczego w AWS nie możesz ustawić sztywnych limitów? Nigdy takiej opcji nie odkryłem, chociaż muszę zaznaczyć, że nie jestem amazońskim magikiem. Oczywiście istnieje na to sposób, ale nie jest to gotowa opcja, a rozwiązanie, które musisz samodzielnie zmontować, co nie jest łatwe i przyjemne.

Tak czy inaczej ustawianie budżetu w AWS jest dla mnie bardzo mylące, bo taki budżet nie blokuje wydatków, a jedynie wysyła notyfikacje e-mailowe w sytuacji zbliżenia się do określonego progu.

Niestety już raz przeżyłem chwilę grozy — z resztą [nie tylko ja](https://www.teampay.co/blog/manage-cloud-costs) — gdy z powodu mojego niedopatrzenia system zaczął zapętlać pewne procesy i w krótkim czasie tworzyć ich setki. Na szczęście byłem wtedy przy kompie i szybko to ubiłem, w przeciwnym wypadku mogłem nieźle za to zapłacić.

Poza tym, z tego co kojarzę to aktualnie poniesione koszty [nie są określane w czasie rzeczywistym](https://docs.aws.amazon.com/cost-management/latest/userguide/ce-what-is.html), a ich kalkulacja odbywa się w najlepszym wypadku kilka razy dziennie. Zresztą to grzech nie tylko AWS, ale również innych dostawców usług chmurowych jak Google lub Azure.

## Na ratunek VPS

W związku z tym VPS ma u mnie propsa. Na takim VPS czuje się jak szef, obawiając się zdecydowanie mniej, że zostanę obarczony nieprzewidzianymi kosztami. Oczywiście duuużym minusem są koszty w postaci roboczo-(świetlnych)-lat poświęconych na konfigurację i konserwację własnych serwerów.

Dlatego zainteresowało mnie wydane niedawno narzędzie od 37signals, [Kamal](https://github.com/basecamp/kamal). Niestety, Kamal jest zorientowany na projekty o większej skali, bo zakłada jednoserwerowe aplikacje. Natomiast, zależało mi na tym, bym mógł na jednym serwerze uruchomić kilka mniejszych projektów oszczędzając przy tym hajs.

Podczas moich poszukiwań odnalazłem szczepionkę na moją nerwicę obłokową, odkryłem antidokkum, czyli...

## Dokku

Oprogramowanie [Dokku](https://dokku.com/) reklamowane jest jako otwarto-źródłowa alternatywa dla Heroku. Dokku jest nakładką na Docker'a automatyzującą procesy niezbędne przy wdrażaniu kontenerowych aplikacji na jednym serwerze.

Na przykład ułatwia tworzenie i zarządzanie certyfikatami SSL, przeglądanie logów, wywoływanie zdalnych komend, wdrażania bez przestojów i tym podobne.

Dokku jest ŚWIETNE!
