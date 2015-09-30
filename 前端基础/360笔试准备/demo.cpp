#include <stdio.h>
#include <string.h>
int main()
{
    int count,i,j,k,len;
    char str1[110],str2[110],str3[110];
    scanf("%d",&count);
    while(count--)
    {
        scanf("%s",&str1);
        len=strlen(str1);
        for(i=0,j=0;i<len;i++,j++)
        {
            if(str1[i]=='@')
            {
                j=0;
                i++;
            }
            str2[j]=str1[i];    
        }
        for(i=0,k=0;i<j;i++,k++)
        {
            while(str2[i]=='#')
            {
                if(k>0)
                    k--;
                i++;
            }
            str3[k]=str2[i];    
        }
        for(i=0;i<k;i++)
            printf("%c",str3[i]);
        printf("\n");
    }
    return 0;
}
//这个只有写一下思路额
//对于输入进来的数字，首先检测这个之是否1，
//如果为1，就去查找与1有关的数字（比如2，5），
//然后测试2和5相关的数字，
//用递归来处理，但是要处理成环的问题，类似于cmd的循环依赖