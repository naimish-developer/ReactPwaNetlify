const swDev = () => {
  // if( "serviceWorkers" in navigator){
  navigator.serviceWorker
    .register(`${process.env.PUBLIC_URL}/sw.js`)
    .then((res) => {
      console.log("Register Sucess Full" , res);
    })
    .catch((error) => {
      console.log("Register Faild " , error);
    });
 
};

export default swDev;
