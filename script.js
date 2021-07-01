document.addEventListener("contextmenu", function(e){
    e.preventDefault();
}, false);

// ----------------------- Home page topics -----------------
const topics = [
    {
        url: 'Basic/index.html',
        name: 'Basic'
    },
    {
        url: 'First Steps/index.html',
        name: 'First Steps'
    },
    {
        url: 'Building blocks/index.html',
        name: 'Building blocks'
    },
    {
        url: 'Objects/index.html',
        name: 'Objects'
    },
    {
        url: 'Guide/index.html',
        name: 'Guide'
    },
    {
        url: 'Client Side Web Apis/index.html',
        name: 'Client Side Web Apis'
    },
    {
        url: 'Web Apis/index.html',
        name: 'Web Apis'
    }
]

const wrapper = document.querySelector('.lessons')
if(wrapper){
    var html = ''
    
        for (let i = 0; i < topics.length; i++) {
            html += '<li>' +
                        '<a href="'+ topics[i].url +'">'+ topics[i].name +'</a>' +
                    '</li>'
        }
    
    wrapper.innerHTML = html
}

// ----------------------- Go Back Button -----------------
const goBackBtn = document.querySelector('.go-back')
if(goBackBtn){
    goBackBtn.addEventListener("click", function(){
        window.location.href = '../index.html'
    })
}

// ----------------------- Reload Button -----------------
const reloadBtn = document.querySelector('.reload')
if(reloadBtn){
    reloadBtn.addEventListener("click", function(){
        window.location.reload()
    })
}