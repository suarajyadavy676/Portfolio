document.getElementById('resumeDownload').addEventListener('click', function(event) {
  // Prevent the default behavior of the link
  event.preventDefault();

  // Get the URL of the resume file
  var resumeUrl = "images/Suraj-Yadav-Resume.pdf";

  // Open Google Drive link in a new tab
  var driveUrl = 'https://drive.google.com/file/d/1E8FT_1XFXQgfoSLHo_C1JCKQcU0GRIvt/view?usp=sharing';

  // Create an anchor element to initiate the download
  var downloadLink = document.createElement('a');
  downloadLink.href = resumeUrl;
  downloadLink.download = 'Suraj-Yadav-Resume.pdf'; // File name for download
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);

  // Open Google Drive link in a new tab
  window.open(driveUrl, '_blank');
});

document.getElementById('download').addEventListener('click', function(event) {
  // Prevent the default behavior of the link
  event.preventDefault();

  // Get the URL of the resume file
  var resumeUrl = "images/Suraj-Yadav-Resume.pdf";

  // Open Google Drive link in a new tab
  var driveUrl = 'https://drive.google.com/file/d/1E8FT_1XFXQgfoSLHo_C1JCKQcU0GRIvt/view?usp=sharing';

  // Create an anchor element to initiate the download
  var downloadLink = document.createElement('a');
  downloadLink.href = resumeUrl;
  downloadLink.download = 'Suraj-Yadav-Resume.pdf'; // File name for download
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);

  // Open Google Drive link in a new tab
  window.open(driveUrl, '_blank');
});