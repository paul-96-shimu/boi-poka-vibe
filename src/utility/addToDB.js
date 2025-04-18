
const getStoreBook = () => {
    const storedBookSTR = localStorage.getItem('storeBook')
    if (storedBookSTR) {
        const storeBook = JSON.parse(storedBookSTR);
        return storeBook;
    } else {
        return [];
    }
}
const addToDB = (id) => {
    const storeBook = getStoreBook();
    // const bookIndex = storeBook.findIndex(book => book.id === id);
    if (storeBook.includes(id)) {
        alert('Already added to the cart');

    } else {
        storeBook.push(id);
        const data = JSON.stringify(storeBook);
        localStorage.setItem('storeBook', data);
    }
    localStorage.setItem('storeBook', JSON.stringify(storeBook));


}
export { addToDB, getStoreBook };