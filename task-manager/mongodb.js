// CRUD

const { MongoClient, ObjectId } = require('mongodb');


const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const id = new ObjectId()
console.log(id, 'idddd')

const databaseName = 'task-manager';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(databaseName);
    const collection = db.collection('owner');

    // the following code examples can be pasted here...
    db.collection('owner').insertOne({
        _id: id,
        'name': 'Sahil Saini',
        'age': '26'
    }, (error, result) => {
        if(error) {
        }
        console.log(result.ops, 'ops')
    })

    // try {
    //     const insertResult = await collection.insertMany([
    //         { name: 'Sahil Saini', age: 26 },
    //         { name: 'Deepak Kumar', age: 34 },
    //         { name: 'Guru', age: 38 },
    //         {name: 'Sourav', age: 25 }
    //         ], 
    //         // (error, result) => {
    //         //     if(error) {
    //         //         console.log('Unable to add data')
    //         //     }
    //         //     console.log(result.ops, 'ops')
    //         // }
    //     );
    // } catch (error) {
        
    // }
    // const insertResult = await collection.insertMany([
    //     { name: 'Sahil Saini', age: 26 },
    //     { name: 'Deepak Kumar', age: 34 },
    //     { name: 'Guru', age: 38 },
    //     { name: 'Sourav', age: 25 },
    //     { name: 'Vikash', age: 26},
    //     { name: 'Mohit', age: 20},
    //     ], (error, result) => {
    //         if(error) {
    //             console.log('Unable to add data')
    //         }
    //         console.log(result.ops, 'ops')
    //     });
    // console.log('Inserted documents =>', insertResult);


    return 'done.';
}

main()
    .then(console.error)
    .catch(console.error)
    .finally(() => client.close());