console.log("すごい機能")
const button = document.getElementById('button1')
const div1 = document.getElementById('div1')

const changeColor = () =>{
    console.dir(div1);
    div1.innerHTML = "<p>よくも押したなー。</p>"
}
button.addEventListener('click',()=>{
    changeColor()
})