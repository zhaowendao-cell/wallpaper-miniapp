css

1.padding,margin
padding**内边距：盒子内部，把盒子里的内容往下挤**
margin**外边距:盒子外部，把整个盒子向下偏移**：
1..`padding: 10rpx;`
/* 1个值：四个方向全部一样 */
2..`padding: 10rpx 20rpx;`
/* 2个值：上下 | 左右 */
3..`padding:10rpx 20rpx 30rpx;`
/* 3个值：上 | 左右 | 下 */
4..`padding: 10rpx 20rpx 30rpx 40rpx;`=padding-top:10rpx;padding-right:20rpx;padding-bottom:0;padding-left:0;
/* 4个值：上 → 右 → 下 → 左（顺时针） */


2.display
**写在父容器，只对它的直接子元素生效；孙子后代不受 flex 直接控制。**
流布局
1.. `display:block`：独占一行，从上往下堆
2.. `display:inline`：同行显示，宽高设置无效
3.. `inline‑block`：行内块；同行显示，**同时支持设置宽高**；会产生空白间隙。
等等。。。。

弹性布局
1.. `display:flex`：父开启弹性，直接子元素自由排布，可控制对齐、分配空间
等等。。。。

网格布局等等。。。。

3.flex‑direction
**设置主轴方向**
1.. `flex‑direction: row`（默认）：主轴水平（左右），子元素**横向并排**
2.. `flex‑direction: column`：主轴垂直（上下），子元素**从上往下竖向堆叠**
**交叉轴永为主轴垂直轴**

4.align‑items
前提：display:flex
控制**所有子元素在交叉轴的对齐方式，交叉轴永为主轴垂直轴**
1.. `align-items: flex-start` 子元素靠**顶部**对齐
2.. `align-items: center`  子元素**垂直居中**
3.. `align-items: flex-end` 子元素靠**底部**对齐
4.. `align-items: stretch` 默认值；子元素**拉伸填满父容器高度**（父必须有高度）
5.. `align-items: baseline` 按文字基线对齐

5.justify-content
前提：display:flex
控制**主轴方向**子元素排布。
1.. `justify-content: flex-start`
全部子元素挤在**左边**，间隙在右边。（flex 默认）
2.. `justify-content: flex-end`
全部子元素挤在**右边**。
3.. `justify-content: center`
所有子元素整体居中，左右留空白。
4.. `justify-content:space‑between`
两端对齐：首项靠左，末项靠右，**空白只分布在元素与元素之间**。
6.. `justify-content:space‑around`
每个元素左右都分配空白，两边也有留白。元素之间空隙比两边大一倍。
7.. `justify-content:space‑evenly`
所有间隙（包括最左、最右）大小完全相等。


