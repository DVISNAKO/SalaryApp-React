import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../app-search/app-search';
import AppFilter from '../app-filter/app-filter';
import WorkersList from '../workers-list/workers-list';
import WorkersAddForm from '../workers-add-form/workers-add-form';

import './app.css';

class App extends Component{
constructor(props){
    super(props);
    this.state = {
        data: [
            {name: 'Boris', salary: 1000, increase: false, like: true, id:1},
            {name: 'Anna', salary: 4000, increase: true, like: false, id:2},
            {name: 'Masha', salary: 3000, increase: true, like: false, id:3},
        ]
    }
    this.maxId = 4;
}

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            like: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
               if (item.id === id){
                   return {...item, [prop]: !item[prop]}
               }
               return item;
            })
   
           }))
    }

 render() {

    const workers = this.state.data.length;
    const incresed = this.state.data.filter(item => item.increase).length;

    return (
        <div className='app'>
            <AppInfo workers={workers} incresed={incresed}/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <WorkersList 
            data={this.state.data}
            onDelete={this.deleteItem}
            onToggleProp={this.onToggleProp}
            />
           
           <WorkersAddForm onAdd={this.addItem}/>
        </div>
    );
 }
}

export default App;