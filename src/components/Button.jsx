import './style.css'
export function Button({onClick,valor}) {
  return (
    <input type='button' className='btn' onClick={onClick} value={valor}/>
  );
}
