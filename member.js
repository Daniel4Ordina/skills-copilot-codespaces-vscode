function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var about = document.getElementById("about");
    var contact = document.getElementById("contact");
    var memberClass = document.getElementById("memberClass");
    var skillsClass = document.getElementById("skillsClass");
    var aboutClass = document.getElementById("aboutClass");
    var contactClass = document.getElementById("contactClass");
    member.style.display = "block";
    skills.style.display = "none";
    about.style.display = "none";
    contact.style.display = "none";
    memberClass.className = "active";
    skillsClass.className = "";
    aboutClass.className = "";
    contactClass.className = "";
}