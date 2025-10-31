<template>
    <div class="navigation-menu">
        <router-link to="/">Acceuil</router-link>
        <router-link to="/shows">Liste des spectacles</router-link>
        <router-link to="/admin">ADMIN</router-link>
    </div>
</template>

<style scoped>
.navigation-menu {
    width: 100%;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
}

.navigation-menu a {
    position: relative;
    font-weight: bold;
    color: #262626;
    font-size: 1.2rem;
}

.navigation-menu a::before {
    position: absolute;
    display: inline-block;
    content: "";
    width: 0;
    height: 2px;
    bottom: 0px;
    background-color: var(--primary-color);
    transition: 0.3s cubic-bezier(0.075, 0.82, 0.165, 1) ;
}

.navigation-menu a:hover::before {
    width: 100%;
}
</style>