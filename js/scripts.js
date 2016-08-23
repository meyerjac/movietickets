var movie = {
  age: 0,
  movie: "",
  time: "",
  cost: function () {
    console.log("ININININININ")
    if ((this.age === "1") && (this.movie === "2" || this.movie === "3") && (this.time === "1" || this.time === "2")) {
      $(".cheaper").slideToggle();
    } else if ((this.age === "2" || this.age === "3") && (this.movie === "1") && (this.time === "3")) {
      $(".exp").slideToggle();
    }
  }
};



$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var setUP = Object.create(movie);
    setUP.age = $("#age").val();
    setUP.movie = $("#movieTitle").val();
    setUP.time = $("#showtime").val();
    console.log(setUP);
    setUP.cost();
});
});
