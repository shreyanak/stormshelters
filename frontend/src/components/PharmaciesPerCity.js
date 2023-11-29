import React, { useEffect, useState } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PharmaciesPerCity = () => {
    const [data, setData] = useState(null);
    const url = 'https://api.stormshelters.me/pharmacies'

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(url);

            let pharm_data = response.data.pharmacies
            const cities = new Map();

            for (let pharm in pharm_data) {
                let pharmacy = pharm_data[pharm]
                let city = pharmacy['city']
                if (cities.get(city) == undefined) {
                    cities.set(city, 1)
                } else {
                    cities.set(city, cities.get(city) + 1)
                }                   
            }
            // list of dictionaries
            const city_data = [];
            for (let city of cities.keys()) {
                let num_pharms = cities.get(city);
                city_data.push({ city: city, count: num_pharms });
            }
            setData(city_data)
            console.log('citydata', city_data)
        };

    
        fetchData();
    }, [])

    return (
        <Container fluid="md">
            <Row style={{ width: "100%", height: 600 }}>
                <h3 className="p-5 text-center">Number of Pharmacies Per City</h3>
                <Col>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart width={500} height={500} data={data}>
                            <XAxis dataKey="city" scaleToFit="true" interval={5} />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="count" fill="#8884d8" />
                        </BarChart>
                    </ResponsiveContainer>
                </Col>
            </Row>
        </Container>
    );

    
}


export default PharmaciesPerCity
