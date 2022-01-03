const EditTodoView = () => {
  return (
    <form className="container mt-5 mb-5">
      <div className="mb-3 ">
        <input
          className="form-control form-control-lg"
          type="text"
          placeholder="Enter todo title"
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control form-control-lg"
          type="text"
          placeholder="Enter todo description"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Edit
      </button>
    </form>
  );
};
export default EditTodoView;
