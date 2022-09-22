import chromedriver_autoinstaller
from selenium import webdriver
from selenium.webdriver.common.by import By
import pandas as pd
import urllib.request

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
    id_list=[]
    title_list=[]
    link_list=[]
    date_list=[]
    count=1
    for i in range(1,6):
        url = f'https://www.dgphpi.or.kr/board/lists/3?keyword=&field=&page={i}'
        browser=startChrome()
        browser.get(url)
        gallery_list = browser.find_element(By.CLASS_NAME,'galley_list')
        gallerys=gallery_list.find_elements(By.TAG_NAME,'li')
        for gallery in gallerys:
            id_list.append(count)
            title_list.append(gallery.find_element(By.CLASS_NAME,'title').text)
            date_list.append(gallery.find_element(By.CLASS_NAME,'date').text)
            link_list.append(gallery.find_element(By.TAG_NAME,'a').get_attribute('href'))
            imgUrl=gallery.find_element(By.TAG_NAME,'img').get_attribute('src')
            urllib.request.urlretrieve(imgUrl,str(count)+".png")
            count=count+1

    return id_list, title_list, date_list, link_list

id_list,title_list,date_list, link_list=hackerton()

df=pd.DataFrame({'title':title_list,'date':date_list,'link':link_list})
df.to_json('crawling.json',orient='records',force_ascii=False)
