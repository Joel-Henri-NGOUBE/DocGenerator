export function onLogOut(token = undefined ){
    if(token){
        localStorage.removeItem("token")
        const params = {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        }
        fetch("http://localhost:3250/logout", params)
        .then((res) => res.json())
        .then((res) => window.location.href = "/login")
    }
}