import { Client } from "@gadget-client/product-fit";
export const api = new Client();

// fetch the quiz questions and answers to be presented to shoppers, using a GraphQL query
 export default async function fetchQuiz(quizSlug) {
  try {
    const quiz = api.quiz.findFirst({
      filter: {
        slug: { equals: quizSlug },
      },
      select: {
        title: true,
        body: true,
        id: true,
        questions: {
          edges: {
            node: {
              answerType: true,
              description: true,
              id: true,
              text: true,
              answers: {
                edges: {
                  node: {
                    customization: true,
                    icon: true,
                    id: true,
                    text: true,
                  },
                },
              },
            },
          },
        },
      },
    });
  
    return quiz;

  } catch (e) {
    const message = e?.response?.error.message ?? e?.message ?? 'Unknown Error'
    console.error(message)

    return false
  }
}