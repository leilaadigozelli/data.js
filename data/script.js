import {data} from './data.js'
console.log(data)
array.forEach(items => {
    `<div class="card w-50">
  <div class="card-body "${items.body}>
    <h5 class="card-title"${items.title}> title</h5>
    <h4 class="card-price"${items.price}>Card price</h4>
    <p class="card-text"${items.text}>With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Button</a>
  </div>
 </div>`
});
const cardBody =document.querySelector('.card-body');
const cardTitle =document.querySelector('.card-title');
const cardPrice = document.querySelector('.card-price')
const cardText = document.querySelector('.card-text')
