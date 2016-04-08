function OnLoad() {
      // Создаем элемент управления для запуска поиска Google
      var searchControl = new GSearchControl();

      // Определяем, что появляется в результатах поиска               
      var localSearch = new GlocalSearch();                                     
      searchControl.addSearcher(new GwebSearch());                              
      
      //searchControl.addSearcher(localSearch);                                   
      //searchControl.addSearcher(new GvideoSearch());                            
      //searchControl.addSearcher(new GblogSearch());                             
      
      //Установить исходную точку поиска... перестала зараза работать (''                     
      localSearch.setCenterPoint("zaporozhye, Ukraine"); 

      // Вставляем HTML-форму для элемента
      searchControl.draw(document.getElementById("searchcontrol"));
    
      searchControl.execute("Google Ajax Search API");
    };

