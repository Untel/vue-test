<template>
  <div id="app">
    <mdl-layout fixed-header fixed-drawer>
      <mdl-layout-header-row slot="header">
        <mdl-layout-spacer />
        <mdl-nav>
          <mdl-nav-link>Link</mdl-nav-link>
        </mdl-nav>
      </mdl-layout-header-row>

      <mdl-layout-drawer title="fernandes">
        <mdl-nav>
          <mdl-nav-link icon="dashboard" href="#">Dashboard</mdl-nav-link>
        </mdl-nav>
      </mdl-layout-drawer>

      <mdl-layout-content>
        <img class="logo" src="./assets/logo.png">
        <router-view></router-view>
      </mdl-layout-content>
    </mdl-layout>
  </div>
</template>

<script>
export default {};
</script>

<style src="material-design-lite/material.css"></style>
<style src="material-design-icons/iconfont/material-icons.css"></style>

<style lang="less">
@import "./styles/variables.less";

html, body {
  height: 100%;
  background: @background;
  color: @sidebar;
}


#app {
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

a {
  cursor: pointer;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px;
  padding-top: 100px;
}

.mdl-layout__drawer {
  box-shadow: none;
  border-right: 0;
  background: @sidebar;

  .mdl-layout-title {
    padding-right: 40px;
    color: @sidebarActiveText;
    text-transform: uppercase;
    font-size: 20px;
    letter-spacing: 3px;
  }

  .mdl-navigation .mdl-navigation__link {
    color: @sidebarText;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-align: left;
    padding: 16px 17px 16px 17px;
    vertical-align: middle;
    border-left: 6px solid @sidebar;

    &:hover, &.active {
      color: @sidebarActiveText;
      opacity: 1;
    }

    &:hover {
      background-color: @sidebarHover;
      border-left-color: @sidebarHover;
    }

    &.active {
      background-color: @sidebarActive;
      border-left-color: @accent;
    }

    div {
      display: inline-block;
    }

    .material-icons {
      font-size: 24px;
      padding-right: 15px;
    }
  }
}

.mdl-layout__header {
  box-shadow: none;
  border: 0;
  background: @white;

  .mdl-layout__header-row {
    padding: 0;
  }

  .mdl-navigation .mdl-navigation__link {
    color: @sidebar;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
}
</style>
