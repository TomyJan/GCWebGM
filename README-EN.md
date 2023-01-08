# GCWebGM

English | [简体中文](https://github.com/TomyJan/GCWebGM/blob/master/README.md)

> **INFORM**
>
> This project uses [`AGPL-3.0`](https://github.com/Dituon/grasscutter-command-helper/blob/main/LICENSE) protocol open source, you must keep the project copyright information, no resale.
>
> (You can change anything you want, but please keep the `Github` link of this project)

## Original Project 

[grasscutter-command-helper](https://github.com/Dituon/grasscutter-command-helper) 

## [Demo](https://cmd.amoe.cc/)

## Current features

- Generate command, Multi command version support

- Classification & Save & Share & Import

- Remote command, Account Binding (Based on [OpenCommand Plugin](https://github.com/jie65535/gc-opencommand-plugin))

- Multilingual support

## GET parameters

The script read the `GET` params in URL, you can provide some default param to the user

| params    | value field               | description        |
| --------- | ------------------------- | ------------------ |
| `version` | `1.2.1` `1.4.2`           | command version    |
| `lang`    | `navigator.language`      | language           |
| `server`  | `encodeURIComponent(URL)` | remote server host |
| `import`  | `encodeURIComponent(URL)` | import command     |

**Examples**

> `https://cmd.amoe.cc/?version=1.4.2&server=https%3A%2F%2Ftomyjan.com`
> 
> command version is `1.4.2`, remote server is `https://tomyjan.com`

> `https://cmd.d2n.moe/new?lang=en-US&import=./share/artifact.gmh`
>
> Language is `English`, import command from `./share/artifact.gmh`

## Deploy

1. `git -clone`

2. `cd ./src`, `npm install`, `npm run build` (Use [Vite](https://github.com/vitejs/vite))

3. Configure `Nginx`, reverse proxy `/opencommand` `/status`, specify the target forwarding server through `Header/reqip`
   
4. `cd ./api` `npm start`
   
5. Configure `Nginx`, reverse proxy `/api`, forward the requests to `http://127.0.0.1:1919`

## Build & Update Data

See `/builder/`, need `NodeJS`

## About 

[Qiscord](https://qiscord.tomys.top) | [Telegram](https://TomyJan_Channel.t.me) 
