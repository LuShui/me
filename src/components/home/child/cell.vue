 <template>
  <transition name="slide-fade">
  <li @click="detilfunc">
    <a>
      <div>
        <h4>
          {{json.title}}
        </h4>
        <div>
          <p>
            {{json.des}}
          </p>
        </div>
        <div>
          <div>
            <img src="../../../assets/look-count-icon.png">
            <span>{{json.num}}</span>
            <img src="../../../assets/time.png">
            <span>{{time}}</span>
          </div>
        </div>
      </div>
    </a>
  </li>
  </transition>
</template>

<script>
  import qs from 'qs'
  export default {
    name: 'cell',
    props: ['json'],
    methods: {
      detilfunc: function () {
        this.$http.post('home/addnum', qs.stringify({
          id: this.json.id
        }))
        this.$router.push({path: 'detil', query: { id: this.json.id }})
      },
      gettime: function (time) {
        time = parseInt(time) * 1000
        var date = new Date(time)
        var y = date.getFullYear()
        var m = date.getMonth() + 1
        var d = date.getDate()
        m = m < 10 ? '0' + m : m
        d = d < 10 ? '0' + d : d
        return y + '-' + m + '-' + d
      }
    },
    computed: {
      time: function () {
        if (this.json.addtime) {
          return this.gettime(this.json.addtime)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .slide-fade-enter-active {
    -webkit-transition: all .3s ease;
    -moz-transition: all .3s ease;
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    -webkit-transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    -moz-transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-active {
    -webkit-transform: translateX(10px);
    -moz-transform: translateX(10px);
    transform: translateX(10px);
    opacity: 0;
  }
  li{
    border-bottom:1px solid cornsilk;
  a:hover{
    background-color: cornsilk;
  }
  a {
    display: block;
    cursor: pointer;
    padding:20px 0px;
  div {
  h4 {
    text-indent: 2em;
  }
  div {
  p {
    text-indent: 2em;
    padding-top: 5px;
    color: #555555;
    line-height: 25px;
  }
  div {
    padding-top: 10px;
  img {
    width: 20px;
    margin-left: 2em;
    display: inline-block;
    vertical-align: top;
  }
  span {
    display: inline-block;
    vertical-align: top;
    height: 20px;
    line-height: 20px;
    font-size: 14px;
  }
  }
  }
  }
  }
  }
</style>
