document.addEventListener('DOMContentLoaded',()=>{

    const switchButton = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    if(currentTheme ==='dark'){
        document.body.classList.add('dark-mode');
    }
    switchButton.addEventListener('click' ,()=>{
        document.body.classList.toggle('dark-mode');

        let theme = 'light';
        if (document.body.classList.contains('dark-mode')) {
            theme = 'dark';
        } 
        localStorage.setItem('theme',theme);
    });
});