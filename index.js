import Redis from 'ioredis';
import Strings from './strings';
import Hashes from './hashes';
import List from './list';
import Sets from './sets';
import SortedSets from './sortedsets';

const redis = new Redis({
    password: 'testredis1234'
});

Strings(redis);
Hashes(redis);
List(redis);
Sets(redis);
SortedSets(redis);