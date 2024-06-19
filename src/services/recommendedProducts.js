import { Client } from "@gadget-client/product-fit";
export const api = new Client();

export default async function fetchRecommendedProducts(answerIds) {
  try {
    const queryIdFilter = answerIds.map((answerId) => {
      return { id: { equals: answerId } };
    });
  
    const recommendedProducts = await api.answer.findMany({
      filter: {
        OR: queryIdFilter,
      },
      select: {
        recommendedProduct: {
          id: true,
          productSuggestion: {
            id: true,
            title: true,
            body: true,
            handle: true,
            images: {
              edges: {
                node: {
                  source: true,
                },
              },
            },
            resultsImage: true,
          },
        },
      },
    });
  
    return recommendedProducts;
  } catch (e) {
    const message = e?.response?.error.message ?? e?.message ?? 'Unknown Error'
    console.error(message)

    return false
  }
}