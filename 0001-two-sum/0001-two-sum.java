class Solution {
    public int[] twoSum(int[] nums, int target) {
        int[]res=new int[2];
        for(int i=0;i<nums.length;i++){
            for(int j=i;j<nums.length;j++){
                if(i!=j && target-nums[i]==nums[j]){
                    res[0]=i;
                    res[1]=j;
                }
            }
        }
        return res;
    }
}