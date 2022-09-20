import chromedriver_autoinstaller
from selenium import webdriver
from selenium.webdriver.common.by import By
import pandas as pd

chromedriver_autoinstaller.install(True)

def startChrome():
    chrome_ver = chromedriver_autoinstaller.get_chrome_version().split('.')[0]
    try:
        browser = webdriver.Chrome(f'./{chrome_ver}/chromedriver.exe')
    except:
        chromedriver_autoinstaller.install(True)
        browser = webdriver.Chrome(f'./{chrome_ver}/chromedriver.exe')
    return browser

def hackerton():
    title_list=[]
    link_list=[]
    date_list=[]
    for i in range(1,6):
        url = f'https://www.dgphpi.or.kr/board/lists/3?keyword=&field=&page={i}'
        browser=startChrome()
        browser.get(url)
        gallery_list = browser.find_element(By.CLASS_NAME,'galley_list')
        gallerys=gallery_list.find_elements(By.TAG_NAME,'li')
        for gallery in gallerys:
            title_list.append(gallery.find_element(By.CLASS_NAME,'title').text)
            date_list.append(gallery.find_element(By.CLASS_NAME,'date').text)
            link_list.append(gallery.find_element(By.TAG_NAME,'a').get_attribute('href'))

    return title_list, date_list, link_list

title_list,date_list, link_list=hackerton()

df=pd.DataFrame({'title':title_list,'date':date_list,'link':link_list})
df.to_json('crawling.json',orient='records',force_ascii=False)
