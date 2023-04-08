// when domcontent loaded 


let contacts=[
    {id:'jkd',contactName:"mohib",contactNumber:"jg4789-3443-34"},
    {id:'jkd',contactName:"alig",contactNumber:"853094-534-5-34-34"},
];


$(function(){
    // code to be executed when the DOM content is loaded
    console.log('yes after dom content loaded');
    contacts.map(contact=>{ $(".contact-list").append(`${contact?.contactName}`)})

    


})