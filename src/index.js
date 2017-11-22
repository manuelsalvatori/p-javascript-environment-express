import './index.css';
import numeral from 'numeral';

const value = numeral(1001).format('$0.0.00');
console.log(`Value is ${value}`);