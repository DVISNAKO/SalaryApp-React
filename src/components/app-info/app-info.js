import './app.info.css';



const AppInfo = ({workers, incresed,}) => {
    
    const active = {color: 'orange'};

    return (
        <div className="app-info">
            <h1 style={active}>Учет сотрудников в компании</h1>
            <h2>Всего работников: {workers}</h2>
            <h2>Премию получат: {incresed}</h2>
        </div>
    )
}

export default AppInfo;