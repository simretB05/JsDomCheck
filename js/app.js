let get_books_p_tag = document.querySelector(`p`)
let get_all_p_tages = document.querySelectorAll( `.body` )
let get_articles_by_id = document.getElementById( `buy_books` )
let get_articles_by_class = document.getElementsByClassName( `body` )


// get_articles_by_id[`outerHTML`] = `<div id="books_store">
//     <h2 class="books_store_title">this is the store</h2>
// </div>`
get_articles_by_id[`style`][`backgroundColor`] = `red`
get_articles_by_id[`style`][`fontSize`] = `2rem`
get_articles_by_id[`style`][`textDecoration`] = `underline`
get_articles_by_id[`style`][`textAlign`] = `center`
for ( i = 0; i < get_articles_by_class.length; i++ ){
    get_articles_by_class[i][`innerHTML`]=`haked`
}