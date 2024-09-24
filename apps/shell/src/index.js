import('app1/App').then((App) => {
    // İkinci kez eklemesini önlemek için root elementin önceki içeriğini temizleyin
    const rootElement = document.getElementById('header');
    rootElement.innerHTML = '';  // Daha önce eklenmiş herhangi bir içeriği temizler
    rootElement.appendChild(App.default());
  });

  import('app2/App').then((App) => {
    // İkinci kez eklemesini önlemek için root elementin önceki içeriğini temizleyin
    const rootElement = document.getElementById('main');
    rootElement.innerHTML = '';  // Daha önce eklenmiş herhangi bir içeriği temizler
    rootElement.appendChild(App.default());
  });
  
  