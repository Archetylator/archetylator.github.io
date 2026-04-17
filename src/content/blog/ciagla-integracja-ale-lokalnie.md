---
title: Ciągła integracja, ale lokalnie
date: 2024-01-05
lang: pl
---

Wczoraj przeczytałem [świetny post](https://world.hey.com/dhh/we-re-moving-continuous-integration-back-to-developer-machines-3ac6c611) DHH. Podziwiam jego zdolność do upraszczania procesów. David napisał tak:

> In fact, it's what I like most about paying attention to the progress of our platforms. Oh, browsers now have really good JavaScript and CSS engines? Awesome. Let's go #nobuild. Oh, developer CPUs now have dozens of cores? Sweet. Let's pull CI home.
>
> — David Heinemeier Hansson, world.hey.com/dhh

Idea jest prosta, nasze procesory posiadają coraz więcej rdzeni, a to oznacza, że mogą przejąć zadania, które wcześniej wykonywane były głównie po stronie serwera.

I faktycznie jest tak, że nawet jeśli używasz dzisiaj Github Actions do małego lub średniego projektu po to by stosować ciągłą integrację (CI), to i tak przed wypchaniem czegokolwiek do repo puszczasz testy i lintery lokalnie. Co więcej często lokalnie jest szybciej.

Więc dlaczego by nie zrezygnować całkowicie z ciągłej integracji po stronie GitHuba? Po co robić to samo lokalnie i chwilę później w chmurze? Poza tym konserwacja CI kosztuje czas, więc i pieniądze. Zdarza się walczyć z problemami, które pojawiają się tylko na GitHubie.

Oczywiście musimy się zabezpieczyć przed zmianami, które nie zostały lokalnie przetestowane, tak aby mieć pewność, że programista puścił testy na swoim kompie.

Dlatego każdy commit może zostać zatwierdzony (ang. signoff).
