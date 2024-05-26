import { useProductContext } from "../utils/productContext"
import Product from "./Product";


const FeatureProduct = () => {
    const {isLoading, featureProducts} = useProductContext();

    if(isLoading){
        return <div> ....Loading</div>
    }
  return (
    <div>
        <div>
            <div>Check Now!</div>
            <div>Our Feature Services</div>
            <div>
                {featureProducts.map((curElem)=>{
                    return <Product key={curElem.id} {...curElem} />
                })}
            </div>
        </div>
    </div>
  )
}

export default FeatureProduct