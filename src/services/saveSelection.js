import { Client } from "@gadget-client/product-fit";
export const api = new Client();

// Save the shopper's email and recommended products to Gadget for follow-up emails
export default async function saveSelection(email, quizId) {
  await api.quizResult.create({
    quiz: {
      _link: quizId
    },
    email: email,
  });
}