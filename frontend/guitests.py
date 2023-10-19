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
        button = self.driver.find_element(By.LINK_TEXT, 'About')
        button.click()
        self.assertEqual(self.driver.current_url, url + "about/")

    def test2(self):
        self.driver.get(url)
        button = self.driver.find_element(By.LINK_TEXT, 'Cities')
        button.click()
        self.assertEqual(self.driver.current_url, url + "cities/")

    def test3(self):
        self.driver.get(url)
        button = self.driver.find_element(By.LINK_TEXT, 'Shelter & Relief')
        button.click()
        self.assertEqual(self.driver.current_url, url + "shelter/")

    def test4(self):
        self.driver.get(url)
        button = self.driver.find_element(By.LINK_TEXT, 'Pharmacies')
        button.click()
        self.assertEqual(self.driver.current_url, url + "pharmacies/")

    def test_city_card(self):
        self.driver.get(url)
        button = self.driver.find_element(By.XPATH, '//*[@id="root"]/div/div[1]/div[1]/div[1]/div/div/div/a')
        button.click()
        self.assertEqual(self.driver.current_url, url + "cities/Baytown")

    def test_pharmacy_card(self):
        self.driver.get(url)
        button = self.driver.find_element(By.XPATH, '//*[@id="root"]/div/div[1]/div[2]/div[1]/div/div/div/a')
        button.click()
        self.assertEqual(self.driver.current_url, url + "pharmacies/Walgreens")


    def test_shelter_card(self):
        self.driver.get(url)
        button = self.driver.find_element(By.XPATH, '//*[@id="root"]/div/div[1]/div[2]/div[1]/div/div[2]/div/a')
        button.click()
        self.assertEqual(self.driver.current_url, url + "shelter/The Abundant Harvest")
