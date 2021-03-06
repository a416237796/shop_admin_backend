# shop_admin_backend
nestjs+jwt+mongoDB 个人商铺管理后台api

# 介绍
基于nestjs框架，使用jwt登录授权，mongoDB数据库。个人商铺管理后台 api 服务。

# 接口功能列表

| 完成状态 | 接口 | 权限 |  
|---|---|---|---|
| [] | 管理员登录 | admin |  
| [] | 获取管理员信息 | admin |  
| [] | 修改密码 | admin |  
| [] | 注销退出 | admin, weixin |  
| [] | 总销量统计（当日/七天/一月/半年/一年） | admin |  
| [] | 单品销量统计对比（当日/七天/一月/半年/一年） | admin |  
| [] | 当前库存对比（每个商品库存统计） | admin |  
| [] | 分页条件查询轮播图 | admin |  
| [] | 新增轮播图 | admin |  
| [] | 修改轮播图信息 | admin |  
| [] | 删除轮播图 | admin |  
| [] | 禁用/启用轮播图 | admin |  
| [] | 获取当前启用的轮播图 | 无 |  
| [] | 按条件获取分类列表 | 无 |  
| [] | 新增分类 | admin |  
| [] | 修改分类 | admin |  
| [] | 删除分类 | admin |  
| [] | 按条件获取商品列表 | admin |  
| [] | 前台按条件获取可购买商品列表 | 无 |  
| [] | 通过id获取商品详情 | 无 |  
| [] | 新增商品 | admin |  
| [] | 修改商品 | admin |  
| [] | 伪删除商品 | admin |  
| [] | 还原商品 | admin |  
| [] | 修改商品库存 | admin |  
| [] | 上下架商品 | admin |  
| [] | 置顶商品 | admin |  
| [] | 添加商品到购物车 | weixin |  
| [] | 删除购物车商品 | weixin |  
| [] | 修改购物车商品数 | weixin |  
| [] | 获取购物车商品列表 | weixin |  
| [] | 新增订单 | weixin |  
| [] | 取消订单 | weixin |  
| [] | 删除订单 | weixin |  
| [] | 通过id查看订单详情 | weixin |  
| [] | 微信支付 | weixin |  
| [] | 前台用户按条件获取订单分页列表 | weixin |  
| [] | 管理员按条件获取全部订单分页列表 | admin |  
| [] | 管理员通过id查看订单详情 | admin |  
| [] | 管理员通过订单id发货 | admin |  
| [] | 用户获取个人信息 | weixin |  
| [] | 管理员获取用户列表 | admin |  
| [] | 管理员获取用户个人信息 | admin |  
| [] | 管理员获取用户个人订单列表 | admin |  
| [] | 用户新增收货信息 | weixin |  
| [] | 用户修改收货信息 | weixin |  
| [] | 用户获取收货信息 | weixin |  
| [] | 用户修改默认收货信息 | weixin |  
| [] | 图片上传 | admin |  
| [] | 删除图片 | admin |  
| [] | 获取店铺基础信息 | admin |  
| [] | 修改店铺信息 | admin |  
| [] | 管理员获取历史公告消息 | admin |  
| [] | 管理员删除历史消息 | admin |  
| [] | 新增公告消息 | admin |  
| [] | 推送公告消息 | admin |  
| [] | 用户查看公告消息历史列表 | weixin |  
| [] | 用户查看公告消息详情 | weixin |  
| [] | 修改用户消息查看状态 | weixin |  
| [] | 用户删除系统消息 | weixin |  
