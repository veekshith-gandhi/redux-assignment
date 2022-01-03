import { useSelector } from "react-redux";

const HomeView = () => {
  const { todos } = useSelector((state) => state.todo);
  return (
    <div className="container">
      <div className="row ">
        {todos?.map((item, index) => {
          return (
            <div className="col-4" key={index}>
              <div class="card">
                <ul class="list-group list-group-flush">{item.title}</ul>
                <div class="card-footer">{item.description}</div>
                <div className="d-flex justify-content-between align-items-center">
                  <button className="btn btn-secondary">Toggle</button>
                  <a className="btn btn-danger" role="button">
                    Edit
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default HomeView;
