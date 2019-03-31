<template>
    <div class="footer_wrapper">
        <div class="footer_container clearfix">
            <div class="footer_nav_wrapper">
                <ul>
                    <li><router-link to='/'>Dashboard</router-link></li>
                    <li><router-link to='/discover'>Discover</router-link></li>
                    <li><router-link to='/about'>About</router-link></li>
                </ul>
            </div>
            <p class="copyright">Copyright &copy; 2019 London Sightseers. All rights reserved</p>
            <router-link to="/" class="footer_logo_wrapper">London Sightseers</router-link>
            
        </div>
    </div>
</template>

<script>

export default {
  name: 'AutoraFooter'
  
}

</script>

<style lang="scss" scoped>

// Extra small devices (Portrait phones, 320px and up)

.footer_wrapper {
    width: 100%;
    background-color: rgb(31, 68, 116);
    padding: 1em 0;
}

.footer_container {
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    justify-content: space-between;
    flex-wrap: nowrap;
    width: 99%; 
    max-width: 960px;
    margin: 1em auto;
}

.footer_logo_wrapper {
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 1em;
        letter-spacing: 0.08em;
        color: #2C5F9A;
        background-color: white;
        border-radius: 3px;
        padding: 5px;
        margin: 0 auto 1em 0;
}

.footer_logo_wrapper:hover {
    text-decoration: none;
}

.footer_nav_wrapper {
    order: 2;
}

.footer_nav_wrapper ul {
    list-style-type: none;
    white-space: nowrap;
    padding: 0;
    margin: 0;
}

.footer_nav_wrapper ul li {
    margin: 0 0 0.50em 0;
    
}

.footer_nav_wrapper ul li a {
    padding: 10px 0 17px 0;
    text-decoration: none;
    color: white;
    font-size: 1em;
}

.footer_nav_wrapper ul li:last-child {
    margin: 0;
}

.footer_nav_wrapper ul li a:hover {
    text-decoration: underline;
}

.copyright {
    color: rgb(216, 216, 216);
    margin: 1em 0 0 0;
    order: 3;
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { 

    .footer_container {
        flex-direction: row;
        align-content: flex-start;
        width: 99%; 
    }

    .footer_logo_wrapper {
            order: 3;
            margin: 0 0 auto 0;
    }

    .footer_nav_wrapper ul li a {
        order: 1;
    }

    .copyright {
    order: 2;
    align-self: flex-end;
}

}









</style>
