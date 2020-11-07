const scrollToTop = () => {
    // const main = document.getElementById('main');
    window.scrollTo({
        behavior: 'smooth',
        top: 0,
        left: 0,
    }); 
};

export default scrollToTop;