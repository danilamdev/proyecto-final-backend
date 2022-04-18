import Card from "../card/index";
import "./listadeProductos.css";

export default function ListOfProducts({ productos }) {
  return (
    <section className="card-container">
      {productos.map((prod) => (
        
        <Card key={prod._id} producto={prod} />
      ))}
    </section>
  );
}
