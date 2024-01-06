import "./styles/main.scss"
import shoppingTrolleyEmoji from "./assets/shoppingTrolleyEmoji.png"

const shoppingTrolleyImg = document.querySelector(".shopping-trolley-img");
shoppingTrolleyImg.src = shoppingTrolleyEmoji;

console.log("ok")

let addInput = document.querySelector(".cart-operations__add-input");
let addBtn = document.querySelector(".cart-operations__add-btn");
const shoppingList = ["牛奶", "鸡蛋", "面包"];

addBtn.addEventListener("click", () => {
  if (!/ +/.test(addInput.value)) {
    shoppingList.push(...addInput.value.split(/ +/));
    console.log("购物清单: ", shoppingList)
  }
})


// TODO: fix: 带有空格的字符无法传入
// 此小项目适合手动配置webpack 和 babel