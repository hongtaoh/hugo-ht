---
title: "{{ replace .TranslationBaseName "-" " " | title }}"
date: {{ .Date }}
author: "{{ index $.Site.Params.author $.Section}}"
slug:
draft: false
toc: false
---
