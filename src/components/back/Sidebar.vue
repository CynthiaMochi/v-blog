<template>
    <div class="menu">
      <menus label="管理面板">
        <menu-item icon="twitter">
          <span>文章管理</span>
          <menus slot="sub">
            <menu-item :to="{ path: '/admin/article/create'}" icon="qq" :is-active="true">创建文章</menu-item>
            <menu-item :to="{ path: '/admin/article/list'}" icon="qq" :is-active="true">管理文章</menu-item>
          </menus>
        </menu-item>
        <div class="divider"></div>

        <menu-item icon="wechat" to="/admin/tag/list">标签管理</menu-item>
      </menus>
    </div>

</template>