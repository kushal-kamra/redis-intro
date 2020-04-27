const Strings = (redis) => {
    redis.set('name', 'Emmanuel', 'EX', 5);

    redis.get('name', (err, result) => {
        console.log(result);
    });
    
    redis.get('address', (err, result) => {
        console.log(result);
    });
    
    redis.incrby('address', 300);
    
    redis.get('address', (err, result) => {
        console.log(result);
    });
    
    redis.mset('street', 'Indiranagar', 'city', 'Bengaluru');
    
    redis.mget('street', 'city', (err, result) => {
        console.log(result);
    });
}

export default Strings;