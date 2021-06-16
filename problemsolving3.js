/**
 * 7 times of racing.
 * > 5 times of racing to get the winners of each cluster.
 *      [a5, a4, a3, a2, a1] -> 1 racing
 *      [b5, b4, b3, b2, b1] -> 2 racing
 *      [c5, c4, c3, c2, c1] -> 3 racing
 *      [d5, d4, d3, d2, d1] -> 4 racing
 *      [e5, e4, e3, e2, e1] -> 5 racing
 * 
 * > 1 times to get the fastest arrangement of winners (from the previous race).
 *      [a1]
 *      [b1]
 *      [c1]
 *      [d1]
 *      [e1]
 * --------------
 *      -> 6 racing
 * 
 * > 1 times to compete the second and third winner from the previous race 
 *      [b1]
 *      [c1]
 *      with the remaining 3 horses are the third and runner up of the fastest horse, and the runner up of the 2nd fastest horse.
 *      [a2]
 *      [a3]
 *      [b2]
 * --------------
 *      -> 7 racing
 *      
 *      The fastest horse [a1] doesn't need to compete in the last round because [a1] is the 1st winner.
 *      Therefore, the 7th competition is to find the 2nd & 3rd place.
 */