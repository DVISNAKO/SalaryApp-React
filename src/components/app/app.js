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
        ],
        term: '',
        filter: 'all',
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

    searchEmp = (items, term) => {
        if(term === 0) {
            return items;
        }

        return items.filter(item => {
          return item.name.indexOf(term) > -1   
        })
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'increase': 
                return items.filter(item => item.increase);
            case 'moreThen1000':
                return items.filter(item => item.salary > 1000)
            default: 
                return items        
        }
    }

    onFilterSelected = (filter) => {
        this.setState({filter});
    }

 render() {
    const {data, term, filter} = this.state
    const workers = this.state.data.length;
    const incresed = this.state.data.filter(item => item.increase).length;
    const visibleDate = this.filterPost(this.searchEmp(data, term), filter);

    return (
        <div className='app'>
            <AppInfo workers={workers} incresed={incresed}/>

            <div className="search-panel">
                <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                <AppFilter filter={filter} onFilterSelected={this.onFilterSelected}/>
            </div>
            <WorkersList 
            data={visibleDate}
            onDelete={this.deleteItem}
            onToggleProp={this.onToggleProp}
            />
           
           <WorkersAddForm onAdd={this.addItem}/>
        </div>
    );
 }
}

export default App;