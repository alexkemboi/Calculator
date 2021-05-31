class Calculator{
constructor(previousOperandTextElement,currentOperandTextElement){
    this.previousOperandTextElement=previousOperandTextElement;
    this.currentOperandTextElement=currentOperandTextElement;
    this.clear()
}
clear(){
this.currentOperand=''
this.previousOperand=''
this.operation=undefined
}
delete(){

}
appendNumber(number){
this.currentOperand=number
console.log(this.currentOperand)
}
chooseOperation(operation){

}
compute(){

}
updateDisplay(){
this.currentOperandTextElement.innerText=this.currentOperand
}
}



const numberButtons=document.querySelectorAll('[data-number]')
const operationButtons=document.querySelectorAll('[data-operation]')
const equalsButtons=document.querySelectorAll('[data-equals]')
const deleteButtons=document.querySelectorAll('[data-delete]')
const allClearButtons=document.querySelectorAll('[data-all-clear]')
const previousOperandTextElement=document.querySelectorAll('[data-previous-operand]')
const currentOperandTextElement=document.querySelectorAll('[data-current-operand ]')


const calculator=new Calculator(previousOperandTextElement,currentOperandTextElement)

numberButtons.forEach(button=>{
    button.addEventListener('click',()=>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
}) 
