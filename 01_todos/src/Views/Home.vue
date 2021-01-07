<template>
  <div>
    <h1>Welcome {{title}}</h1>
    <input type="text" v-model='input'>
    <button type='button' @click='getData'>Get</button>
    <button type='button' @click='setData'>Set</button>
    <hr />
    <select class='form-control' v-model='region' @change='changeOption'>
      <option :key='i' :value='data.v' v-for='(data, i) in options'>{{data.t}}</option>
    </select>
    <hr />
    <button type="button" @click='clickListBtn'>Show</button>
    <ul v-if='showList'>
      <li :key='i' v-for='(data, i) in options'>{{data.t}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'kimfriendship',
      input: 'write',
      region: 'J',
      options: [
        {v: 'S', t: 'Seoul'},
        {v: 'B', t: 'Busan'},
        {v: 'J', t: 'Jeju'},
      ],
      showList: true,
    }},
  watch: {
    input() {
      console.log(this.input, 'changed');
    }
  },
  methods: {
    getData() {
      alert(this.input);
    }, 
    setData() {
      this.input = 123;
    },
    clickListBtn() {
      this.showList = !this.showList;
    }, 
    changeOption() {
      console.log(this.options.filter(option => option.v === this.region)[0].t, 'selected');
    }
  },
  // beforeCreate() {
  //   console.log('beforeCreate');
  // },
  // created() {
  //   console.log('created');
  // },
  // beforeMount() {
  //   console.log('beforeMount');
  // },
  // mounted() {
  //   console.log('mounted');
  // },
  // beforeUpdate() {
  //   console.log('beforeUpdate');
  // },
  // updated() {
  //   console.log('updated');
  // },
  // beforeDestroy() {
  //   console.log('beforeDestroy');
  // },
  // destroyed() {
  //   console.log('destroyed');
  // },
}
</script>