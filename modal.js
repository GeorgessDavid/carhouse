let modalClose = (modal) => {
    let modalBackground = document.getElementsByClassName('modal-background')[0];
    modalBackground.style.display = 'none';    
    modal.style.display = 'none';

    return enableScroll();
    
}
let cookiesAccepted = () => {
    localStorage.setItem('cookiesAccepted', true);
}

let disableScroll = () => {
    document.body.style.overflow = 'hidden';
}

let enableScroll = () => {
    document.body.style.overflow = 'auto';
}
window.onload = () => {
    let previousAccepted = localStorage.getItem('cookiesAccepted');
    let cookiesModal = document.getElementById('cookies-modal');
    let acceptButton = document.getElementById('accept');
    let rejectButton = document.getElementById('reject');
    let closeButton = document.getElementById('close');


    
    if(previousAccepted){
        return modalClose(cookiesModal), enableScroll();
    }
    disableScroll();
    acceptButton.onclick = () => {
        cookiesAccepted();
        modalClose(cookiesModal);
    }

    rejectButton.onclick = () => {modalClose(cookiesModal);}
    closeButton.onclick = () => {modalClose(cookiesModal);}
}