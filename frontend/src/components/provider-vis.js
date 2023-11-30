/* 
    MetroPulse's visualizations using D3.
    **all need to be a different type!
    1. 
    2.
    3.
    
*/
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../css/Visualization.css';

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend, Line, LineChart } from 'recharts';

// https://backend.metropulse.link/centers?borough=bronx

function getCenters() {
    
    var boroughs = new Array('Bronx', 'Brooklyn', 'Manhattan', 'Queens');
    var values = [];
    for (var borough in boroughs) {
        var mainURL = `https://backend.metropulse.link/centers?borough=${boroughs[borough]}`;
        var mainreq = new XMLHttpRequest();
        mainreq.open('GET', mainURL, false); 
        mainreq.send(null);
        // We get just the size from API
        var number = JSON.parse(mainreq.responseText).total_size;
        // Prepare the data in a fortmat that Recharts will like
        var data = { name: boroughs[borough], Centers: number };
        values[borough] = data;
    }
    return values;
}

function getPops() {
    var values = [
        {
            Range: "< 20,000",
            Number: 0
        },
        {
            Range: "20,000-30,000",
            Number: 0
        },
        {
            Range: "30,000-40,000",
            Number: 0
        },
        {
            Range: "40,000-50,000",
            Number: 0
        },
        {
            Range: "> 50,000",
            Number: 0
        }, 
        
    ];
    var mainURL = `https://backend.metropulse.link/neighborhoods`;
    var mainreq = new XMLHttpRequest();
    mainreq.open('GET', mainURL, false); 
    mainreq.send(null);
    var json = JSON.parse(mainreq.responseText);
    console.log(json);
    for (var neighboorhood in json.data) {
        var popToAdd = json.data[neighboorhood].population;
        if (popToAdd < 20000) {
            values[0].Number++;
        } else if (popToAdd > 20000 && popToAdd < 30000) {
            values[1].Number++;
        } else if (popToAdd > 30000 && popToAdd < 40000) {
            values[2].Number++;
        } else if (popToAdd > 40000 && popToAdd < 50000) {
            values[3].Number++;
        } else if (popToAdd > 50000 ) {
            values[4].Number++;
        }
    }
    return values;
}


function ProviderVis() {
    var popRanges = getPops();
    console.log(popRanges[1].Number)
    var centersPerBorough = getCenters();
    // console.log("mydata: " + myvals);

    return (
        // Display for Number of TEsting Centers Per Borough
        <Container>
            <h1 className="text-center">MetroPulse Visualizations</h1>

            <h2 className="text-center">Number of Testing Centers Per Borough</h2>

            <ResponsiveContainer width = "80%" height={450} className="center">
                <BarChart width = {580} height={360} data={centersPerBorough}>
                    <CartesianGrid strokeDasharray="1 1" />
                    <XAxis dataKey="name"></XAxis>
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Centers" fill="#515487" width="20%"/>
                </BarChart>
            </ResponsiveContainer>

            <h2 className="text-center">Number of Neighborhoods By Population</h2>

            <ResponsiveContainer width = "80%" height={450} className="center">
                <LineChart width = {580} height={360} data={popRanges}>
                    <CartesianGrid strokeDasharray="1 1" />
                    <XAxis dataKey="Range"></XAxis>
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Number" fill="#515487" width="20%"/>
                </LineChart>
            </ResponsiveContainer>
        </Container>

    );
}

export default ProviderVis;
