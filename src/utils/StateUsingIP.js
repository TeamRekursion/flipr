
export async function getState() {
    let response;
    try {
        response = await fetch("https://apiflipprvithack.herokuapp.com/api/statewise/getState")
        let responseJSON = await response.json()
        if (response.status === 200) {
            return responseJSON.data.regionName;
        } else {
            throw "err"
        }
    } catch (e) {
        console.log(e)
        return 'Delhi';
    }
    return "Delhi";
}