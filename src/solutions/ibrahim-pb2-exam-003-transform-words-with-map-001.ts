const IbrahimPb2Exam003TransformWordsWithMap001 = () => {

// CODE HERE
const products = [
    { id: 100001, title: 'OPPO Find N2 Flip', price: 1.099 },
    { id: 100002, title: 'OPPO Find X5 Pro', price: 699.99 },
    { id: 100003, title: 'OPPO Find X5', price: 399.99 }
];

const generateProductCodes = () => {
    return products.map(product => {
        const formattedTitle = product.title.toLowerCase().split(' ').join('-');
        return `${product.id}, ${formattedTitle}, ${product.price}`;
    });
};

const productCodes = generateProductCodes();


    return /*html*/`
    <div class="solution">
        ${productCodes.map(productCode => {
            return `<div>${productCode}</div>`;
        }).join('')}
    </div>
    
`;
}
export default IbrahimPb2Exam003TransformWordsWithMap001;
