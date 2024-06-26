export const renderAdminTemplate = (data:any) => {
  return `
    <html>
      <head>
        <style>
          /* Define your CSS styles here */
        </style>
      </head>
      <body>
        <img src="https://firebasestorage.googleapis.com/v0/b/gazonverde-2854b.appspot.com/o/android-chrome-192x192.png?alt=media&token=328d8298-1c88-4a78-8e76-8ddfd23f03bc" alt="/" />
        <h1>Formular nou </h1>
        <p>${data.name} tocmai a completat un formular !</p>
        <p>Date client:</p>
        <p>Nume : ${data.name}</p>
        <p>Email : ${data.emailAddress}</p>
        <p>Nr. telefon : ${data.phoneNo}</p>
        <p>Judet: ${data.judet}</p>
        <p> Oras : ${data.oras}</p>
        <p> Mesaj : ${data.message}</p>
      </body>
    </html>
  `;
};