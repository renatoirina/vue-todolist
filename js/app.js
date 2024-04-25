Vue.createApp({
    data() {
      return {
        prevTask: [
          {
            text: "Formaggio",
            isDone: false,
            stateImage: "./img/done.svg",
          },
          {
            text: "Buttare vetro",
            isDone: false,
            stateImage: "./img/done.svg",
          },
          {
            text: "Lavare il cane",
            isDone: false,
            stateImage: "./img/done.svg",
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
                  stateImage: "./img/done.svg",
              });
              this.newTaskText = ''; // Resetta il campo di input dopo l'aggiunta della nuova attività
          }
      },
      toggleTask(index, listName) {
          this[listName][index].isDone = !this[listName][index].isDone;
      }
    },
  }).mount("#app");
