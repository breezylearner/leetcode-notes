# 我的轮子库

- [md 语法] (https://www.cnblogs.com/liugang-vip/p/6337580.html)

### 1.链表转数组

- 何时将链表转成数组？
  > 答：数组能直接定位、取值，当需要将链表顺序全部打乱、使用里面数字的特性时，就需要将链表转为数组。新生成的数组破坏原链表结构，只是将里面的数字拷贝进行操作。

```
const arr=[];
    while(head!=null){  //循环结束条件：链表到终点（值为null）
        arr.push(head.val)  //将链表的当前值，用push放进数组
        head=head.next  //当前指针指向下一个值
    }
```
