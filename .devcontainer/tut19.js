// Scoping

function one(){
    const username = "OMkar";
    function two(){
        console.log(username);
        const website="www.com";
    }
    // console.log(website); // ------> this line will give error as the var 'website' has scope only inside the two function
    two(); 
}

one();