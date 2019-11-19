<template>
  <div class="NavigationBar">
    <header>
      <div class="header-logo">
        <img width="155px" src="../assets/img/img_header_logo.png" />
      </div>
      <div class="header-navigation-box">
        <ul class="header-navigation">
          <li class="active">
            <a href="javascript: void(0)">
              실적발표
            </a>
          </li>
          <li>
            <a href="javascript: void(0)">
              IR뉴스
            </a>
          </li>
          <li>
            <a href="javascript: void(0)">
              경영보고
            </a>
          </li>
          <li>
            <a href="javascript: void(0)">
              재무재표
            </a>
          </li>
          <li>
            <a href="javascript: void(0)">
              주주현황
            </a>
          </li>
          <li>
            <a href="javascript: void(0)">
              CONTANT
            </a>
          </li>
        </ul>
        <div class="header-mobile-icon">
          <a href="javascript: void(0)">
            <img width="20px" src="../assets/img/ic_android.png" />  
          </a>
          <a href="javascript: void(0)">
            <img width="20px" src="../assets/img/ic_google_play.png" />
          </a>
        </div>
      </div>
    </header>
  </div>
</template>
<style lang="scss">
@import "@/style/_variables.scss";

.NavigationBar {
  position: fixed;
  top: 0;
  lef: 0;
  width: 100%;
  background: #ffffff;
  z-index: 1500;

  header {
    width: 1150px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .header-navigation-box {
      display: flex;
      justify-content: left;
      align-items: center;
    }

    .header-navigation {
      display: flex;
      justify-content: left;
      align-items: center;

      & li {
        list-style: none;
        padding: 40px 0;
        margin: 0 30px;
        border-bottom: 5px solid transparent;

        & a {
          color: #444;
          text-decoration: none;
          font-weight: bold;
        }

        &.active {
          border-color: $brand-color;
        }
      }
    }
    .header-mobile-icon {
      padding-left: 30px;
      line-height: 0;
      border-left: 1px solid #E6E6E6;

      & img:first-child  {
        margin-right: 30px;
      }
    }
  }
  @media (min-width: 900px) and (max-width: 1149px) {
    header {
      width: 900px;
    }
    .header-navigation {
      display: flex;
      justify-content: left;
      align-items: center;

      & li {
        list-style: none;
        padding: 30px 0 !important;
        margin: 0 15px !important;
        border-bottom: 5px solid transparent;

        & a {
          color: #444;
          text-decoration: none;
          font-weight: bold;
        }

        &.active {
          border-color: $brand-color;
        }
      }
    }
  }
}
</style>
