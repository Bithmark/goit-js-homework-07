const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];


const getUlEl = document.querySelector('ul');

const makeImageCard = images => {
  const { url, alt } = images;
  return `<li class = 'gallery__card'><img src="${url}" alt="${alt} img class = 'gallery__image'" width = 700</li>`;
};


const element = images.map(makeImageCard).join('');

getUlEl.insertAdjacentHTML('beforeend', element);

