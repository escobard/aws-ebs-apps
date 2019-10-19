import React, { useState, useEffect, Component } from 'react'
import axios from 'axios'

/*
const FibFunction = () => {
    [seenIndexes, setSeenIndexes] = useState([]);
    [values, setValues] = useState({});
    [index, setIndex] = useState('');

    useEffect(()=>{
        fetchValues();
        fetchIndexes();
    },[])

    const fetchValues = async () => {
        const values = await axios.get('/api/values/current');
        this.setValues(values.data);
    }

    const fetchIndexes = async () => {
        const seenIndexes = await axios.get('/api/values/all');
        this.setSeenIndexes(seenIndexes.data)
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();

        await axios.post('/api/values', {
            index: index
        });
        this.setIndex('');
    }

    const renderSeenIndexes = () =>{ 
        return seenIndexes.map(( { number } ) => number ).join(', ');
    }

    const renderValues = () => {
        const entries = [];

        for(let key in values){
            entries.push(
                <div key={key}>
                    For index {key} I calculated {values[key]}
                </div>
            )
        }

        return entries;
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter your index:
                </label>
                <input
                    value={index}
                    onChange={event => this.setIndex(event.target.value)}
                />
                <button>
                    Submit
                </button>

                <h3>Indexes I have Seen</h3>
                {renderSeenIndexes()}
                <h3>Calculated Values</h3>
                {renderValues()}
            </form>
        </div>
    )

}
*/

class Fib extends Component {
    state = {
        seenIndexes: [],
        values: {},
        index: ''
    };

    componentDidMount() {
        this.fetchValues();
        this.fetchIndexes();
    }

    async fetchValues(){
        const values = await axios.get('/api/values/current');
        this.setState({ values: values.data });
    }

    async fetchIndexes(){
        const seenIndexes = await axios.get('/api/values/all');
        this.setState({
            seenIndexes: seenIndexes.data
        })
    }

    handleSubmit = async (event) =>{
        event.preventDefault();

        await axios.post('/api/values', {
            index: this.state.index
        });
        this.setState({ index: '' });
    }

    // will return the numbers of our indexes
    renderSeenIndexes(){
        return this.state.seenIndexes.map(( { number } ) => number ).join(', ');
    }
    
    renderValues(){
        const entries = [];

        for(let key in this.state.values){
            entries.push(
                <div key={key}>
                    For index {key} I calculated {this.state.values[key]}
                </div>
            )
        }

        return entries;
    }

    render(){
        return(
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Enter your index:
                </label>
                <input
                    value={this.state.index}
                    onChange={event => this.setState({ index: event.target.value })}
                />
                <button>
                    Submit
                </button>

                <h3>Indexes I have Seen</h3>
                {this.renderSeenIndexes()}
                <h3>Calculated Values</h3>
                {this.renderValues()}
            </form>
        </div>
        )
}
}

export default Fib;