Given three strings s1, s2, and s3, you need to determine whether s3 is formed by an interleaving of s1 and s2.

An interleaving of two strings s1 and s2 is a string that contains all characters of s1 and s2, and maintains the relative order of characters from each string.


s1 = "abc"i=1 ans1 = i+1, j 
s2 = "def"j=0 ans2 = i,j+1 
s3 = "adbcef" k = 0+1 ans = ans1 || ans2 
Output: True


s1 = "aab"
s2 = "axy"
s3 = "aaxaby"
Output: True

int main(){

    int n = s1.size();
    int m = s2.size();

    int l = s3.size();

    if(n+m != l){
        return false;
    }

    return solve(s1,s2,s3,i,j);
}

bool solve(string s1,string s2,string s3,int i,int j){
    vector<vector<int>> dp();-> O(n*m)
    if(i==s1.size() && j== s2.size()){
        return true;
    }
    int k = i+j;
    bool ans1,ans2;
    if(s1[i]== s3[k]){
        ans1 = solve(i+1,j);
    }

    if(s2[j]== s3[k]){
        ans2 = solve(i,j+1);
    }

    ans = ans1 || ans2
}

TC
w/o dp = O(2^n+m); ---> O(n*m)
