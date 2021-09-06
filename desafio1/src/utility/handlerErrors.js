function handlerErrors(response) {
  if (!response.ok) {
    throw new Error('Something went wrong during fetch data proccess.');
  }
  return response.json();
}

export default handlerErrors;
