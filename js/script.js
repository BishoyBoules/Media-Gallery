let theUrl = 'https://jsonplaceholder.typicode.com/photos';
async function getInfo(url){
    const response = await fetch(url)
    const items = await response.json();
    const row = document.getElementById('row');
    const theBody = document.getElementById('theBody');
    const first = document.getElementById('first'),
          second = document.getElementById('second'),
          third = document.getElementById('third'),
          fourth = document.getElementById('fourth');
    
    items.forEach( item => {
            const img = item.thumbnailUrl;
            const popupImg = item.url;
            const title = item.title;
            const image = document.createElement('img');
            const theTitle = document.createElement('div');
            const theDiv = document.createElement('div');
            const description = document.createElement('div');
            description.setAttribute('id', 'description');
            description.innerHTML = `photo-ID: ${item.id},\n
            Description: ${item.title}`;
            image.src = img;
            theTitle.innerHTML = title;
            theTitle.classList.add('theTitle');
            image.classList.add('theImage');
            theDiv.classList.add('theDiv');
            switch(item.albumId){
                case(1):
                first.appendChild(theDiv);
                break;

                case(2):
                second.appendChild(theDiv);
                break;

                case(3):
                third.appendChild(theDiv);
                break;

                case(4):
                fourth.appendChild(theDiv);
                break;

                default:
                    break;
            }
            theDiv.appendChild(image);
            theDiv.appendChild(theTitle);
            theDiv.addEventListener('click', () => {
                const activeItems = document.querySelectorAll('.active');
                activeItems.forEach(activeItem => {
                    activeItem.classList.remove('active');
                });
                const popup = document.createElement('div');
                const popupImage = document.createElement('img');
                const close = document.createElement('button');
                close.innerHTML = '&times';
                theBody.appendChild(popup);
                popupImage.classList.add('popupImage');
                popupImage.src = popupImg;
                popup.classList.add('popup');
                popup.appendChild(close);
                popup.appendChild(popupImage);
                popup.appendChild(description);
                
                row.classList.add('inactive');
                popup.classList.add('active');
                popupImage.classList.add('active');
                close.addEventListener('click', () =>{
                    row.classList.remove('inactive');
                    popup.remove();
                    
                });
                
            });
            
            
        });
        
}

getInfo(theUrl);