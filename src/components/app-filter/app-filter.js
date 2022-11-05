import './app-filter.css'

const AppFilter = () => {
  return (
    <div className="btn-group">
      <button className="btn btn-light" type="button">
        Всі працівники
      </button>
      <button className="btn btn-outline-light" type="button">
        На взліт
      </button>
      <button className="btn btn-outline-light" type="button">
        Зарплатня більше 1К $
      </button>
    </div>
  )
}

export default AppFilter
