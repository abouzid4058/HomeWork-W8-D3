// Navigation bar (local Vue component)
Vue.component('nav-bar', {
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <a class="navbar-brand text-success font-weight-bold" href="#">Food Blog</a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item" v-for="link in links" :key="link">
            <a class="nav-link" href="#">{{ link }}</a>
          </li>
        </ul>
      </div>
    </nav>
  `,
  data() {
    return {
      links: ['Home', 'Recipes', 'Lifestyles', 'Videos', 'About']
    };
  }
});

// Header component (image now controlled by Vue)
Vue.component('header-component', {
  template: `
    <header class="text-center mb-4">
      <img :src="photo.src" :alt="photo.alt" class="img-fluid rounded shadow-sm mb-3" width="300">
      <h2 class="text-success text-uppercase">Comments</h2>
    </header>
  `,
  data() {
    return {
      photo: {
        src: 'images/chili.jpg',
        alt: 'White Chicken Chili'
      }
    };
  }
});

// Blog post component
Vue.component('blog-post', {
  props: ['post', 'showProfile'],
  template: `
    <div class="card mb-3">
      <div class="card-body">
        <img :src="post.photo" alt="profile" width="50" class="float-left mr-3" @click="showProfile(post)">
        <h5 class="card-title mb-1">{{ post.author }}</h5>
        <small class="text-muted">{{ post.date }}</small>
        <p class="card-text mt-2">{{ post.comment }}</p>
      </div>
    </div>
  `
});

// Main content
Vue.component('main-component', {
  props: ['showProfile'],
  template: `
    <section>
      <blog-post 
        v-for="(p, index) in posts"
        :key="index"
        :post="p"
        :showProfile="showProfile">
      </blog-post>
    </section>
  `,
  data() {
    return {
      posts: [
        // your post objects (same as before)
      ]
    };
  }
});

// Footer
Vue.component('footer-component', {
  template: `<footer class="text-center text-muted mt-4">&copy; Copyright Food Blog</footer>`
});

// Root Vue instance
new Vue({
  el: '#app',
  data: {
    selectedAuthor: null
  },
  methods: {
    showProfile(author) { this.selectedAuthor = author; },
    closeProfile() { this.selectedAuthor = null; }
  }
});
