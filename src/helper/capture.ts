import * as puppeteer from 'puppeteer';
import * as fs from 'fs';

export async function capture(capturePath: string) {
    const browser = await puppeteer.launch({
        args: [`--window-size=${1920},${1080}`]
    });
    const page = await browser.newPage();
    page.setViewport({
        width: 1920,
        height: 1080
    })
    const readFile = fs.readFileSync('./listdata/siteList.json', );
    const sitesJSON = await JSON.parse(readFile as any);
    // console.log(sitesJSON.sites[0]);
    for (var i in sitesJSON) {
        let site = sitesJSON[i];
        await page.goto(site);
        let pageTitle = await page.title();
        await page.screenshot({ path: `${capturePath}/${pageTitle}.png`, fullPage: true });
    }
    await browser.close();
}