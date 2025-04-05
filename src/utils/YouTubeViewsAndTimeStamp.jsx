export const viewsCount = function (views) {
    if (views >= 1000000) {
      const millions = (views / 1000000).toFixed(1);
      return millions + "M";
    } else if (views >= 1000) {
      const thousands = (views / 1000).toFixed(1);
      return thousands + "K";
    } else {
      return views;
    }
  }



  export const timePublished = function (isoString) {
    const date = new Date(isoString);
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);
  
    if (isNaN(seconds)) {
      return "Invalid date";
    }
  
    if (seconds < 60) {
      return seconds + " seconds ago";
    } else if (seconds < 3600) {
      const minutes = Math.floor(seconds / 60);
      return minutes + " minutes ago";
    } else if (seconds < 86400) {
      const hours = Math.floor(seconds / 3600);
      return hours + " hours ago";
    } else if (seconds < 2592000) { // less than 30 days
      const days = Math.floor(seconds / 86400);
      return days + " days ago";
    } else if (seconds < 31536000) { // less than 1 year
      const months = Math.floor(seconds / 2592000); // approximate months
      return months + " months ago";
    } else {
      const years = Math.floor(seconds / 31536000);
      return years + " years ago";
    }
  }
  