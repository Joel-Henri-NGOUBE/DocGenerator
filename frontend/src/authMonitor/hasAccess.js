export function hasAccess(url, token = undefined ){
    
    const params = {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json"
        }
    }
    return token 
    ? fetch(url, params)
    : fetch(url)
}