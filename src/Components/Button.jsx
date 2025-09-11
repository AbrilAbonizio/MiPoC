export function Button(props) {
  const { option, onSelect } = props;

  return (
    <>
      {' '}
      <button type="button" onClick={onSelect} className="btn btn-primary m-1">
        {option}
      </button>
      <br></br>
    </>
  );
}
