import app
import unittest

app.app.config["TESTING"] = True
client = app.app.test_client()

class Tests(unittest.TestCase):
    def test_cities_page(self):
        with client:
            response = client.get('/cities')
            self.assertEqual(response.status_code, 200)
            data = response.json["cities"]
            self.assertEqual(len(data), 9)

    def test_shelters_page(self):
        with client:
            response = client.get('/shelters')
            self.assertEqual(response.status_code, 200)
            data = response.json["shelters"]
            self.assertEqual(len(data), 9)

    def test_pharmacies_page(self):
        with client:
            response = client.get('/pharmacies')
            self.assertEqual(response.status_code, 200)
            data = response.json["pharmacies"]
            self.assertEqual(len(data), 9)

    def test_city(self):
        with client:
            response = client.get("/cities/6")
            self.assertEqual(response.status_code, 200)
            data = response.json["city"]
            self.assertEqual(data["name"], "Houston")

    def test_shelter(self):
        with client:
            response = client.get("/shelters/34")
            self.assertEqual(response.status_code, 200)
            data = response.json["shelter"]
            self.assertEqual(data["name"], "The Abundant Harvest")
            self.assertEqual(data["city"], "Spring")

    def test_pharmacy(self):
        with client:
            response = client.get("/pharmacies/121")
            self.assertEqual(response.status_code, 200)
            data = response.json["pharmacy"]
            self.assertEqual(data["name"], "CVS Pharmacy")
            self.assertEqual(data["city"], "Jacinto City")

if __name__ == "__main__":
    unittest.main()