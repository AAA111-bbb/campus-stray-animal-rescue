const { createApp } = Vue;

createApp({
  data() {
    return {
      volunteers: [
        { name: '张三', grade: '大一', college: '计算机学院', avatar: 'default' },
        { name: '李四', grade: '大二', college: '文学院', avatar: 'default' },
        { name: '王五', grade: '大三', college: '管理学院', avatar: 'default' },
        { name: '赵六', grade: '大四', college: '外国语学院', avatar: 'default' },
        { name: '小明', grade: '大一', college: '理学院', avatar: 'default' },
        { name: '小红', grade: '大二', college: '医学院', avatar: 'default' },
        { name: '小华', grade: '大三', college: '法学院', avatar: 'default' },
        { name: '小芳', grade: '大四', college: '经济学院', avatar: 'default' },
        { name: '陈明', grade: '大一', college: '计算机学院', avatar: 'default' },
        { name: '刘洋', grade: '大二', college: '文学院', avatar: 'default' },
        { name: '周涛', grade: '大三', college: '管理学院', avatar: 'default' },
        { name: '吴静', grade: '大四', college: '外国语学院', avatar: 'default' },
        { name: '郑强', grade: '大一', college: '理学院', avatar: 'default' },
        { name: '孙磊', grade: '大二', college: '医学院', avatar: 'default' },
        { name: '郭芳', grade: '大三', college: '法学院', avatar: 'default' },
        { name: '何静', grade: '大四', college: '经济学院', avatar: 'default' },
        { name: '高飞', grade: '大一', college: '计算机学院', avatar: 'default' },
        { name: '林薇', grade: '大二', college: '文学院', avatar: 'default' },
        { name: '马超', grade: '大三', college: '管理学院', avatar: 'default' },
        { name: '周丽', grade: '大四', college: '外国语学院', avatar: 'default' },
        { name: '黄伟', grade: '大一', college: '理学院', avatar: 'default' },
        { name: '杨帆', grade: '大二', college: '医学院', avatar: 'default' },
        { name: '朱琳', grade: '大三', college: '法学院', avatar: 'default' },
        { name: '秦雪', grade: '大四', college: '经济学院', avatar: 'default' },
        { name: '许浩', grade: '大一', college: '计算机学院', avatar: 'default' },
        { name: '何涛', grade: '大二', college: '文学院', avatar: 'default' },
        { name: '吕娜', grade: '大三', college: '管理学院', avatar: 'default' },
        { name: '施雨', grade: '大四', college: '外国语学院', avatar: 'default' },
        { name: '孔明', grade: '大一', college: '理学院', avatar: 'default' },
        { name: '曹阳', grade: '大二', college: '医学院', avatar: 'default' },
        { name: '华强', grade: '大三', college: '法学院', avatar: 'default' },
        { name: '金鑫', grade: '大四', college: '经济学院', avatar: 'default' },
        { name: '魏明', grade: '大一', college: '计算机学院', avatar: 'default' },
        { name: '陶然', grade: '大二', college: '文学院', avatar: 'default' },
        { name: '姜浩', grade: '大三', college: '管理学院', avatar: 'default' },
        { name: '谢芳', grade: '大四', college: '外国语学院', avatar: 'default' }
        // 可以继续添加更多...
      ],
      currentPage: 1,
      pageSize: 8 // 每页显示8个志愿者
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.volunteers.length / this.pageSize);
    },
    currentVolunteers() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.volunteers.slice(start, end);
    }
  },
  methods: {
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    }
  }
}).mount('#app');