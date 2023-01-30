import fs from 'fs'
import { DATA_VERSION, langList, writeLog } from "./config.js"

langList.forEach(lang => {
    fs.readdir(`./data/${lang.navigator}/`, undefined, (err, files) => {
        if (!fs.existsSync(`../data/${lang.navigator}/${DATA_VERSION}`)) fs.mkdirSync(`../data/${lang.navigator}/${DATA_VERSION}`, { recursive: true })

            fs.copyFile(`../data/${lang.navigator}/3.3/avatarTalent.json`, `../data/${lang.navigator}/${DATA_VERSION}/avatarTalent.json`,writeLog)
            fs.copyFile(`../data/${lang.navigator}/3.3/statList.json`, `../data/${lang.navigator}/${DATA_VERSION}/statList.json`,writeLog)
            fs.copyFile(`../data/${lang.navigator}/3.3/weather.json`, `../data/${lang.navigator}/${DATA_VERSION}/weather.json`,writeLog)
    })
})
fs.copyFile(`../data/zh-CN/3.2/monsterListGM.json`, `../data/zh-CN/${DATA_VERSION}/monsterListGM.json`,writeLog)
