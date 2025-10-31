<script setup lang="ts">
</script>

<template>
    <div class="admin-home">
        <h1>Admin Home</h1>
        <p>Welcome to the admin dashboard. Here you can manage attractions, view reports, and configure settings.</p>
        <div class="panels">
            <div class="panel">
                <h2>Gestion des attractions</h2>
                <!-- CRUD for attractions -->
            </div>
            <div class="panel">
                <h2>Gestion des spectacles</h2>
                <!-- CRUD for shows -->
            </div>
            <div class="panel">
                <h2>Gestion des rencontres avec les personnages</h2>
                <!-- Manage schedules -->
            </div>            
            <div class="panel">
                <h2>Statistiques</h2>
                <!-- TOP5 characters per hours in the week -->
                <!-- TOP Show by low to higt duration per day -->
            </div>
            
        </div>
    </div>
</template>

<style scoped>
.admin-home {
    padding: 20px;
}

.panels {
    display: flex;
    gap: 16px;
}

.panel {
    background: #f9f9f9;
    border: 1px solid #eee;
    border-radius: 8px;
    padding: 16px;
    flex: 1;
}
</style>   