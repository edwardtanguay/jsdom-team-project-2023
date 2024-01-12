const IbrahimPb2Exam004CalculateTotalWithReduce001 = () => {

// CODE HERE
const PriceTracking = [
    { person: 'OPPO', start_from: 150, to: 1500 },
    { person: 'Apple', start_from: 400, to: 1900 },
    { person: 'Samsung', start_from: 70, to: 1800 },
    { person: 'Huawei', start_from: 50, to: 1500 },
    { person: 'Motorola', start_from: 45, to: 1400 },
];

const totalpriceEarning = PriceTracking.reduce((totalPrice,PriceTrackingItem) => totalPrice - PriceTrackingItem.start_from + PriceTrackingItem.to, 0);

return /*html*/`
<div class="solution">
	The Total Earnings price was ${totalpriceEarning} €	
</div>
`;
}
export default IbrahimPb2Exam004CalculateTotalWithReduce001;