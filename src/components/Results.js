import '../index.css';
import useFormContext from '../hooks/useFormContext';

const Results = () => {

  const {customizations, recommendedProducts} = useFormContext()

  const productSuggestions = recommendedProducts.filter(product => product?.recommendedProduct?.productSuggestion).map(product => {
    return product?.recommendedProduct?.productSuggestion
  })

  // Find if graphite shaft recommended
  const graphite = productSuggestions.some(product => product?.title.includes('Graphite'))

  // Get Iron sets from the product suggestions
  const product = productSuggestions.find(product => !product?.title.includes('Graphite'))

  return (
    <div className="quiz-results-container">
      {customizations?.length > 0 ?
      <>
        <h2 className="mt-5 px-4 md:px-0 text-3xl font-bold">Here are your results:</h2>
        <div className="product-customization mt-5 px-4 md:px-0">
          <h2>Based on your answers, you should play
            {customizations[8] && (
              <>
                <span className="font-bold lowercase"> {customizations[8]} </span>
                <span>length </span>
              </>
            )}
            {graphite ? 
            <>
              <span className="font-bold">graphite </span><span>shafts </span> 
            </>
            : 
            <span>shafts </span>}
            {customizations[5] && (
              <>
                <span> in</span>
                <span className="font-bold lowercase"> {customizations[5]} </span>
                <span className="lowercase"> flex. </span>
              </>
            )}
            {customizations[9] && (
              <>
                <span>Lie angle </span>
                <span className="font-bold"> {customizations[9]}. </span>
              </>
            )}
            {customizations[10] && (
              <>
                <span>Recommended grip size is</span>
                <span className="font-bold capitalize"> {customizations[10]}. </span>
              </>
            )}
          </h2>
        </div>
        <ul className="product-suggestions mt-10 grid grid-cols-1 gap-6 items-center h-full">
          {product?.handle === '01-iron-set' ?
            <div className="border-[1px] border-slate-200 max-w-lg w-full m-auto">
              <div className="p-6 h-full">
                <div className="mt-4 w-full flex justify-center">
                  <img className="w-full max-w-44 h-auto object-cover" src={product?.images?.edges[3]?.node?.source} />
                </div>
                <h2 className="text-center font-bold mt-4 text-lg">{product?.title}</h2>
                <div class="flex gap-6 mt-8">
                  <h3 className="font-bold">Type</h3>
                  <p>Distance Iron</p>
                </div>
                <div className="mt-2">
                  <h3 className="font-bold">Distance</h3>
                  <div className="grid grid-cols-5 gap-2 mt-1">
                    <div className="w-full h-1 bg-red-700"></div>
                    <div className="w-full h-1 bg-red-700"></div>
                    <div className="w-full h-1 bg-red-700"></div>
                    <div className="w-full h-1 bg-red-700"></div>
                    <div className="w-full h-1 bg-red-700"></div>
                  </div>
                </div>
                <div className="mt-2">
                  <h3 className="font-bold">Forgiveness</h3>
                  <div className="grid grid-cols-5 gap-2 mt-1">
                    <div className="w-full h-1 bg-red-700"></div>
                    <div className="w-full h-1 bg-red-700"></div>
                    <div className="w-full h-1 bg-red-700"></div>
                    <div className="w-full h-1 bg-red-700"></div>
                    <div className="w-full h-1 bg-red-700"></div>
                  </div>
                </div>
                <div className="mt-2 pb-4">
                  <h3 className="font-bold">Workability</h3>
                  <div className="grid grid-cols-5 gap-2 mt-1">
                    <div className="w-full h-1 bg-red-700"></div>
                    <div className="w-full h-1 bg-red-700"></div>
                    <div className="w-full h-1 bg-gray-400"></div>
                    <div className="w-full h-1 bg-gray-400"></div>
                    <div className="w-full h-1 bg-gray-400"></div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-y-2 border-t-[1px] border-slate-200 py-4">
                  <h3 className="font-bold">7 Iron loft</h3>
                  <p>30</p>
                  <h3 className="font-bold">Irons in set</h3>
                  <p>4 to P</p>
                  <h3 className="font-bold">Who should play</h3>
                  <p>High to Mid Handicap</p>
                </div>
                <div className="grid grid-cols-2 gap-y-2 border-t-[1px] border-slate-200 py-4 mb-2">
                  <h3 className="font-bold">7 Iron offset</h3>
                  <p>3.4mm</p>
                  <h3 className="font-bold">7 Iron blade length</h3>
                  <p>79.5mm</p>
                  <h3 className="font-bold">7 Iron top line thickness</h3>
                  <p>8mm</p>
                </div>
                <a className="flex justify-center max-w-32 m-auto bg-black py-2 px-8 text-white" href={`https://caleygolf.com/products/${product?.handle}`} target="_top">
                  View Set
                </a>
              </div>
            </div>
            : product?.handle === '01t-iron-set' ?
            <div className="border-[1px] border-slate-200">
            <div className="p-6 h-full">
              <div className="mt-4 w-full flex justify-center">
                <img className="w-full max-w-44 h-auto object-cover" src={product?.images?.edges[6]?.node?.source} />
              </div>
              <h2 className="text-center font-bold mt-4 text-lg">{product?.title}</h2>
              <div class="flex gap-6 mt-8">
                <h3 className="font-bold">Type</h3>
                <p>Player's Distance Iron</p>
              </div>
              <div className="mt-2">
                <h3 className="font-bold">Distance</h3>
                <div className="grid grid-cols-5 gap-2 mt-1">
                  <div className="w-full h-1 bg-red-700"></div>
                  <div className="w-full h-1 bg-red-700"></div>
                  <div className="w-full h-1 bg-red-700"></div>
                  <div className="w-full h-1 bg-red-700"></div>
                  <div className="w-full h-1 bg-gray-400"></div>
                </div>
              </div>
              <div className="mt-2">
                <h3 className="font-bold">Forgiveness</h3>
                <div className="grid grid-cols-5 gap-2 mt-1">
                  <div className="w-full h-1 bg-red-700"></div>
                  <div className="w-full h-1 bg-red-700"></div>
                  <div className="w-full h-1 bg-red-700"></div>
                  <div className="w-full h-1 bg-red-700"></div>
                  <div className="w-full h-1 bg-gray-400"></div>
                </div>
              </div>
              <div className="mt-2 pb-4">
                <h3 className="font-bold">Workability</h3>
                <div className="grid grid-cols-5 gap-2 mt-1">
                  <div className="w-full h-1 bg-red-700"></div>
                  <div className="w-full h-1 bg-red-700"></div>
                  <div className="w-full h-1 bg-red-700"></div>
                  <div className="w-full h-1 bg-gray-400"></div>
                  <div className="w-full h-1 bg-gray-400"></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-y-2 border-t-[1px] border-slate-200 py-4">
                <h3 className="font-bold">7 Iron loft</h3>
                <p>32</p>
                <h3 className="font-bold">Irons in set</h3>
                <p>4 to P</p>
                <h3 className="font-bold">Who should play</h3>
                <p>Mid to Scratch</p>
              </div>
              <div className="grid grid-cols-2 gap-y-2 border-t-[1px] border-slate-200 py-4 mb-2">
                <h3 className="font-bold">7 Iron offset</h3>
                <p>2.4mm</p>
                <h3 className="font-bold">7 Iron blade length</h3>
                <p>75mm</p>
                <h3 className="font-bold">7 Iron top line thickness</h3>
                <p>7mm</p>
              </div>
              <a className="flex justify-center max-w-32 m-auto bg-black py-2 px-8 text-white" href={`https://caleygolf.com/products/${product?.handle}`} target="_top">
                View Set
              </a>
            </div>
          </div>
          :
          null
          }
        </ul>
      </>
      :
        <h2>Sorry, there was an error in the quiz. Please try again later.</h2>
      }
    </div>
  )
}

export default Results