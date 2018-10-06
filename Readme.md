# Задание

Нужно сверстать страницу ленты событий умного дома.

Предоставляется базовый дизайн ленты для экрана.
Изменения размеров и компоновки карточек на других размерах экрана необходимо придумать и реализовать самостоятельно.
Верстка должна быть максимально адаптивной.

## На что обратить внимание:

Необходимо адаптировать вёрстку для экранов размером от 320px до 1920px по ширине, т.е. для смартфонов, планшетов, ноутбуков и широкоформатных мониторов.
Мы уважаем авторские права, поэтому просьба в подвале также дать ссылку на лицензию

## Типы карточек:
Карточки бывают трех размеров. Большая, средняя и маленькая.
На десктопе большая занимает 4 колонки, средняя — 3, маленькая — 2.

Таким образом в одном ряду (на десктопе) могут уместиться: большая + маленькая (или маленькие друг под другом), 2 средних или 3 маленьких.
У карточек событий есть разные типы: обычное событие и критичное (важное). На макетах критичные отмечены красной шапкой.

Также у карточек бывают разные форматы. Это может быть просто карточка с иконкой, заголовком и метаданными (есть у всех), дополнительно могут присутствовать описание и различные специфичные для этой карточки контролы/данные. График рисовать не обязательно, можно заменить картинкой/svg.
Заголовки могут состоять из не более, чем двух строк, остальное обрезается многоточием.

Предполагается, что если по соседству стоят карточки разного размера, более "короткая" вытягивается в высоту. При растягивании карточек иконка, заголовок, источник (напр. "Пылесос") и время прибиваются к верху, описание и данные к низу. UPD (уточнение): общая задумка была такой, чтобы не было пустоты внизу у карточки; к низу прибивается последний элемент/ряд элементов карточки.
Ориентируемся на работу в Edge, Firefox, Safari, Яндекс.Браузер ;)

## На более высокую оценку:
- Адаптивная типографика
- Адаптивные изображения (Bitmap.png, Bitmap@2x.png, Bitmap@3x.png)
- Вариативные шрифты
- Отрисовка ленты с помощью шаблонизатора, т.е. генерация HTML из предоставленного набора данных в формате JSON (см. events.json, просьба не менять сам файл).
Приветствуется самостоятельная реализация простого шаблонизатора (например, на базе <template>-тега). Данные можно разместить прямо в HTML.

Не забываем добавлять тег, запрещающий индексацию страницы:
<meta name="robots" content="noindex">

Работы присылать ссылками на сверстанную страницу (например, разместить на бесплатном GitHub Pages с помощью gh-pages).
Приветствуется readme с описанием основных моментов, на которые стоит обратить внимание.