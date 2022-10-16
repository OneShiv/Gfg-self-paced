// above is one way to check 
string checkKthBitSet(int n,int k){
    string s ="";
    if(n & 1<<k){
        s = "Yes";
    }
    else{
        s= "No";
    }
    return s;
}

// another way would be right shift by k and check.