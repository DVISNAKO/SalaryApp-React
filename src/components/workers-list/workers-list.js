import WorkersItem from "../workers-item/worker-item";
import './workers-list.css';

const WorkersList = ({data}) => {

    const elemets = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <WorkersItem key={id}{...itemProps}/>
        )
    })

    return (
        <ul className="app-list list gropu">
          {elemets}
        </ul>
    )
}

export default WorkersList;