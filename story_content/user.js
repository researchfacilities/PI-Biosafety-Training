function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6AMFjL2TjI2":
        Script1();
        break;
      case "62wyOJcaHy5":
        Script2();
        break;
  }
}

function Script1()
{
  
let currentTime = new Date();
let month = currentTime.getMonth() + 1;
let day = currentTime.getDate();
let year = currentTime.getFullYear();

// Putting it together
let dateString = month + "/" + day + "/" + year;

//Pushing data to Storyline
let player = GetPlayer();
player.SetVar("todaysDate", dateString);
player.SetVar("month", month);
}

function Script2()
{
  window.print();
}

