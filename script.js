function login() {
    var id = document.getElementById("id").value;
    var password = document.getElementById("password").value;
    var message = document.getElementById("message").value;
    var delay = document.getElementById("delay").value;
  
    // 웹 크롤링을 통한 네이버 블로그 로그인 및 서로이웃 추가
    puppeteerLogin(id, password, message, delay);
  }
  
  async function puppeteerLogin(id, password, message, delay) {
    const puppeteer = require('puppeteer');
  
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://nid.naver.com/nidlogin.login');
  
    await page.type('#id', id);
    await page.type('#pw', password);
    await page.click('.btn_global');
  
    await page.waitForNavigation();
  
    await addRandomNeighbor(page, message);
  
    await browser.close();
  }
  
  async function addRandomNeighbor(page, message) {
    // 서로이웃 추가를 위한 웹 크롤링 로직 작성
    // ...
  }
  