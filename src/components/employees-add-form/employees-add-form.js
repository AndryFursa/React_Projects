import './employees-add-form.css'

const EmployeesAddForm = () => {
  return (
    <div className="app-add-form">
      <h3>Додайте нового парцівника</h3>
      <form className="add-form d-flex">
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="Як його ім'я ?"
        />
        <input
          type="number"
          className="form-control new-post-label"
          placeholder="Зарплата в $?"
        />

        <button type="submit" className="btn btn-outline-light">
          Додати
        </button>
      </form>
    </div>
  )
}

export default EmployeesAddForm
