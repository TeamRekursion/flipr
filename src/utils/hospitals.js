export async function getHospital() {
    let response;
    try {
        response = await fetch("https://api.rootnet.in/covid19-in/hospitals/medical-colleges")
        let responseJSON = await response.json()
        if (response.status === 200) {
            if (responseJSON["data"]["medicalColleges"] != null) {
                return (responseJSON["data"]["medicalColleges"]);
            } else {
                throw "err"
            }
        } else {
            throw "err"
        }
    } catch (e) {
        console.log(e)
        return []
    }
    return []
}

export async function getBeds() {
    let response;
    try {
        response = await fetch("https://api.rootnet.in/covid19-in/hospitals/beds")
        let responseJSON = await response.json()
        if (response.status === 200) {
            const {summary, regional} = responseJSON["data"]
            return {summary, regional}
        } else {
            throw "err"
        }
    } catch (e) {
        return {summary: null, regional: []}
    }
    return {summary: null, regional: []}
}