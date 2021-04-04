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


  const getUlEl = document.querySelector('ul')

  const makeImageCard = ({url, alt }) => {
      const itemEl = document.createElement('li');
      itemEl.classList.add('gallery__card')
      
      const imageEl = document.createElement('img');
      imageEl.src = url;
      imageEl.alt = alt;
      imageEl.classList.add('gallery__image')

      getUlEl.append(itemEl);

      itemEl.insertAdjacentElement("afterbegin", imageEl)
      
      return itemEl
  }

  const elements = images.map(makeImageCard);

  console.log(elements);
  getUlEl.append(...elements);