import { products } from '../data/demoData'

export default function ProductTable() {
  return (
    <div className="card">
      <div className="section-title">
        <h3>Inventario reciente</h3>
        <p>Productos y servicios registrados</p>
      </div>

      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Categoría</th>
            <th>Stock</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.name}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.stock}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}