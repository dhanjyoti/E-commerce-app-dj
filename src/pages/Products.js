import { useProductContext } from "../utils/productContext";


const Products = () => {
  const {myName} = useProductContext();

  return (
    <div>
      {myName}
    </div>
  )
}

export default Products