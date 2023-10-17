import app
import unittest

app.app.config["TESTING"] = True
client = app.app.test_client()

class Tests(unittest.TestCase):
    def test_cities_page(self):
        with client:
            response = client.get('/cities')
            self.assertEqual(response.status_code, 200)
            data = response.json["data"]
            self.assertEqual(len(data), 10)

    def test_shelters_page(self):
        with client:
            response = client.get('/shelters')
            self.assertEqual(response.status_code, 200)
            data = response.json["data"]
            self.assertEqual(len(data), 10)

    def test_pharmacies_page(self):
        with client:
            response = client.get('/pharmacies')
            self.assertEqual(response.status_code, 200)
            data = response.json["data"]
            self.assertEqual(len(data), 15)

    def test_city(self):
        with client:
            response = client.get("/cities/5")
            self.assertEqual(response.status_code, 200)
            data = response.json["data"]
            self.assertEqual(data["name"], "Houston")

    def test_shelter(self):
        with client:
            response = client.get("/shelters/34")
            self.assertEqual(response.status_code, 200)
            data = response.json["data"]
            self.assertEqual(data["name"], "The Abundant Harvest")
            self.assertEqual(data["city"], "Spring")

    def test_pharmacy(self):
        with client:
            response = client.get("/pharmacies/")
            self.assertEqual(response.status_code, 200)
            data = response.json["data"]
            self.assertEqual(data["name"], "Walgreens")
            self.assertEqual(data["city"], "Deer Park")

if __name__ == "__main__":
    unittest.main()