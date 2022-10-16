// Given a array , only one number appears odd no of times 
// others appear even no of times find that number


int checkOddAppearing(int nums[],int n){
    int res = nums[0];
    for(int i = 1;i<n;i++){
        res = res ^ nums[i];
    }
    return res;
}
