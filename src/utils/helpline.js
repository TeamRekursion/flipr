export async function GetHealthData() {
    let response;
    try {
        response = await fetch("https://api.rootnet.in/covid19-in/contacts")
        let responseJSON = await response.json()
        if (response.status === 200) {
            if (responseJSON.data["contacts"]["regional"] != null) {
                return responseJSON.data["contacts"]["regional"];
            } else {
                throw "err"
            }
        } else {
            throw "err"
        }
    } catch (e) {
        return []
    }
    return []
}