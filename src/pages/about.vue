<template>
    <div class="about_container">
        <h1 class="page_header">Welcome to London Sightseer</h1>
        <p class="intro">The London Sightseer site enables users to view and discover 
            a variety of food establishments within London, including supermarkets, local shops,
            cafès and restaurants.
        </p>
        <hr>
        <p>This site was designed and built by Sam Johns, during the final year of university
            at Solent University. This is for the Web Design (SWD600) unit, taught by Joe Appleton.
        </p>
        <p>For this assignment, the task was to design and develop a single-page web application,
            which connects to the Autora API, allowing the site to consume, process and display real-world data, with the support of a 
            real-time database.
        </p>
        <p>To develop this site, the Vue.JS JavaScript framework was used, along with the popular NoSQL,
             Firebase database. In addition to those, various other technologies were used to enhance the application.
            For example, Vue2Leaflet, is used to display maps, Vue Routers, are used to enable multiple pages,
            and Axios, is necessary to retrieve data from the Autora API.
        </p>
        
    </div>

</template>

<script>

</script>

<style lang="scss">

   // Extra small devices (Portrait phones, 320px and up)

.about_container {
        height: 100vh;
        width: 90%;   
        max-width: 500px;
        margin: 0 auto;
    }

.alt a {
    color: #2C5F9A;
}

.about_container h1 { 
    margin: 1em 0;
}

.about_container p {
    text-align: justify;
    font-size: 14px;
    line-height: 1.5;
}

.intro {
    font-weight: 700;
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { 

    .about_container {
        width: 50%;
    }

}

</style>
