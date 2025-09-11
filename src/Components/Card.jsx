export function Card(props) {
  const { children } = props;
  return (
    <div class="card" style={{ width: '900px', margin: '0 auto' }}>
      <div class="card-body">
        <h5 className="card-title">CRUD Alumno</h5>
        <hr></hr>
        {children}
      </div>
    </div>
  );
}
