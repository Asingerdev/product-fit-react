import { createContext, useState, useEffect } from "react"
import fetchQuiz from '../services/quiz'
import fetchRecommendedProducts from "../services/recommendedProducts"
import saveSelections from "../services/saveSelection"

const FormContext = createContext({})

export const FormProvider = ({ children }) => {

  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState([])
  const [email, setEmail] = useState('')
  const [quizId, setQuizId] = useState('')
  const [recommendedProducts, setRecommendedProducts] = useState([
    {
      "recommendedProduct": {
        "id": "77",
        "productSuggestion": null,
        "__typename": "RecommendedProduct"
      },
      "__typename": "Answer"
    },
    {
      "recommendedProduct": {
        "id": "82",
        "productSuggestion": null,
        "__typename": "RecommendedProduct"
      },
      "__typename": "Answer"
    },
    {
      "recommendedProduct": {
        "id": "86",
        "productSuggestion": null,
        "__typename": "RecommendedProduct"
      },
      "__typename": "Answer"
    },
    {
      "recommendedProduct": {
        "id": "88",
        "productSuggestion": null,
        "__typename": "RecommendedProduct"
      },
      "__typename": "Answer"
    },
    {
      "recommendedProduct": {
        "id": "92",
        "productSuggestion": {
          "id": "8505217253661",
          "title": "01T Iron Set",
          "body": "<p> </p>\n<p>A players distance iron designed to give golfers the ultimate combination of distance, forgiveness, and feel. With a hollow body construction, these irons feature a thin face and high-strength steel body that maximizes ball speed and distance while maintaining a traditional look and feel.</p>\n<p>The set is built with progressive weighting and a lowered center of gravity, providing a higher launch angle and increased ball speed for longer, straighter shots. Cast from a soft metal which enhances feel and control for precision shot-making.</p>\n<p>Available in a variety of shaft options and offers customisation to ensure the perfect fit for any golfer. Ideal for players looking to gain more distance and accuracy without sacrificing feel and control, this set is a game-changer on the course.</p>\n<p>The sleek, modern design is sure to turn heads on the course. Elevate your game to the next level with the 01T iron set.<br></p>\n<p> </p>\n<p><meta charset=\"utf-8\"><em>N.B: The set consists of 4-PW (7 clubs).</em></p>",
          "handle": "01t-iron-set",
          "images": {
            "edges": [
              {
                "node": {
                  "source": "https://cdn.shopify.com/s/files/1/0797/8241/2573/files/16.png?v=1709309461",
                  "__typename": "ShopifyProductImage"
                },
                "__typename": "ShopifyProductImageEdge"
              },
              {
                "node": {
                  "source": "https://cdn.shopify.com/s/files/1/0797/8241/2573/files/CopyofUntitledDesign_2_23275c02-2d7d-4424-8977-78af44588005.png?v=1709309461",
                  "__typename": "ShopifyProductImage"
                },
                "__typename": "ShopifyProductImageEdge"
              },
              {
                "node": {
                  "source": "https://cdn.shopify.com/s/files/1/0797/8241/2573/files/4.png?v=1709309461",
                  "__typename": "ShopifyProductImage"
                },
                "__typename": "ShopifyProductImageEdge"
              },
              {
                "node": {
                  "source": "https://cdn.shopify.com/s/files/1/0797/8241/2573/files/1_887bc78d-f378-4a74-a4d3-ba628c402d32.png?v=1709309461",
                  "__typename": "ShopifyProductImage"
                },
                "__typename": "ShopifyProductImageEdge"
              },
              {
                "node": {
                  "source": "https://cdn.shopify.com/s/files/1/0797/8241/2573/files/2.png?v=1709309461",
                  "__typename": "ShopifyProductImage"
                },
                "__typename": "ShopifyProductImageEdge"
              },
              {
                "node": {
                  "source": "https://cdn.shopify.com/s/files/1/0797/8241/2573/files/3.png?v=1709309461",
                  "__typename": "ShopifyProductImage"
                },
                "__typename": "ShopifyProductImageEdge"
              },
              {
                "node": {
                  "source": "https://cdn.shopify.com/s/files/1/0797/8241/2573/files/5.png?v=1709309461",
                  "__typename": "ShopifyProductImage"
                },
                "__typename": "ShopifyProductImageEdge"
              }
            ],
            "__typename": "ShopifyProductImageConnection"
          },
          "__typename": "ShopifyProduct"
        },
        "__typename": "RecommendedProduct"
      },
      "__typename": "Answer"
    },
    {
      "recommendedProduct": {
        "id": "98",
        "productSuggestion": {
          "id": "9382787186973",
          "title": "Shaft flex",
          "body": "",
          "handle": "shaft-flex",
          "images": {
            "edges": [],
            "__typename": "ShopifyProductImageConnection"
          },
          "__typename": "ShopifyProduct"
        },
        "__typename": "RecommendedProduct"
      },
      "__typename": "Answer"
    },
    {
      "recommendedProduct": {
        "id": "100",
        "productSuggestion": {
          "id": "8505217745181",
          "title": "01 Iron Set",
          "body": "<p> </p>\n<p data-mce-fragment=\"1\">The perfect blend of precision, power, and feel for golfers of all levels. Each club in the set features a hollow construction, allowing for a larger clubface and increased forgiveness on off-center hits.</p>\n<p data-mce-fragment=\"1\">The ultra-thin face provides exceptional ball speed and distance while the hollow-body design promotes a high launch and soft landing.<br data-mce-fragment=\"1\"><br data-mce-fragment=\"1\">The sleek, modern design is sure to turn heads on the course. Elevate your game to the next level with the 01 iron set.<br data-mce-fragment=\"1\"><br data-mce-fragment=\"1\">Performance benefits: </p>\n<p> </p>\n<ul data-mce-fragment=\"1\">\n<li data-mce-fragment=\"1\"><span data-mce-fragment=\"1\">Explosive distance</span></li>\n<li data-mce-fragment=\"1\"><span data-mce-fragment=\"1\">Extreme forgiveness</span></li>\n<li data-mce-fragment=\"1\"><span data-mce-fragment=\"1\">High launch</span></li>\n<li data-mce-fragment=\"1\"><span data-mce-fragment=\"1\">Spin Control</span></li>\n<li data-mce-fragment=\"1\"><span data-mce-fragment=\"1\">Soft feel</span></li>\n</ul>\n<p><em>N.B: The set consists of 4-PW (7 clubs).</em></p>",
          "handle": "01-iron-set",
          "images": {
            "edges": [
              {
                "node": {
                  "source": "https://cdn.shopify.com/s/files/1/0797/8241/2573/files/CopyofUntitledDesign_1.png?v=1709308761",
                  "__typename": "ShopifyProductImage"
                },
                "__typename": "ShopifyProductImageEdge"
              },
              {
                "node": {
                  "source": "https://cdn.shopify.com/s/files/1/0797/8241/2573/files/CopyofUntitledDesign_2.png?v=1709308761",
                  "__typename": "ShopifyProductImage"
                },
                "__typename": "ShopifyProductImageEdge"
              },
              {
                "node": {
                  "source": "https://cdn.shopify.com/s/files/1/0797/8241/2573/files/5_e4a0da69-e64a-4d7c-b7a4-2886160ee68d.png?v=1709308761",
                  "__typename": "ShopifyProductImage"
                },
                "__typename": "ShopifyProductImageEdge"
              },
              {
                "node": {
                  "source": "https://cdn.shopify.com/s/files/1/0797/8241/2573/files/3_4db1362e-2c0c-4aed-b77b-a8a095247c0d.png?v=1709308761",
                  "__typename": "ShopifyProductImage"
                },
                "__typename": "ShopifyProductImageEdge"
              },
              {
                "node": {
                  "source": "https://cdn.shopify.com/s/files/1/0797/8241/2573/files/4_5df37c59-126c-40ef-9454-a209ecc6cf02.png?v=1709308761",
                  "__typename": "ShopifyProductImage"
                },
                "__typename": "ShopifyProductImageEdge"
              },
              {
                "node": {
                  "source": "https://cdn.shopify.com/s/files/1/0797/8241/2573/files/2_1c1bc590-5792-4209-9e32-fcf874ae3fbb.png?v=1709308761",
                  "__typename": "ShopifyProductImage"
                },
                "__typename": "ShopifyProductImageEdge"
              },
              {
                "node": {
                  "source": "https://cdn.shopify.com/s/files/1/0797/8241/2573/files/Caley01IronFrontView.png?v=1709308761",
                  "__typename": "ShopifyProductImage"
                },
                "__typename": "ShopifyProductImageEdge"
              }
            ],
            "__typename": "ShopifyProductImageConnection"
          },
          "__typename": "ShopifyProduct"
        },
        "__typename": "RecommendedProduct"
      },
      "__typename": "Answer"
    },
    {
      "recommendedProduct": {
        "id": "108",
        "productSuggestion": null,
        "__typename": "RecommendedProduct"
      },
      "__typename": "Answer"
    },
    {
      "recommendedProduct": {
        "id": "115",
        "productSuggestion": {
          "id": "8640590807325",
          "title": "Shaft length",
          "body": null,
          "handle": "option-set-352431-select-3",
          "images": {
            "edges": [],
            "__typename": "ShopifyProductImageConnection"
          },
          "__typename": "ShopifyProduct"
        },
        "__typename": "RecommendedProduct"
      },
      "__typename": "Answer"
    },
    {
      "recommendedProduct": {
        "id": "128",
        "productSuggestion": {
          "id": "8640614662429",
          "title": "Lie angle",
          "body": "",
          "handle": "option-set-352431-select-4",
          "images": {
            "edges": [],
            "__typename": "ShopifyProductImageConnection"
          },
          "__typename": "ShopifyProduct"
        },
        "__typename": "RecommendedProduct"
      },
      "__typename": "Answer"
    },
    {
      "recommendedProduct": {
        "id": "132",
        "productSuggestion": {
          "id": "8640614760733",
          "title": "Grip",
          "body": null,
          "handle": "option-set-352431-select-5",
          "images": {
            "edges": [],
            "__typename": "ShopifyProductImageConnection"
          },
          "__typename": "ShopifyProduct"
        },
        "__typename": "RecommendedProduct"
      },
      "__typename": "Answer"
    },
    {
      "connection": {
        "options": {
          "endpoint": "https://product-fit--development.gadget.app/api/graphql",
          "applicationId": "128216",
          "authenticationMode": {
            "browserSession": true
          },
          "exchanges": {
            "beforeAll": [
              null
            ]
          },
          "environment": "development"
        },
        "endpoint": "https://product-fit--development.gadget.app/api/graphql",
        "websocketsEndpoint": "wss://product-fit--development.gadget.app/api/graphql/batch",
        "environment": "development",
        "exchanges": {
          "beforeAsync": [],
          "afterAll": []
        },
        "baseClient": {
          "suspense": false
        },
        "currentTransaction": null,
        "authenticationMode": "browser-session",
        "sessionTokenStore": {
          "newsletter_seen": "true",
          "nuxt-loading-enable-animation": "true",
          "loglevel": "INFO"
        },
        "requestPolicy": "cache-and-network"
      }
    },
    {
      "options": {
        "filter": {
          "OR": [
            {
              "id": {
                "equals": "77"
              }
            },
            {
              "id": {
                "equals": "82"
              }
            },
            {
              "id": {
                "equals": "86"
              }
            },
            {
              "id": {
                "equals": "88"
              }
            },
            {
              "id": {
                "equals": "92"
              }
            },
            {
              "id": {
                "equals": "98"
              }
            },
            {
              "id": {
                "equals": "100"
              }
            },
            {
              "id": {
                "equals": "108"
              }
            },
            {
              "id": {
                "equals": "115"
              }
            },
            {
              "id": {
                "equals": "128"
              }
            },
            {
              "id": {
                "equals": "132"
              }
            },
            {
              "id": {
                "equals": ""
              }
            }
          ]
        },
        "select": {
          "recommendedProduct": {
            "id": true,
            "productSuggestion": {
              "id": true,
              "title": true,
              "body": true,
              "handle": true,
              "images": {
                "edges": {
                  "node": {
                    "source": true
                  }
                }
              }
            }
          }
        }
      },
      "pageInfo": {
        "hasNextPage": false,
        "hasPreviousPage": false,
        "startCursor": "eyJpZCI6Ijc3In0=",
        "endCursor": "eyJpZCI6IjEzMiJ9",
        "__typename": "PageInfo"
      }
    }
  ])
  const [customizations, setCustomizations] = useState([
    "",
    "",
    "",
    "",
    "",
    "Stiff",
    "",
    "",
    "+0.5 Inch",
    "+3° (Upright)",
    "Lamkin Crossline Standard",
    ""
  ])
  const [isSubmitted, setIsSubmitted] = useState(true)
  const [page, setPage] = useState(0)
  const [data, setData] = useState({})

  // Fetch quiz by slug and store quiz questions
  const getQuiz = async () => {
    setLoading(true)

    const response = await fetchQuiz('product-quiz-new')

    setLoading(false)

    if (!response) return

    const quiz  = { ...response }

    if (quiz) {
      const quizId = quiz?.id
      setQuizId(quizId)
      const questions = quiz?.questions?.edges
      setQuestions(questions)
        // Spread question ID's into initial state
        questions.forEach(question => {
            setData(prevData => ({
                ...prevData,
                [question?.node?.id]: ''
            }))

        })
    }
  }

  useEffect(() => {
    getQuiz();
  }, []);

    const handleChange = e => {
        const name = e.target.name

        const value = e.target.value

        setData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleRangeChange = (e, value) => {
        const name = e.target.name

        setData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleCheckboxChange = (name, array) => {
        setData(prevData => ({
            ...prevData,
            [name]: array
        }))
    }

    const currentQuestionId = questions[page]?.node?.id

    const canSubmit = page === questions.length - 1

    const disablePrev = page === 0

    const disableNext =
        (page === questions.length - 1) || !data[currentQuestionId]

    const prevHide = page === 0 && "remove-button"

    const nextHide = page === questions.length - 1 && "remove-button"

    const submitHide = page !== questions.length - 1 && "remove-button"

    const handleSubmit = async (e) => {
        e.preventDefault()
        const selectedAnswers = Object.values(data).flat()

        console.log(selectedAnswers)
        setLoading(true)

        const response = await fetchRecommendedProducts(selectedAnswers)

        if (!response) return

        const parsedResponse  = { ...response }
        const recommendedProducts = Object.values(parsedResponse)

        setRecommendedProducts(recommendedProducts)
    
        const answerIds = Object.values(data)

        const customizations = questions.map((question, ix) => {
            const answer = question?.node?.answers?.edges.find(answer => answer?.node?.id === answerIds[ix])
            return answer?.node?.customization ? answer?.node?.customization : ''
        })

        setCustomizations(customizations)

        setIsSubmitted(true)

        setLoading(false)

        // save email to Gadget for follow-up emails
        await saveSelections(email, quizId);
    }

    return (
        <FormContext.Provider value={{ 
            questions, 
            page, 
            setPage, 
            data, 
            setData, 
            email, 
            setEmail, 
            canSubmit, 
            handleChange, 
            handleRangeChange, 
            handleCheckboxChange,
            disablePrev, 
            disableNext, 
            prevHide, 
            nextHide, 
            submitHide, 
            handleSubmit, 
            isSubmitted,
            recommendedProducts,
            customizations
            }}>
            {children}
        </FormContext.Provider>
    )
}

export default FormContext 