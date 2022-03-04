//promise with callbacks

let doTask = (success, failure) => {
    let isDone = true;
    if(isDone){
        success('Task is done');
    }
    else{
        failure('Task is not done');
    }
};

doTask( (message) => {
    console.log(message);    
} , (message) => {
    console.error(message);
});


//actual promise

let cleanCam = new Promise( (resolve, reject) => {
    //cleaning camera
    let isDone = true;
    if(isDone){
        resolve('Cleaning is done');
    }
    else{
        reject('Cleaning is not yet done');
    }
} );

cleanCam.then( (message) => {
    console.log(message);
}).catch( (message) => {
    console.error(message);
} );



//dependent promises in JS 

let builtProject = new Promise( (resolve, reject) => {
    setTimeout(() => {
        let isDone = true;
    if (isDone) {
        resolve('Project is finished');
    }
    else{
        reject('Project is not finished');
    }
    }, 1000);
} );

let attendTechRound = new Promise( (resolve, reject) => {
    setTimeout(() => {
        let isDone = true;
    if (isDone) {
        resolve('Technical round is finished');
    }
    else{
        reject('Techinical round is not finished');
    }
    }, 2000);
} );

let attendManagerRound = new Promise( (resolve, reject) => {
    setTimeout(() => {
        let isDone = true;
    if (isDone) {
        resolve('Manager round is finished');
    }
    else{
        reject('Manager round is not finished');
    }
    }, 3000);
} );

let attendHRRound = new Promise( (resolve, reject) => {
    setTimeout(() => {
        let isDone = true;
    if (isDone) {
        resolve('HR round is finished and got the job');
    }
    else{
        reject('HR round is not finished');
    }
    }, 4000);
} );

builtProject.then( (message) => {
    let result =`${message} -> `;
    console.log(message);
    attendTechRound.then( (message) =>{
        result +=`${message} -> `;
        console.log(message);
        attendManagerRound.then( (message) => {
            result +=`${message} -> `;
            console.log(message);
              attendHRRound.then( (message) => {
                result +=`${message}`;
                console.log(message);
            } ).catch( (message) =>{
                result = `${message} -> `;
                console.error(result);
            } );
        } ).catch( (message) => {
            result += `${message} -> `;
            console.error(result);
        } );
    } ).catch( (message) => {
        result += `${message} -> `;
        console.error(result);
    } );
} ).catch( (message) => {
    result += `${message} -> `;
    console.error(result);
} );


