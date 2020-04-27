const Sets = (redis) => {
    redis.sadd('groceries:dairy', 'milk', 'cheese', 'butter');
    redis.sadd('groceries:fruits', 'apple', 'banana', 'pineapple');
    redis.sadd('groceries:vegetables', 'potato', 'tomato', 'bhindi');

    redis.smembers('groceries:dairy', (err, result) => {
        console.log(result);
    });

    redis.spop('groceries:dairy');

    redis.smembers('groceries:dairy', (err, result) => {
        console.log(result);
    });
}

export default Sets;