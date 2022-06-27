async function getDataAPI(reque) {
    const response = await fetch("https://api.meaningcloud.com/sentiment-2.1", reque)
    const data = await response.json()
    console.log(data.subjectivity)
    return data
}

export { getDataAPI }