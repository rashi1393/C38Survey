class User {
    constructor() {
        this.index = null;
        this.email = null
        this.input = null;
        this.q1 = null;
        this.q2 = null;
        this.q3 = null;
    }

    getCount(){
        var countRef  = database.ref('peopleCount');
        countRef.on("value",function(data){
        peopleCount = data.val();
        console.log(peopleCount);
      })
    }

    updateCount(count) {
        console.log(count);
        database.ref('/').update({
            peopleCount: count
        });
    }

    update(){
        var userIndex = "users/user" + this.index;
        database.ref(userIndex).set({
            input: this.input,
            email: this.email,
            ques1: this.q1,
            ques2: this.q2,
            ques3: this.q3, 
        });
    }
}