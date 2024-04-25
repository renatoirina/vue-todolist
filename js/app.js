Vue.createApp({
    data() {
      return {
        prevTask: [
          {
            text: "Formaggio",
            isDone: false
          },
          {
            text: "Buttare vetro",
            isDone: false
          },
          {
            text: "Lavare il cane",
            isDone: false
          },
        ],
        todayTask: [
            {
              text: "Formaggio",
              isDone: false,
            },
            {
              text: "Buttare vetro",
              isDone: false,
            },
            {
              text: "Lavare il cane",
              isDone: false,
            },
          ],
          futureTask: [
            {
              text: "Formaggio",
              isDone: false,
            },
            {
              text: "Buttare vetro",
              isDone: false,
            },
            {
              text: "Lavare il cane",
              isDone: false,
            },
          ],
        newTaskText: '' // Aggiunto per gestire il testo della nuova attività
      };
    },
    methods: {
      removeTask(indexItem){
          this.prevTask.splice(indexItem,1)
      },
      addTask() {
          if (this.newTaskText.trim() !== '') {
              this.prevTask.push({
                  text: this.newTaskText,
                  isDone: false,
              });
              this.newTaskText = ''; // Resetta il campo di input dopo l'aggiunta della nuova attività
          }
      },
      toggleTask(index, listName) {
          this[listName][index].isDone = !this[listName][index].isDone;
      }
    },
  }).mount("#app");
