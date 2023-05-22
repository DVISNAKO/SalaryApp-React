import WorkersItem from "../workers-item/worker-item";
import './workers-list.css';

const WorkersList = ({data, onDelete, onToggleProp}) => {

    const elemets = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <WorkersItem 
            key={id}
            {...itemProps}
            onDelete={() => onDelete(id)}
            onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
            />
        )
    })

    return (
        <ul className="app-list list gropu">
          {elemets}
        </ul>
    )
}

export default WorkersList;