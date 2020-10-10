
export async function GetNotifications() {
    let response;
    try {
        response = await fetch("https://api.rootnet.in/covid19-in/notifications")
        let responseJSON = await response.json()
        if (response.status === 200) {
            return responseJSON.data.notifications;
        } else {
            throw "err"
        }
    } catch (e) {
        console.log(e)
        return [];
    }
    return [];
}