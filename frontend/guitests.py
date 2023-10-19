import unittest
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


url = 'https://dev.stormshelters.me/'

class Test(unittest.TestCase):
    def setUp(self):
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

    def tearDown(self):
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
        self.driver.get(url + 'cities')
        self.driver.implicitly_wait(5)
        button = self.driver.find_element(By.XPATH, '/html/body/div/div/div[1]/div[1]/div[1]/div/div/div/a')
        button.click()
        self.assertEqual(self.driver.current_url, url + "cities/Baytown")


    def test_shelter_card(self):
        self.driver.get(url + 'shelter')
        self.driver.implicitly_wait(5)
        button = self.driver.find_element(By.XPATH, '/html/body/div/div/div[1]/div[1]/div[3]/div/div[2]/div/a')
        button.click()
        self.assertEqual(self.driver.current_url, url + "shelter/Hope%20Center%20Houston")

    def test_pharmacy_card(self):
        self.driver.get(url + 'pharmacies')
        self.driver.implicitly_wait(5)
        button = self.driver.find_element(By.XPATH, '/html/body/div/div/div[1]/div[2]/div[1]/div/div/div/a')
        button.click()
        self.assertEqual(self.driver.current_url, url + "pharmacies/Walgreens")

    def test_next_button_shelter(self):
        self.driver.get(url +'shelter')
        self.driver.implicitly_wait(5)
        button = self.driver.find_element(By.XPATH, '/html/body/div/div/div[2]/div/button[2]')
        button.click()
        self.assertEqual(self.driver.current_url, url + 'shelter/')

    def test_prev_button_city(self):
        self.driver.get(url + 'cities')
        self.driver.implicitly_wait(5)
        button = self.driver.find_element(By.XPATH, '/html/body/div/div/div[2]/div/button[2]')
        button.click()
        self.assertEqual(self.driver.current_url, url + 'cities/')

    def test_home_navbar(self):
        self.driver.get(url + 'cities')
        self.driver.implicitly_wait(5)
        button = self.driver.find_element(By.LINK_TEXT, 'StormShelters')
        button.click()
        self.assertEqual(self.driver.current_url, url)

if __name__ == "__main__":
    unittest.main()
