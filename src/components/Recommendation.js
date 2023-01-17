function Recommendation() {
    const currentMonth = new Date().getMonth()
    const isSummer = currentMonth >= 5 && currentMonth >= 8


    if (!isSummer) {
        return (<div>Va falloir attendre l'été</div>)
    }
    else {
        return (<div>C'est l'été, go rouler</div>)
    }
}

export default Recommendation