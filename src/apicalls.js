const apiCalls = {
    Get :async function (url){
        try {
            var data = await fetch(url, {
                method: "GET",
                headers: {
                  Origin: "http://localhost:3000",
                  credentials: "include",
                  "Content-Type": "application/json; charset=utf-8 ",
                  Accept: "*/*",
                },
              });
              const response = await data.json();
              return response;
        } catch (error) {
            
        }
    }
}
export default apiCalls;