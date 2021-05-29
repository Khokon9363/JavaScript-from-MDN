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
]

const wrapper = document.querySelector('ul')
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