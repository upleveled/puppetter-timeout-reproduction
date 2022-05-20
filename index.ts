import puppeteer, { ElementHandle } from 'puppeteer';

export async function puppeteerWorkflow(urlToTest: string) {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome-stable',
  });
  const page = await browser.newPage();
  await page.goto(urlToTest);

  const [element] = (await page.$x(
    `//label[contains(text(), 'Top text')]`,
  )) as [ElementHandle<HTMLInputElement>];

  await element.type('lol');

  console.log('network test start...');
  await page.waitForNetworkIdle();
  await console.log('network check 1 pass');

  await element.type('lol');
  await page.waitForNetworkIdle();
  console.log('network check 2 pass');

  await element.type('lol');
  await page.waitForNetworkIdle();
  console.log('network check 3 pass');

  await element.type('lol');
  await page.waitForNetworkIdle();
  console.log('network check 4 pass');

  await element.type('lol');
  await page.waitForNetworkIdle();
  console.log('network check 5 pass');

  await element.type('lol');
  await page.waitForNetworkIdle();
  console.log('network check 6 pass');

  await element.type('lol');
  await page.waitForNetworkIdle();
  console.log('network check 7 pass');

  await element.type('lol');
  await page.waitForNetworkIdle();
  console.log('network check 8 pass');

  await element.type('lol');
  await page.waitForNetworkIdle();
  console.log('network check 9 pass');

  await element.type('lol');
  await page.waitForNetworkIdle();
  console.log('network check 10 pass');

  await element.type('lol');
  await page.waitForNetworkIdle();
  console.log('network check 11 pass');

  await element.type('lol');
  await page.waitForNetworkIdle();
  console.log('network check 12 pass');

  await element.type('lol');
  await page.waitForNetworkIdle();
  console.log('network check 13 pass');

  await element.type('lol');
  await page.waitForNetworkIdle();
  console.log('network check 14 pass');

  await element.type('lol');
  await page.waitForNetworkIdle();
  console.log('network check 15 pass');

  await element.type('lol');
  await page.waitForNetworkIdle();
  console.log('network check 16 pass');

  await element.type('lol');
  await page.waitForNetworkIdle();
  console.log('network check 17 pass');

  await element.type('lol');
  await page.waitForNetworkIdle();
  console.log('network check 18 pass');

  await element.type('lol');
  await page.waitForNetworkIdle();
  console.log('network check 19 pass');

  await element.type('lol');
  await page.waitForNetworkIdle();
  console.log('network check 20 pass');

  await page.close();
  await browser.close();
}

await puppeteerWorkflow('https://drone-break-test.netlify.app/');
