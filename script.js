const toTop = () => window.scrollTo({top: 0, behavior: 'smooth'})


const getUserSelectedText = () => {
    return window.getSelection().toString();
}

window.onscroll = () => {
    if((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        console.log("End of the page")
    }

}