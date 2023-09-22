console.log("Hello From Sw file");

// Set The File Inside of Cache

let CasheDat = "ReactV1";
this.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CasheDat)
      .then((catche) =>
        catche.addAll([
          "/static/js/bundle.js",
          "/static/js/main.be293e38.js",
          "/static/css/main.300b1910.css",
          "/ogo192.png",
          "/index.html",
          "/",
        ])
      )
      .catch((error) => console.log("Catch Store  Faild", error))
  );
});

// Get all the file from catch when user is OFFline

this.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((res) => {
        if (res){ return res}
        const rerander =event.request.clone();
        console.log(rerander);
        fetch(rerander)
      })
    );
  }
});
