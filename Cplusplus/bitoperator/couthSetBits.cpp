// naive approach 
int countSetBits(int n){
   int count = 0;
   while(n!=0){
       if(n%2 !=0){
           count++;
       }
       n/=2;
   }
   return count;
}


// Brain keringham algo
int countSetBits(int n){
   int count = 0;
   while(n>0){
       n = n & (n-1);
       count++;
   }
   return count;
}

// lookup table , Theta 1 time 
