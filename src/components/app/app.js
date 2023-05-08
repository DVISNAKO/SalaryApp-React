import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../app-search/app-search';
import AppFilter from '../app-filter/app-filter';
import WorkersList from '../workers-list/workers-list';
import WorkersAddForm from '../workers-add-form/workers-add-form';


function App(){

    const data = [
        {name: 'Boris', salary: 1000, increase: false, id:1},
        {name: 'Anna', salary: 4000, increase: true, id:2},
        {name: 'Masha', salary: 3000, increase: true, id:3},
    ]


    return (
        <div className='app'>
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>
            <WorkersList data={data}/>
           {/* <WorkersList data={data}/> */}
           <WorkersAddForm/>
        </div>
    );
}

export default App;