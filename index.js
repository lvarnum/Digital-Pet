function DigitalPal(type) {
    this.type = type.toLowerCase();
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;
    this.outside = false;
    this.houseCondition = 100;
}

DigitalPal.prototype.feed = function () {
    if (this.hungry === true) {
        $("#dialogue").text("That was yummy!");
        this.hungry = false;
        $("#hungry").text("No");
    }
    else {
        $("#dialogue").text("No thanks, I'm full.");
    }
}

DigitalPal.prototype.sleep = function () {
    if (this.sleepy === true) {
        $("#dialogue").text("Zzzzzzzzz");
        this.sleepy = false;
        $("#sleepy").text("No");
        this.bored = true;
        $("#bored").text("Yes");
        this.increaseAge();
    }
    else {
        $("#dialogue").text("No way! I'm not tired.");
    }
}

DigitalPal.prototype.play = function () {
    if (this.bored === true) {
        $("#dialogue").text("Yay, finally! Let's play");
        this.bored = false;
        $("#bored").text("No");
        this.hungry = true;
        $("#hungry").text("Yes");
    }

    else {
        $("#dialogue").text("Ugh, not right now. Later, okay?");
    }
}

DigitalPal.prototype.increaseAge = function () {
    this.age++;
    $("#dialogue").text(`Happy Birthday to me! I am now ${this.age} years old.`);
    $("#age").text(this.age);
}

DigitalPal.prototype.talk = function () {
    if (this.type === "dog") {
        $("#dialogue").text("Woof! Woof!");
    }
    if (this.type === "cat") {
        $("#dialogue").text("Meow! Meow!");
    }
}

DigitalPal.prototype.goOutside = function () {
    if (this.outside === false) {
        $("#dialogue").text("Yay! I love the outdoors.");
        this.outside = true;
        $("#local").text("Outside");
    }
    else {
        $("#dialogue").text("Okay, but have you noticed we're already outside?");
    }
}

DigitalPal.prototype.goInside = function () {
    if (this.outside === true) {
        $("#dialogue").text("I don't want to though... Fine...");
        this.outside = false;
        $("#local").text("Inside");
    }

    else {
        $("#dialogue").text("Maybe we could go outside instead since we're already inside...");
    }
}

DigitalPal.prototype.destroyFurniture = function () {
    if (this.houseCondition > 0) {
        $("#dialogue").text("Dumb furniture! TAKE THAT!");
        this.houseCondition -= 10;
        $("#condition").text(this.houseCondition);
        this.bored = false;
        $("#bored").text("No");
        this.sleepy = true;
        $("#sleepy").text("Yes");
    }
}

DigitalPal.prototype.buyNewFurniture = function () {
    $("#dialogue").text("You sure you want to do that? Well thanks for giving me more to destory!");
    this.houseCondition += 50;
    $("#condition").text(this.houseCondition);
}

/////////////////////////////////////////////////////////////////////////////////////

$(".pet").hide();
$(".home").show();
$("#dialogue").hide();
let pet;

$("#dog").on("click", () => {
    $(".home").hide();
    $(".pet").show();
    $("#pet").attr("src", "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/6219/dog-clipart-md.png");
    pet = new DigitalPal("dog");
});

$("#cat").on("click", () => {
    $(".home").hide();
    $(".pet").show();
    $("#pet").attr("src", "https://clipartart.com/images/calico-cat-clipart-free-15.png");
    pet = new DigitalPal("cat");
});

$(".navbar-brand").on("click", () => {
    $(".pet").hide();
    $(".home").show();
    $("#dialogue").empty();
});

$(".feed").on("click", () => {
    $("#dialogue").show();
    pet.feed();
});

$(".sleep").on("click", () => {
    $("#dialogue").show();
    pet.sleep();
});

$(".play").on("click", () => {
    $("#dialogue").show();
    pet.play();
});

$(".talk").on("click", () => {
    $("#dialogue").show();
    pet.talk();
});

$(".outside").on("click", () => {
    $("#dialogue").show();
    pet.goOutside();
});

$(".inside").on("click", () => {
    $("#dialogue").show();
    pet.goInside();
});

$(".destroy").on("click", () => {
    $("#dialogue").show();
    pet.destroyFurniture();
});

$(".buy").on("click", () => {
    $("#dialogue").show();
    pet.buyNewFurniture();
});