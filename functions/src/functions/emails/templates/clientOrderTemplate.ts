export const renderClientMail = (data:any) => {
  return `
    <html>
      <head>
        <style>
         div {
            text-align: center;
          }
          body {
            padding:4rem;
            margin:4rem;
          }
        </style>
      </head>
      <body>
        <img src="https://firebasestorage.googleapis.com/v0/b/gazonverde-2854b.appspot.com/o/android-chrome-192x192.png?alt=media&token=328d8298-1c88-4a78-8e76-8ddfd23f03bc" alt="/" />
        <div>Buna ziua, ca multumim ca ne-ati contactat. Revenim catre dvs. in cel mai scurt timp. <br/>
          Cu drag, <br/>
          Echipa Gazonul Verde</div>
  
      </body>
    </html>
  `;
};