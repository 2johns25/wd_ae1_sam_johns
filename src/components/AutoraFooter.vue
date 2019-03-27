<template>
    <div class="footer_wrapper">
        <div class="footer_container clearfix">
            <a href="#" class="footer_logo_wrapper">
                <img src="../assets/header_logo.svg"/>
            </a>
            <div class="footer_nav_wrapper">
                <ul>
                    <li><router-link to='/'>Dashboard</router-link></li>
                    <li><router-link to='/discover'>Discover</router-link></li>
                    <li><router-link to='/about'>About</router-link></li>
                </ul>
            </div>
        </div>
        <p class="copyright">Copyright &copy; 2019 Sam Johns. All rights reserved</p>
    </div>
</template>

<script>

export default {
  name: 'AutoraFooter'
  
}

</script>

<style lang="scss" scoped>

.footer_wrapper {
    width: 100%;
    background-color: rgb(31, 68, 116);
    padding: 0 0 1px 0;
}

.footer_container {
    width: 100%;
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: start;
    white-space: nowrap;
    padding: 1em 0 0 0;
}

.footer_logo_wrapper {
    order: 3;
}

.footer_nav_wrapper {
    order: 1;
}

.footer_nav_wrapper ul {
    list-style-type: none;
    white-space: nowrap;
    padding: 0;
    margin: 0;
}

.footer_nav_wrapper ul li {
    margin: 0 0 10px 0;
    
}

.footer_nav_wrapper ul li a {
    padding: 10px 0 17px 0;
    position: relative;
    text-decoration: none;
    color: white;
    font-size: 1.25em;
}

.footer_nav_wrapper ul li a:hover {
    text-decoration: underline;
}

.copyright {
    text-align: center;
    color: white;
    margin: 1em 0;
}

</style>
