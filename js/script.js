const showGrade = document.getElementById("showgrade");
showGrade.addEventListener("click", grading);

function grading() {

    let grade = document.getElementById("grade").value;

    if (grade.trim().length <= 0){
        Swal.fire({
            icon: "warning",
            title:  ":o",
            text: "No blank spaces, please."
        })
    } else if (grade >= 90 && grade <= 100) {
        Swal.fire({
            icon: "success",
            title: "A",
            text: "You passed!"
        })
    } else if (grade >= 80 && grade <= 89) {
        Swal.fire({
            icon: "success",
            title: "B",
            text: "You passed!"
        })
    } else if (grade >= 70 && grade <=79) {
        Swal.fire({
            icon: "success",
            title: "C",
            text: "You passed!"
        })
    } else if (grade >=60 && grade <= 69) {
        Swal.fire({
            icon: "warning",
            title: "D",
            text: "You falied :("
        })
    } else if (grade >= 0 && grade <= 59){
        Swal.fire({
            icon: "warning",
            title: "F",
            text: "You failed :'("
        })
    } else {
        Swal.fire({
            icon: "error",
            text: "Your grade is invalid."
        })
    }   
}