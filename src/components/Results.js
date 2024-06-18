import '../index.css';
import useFormContext from '../hooks/useFormContext';

const Results = () => {

  const {customizations, recommendedProducts} = useFormContext()

  const productSuggestions = recommendedProducts.filter(product => product?.recommendedProduct?.productSuggestion)

  // Get Iron sets from the product suggestions
  const products = [productSuggestions[0]?.recommendedProduct?.productSuggestion, productSuggestions[2]?.recommendedProduct?.productSuggestion]

  return (
    <div className="quiz-results-container">
      {customizations?.length > 0 ?
      <>
        <h2>Here are your results:</h2>
        <div className="product-customization mt-5">
          <h2>Based on your answers, you should play
            <span className="font-bold lowercase"> {customizations[8]} length </span>
            shafts in
            <span className="font-bold lowercase"> {customizations[5]} flex. </span>
            Lie angle -
            <span className="font-bold lowercase"> {customizations[9]}. </span>
            Recommended grip size is 
            <span className="font-bold capitalize"> {customizations[10]}. </span>
          </h2>
        </div>
        <ul className="product-suggestions mt-5 grid grid-cols-1 gap-6 md:grid-cols-2">
          {products.map((product, ix) => {
            return (
              <div key={product?.id} className="relative rounded-xl bg-gray-200 transition-shadow hover:shadow-md">
                <div className="p-6">
                  <h3>{product?.title}</h3>
                  <p className="mt-4">The perfect blend of precision, power, and feel for golfers of all levels.</p>
                  <div className="mt-4">
                    <img className="w-full h-auto object-cover" src={ix === 0 ? product?.images?.edges[3]?.node?.source : product?.images?.edges[6]?.node?.source} />
                  </div>
                  <a className="mt-8 button btn btn--solid btn--black" href={`/products/${product?.handle}`}>
                    View Set
                  </a>
                </div>
              </div>
            )
          })}
        </ul>
      </>
      :
        <h2>Sorry, there was an error in the quiz. Please try again later.</h2>
      }
    </div>
  )
}

export default Results