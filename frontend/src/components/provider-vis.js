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

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';

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

function ProviderVis() {
    var centersPerBorough = getCenters();
    // console.log("mydata: " + myvals);

    return (
        // Display for Number of TEsting Centers Per Borough
        <Container>
            <h1 className="text-center">MetroPulse visualizations</h1>

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
        </Container>
    );
}

export default ProviderVis;
