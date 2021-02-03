<template>
  <section>
    <div>
      <h2>People of Gaul</h2>
      <ul>
        <li v-for="person of sortByAge" :key="person.id">
          {{ person.name }}, {{ person.age }}
        </li>
      </ul>
    </div>
    <div>
      <h2>"Old" People of Gaul</h2>
      <ul>
        <li v-for="person of filterOld" :key="person.id">
          {{ person.name }}, {{ person.age }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        peopleList: [
          { id: 0, name: "Claire", age: 28 },
          { id: 1, name: "Eddie", age: 30 },
          { id: 2, name: "Heather", age: 17 },
          { id: 3, name: "Annie", age: 59 },
          { id: 4, name: "Nanny", age: 87 },
        ],
      };
    },
    computed: {
      sortByAge() {
        const sortedList = [...this.peopleList].sort((a, b) => a.age - b.age);
        return sortedList;
      },
      filterOld() {
        const filteredList = this.peopleList.filter(
          (person) => person.age > 50
        );
        return filteredList;
      },
    },
  };
</script>

<style></style>
