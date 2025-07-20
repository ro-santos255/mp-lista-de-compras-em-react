import type { Item } from '../App';
import trash from '../assets/trash.svg';
import todo from '../assets/todo.svg';
import done from '../assets/done.svg';

type ItemProps = {
  item: Item;
};

export default function Item({ item }: ItemProps) {
  return (
    <>
      <article className="flex w-full gap-4" key={item.id}>
        <img src={ item.checked ?  done : todo } alt="#">{}</img>
        <div className="flex-1">
          <p className={`${item.checked ? 'text-slate-400 line-through' : ''}`}>{item.name}</p>
          <p className={`text-sm text-slate-400 ${item.checked && 'line-through'}`}>{item.quantity}</p>
        </div>
        <img src={trash} alt="ícone de lixeira" className="justify-self-end" />
      </article>
      <hr />
    </>
  );
}


