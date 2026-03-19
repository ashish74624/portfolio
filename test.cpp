Design a data structure that supports insert(x), remove(x), and getRandom() in O(1) -- in duplication -- insert anyways
removal -- if we have duplicates remove one 1

[1,2,4,3] - arr 

getRandom -> 0,4 -> 2 =2
remove = 2 

{
    2->{1};// set 
    3->{3};
    4->{3};
}

return arr[2];


class Random{
    public:
        vector<int> arr;
        unordered_map<int,unordered_set<int>> pos;
        void insert(int x){
            arr.push_back(x);
            pos[x].insert(arr.size()-1);
        }
        [1,2,2,3,4];
        void removal(int x){
            auto it = pos.find(x);
            int indexToRemove = it->second.end(); 
            int last = arr.size()-1;
            int lastVal = arr[last];
            if(indexToRemove != lastVal ){
                arr[indexToRemove] = lastVal;
            }
            arr.pop_back();
            auto setLast = pos[lastVal];
            setLast.erase(last);
            setLast.insert(indexToRemove);
        }

        int getRandom(){
            uniform_int_distribution<int> dist(0,arr.size()-1);

            return arr[dist(rng)];
        }
}