


async function onFetch() {
    try {
        const res = await fetch("https://64c9fecab2980cec85c2b76e.mockapi.io/movie/phone")
        const data = await res.json()
          
    }
    catch{
        console.log("error");
    }

}