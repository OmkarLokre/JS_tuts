const user={
    username:"Omkar",
    price:999,
    msg:function welcome(){
        console.log("Welcome to the course: ",this.username);
    }
}

user.msg();

//  arrow functions:

const add2 = (num1,num2)=>{
    return num1+num2;

} 

