class Message{
    constructor(name, message) {
        this.name = name;
        this.date=Date.now();
        this.message = message;
      }
    gettime() {
        let time = new Date();
        return `${time.getHours()}: ${time.getMinutes()}`
    }
      toString(){
        return(`${this.gettime()} ${this.name}: ${this.message}`)
      }
}
class Messenger{
    arr=[];
    send(name,message){
        let newmessage=new Message(name,message)
        this.arr.push(newmessage)
    };
    show_history(){
        this.arr.forEach(message=>{
            console.log(message.toString())
        })
    }
}

let messenger = new Messenger()
messenger.send('Adil', 'ilk mesaj')
messenger.send('Məryəm', 'İkinci mesaj')
messenger.show_history()