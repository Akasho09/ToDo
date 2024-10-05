// zod 
const zod= require ("zod");

// post 
// o :{ str
const createtype = zod.object(
    {
    title :zod.string(), //title
    Description :zod.string(), // description
    Doneby : zod.number(),
    Completed : zod.boolean()
} ,
{ message : " Please enter data as 1. Title  2.Description and 3. Hour to be done by"}
) ;


// put 
// id of todo
const puttype = zod.object({
    id: zod.string
});

module.exports = {
    createtype,
    puttype
}

