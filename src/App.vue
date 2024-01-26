<script setup lang="ts"></script>

<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Control Remoto ESP32</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/">Tutorial</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/controller">Control</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/historico"
              >Historico</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view></router-view>
</template>
