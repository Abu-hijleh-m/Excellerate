<template>
  <div>
    <h1 style="text-align: center; margin-bottom: 20px;">Services</h1>
    <div class="blog-container">
      <div
        class="blog-card"
        v-for="(card, index) in blogCards"
        :key="index"
      >
        <div class="meta">
          <div
            class="photo"
            :style="{ backgroundImage: `url(${card.image})` }"
          ></div>
        </div>
        <div class="description">
          <h2>{{ card.title }}</h2>
          <h3>{{ card.subtitle }}</h3>
          <p>{{ card.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogCards: [
        {
          image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          title: 'Tailored Coaching Programs',
          subtitle: 'Opening a door to the future',
          description: 'Personalized coaching to help entrepreneurs refine business models, overcome challenges, and scale their businesses.',
        },
        {
          image: 'https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg',
          title: 'Phase Business Growth System',
          subtitle: '',
          description: 'A step-by-step framework for business success: Foundation (structure), Scaling (optimization), and Expansion (growth).',
        },
        {
          image: 'https://images.pexels.com/photos/4226256/pexels-photo-4226256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          title: 'Operational Excellence Consulting',
          subtitle: '',
          description: 'Streamline operations, eliminate inefficiencies, and optimize systems for better productivity and growth.',
        },
        {
          image: 'https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg',
          title: 'https://images.pexels.com/photos/8112172/pexels-photo-8112172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          subtitle: '',
          description: 'Expert financial coaching for budgeting, cash flow management, and long-term strategic planning to ensure financial health and growth.',
        },
        {
          image: 'https://images.pexels.com/photos/7582651/pexels-photo-7582651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          title: 'Startup Launchpad',
          subtitle: '',
          description: 'Support for early-stage entrepreneurs, guiding product development, market fit, and operational processes for sustainable growth.',
        },
        {
          image: 'https://images.pexels.com/photos/8121815/pexels-photo-8121815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          title: 'Business Strategy Development',
          subtitle: '',
          description: 'Refine business models and develop actionable strategies for growth and competitive advantage.',
        },
        {
          image: 'https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg',
          title: 'Global Expansion Support',
          subtitle: '',
          description: 'Guidance on expanding into international markets, including research, local adaptation, and global branding strategies.',
        },
        {
          image: 'https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg',
          title: 'Leadership and Executive Coaching',
          subtitle: '',
          description: 'Coaching for business owners and executives to enhance leadership, decision-making, and team performance.',
        },
        {
          image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600',
          title: 'Specialized Workshops for Business Owners',
          subtitle: '',
          description: 'Tailored workshops focusing on essential skills like operations, marketing, leadership, and financial planning.',
        },
        {
          image: 'https://images.pexels.com/photos/185576/pexels-photo-185576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          title: 'Brand Development and Marketing Strategy',
          subtitle: '',
          description: 'Help with creating a compelling brand identity and data-driven marketing strategies to drive customer engagement.',
        },
        {
          image: 'https://images.pexels.com/photos/27406/pexels-photo-27406.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          title: 'Systems Implementation & Business Automation',
          subtitle: '',
          description: 'Implementing systems and automation tools to optimize operations and improve efficiency.',
        },
        {
          image: 'https://images.pexels.com/photos/327533/pexels-photo-327533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          title: 'Strategic Partnership Development',
          subtitle: '',
          description: 'Support in building strategic relationships, alliances, and partnerships that align with business goals.',
        },
      ]
    }
  }
}
</script>

<style scoped>
/* Global Styles */
.blog-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  padding: 20px;
}

.blog-card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
}

.blog-card:hover {
  transform: translateY(-10px);
}

.meta {
  position: relative;
  height: 200px;
}

.photo {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: transform 0.3s ease;
}

.blog-card:hover .photo {
  transform: scale(1.1);
}

.description {
  padding: 20px;
}

h2 {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
}

h3 {
  font-size: 1rem;
  font-weight: 400;
  color: #777;
  margin-top: 5px;
}

p {
  font-size: 1rem;
  color: #333;
  line-height: 1.6;
  margin-top: 15px;
}
h1{
  font-size: 40px;
  font-weight:700;
}
</style>
