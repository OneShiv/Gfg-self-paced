// for solving this also we are using Brain and Keringham formula 
// we know for power of two only 1 bit will be set so we unset that using 
// n & (n-1)
int checkPowerOfTwo(n){
    if(n==0){
        return false
    }
    return n& (n-1)
}