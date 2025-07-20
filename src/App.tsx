import logo from "./assets/logo.svg";
import { useRef, useState } from "react";

import Item from "./components/Item";
import { nanoid } from "nanoid";
export type Item = {
  id: string;
  name: string;
  quantity: string;
  checked: boolean;
};

export default function App() {
  const [items, setItems] = useState<Item[]>([
    {
      id: nanoid(),
      name: "Leite quente",
      quantity: "3 Caixas",
      checked: false,
    },
    {
      id: nanoid(),
      name: "Maçã",
      quantity: "500g",
      checked: true,
    },
    {
      id: nanoid(),
      name: "Arroz",
      quantity: "1",
      checked: true,
    },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);

  const completedItems = items.filter((item) => item.checked);
  const notCompletedItems = items.filter((item) => !item.checked);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formEl = e.currentTarget;
    const formData = new FormData(formEl);
    const name = formData.get("name") as string;
    const quantity = formData.get("quantity") as string;

    const item: Item = {
      id: nanoid(),
      name,
      quantity,
      checked: false,
    };

    const newItems = [item, ...items];
    setItems(newItems);
    formEl.reset();
    inputRef.current && inputRef.current.focus();
  }
  return (
    <main className="max-w-2xl px-6 py-12 pb-20 mx-auto my-10 bg-white md:my-20 md:px-32 md:rounded-3xl">
      <header className="text-center">
        <img src={logo} alt="logotipo" className="mx-auto" />
        <h1 className="mt-4 text-3xl font-medium font-display">
          Lista de Compras
        </h1>
        <p className="text-sm text-slate-500">
          Facilite sua ida ao supermercado!
        </p>
        <hr className="w-1/3 mx-auto mt-6 mb-8" />
      </header>
      <form className="flex gap-2" onSubmit={handleSubmit}>
        <div className="flex-shrink">
          <label htmlFor="name" className="block text-xs text-slate-400">
            Item
          </label>
          <input
            ref={inputRef}
            type="text"
            id="name"
            name="name"
            className="block w-full px-3 py-2 border rounded-lg border-slate-300 text-slate-700"
          />
        </div>
        <div className="flex-shrink">
          <label htmlFor="quantity" className="block text-xs text-slate-400">
            Quantidade
          </label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            className="block w-full px-3 py-2 border rounded-lg border-slate-300 text-slate-700"
          />
        </div>
        <button className="self-end flex-shrink h-10 px-4 font-extrabold text-white rounded-lg bg-fuchsia-300">
          +
        </button>
      </form>
      <section className="mt-10 space-y-3 ">
        {notCompletedItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </section>
      <section className="mt-16 space-y-3">
        <h2 className="mb-10 text-3xl text-center font-display">
          Itens já comprados
        </h2>
        {completedItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </section>
    </main>
  );
}
