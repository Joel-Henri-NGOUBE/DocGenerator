import { hasAccess } from "./hasAccess"

export function onAccessRight(url, token, onAccessGiven, defaultUrl = "http://localhost:3000/login"){
    hasAccess(url, token)
        .then((res) => res.json())
        .then((res) => {
            if(res.access === "denied"){
                // if(window.location.href !== defaultUrl) window.location.href = defaultUrl
            }
            else if(res.access === "given"){
                onAccessGiven()
            }
    })
}