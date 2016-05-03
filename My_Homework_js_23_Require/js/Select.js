// 1. 'Select' - это имя модуля
// 2. ['jquery', 'selectbox'] - зависимости - бибилиотеки или же другие модули, которые будут использованы в этом блоке
// 3.  функция, которая будет выполнена после загрузки всех зависимостей.
define( 'Select', ['jquery', 'selectbox'], 	function () {
      var Sel = $(function () {
      $("#select_auto_id").selectbox();
    });
      return Sel;
	});