import unittest
import time
from selenium import webdriver
from selenium import common
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

url = 'https://www.stormshelters.me/'

class Test(unittest.TestCase):
    def SetUp(self):
        chrome_options = Options()
        chrome_options.add_argument("--window-size=1920,1080")
        chrome_options.add_argument("--start-maximized")
        chrome_options.add_argument("disable-infobars")
        chrome_options.add_argument("--disable-extensions")
        chrome_options.add_argument("--disable-gpu")
        chrome_options.add_argument("--disable-dev-shm-usage")
        chrome_options.add_argument("--no-sandbox")
        chrome_options.add_argument("--headless")
        self.driver = webdriver.Chrome(options=chrome_options)
        self.driver.get(url)

    def end_session(self):
        self.driver.quit()

    def test1(self):
        self.driver.get(url)
        button = self.driver.find_element(By.CLASS_NAME, 'navbar')
        button.click()
        self.assertEqual(self.driver.current_url, url + "about/")

    # def test2(self):


