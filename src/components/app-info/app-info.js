import './app.info.css';

const AppInfo = ({workers, incresed}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании</h1>
            <h2>Всего работников: {workers}</h2>
            <h2>Премию получат: {incresed}</h2>
        </div>
    )
}

export default AppInfo;