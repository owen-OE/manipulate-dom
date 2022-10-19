const h1 = document.querySelector('h1');

h1.textContent = ('The DOM')

const btn = document.querySelector('.btn');

btn.style.color = 'black';
btn.style.background = 'lightblue'

btn.addEventListener('click', (e)=>{
	e.preventDefault();
	const remove = document.querySelector('.items');
    remove.firstElementChild.textContent = ('You clicked the button!');
    remove.children[1].remove();
    remove.lastElementChild.textContent = 'Item 2 has disappeared!';
    document.querySelector('body').classList.add('bg-dark');
})