import { useEffect, useState } from 'react';
import Card from './Card';
import './cards.css';
import { GridWrap, GridRow, GridColumn } from "emotion-flex-grid";
import { render } from '@testing-library/react';

const API = "https://mocki.io/v1/b9c63035-97c5-40a0-b45c-2abdf5261bdf";

function Cards() {

    const [data, setData] = useState([]);
    const [dataTrimed, setDataTrimed] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function fetchData() {
            try {
                // get data
                const resp = await fetch(API);
                const data = await resp.json();
                // save to a state
                setData(data);
                setLoading(false);
                // save trimed version of data to a state                
                setDataTrimed([...data].splice(0,6));

            } catch (error) {
                console.log(error);
            }
        }

        fetchData();

    }, []);


    return (

        <>   
        {
            loading && <p>Failed to load</p> 
        }        

        { !loading &&      

            dataTrimed.map((card, index) => {
                return (
                    <GridColumn key={index} className="Col">
                        <Card title={card.title} description={card.description} />
                    </GridColumn>
                )
            })
        }        
        </>

    )
}

export default Cards;