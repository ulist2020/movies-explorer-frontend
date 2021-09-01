import './ButtonAdd.css';

function ButtonAdd({onButtonAdd}) {
  return (
      <div className="button">
        <button  className="button__add" onClick={onButtonAdd}>Ещё</button>
    </div>
  )
}
export default ButtonAdd;