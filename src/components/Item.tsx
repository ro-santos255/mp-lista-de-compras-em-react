import type { Item } from '../App';
import trash from '../assets/trash.svg';
import todo from '../assets/todo.svg';
import done from '../assets/done.svg';

type ItemProps = {
  item: Item;
  handleClickComplete: (id: string) => void;
  handleClickDelete: (id: string) => void;
};

export default function Item({ item, handleClickComplete, handleClickDelete }: ItemProps) {
  return (
    <>
      <article className="flex w-full gap-4" key={item.id}>
        <button onClick={() => handleClickComplete(item.id)}>
          <img src={ item.checked ?  done : todo } alt="#">{}</img>
        </button>
        <div className="flex-1">
          <p className={`${item.checked ? 'text-slate-400 line-through' : ''}`}>{item.name}</p>
          <p className={`text-sm text-slate-400 ${item.checked && 'line-through'}`} >{item.quantity}</p>
        </div>
        <button onClick={() => handleClickDelete(item.id)}>
          <img src={trash} alt="ícone de lixeira" className="justify-self-end" />
        </button>
      </article>
      <hr />
    </>
  );
}


