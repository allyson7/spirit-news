export async function saveSubscription(
  subscriptionId: string,
  customerId: string
) {
  // buscar o usuário no banco ddo faunaDB com o customerId
  // salvar os dados da subscription no faunaDB
  console.log(subscriptionId, customerId);
}
