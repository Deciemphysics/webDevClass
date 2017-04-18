var observer = {
    addSubscriber: function (callback) {
        if (typeof callback === "function") {
            this.subscribers[this.subscribers.length] = callback;
        }
    },
    removeSubscriber: function (callback) {
        for (var i = 0; i < this.subscribers.length; i++) {
            if (this.subscribers[i] === callback) {
                delete this.subscribers[i];
            }
        }
    },
    publish: function (what) {
        for (var i = 0; i < this.subscribers.length; i++) {
            if (typeof this.subscribers === "function") {
                this.subscribers[i](what);
            }
        }
    },
    make: function (o) {
        for (var i in this) {
            if (this.hasOwnProperty(i)) {
                o[i] = this;
                o.subscribers = [];
            }
        }
    }
};

var blogger = {
    writeBlogPost: function () {
        var content = 'Zelda is awesome! Get it now!';
        this.publish(content);
    }
}

var youTuber = {
    uploadedVideo: function () {
        var video = 'Cats have small brains! Awesome!'
        this.publish(content);
    }
}

observer.make(blogger);
observer.make(youTuber);

var jack = {
    read: function (what) {
        console.log("I just read blogger said " + what);
    }
}

var ethan = {
    videoWatched: function(what){
        console.log("Everything on Youtube is true even  " + what)
    }
}

observer.addSubscriber(jack.read);
observer.addSubscriber(ethan.videoWatched);

blogger.writeBlogPost();
blogger.uploadedVideo();
