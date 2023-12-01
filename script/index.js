const github = document.getElementById("github")
const reddit = document.getElementById("reddit")
const discord = document.getElementById("discord")
const insta = document.getElementById("insta")


github.addEventListener("mouseover", function() {
    github.style.animationName = "expand"
    github.style.animationDuration = "1s"
    github.style.width = "70px"
    github.style.height = "70px"
})
reddit.addEventListener("mouseover", function() {
    reddit.style.animationName = "expand"
    reddit.style.animationDuration = "1s"
    reddit.style.width = "70px"
    reddit.style.height = "70px"
})

insta.addEventListener("mouseover", function() {
    insta.style.animationName = "expand"
    insta.style.animationDuration = "1s"
    insta.style.width = "70px"
    insta.style.height = "70px"
})

discord.addEventListener("mouseover", function() {
    discord.style.animationName = "expand"
    discord.style.animationDuration = "1s"
    discord.style.width = "70px"
    discord.style.height = "70px"
})
github.addEventListener("mouseout", function() {
    github.style.animationName = "expand1"
    github.style.animationDuration = "1s"
    github.style.width = "50px"
    github.style.height = "50px"
})
reddit.addEventListener("mouseout", function() {
    reddit.style.animationName = "expand1"
    reddit.style.animationDuration = "1s"
    reddit.style.width = "50px"
    reddit.style.height = "50px"
})

insta.addEventListener("mouseout", function() {
    insta.style.animationName = "expand1"
    insta.style.animationDuration = "1s"
    insta.style.width = "50px"
    insta.style.height = "50px"
})

discord.addEventListener("mouseout", function() {
    discord.style.animationName = "expand1"
    discord.style.animationDuration = "1s"
    discord.style.width = "50px"
    discord.style.height = "50px"
})