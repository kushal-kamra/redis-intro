const Hashes = (redis) => {
    redis.hmset('user:450', 'firstName', 'Kushal', 'lastName', 'Kamra');

    redis.hmset('user:450', 'address', '3000');

    redis.hincrby('user:450', 'address', 100);

    redis.hgetall('user:450', (err, result) => {
        console.log(result);
    });
}

export default Hashes;