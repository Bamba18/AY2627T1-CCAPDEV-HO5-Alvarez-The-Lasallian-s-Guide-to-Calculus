let barChart, lineChart, pieChart;

// bar chart - grades
const gradeRanges = ["0-59", "60-69", "70-79", "80-89", "90-100"];
const studentsPerGrade = [3, 5, 12, 15, 8];

// line chart - time answered
const times = ["8 AM", "10 AM", "12 PM", "2 PM", "4 PM", "6 PM", "8 PM", "10 PM"];
const studentsPerTime = [2, 6, 4, 9, 7, 5, 11, 14];

// pie chart - users
const userTypes = ["Students", "Teachers", "Guests"];
const userCount = [120, 15, 45];

function createBarChart()
{
    let canvas = document.getElementById("barChart");

    barChart = new Chart(canvas, {
        type: "bar",
        data: {
            labels: gradeRanges,
            datasets: [{
                label: "Number of Students",
                data: studentsPerGrade,
                backgroundColor: "green"
            }]
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: "Grade"
                    }
                },
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: "Number of Students"
                    }
                }
            }
        }
    });

    console.log("Bar chart created");
}

function createLineChart()
{
    let canvas = document.getElementById("lineChart");

    lineChart = new Chart(canvas, {
        type: "line",
        data: {
            labels: times,
            datasets: [{
                label: "Number of Students",
                data: studentsPerTime,
                borderColor: "seagreen",
                backgroundColor: "rgba(46,139,87,0.2)",
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: "Time"
                    }
                },
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: "Number of Students"
                    }
                }
            }
        }
    });

    console.log("Line chart created");
}

function createPieChart()
{
    let canvas = document.getElementById("pieChart");

    pieChart = new Chart(canvas, {
        type: "pie",
        data: {
            labels: userTypes,
            datasets: [{
                label: "Users",
                data: userCount,
                backgroundColor: ["green", "gold", "crimson"]
            }]
        }
    });

    console.log("Pie chart created");
}

createBarChart();
createLineChart();
createPieChart();
