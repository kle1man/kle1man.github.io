/* CONTACT CREATION */

var saveButton = document.getElementById("save-button");
saveButton.addEventListener("click", function () {
  /* CONTACT INFO */
  var contact = {
    photo: "assets/pfp.jpeg",
    name: "Alex Kleiman",
    role: "Head of Marketing, Dream of Coffee," /* TO BE COMMENTED OUT WHEN NOT ON DOC BUSINESS */,
    email: "alexjkleiman@gmail.com",
    linkedin: "TYPE=LinkedIn:https://linkedin.com/in/kle1man/",
    github: "TYPE=GitHub:https://github.com/kle1man/",
    dbc: "TYPE=Digital Business Card:https://tuntiya.dev/card/",
    note: "We met at the National Coffee Expo in Chicago, 2024. It was nice meeting you, and I look forward to your reaching out!" /* TO BE FILLED OUT ON A CASE BY CASE BASIS- LEAVE EMPTY OTHERWISE */,
  };
  /* VCARD FORMATTING + CREATION */
  var vcard =
    "BEGIN:VCARD\nVERSION:4.0\nFN:" +
    contact.name +
    "\nEMAIL:" +
    contact.email +
    "\nEND:VCARD";
  var blob = new Blob([vcard], { type: "text/vcard" });
  var url = URL.createObjectURL(blob);
  const newLink = document.createElement("a");
  newLink.download = contact.name + ".vcf";
  newLink.textContent = contact.name;
  newLink.href = url;

  newLink.click();
});
