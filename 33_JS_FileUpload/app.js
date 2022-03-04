//image upload

let uploadForm = document.querySelector('#upload-form');
uploadForm.addEventListener('submit', function(){
    let imageFile = document.querySelector('#customFile').files[0];
    let imageName = imageFile.name;

    let reader = new FileReader();
    reader.readAsDataURL(imageFile);

    reader.addEventListener('load', function(){
        if (this.result && localStorage) {
            let imagesList = localStorage.getItem('images') ? JSON.parse(localStorage.getItem('images')) : [];
            imagesList.push(this.result);
            localStorage.setItem('images',JSON.stringify(imagesList));
        }
    });
    displayImage();
});

//display image

let displayImage = () => {
    let imagesList = localStorage.getItem('images') ? JSON.parse(localStorage.getItem('images')) : [];
    if(imagesList.length !== 0){
        let cardImage = '';
        for(let image of imagesList){
            cardImage += `<div class="col-md-3">
                            <div class="card" id="card-1">
                                <img src="${image}" alt="" class="img-fluid">
                                <div class="card-body">
                                <h3 class="card-title">Image</h3>
                                <p class="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis sed dolor molestiae cupiditate sapiente. Beatae.</p>
                                </div>
                                </div>
                        </div>`;
        }
        document.querySelector('#card-row').innerHTML = cardImage;
    }
};
displayImage();

let removeButton = document.querySelector('#remove-btn');
removeButton.addEventListener('click', function(){
    localStorage.removeItem('images');
    displayImage();
});